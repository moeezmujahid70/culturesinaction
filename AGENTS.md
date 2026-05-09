<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Project Design Workflow

For UI, UX, landing page, redesign, or visual system work in this repo, use the local `ui-ux-pro-max` skill at `.codex/skills/ui-ux-pro-max/SKILL.md`.

Required workflow:

1. Start with the required design-system query before making UI changes:
   `python3 .codex/skills/ui-ux-pro-max/scripts/search.py "<product + industry + keywords>" --design-system -p "Cultures in Action"`
2. Use targeted follow-up searches only as needed for `ux`, `style`, `typography`, `color`, `landing`, or `--stack nextjs`.
3. Treat skill output as design input, not source of truth. Project-specific brand constraints, content constraints, and the active implementation plan override generic recommendations from the skill.
4. When the output does not fit Cultures in Action or Culture Quest alignment, keep the workflow and discard the mismatched recommendation.
