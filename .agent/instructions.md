# Project Instructions: HKUST Climbing Society

## 🚨 MANDATORY SESSION ENTRY CHECKLIST
1. **Initialize**: Read `.agent/instructions.md` and `.agent/workflows/minor-adjustment.md`.
2. **Synchronize**: Check `package.json` for current version.
3. **Commitment**: **Every single code modification/request MUST result in a version bump (Minor 0.0.x)**.
4. **Visibility**: Update `package.json`, `README.md`, `CODEBASE.md`, `VERSION_UPDATES.md`, and `.github/workflows/meaningful-builds.yml` for EVERY push.
5. **Auto-Push**: ALWAYS push to Git immediately after a change to trigger Vercel.

## 🎨 Design & Aesthetic Rules
- **Themes**: Always use the defined dark mode variables from `src/app/globals.css`.
- **Accents**: The primary accent color is defined as `[var(--accent)]` (a vibrant coral/orange).
- **Glassmorphism**: Use `backdrop-blur-xl`, `bg-[var(--card)]/60`, and subtle borders for cards and sections.
- **Animations**: Use `Framer Motion` for entering sequences and `ScrollReveal` for scroll-triggered effects.
- **Image Optimization**: NEVER use standard `<img>` tags. Always use `next/image` with proper `remotePatterns` configured in `next.config.ts`.
- **Layout**: Prioritize landscape group photos for desktop and ensure `object-contain` for product/equipment shots.

## 📂 Architecture Standard
- **Root Flattening**: Keep core Next.js files at the root (not inside an `app/` folder) for Vercel auto-detection.
- **Public Assets**: All website-visible photos must reside in `public/photos/` categorized by type (`events`, `equipment`, etc.).
- **Private Source**: Raw photos and prompts should be kept in root `/photos/` and `/ui_prompts/`, which are excluded via `.gitignore`.

## 📦 Versioning & Ops
- **Minor Updates (0.0.x)**: Every user request that results in a code change/push represents a "Minor Adjustment" (e.g., `0.0.4` -> `0.0.5`).
- **Intermediate (0.x.0) & Major (x.0.0) Updates**: These must be explicitly specified by the user. If a change seems intermediate or major, the agent MUST ask the user for confirmation before incrementing those parts.
- **Commits**: Commit messages must be meaningful, prefixed with the version, and pushed immediately to trigger Vercel.
- **Workflow Names**: Ensure GitHub Action run-names stay meaningful by updating the `.github/workflows/meaningful-builds.yml` with the current version.

## 🐞 Support
- Always maintain the "Support & Feedback" section in the README. Tell users to use GitHub Issues or Instagram for communication.
