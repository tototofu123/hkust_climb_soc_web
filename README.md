# HKUST Climbing Society Website (V1.0.1)

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

### 🚀 Release: v1.0.1 (Post-Launch Patch)
- **Fixes**: Updated Google Maps links in Contact page and Footer to point correctly to the HKUST Sports Complex.
- **Date**: 2026-01-29

### 🚀 Release: v1.0.0 (Official Launch)
- **Milestone**: Official stable release of the new HKUST Climbing Society website.
- **Features**: Complete visual overhaul, CSV-driven event management, interactive wall guide, and mobile-first design.
- **Date**: 2026-01-29

### 🚀 Release: v0.3.2
- **UI Tweaks**: Refined Contact page headers for clarity ("Get in Touch", "Contact Us").
- **Documentation**: Corrected version history logs.
- **Date**: 2026-01-29

- **Hygiene**: Cleaned up repetitive versioning history.
- **Date**: 2026-01-29

### � Release: v0.3.0
- **Architecture**: implemented CSV-driven database (`src/data/events.csv`) for easy Excel management.
- **Assets**: Complete restructuring of `public/photos` into strict categories (`wall`, `equipment`, `events`).
- **UI/UX**: Standardized button design system (removed Liquid Glass) and cleaned up navigation routes.
- **Date**: 2026-01-29

### 📝 Edited: CSV Database Integration (v1.0.2)
- **Database**: Migrated to CSV-first storage (src/data/events.csv).
- **Date**: 2026-01-29

### 📝 Edited: CSV Database Integration (v1.0.1)
- **Database**: Migrated to CSV-first storage (src/data/events.csv).
- **Date**: 2026-01-29

### 📝 Edited: CSV Database Integration (v0.3.3)
- **Database**: Migrated to CSV-first storage (src/data/events.csv).
- **Date**: 2026-01-29

### 📝 Edited: UI Cleanup & Standardization (v0.2.x)
- **UI**: Removed Liquid Glass effects, standardized CTA buttons.
- **Data**: CSV Pipeline integration.
- **Date**: 2026-01-29

### 📝 Edited: Architecture & Safety (v0.1.x)
- **Security**: Added pre-push linting and auditing.
- **Privacy**: Hidden internal dev tools.
- **UI**: Initial Liquid Glass implementation and performance upgrades.
- **Date**: 2026-01-29
