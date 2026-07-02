# Codex Guide: lp-diretorio

## Project

Own Time Home Club digital owner guide with multiple versions: static HTML/Firebase and Elementor adaptation.

## Main Areas

- `html-puro/`: v1 lightweight version.
- `html-completo/`: v2 complete C-level version.
- `elementor/`: WordPress/Elementor snippets and assets when present.
- `PENDENCIAS.md`: active/pending content notes.

## Rules

- Clarify whether the task targets v1, v2, or Elementor before broad edits.
- Keep shared content changes consistent across affected pages.
- Preserve phone numbers, Wi-Fi details, maps, and operational instructions unless the user provides replacements.
- Do not deploy unless explicitly requested.
- For visual edits, preserve the existing premium hospitality direction.

## Commands

- v1 deploy from `html-puro/`: `firebase deploy --only hosting` only with approval.
- v2 deploy from `html-completo/`: `firebase deploy --only hosting:v2` only with approval.

## Verification

- Check linked assets and navigation across `index.html`, unit pages, and data JS files.
- Review `PENDENCIAS.md` before changing operational content.
