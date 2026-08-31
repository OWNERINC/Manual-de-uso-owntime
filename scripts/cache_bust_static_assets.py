#!/usr/bin/env python3
"""Write and verify deterministic content hashes on local JS/CSS HTML references."""

from __future__ import annotations

import argparse
import hashlib
import json
import os
import re
import tempfile
from dataclasses import dataclass
from pathlib import Path
from urllib.parse import parse_qsl, unquote, urlencode, urlsplit, urlunsplit


ASSET_REF = re.compile(
    r"(?P<prefix>\b(?:src|href)\s*=\s*(?P<quote>['\"]))"
    r"(?P<url>[^'\"]+?\.(?:js|css)(?:\?[^'\"]*)?(?:#[^'\"]*)?)"
    r"(?P=quote)",
    re.IGNORECASE,
)
CONTENT_HASH = re.compile(r"^[0-9a-f]{12}$")


class CacheBustError(RuntimeError):
    pass


@dataclass(frozen=True)
class RenderedPage:
    path: Path
    original: str
    rendered: str
    local_references: int
    changed_references: int


def content_hash(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as handle:
        for chunk in iter(lambda: handle.read(1024 * 1024), b""):
            digest.update(chunk)
    return digest.hexdigest()[:12]


def local_asset(root: Path, html_path: Path, url: str) -> tuple[Path, object] | None:
    parsed = urlsplit(url)
    if parsed.scheme or parsed.netloc or url.startswith("//"):
        return None

    decoded_path = unquote(parsed.path)
    candidate = (root / decoded_path.lstrip("/")) if decoded_path.startswith("/") else (html_path.parent / decoded_path)
    resolved = candidate.resolve()
    try:
        resolved.relative_to(root)
    except ValueError as exc:
        raise CacheBustError(f"asset escapes root: {html_path}: {url}") from exc
    if not resolved.is_file():
        raise CacheBustError(f"local asset not found: {html_path}: {url}")
    return resolved, parsed


def hashed_url(asset_path: Path, parsed: object) -> str:
    pairs = [(key, value) for key, value in parse_qsl(parsed.query, keep_blank_values=True) if key != "v"]
    pairs.append(("v", content_hash(asset_path)))
    return urlunsplit((parsed.scheme, parsed.netloc, parsed.path, urlencode(pairs), parsed.fragment))


def render_page(root: Path, html_path: Path, *, check: bool) -> RenderedPage:
    original = html_path.read_text(encoding="utf-8")
    local_references = 0
    changed_references = 0

    def replace(match: re.Match[str]) -> str:
        nonlocal local_references, changed_references
        url = match.group("url")
        resolved = local_asset(root, html_path, url)
        if resolved is None:
            return match.group(0)
        asset_path, parsed = resolved
        expected = hashed_url(asset_path, parsed)
        local_references += 1
        if expected != url:
            changed_references += 1
            if check:
                raise CacheBustError(f"stale or missing content hash: {html_path}: {url} -> {expected}")
        return f"{match.group('prefix')}{expected}{match.group('quote')}"

    rendered = ASSET_REF.sub(replace, original)
    return RenderedPage(html_path, original, rendered, local_references, changed_references)


def atomic_write(page: RenderedPage) -> None:
    if page.rendered == page.original:
        return
    mode = page.path.stat().st_mode
    with tempfile.NamedTemporaryFile("w", encoding="utf-8", dir=page.path.parent, delete=False) as handle:
        handle.write(page.rendered)
        temporary = Path(handle.name)
    os.chmod(temporary, mode)
    os.replace(temporary, page.path)


def process(root: Path, *, check: bool) -> dict[str, int | str]:
    root = root.resolve()
    if not root.is_dir():
        raise CacheBustError(f"root is not a directory: {root}")
    html_files = sorted(root.rglob("*.html"))
    if not html_files:
        raise CacheBustError(f"no HTML files found: {root}")

    pages = [render_page(root, html_path, check=check) for html_path in html_files]
    local_references = sum(page.local_references for page in pages)
    if local_references == 0:
        raise CacheBustError(f"no local JS/CSS references found: {root}")
    if not check:
        for page in pages:
            atomic_write(page)
        # Independent second pass: the written tree must already be converged.
        for html_path in html_files:
            render_page(root, html_path, check=True)

    return {
        "status": "PASS",
        "mode": "check" if check else "write",
        "html_files": len(html_files),
        "local_references": local_references,
        "changed_references": sum(page.changed_references for page in pages),
    }


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--root", required=True, type=Path)
    mode = parser.add_mutually_exclusive_group(required=True)
    mode.add_argument("--write", action="store_true")
    mode.add_argument("--check", action="store_true")
    args = parser.parse_args()
    try:
        print(json.dumps(process(args.root, check=args.check), sort_keys=True))
    except (CacheBustError, OSError, UnicodeError) as exc:
        print(json.dumps({"status": "FAIL", "error": str(exc)}, sort_keys=True))
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
