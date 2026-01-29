# Version Updates & Changelog

## [V0.0.7] - 2026-01-29
### Homepage Optimization Finalization

#### 🎨 UI & UX
- **Hard Code Removal**: Successfully located and removed the remaining stats section component from the homepage source.
- **Protocol Refresh**: Re-aligned all project metadata with the latest versioning standards.

---


## [V0.0.6] - 2026-01-29
### Persistent Session Protocols

#### 🛡️ AI Governance
- **Mandatory Entry Checklist**: Integrated a high-priority checklist at the start of `.agent/instructions.md` that forces agents to verify current versioning and auto-push requirements.
- **Strict Workflows**: Updated all workflows to explicitly state they are MANDATORY for all sessions.

---

## [V0.0.5] - 2026-01-29
### Homepage Optimization & Clean-up

#### 🎨 UI & UX
- **Removed Stats Section**: Excised the "30+ Years History" and "500+ Members" statistics from the homepage to simplify the landing experience.
- **Improved Spacing**: Adjusted vertical rhythm between the Features Grid and the final Call-to-Action.

---

## [V0.0.4] - 2026-01-29
### Agent Instruction System & Policy Guardrails

#### 🤖 AI Governance
- **Instruction Hub**: Created `.agent/instructions.md` to define design rules, asset standards, and versioning policies.
- **Workflow Automation**: Implemented `.agent/workflows/minor-adjustment.md` to standardize how AI agents handle small updates.
- **Versioning Policy**: Formalized the SemVer strategy where `0.0.x` is for minor adjustements, while `0.x.0` and `x.0.0` require explicit user approval.

#### 📁 Documentation
- **Codebase Mapping**: Updated `CODEBASE.md` to map the new `.agent` and `.github` structures for future agent sessions.

---

## [V0.0.3] - 2026-01-29
### Community Support & Communication

#### 🐞 Issue Tracking
- **GitHub Issues**: Added official call-to-action in README for reporting bugs via the repository's "Issues" tab.
- **Instagram Integration**: Provided direct link to society's Instagram for community questions and inquiries.

---

## [V0.0.2] - 2026-01-29
### Event Details & Workflow Refinement

#### 📅 Schedule & Pricing
- **Top Out Climbing**: Added "(includes rentals)" to the 100 HKD/person fee description on all event pages.

#### 🚀 GitHub & CI/CD
- **Meaningful Workflows**: Prepared the repository for structured GitHub Action names to include versioning and clear task descriptions.

---

## [V0.0.1] - 2026-01-29
### Minor Adjustments & Vercel Optimization

#### 🚀 Deployment & Structure
- **Flattened Repository**: Moved all files from `/app` subdirectory to the root to ensure Vercel auto-detection of Next.js.
- **Asset Integration**: Migrated `photos/` and `icons/` to `public/` and updated `.gitignore` to ensure they are tracked by Git while keeping source folders private.

#### 🎨 UI & UX Fixes
- **Laptop Responsiveness**: Removed fixed heights and arbitrary offsets from the `CalendarWidget` to prevent stretching and misalignment on laptop viewports.
- **Calendar Alignment**: Standardized text positioning in calendar cells across all screen sizes.

#### 📅 Schedule Updates
- **Training Exclusion**: Removed April 7, 2026 (7/4) from the automated training schedule as requested.

---

## [V0] - 2026-01-28
### Initial Refinement & Pro-Max Transformation

#### 🎨 Design & UI
- **Custom 404 Page**: Implemented a "Norkon-inspired" error page with wavy background paths and a high-contrast theme.
- **Bento Grid Expansion**: Filled all blank spaces in the home page grid with high-quality landscape images.
- **Visual Consistency**: Standardized `object-contain` for all equipment photos and product displays to prevent "ugly" cropping.
- **Portrait Fox**: Replaced narrow/portrait community photos with wide-angle landscape group shots for better desktop viewing.

#### 📝 Content & Policy
- **Transparency Upgrade**: Updated all landing pages to explicitly state that **Weekly Training is FREE for everyone** and core equipment (shoes/harnesses) is provided at no cost.
- **Shop Overhaul**: Updated the Society Shop to focus on current inventory (Chalk Balls, Socks) and replaced placeholder gear with actual product shots.
- **Footer Sync**: Re-mapped Training Session links to point directly to the consolidated Wall/Schedule section.

#### 📁 Architecture & Assets
- **Standardized Directory Tree**: Re-organized 50+ image assets into categorized subfolders (`equipment`, `events`, `location`, `logos`, `team`).
- **Code Mapping**: Created `CODEBASE.md` to facilitate future agent-led maintenance and tracing.
- **Shek O Trip**: Integrated new high-resolution group photos from the Shek O climbing session.

#### 🚀 Technical
- **Image Optimization**: Migrated key UI elements to use `next/image` for better performance.
- **Bento Layout**: Fixed dynamic Tailwind class generation for `md:col-span` to ensure production-safe builds.
