#!/usr/bin/env python3
"""Create and verify a public, PII-safe receipt for a static release."""

from __future__ import annotations

import argparse
import hashlib
import json
import os
import re
import tempfile
from pathlib import Path


RECEIPT_PATH = Path(".well-known/manualdeuso-deploy.json")
SHA_PATTERN = re.compile(r"^[0-9a-f]{40}$")
UTC_PATTERN = re.compile(r"^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$")


class ReceiptError(RuntimeError):
    pass


def file_digest(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as handle:
        for chunk in iter(lambda: handle.read(1024 * 1024), b""):
            digest.update(chunk)
    return digest.hexdigest()


def tree_manifest(root: Path) -> tuple[int, str]:
    receipt = (root / RECEIPT_PATH).resolve()
    entries: list[str] = []
    for path in sorted(item for item in root.rglob("*") if item.is_file()):
        if path.resolve() == receipt:
            continue
        relative = path.relative_to(root).as_posix()
        entries.append(f"{file_digest(path)}  {relative}\n")
    if not entries:
        raise ReceiptError(f"release has no files: {root}")
    digest = hashlib.sha256("".join(entries).encode("utf-8")).hexdigest()
    return len(entries), digest


def validate_inputs(commit: str, branch: str, release: str, generated_at_utc: str) -> None:
    if not SHA_PATTERN.fullmatch(commit):
        raise ReceiptError("commit must be a full lowercase Git SHA")
    if branch != "design/hub-clear":
        raise ReceiptError(f"unexpected deployment branch: {branch}")
    if not release.endswith(f"_{commit[:12]}"):
        raise ReceiptError("release identifier does not match commit")
    if not UTC_PATTERN.fullmatch(generated_at_utc):
        raise ReceiptError("generated_at_utc must use YYYY-MM-DDTHH:MM:SSZ")


def expected_receipt(root: Path, commit: str, branch: str, release: str, generated_at_utc: str) -> dict[str, object]:
    validate_inputs(commit, branch, release, generated_at_utc)
    file_count, content_tree_sha256 = tree_manifest(root)
    return {
        "app": "manualdeuso-own-time",
        "branch": branch,
        "commit": commit,
        "content_tree_sha256": content_tree_sha256,
        "file_count": file_count,
        "generated_at_utc": generated_at_utc,
        "release": release,
        "schema": 1,
    }


def write_receipt(root: Path, receipt: dict[str, object]) -> None:
    target = root / RECEIPT_PATH
    target.parent.mkdir(parents=True, exist_ok=True)
    payload = json.dumps(receipt, ensure_ascii=True, separators=(",", ":"), sort_keys=True) + "\n"
    with tempfile.NamedTemporaryFile("w", encoding="utf-8", dir=target.parent, delete=False) as handle:
        handle.write(payload)
        temporary = Path(handle.name)
    os.chmod(temporary, 0o644)
    os.replace(temporary, target)


def read_receipt(root: Path) -> dict[str, object]:
    target = root / RECEIPT_PATH
    if not target.is_file():
        raise ReceiptError(f"deployment receipt not found: {target}")
    try:
        payload = json.loads(target.read_text(encoding="utf-8"))
    except json.JSONDecodeError as exc:
        raise ReceiptError(f"invalid deployment receipt JSON: {target}") from exc
    if not isinstance(payload, dict):
        raise ReceiptError("deployment receipt must be a JSON object")
    return payload


def process(args: argparse.Namespace) -> dict[str, object]:
    root = args.root.resolve()
    if not root.is_dir():
        raise ReceiptError(f"root is not a directory: {root}")

    if args.write:
        if not all((args.commit, args.branch, args.release, args.generated_at_utc)):
            raise ReceiptError("write mode requires commit, branch, release and generated-at-utc")
        receipt = expected_receipt(root, args.commit, args.branch, args.release, args.generated_at_utc)
        write_receipt(root, receipt)
    else:
        receipt = read_receipt(root)

    required = {"schema", "app", "branch", "commit", "release", "generated_at_utc", "file_count", "content_tree_sha256"}
    if set(receipt) != required:
        raise ReceiptError("deployment receipt fields do not match schema 1")
    expected = expected_receipt(
        root,
        str(receipt["commit"]),
        str(receipt["branch"]),
        str(receipt["release"]),
        str(receipt["generated_at_utc"]),
    )
    if receipt != expected:
        raise ReceiptError("deployment receipt does not match release contents")
    for name, supplied in (("commit", args.commit), ("branch", args.branch), ("release", args.release)):
        if supplied is not None and receipt[name] != supplied:
            raise ReceiptError(f"deployment receipt {name} mismatch")

    return {
        "status": "PASS",
        "mode": "write" if args.write else "check",
        "receipt": RECEIPT_PATH.as_posix(),
        "commit": receipt["commit"],
        "release": receipt["release"],
        "file_count": receipt["file_count"],
        "content_tree_sha256": receipt["content_tree_sha256"],
    }


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--root", required=True, type=Path)
    mode = parser.add_mutually_exclusive_group(required=True)
    mode.add_argument("--write", action="store_true")
    mode.add_argument("--check", action="store_true")
    parser.add_argument("--commit")
    parser.add_argument("--branch")
    parser.add_argument("--release")
    parser.add_argument("--generated-at-utc")
    args = parser.parse_args()
    try:
        print(json.dumps(process(args), sort_keys=True))
    except (ReceiptError, OSError, UnicodeError) as exc:
        print(json.dumps({"status": "FAIL", "error": str(exc)}, sort_keys=True))
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
