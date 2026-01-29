# HKUST Climbing Society Website (V0.2.6)

A modern, high-performance web application for the **HKUST Sport Climbing Students' Society**. Built with Next.js, TypeScript, and Framer Motion, featuring a "pro-max" design aesthetic, interactive calendar, and comprehensive member resources.

## 🚀 Vision
To provide a seamless digital hub for the HKUST climbing community—bridging the gap between beginners and pro climbers through transparent information, free training resources, and a vibrant showcase of our outdoor and indoor events.

## ✨ Features
- **Interactive Bento Grid**: A visual, interactive homepage layout highlighting News, Schedule, Shop, and Community.
- **Dynamic Calendar**: Real-time event tracking and monthly scheduling for training sessions.
- **Mobile-Responsive**: Optimized for all devices with premium animations and transitions.
- **Asset Hub**: Organized equipment gallery and community event showcase.
- **Custom 404 Experience**: Branded error handling with generative background patterns.

## 🛠️ Tech Stack
- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Components**: Custom-built UI library with Radix primitives.

## 📦 Project Structure
Detailed structural mapping can be found in `CODEBASE.md`.

```text
src/
├── app/            # Next.js App Router (Pages & Routing)
├── components/     # UI & Layout components
│   ├── layout/     # Shared layout components (Navbar, Footer)
│   └── ui/         # Reusable atomic UI components
└── lib/            # Utility functions & Shared logic
```

## 🐞 Support & Feedback
Found a bug or have a suggestion?
- **Report Bugs**: Please open an **[Issue](https://github.com/tototofu123/hkust_climb_soc_web/issues)** on this repository.
- **Social Contact**: Reach out to us via our **[Instagram (@hkust_climbing)](https://www.instagram.com/hkust_climbing/)** for society inquiries.

## 🔒 Security & Privacy (Future Roadmap)
- Implementation of secure member authentication.
- Private member forums and equipment reservation system.
- Encrypted handling of student membership data.

## 🛠️ Getting Started
```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

---
© 2026 HKUST Climbing Society. All rights reserved.

### 📝 Edited: CSV Database Integration (v0.2.6)
- **Database**: Migrated to CSV-first storage (src/data/events.csv).
- **Date**: 2026-01-29

### 📝 Edited: UI Cleanup & Standardisation (v0.2.5)
- **UI**: Removed Liquid Glass effects from CTA buttons.
- **UI**: Standardized "Join Us" and "Learn More" sizing and text scale for unified look.
- **Date**: 2026-01-29

### 📝 Edited: CSV Database Integration (v0.2.3)
- **Database**: Migrated to CSV-first storage (src/data/events.csv).
- **Automation**: Build script auto-syncs CSV to JSON for frontend use.
- **Date**: 2026-01-29
- **UI**: Integrated Liquid Glass Button for Hero CTA.
- **Performance**: Replaced event thumbnails with higher resolution assets.
- **Date**: 2026-01-29

### 📝 Edited: UI & Performance Upgrade (v0.2.2)
- **UI**: Integrated Liquid Glass Button for Hero CTA.
- **Performance**: Replaced event thumbnails with higher resolution assets.
- **Date**: 2026-01-29

### 📝 Edited: UI & Performance Upgrade (v0.1.6)
- **UI**: Integrated Liquid Glass Button for Hero CTA.
- **Performance**: Replaced event thumbnails with higher resolution assets.
- **Date**: 2026-01-29

### 📝 Edited: UI & Interaction Polish (v0.2.1)
- **UI**: Fixed Liquid Button visual artifacts (black dots) by scaling down displacement map and adding a native "blue" variant.
- **UI**: Harmonized CTA button text sizes (text-lg) for a more unified and professional aesthetic.
- **Date**: 2026-01-29

### 📝 Edited: Data-Driven Architecture (v0.2.0)
- **Database**: Migrated Events to JSON-driven architecture (`src/data/events.json`) for easier society management.
- **Logic**: Implemented automated registration status system (e.g., "No registration needed" for Fundays).
- **Date**: 2026-01-29

### 📝 Edited: UI & Performance Upgrade (v0.1.6)
- **UI**: Matched font sizes for "Join Us" and "Learn More" buttons for cleaner look.
- **Date**: 2026-01-29

### 📝 Edited: UI & Performance Upgrade (v0.1.5)
- **UI**: Integrated Liquid Glass Button for Hero CTA.
- **Performance**: Replaced event thumbnails with higher resolution assets.
- **Date**: 2026-01-29

### 📝 Edited: UI & Performance Upgrade (v0.1.4)
- **UI**: Integrated Liquid Glass Button for Hero CTA.
- **Performance**: Replaced event thumbnails with higher resolution assets.
- **Date**: 2026-01-29

### 📝 Edited: UI & Performance Upgrade (v0.1.3)
- **UI**: Integrated Liquid Glass Button for Hero CTA.
- **Performance**: Replaced event thumbnails with higher resolution assets.
- **Date**: 2026-01-29

### 📝 Edited: UI & Performance Upgrade (v0.1.2)
- **UI**: Integrated Liquid Glass Button for Hero CTA.
- **Performance**: Replaced event thumbnails with higher resolution assets.
- **Date**: 2026-01-29

### 📝 Edited: UI & Performance Upgrade (v0.1.1)
- **UI**: Integrated Liquid Glass Button for Hero CTA.
- **Performance**: Replaced event thumbnails with higher resolution assets.
- **Date**: 2026-01-29

### 📝 Edited: Safety & Privacy Overhaul (v0.1.0)
- **Security**: Integrated pre-push build, lint, and security auditing.
- **Privacy**: Hidden internal agent tools and development docs from public view.
- **Date**: 2026-01-29

### 📝 Edited: Auto-Sync (v0.0.8)
- **Commit**: Automatic version bump and push protocol enforcement.
- **Date**: 2026-01-29

### 📝 Edited: Actual Section Removal (v0.0.7)
- **Hard Section Removal**: Physically removed the statistics section code which was previously documented but remained in the source.
- **Protocol Sync**: Synchronized all metadata files to version 0.0.7 following instruction refresh.

### 📝 Edited: Protocol Guardrails (v0.0.6)
- **Instruction Enforcement**: Added a "Mandatory Session Entry Checklist" to `.agent/instructions.md` to ensure any new agent follows the versioning/push protocol immediately.
- **Workflow Rigidity**: Strengthened the `minor-adjustment.md` workflow to be the absolute source of truth for all project changes.

### 📝 Edited: Minimalist Home (v0.0.5)
- **UI Refinement**: Removed the statistics section from the homepage for a cleaner, more focused user experience.
- **Sync**: Version bump across all metadata files.

### 📝 Edited: Agent Instruction System (v0.0.4)
- **AI Agent Support**: Implemented `.agent/` directory with persistent instructions and workflows for future AI pair programmers.
- **Architecture Mapping**: Updated `CODEBASE.md` to reflect the current flattened directory structure and AI knowledge base.
