# Version Updates & Changelog

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
