#!/usr/bin/env python3
"""Regression tests for the public deployment receipt."""

from __future__ import annotations

import json
import subprocess
import tempfile
import unittest
from pathlib import Path


SCRIPT = Path(__file__).with_name("deploy_receipt.py")
COMMIT = "a" * 40
RELEASE = f"20260915T180000Z_{COMMIT[:12]}"


class DeployReceiptTests(unittest.TestCase):
    def run_tool(self, root: Path, *arguments: str, expected: int = 0) -> dict[str, object]:
        result = subprocess.run(
            ["python3", str(SCRIPT), "--root", str(root), *arguments],
            check=False,
            text=True,
            capture_output=True,
        )
        self.assertEqual(result.returncode, expected, result.stdout + result.stderr)
        return json.loads(result.stdout)

    def test_write_check_and_content_tamper_detection(self) -> None:
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            (root / "assets").mkdir()
            (root / "index.html").write_text("ok\n", encoding="utf-8")
            (root / "assets/app.js").write_text("const ok = true;\n", encoding="utf-8")
            written = self.run_tool(
                root,
                "--write",
                "--commit", COMMIT,
                "--branch", "design/hub-clear",
                "--release", RELEASE,
                "--generated-at-utc", "2026-09-15T18:00:00Z",
            )
            checked = self.run_tool(root, "--check", "--commit", COMMIT, "--branch", "design/hub-clear", "--release", RELEASE)
            self.assertEqual(written["content_tree_sha256"], checked["content_tree_sha256"])
            self.assertEqual(checked["file_count"], 2)

            (root / "assets/app.js").write_text("const ok = false;\n", encoding="utf-8")
            failed = self.run_tool(root, "--check", expected=1)
            self.assertEqual(failed["status"], "FAIL")
            self.assertIn("does not match", str(failed["error"]))

    def test_wrong_branch_fails_closed(self) -> None:
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            (root / "index.html").write_text("ok\n", encoding="utf-8")
            failed = self.run_tool(
                root,
                "--write",
                "--commit", COMMIT,
                "--branch", "master",
                "--release", RELEASE,
                "--generated-at-utc", "2026-09-15T18:00:00Z",
                expected=1,
            )
            self.assertIn("unexpected deployment branch", str(failed["error"]))


if __name__ == "__main__":
    unittest.main()
