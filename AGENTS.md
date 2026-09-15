# Codex Guide: lp-diretorio

## Project

Own Time Home Club digital owner guide built with static HTML/Firebase. Version 2 (`html-completo/`) is the sole implementation and the default for all changes and consultations.

## Main Areas

- `html-completo/`: v2 complete C-level version; canonical implementation.
- `PENDENCIAS.md`: active/pending content notes.

## Rules

- Use `html-completo/` for changes and consultations without asking which version to target, unless the user explicitly specifies otherwise.
- Keep shared content changes consistent across affected pages.
- Preserve phone numbers, Wi-Fi details, maps, and operational instructions unless the user provides replacements.
- Do not deploy unless explicitly requested.
- For visual edits, preserve the existing premium hospitality direction.

## Commands

- v2 deploy from `html-completo/`: `firebase deploy --only hosting:v2` only with approval.

## Verification

- Check linked assets and navigation across `index.html`, unit pages, and data JS files.
- Review `PENDENCIAS.md` before changing operational content.
