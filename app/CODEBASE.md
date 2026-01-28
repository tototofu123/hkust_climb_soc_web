# Codebase Map & Agent Tracing (V0)

This document serves as a guide for developers to understand the project architecture and file responsibilities.

## 📂 Directory Tree (Simplified)

```text
hkust_climb_soc/app/
├── public/                 # Static assets
│   └── photos/             # Organized photo categories
│       ├── equipment/      # Gear product shots (contain fit)
│       ├── events/         # Trip & Competition photos
│       ├── location/       # Facility & Gym shots
│       ├── logos/          # Society branding
│       └── team/           # Group & Committee photos
├── src/
│   ├── app/                # Application Layer (Next.js App Router)
│   │   ├── about/          # Mission & Community
│   │   ├── apply/          # Membership Portal
│   │   ├── contact/        # FAQ & Communication
│   │   ├── events/         # Schedule & Gallery
│   │   ├── shop/           # Merchandise
│   │   ├── team/           # Comps & Committee
│   │   ├── wall/           # Facility & Gear Details
│   │   ├── layout.tsx      # Root Layout (Nav/Footer)
│   │   ├── page.tsx        # Home Landing Page
│   │   └── not-found.tsx   # Custom 404 UI
│   ├── components/         # Presentation Layer
│   │   ├── layout/         # Navbar, Footer
│   │   └── ui/             # Atomic components (Hero, Grid, etc.)
│   └── lib/                # Logic Layer (utils.ts)
├── README.md               # User documentation
├── CODEBASE.md             # Agent documentation
└── VERSION_UPDATES.md      # Changelog
```

## 🛠️ File Responsibility Mapping

| Path | Purpose | Key Logic |
|:---|:---|:---|
| `src/app/page.tsx` | Main entry point | Orchestrates the Bento Grid landing page. |
| `src/components/ui/bento-grid.tsx` | Core navigation UI | Dynamic layout with image headers and navigation links. |
| `src/components/ui/calendar-widget.tsx` | Schedule logic | Interactive monthly view for HKUST climbing slots. |
| `src/app/wall/page.tsx` | Resource catalog | Lists categorised equipment and rental policies. |
| `src/components/ui/hero.tsx` | Branding | High-impact animated title and Chinese society name. |
| `src/app/not-found.tsx` | Error UX | Branded handling for broken links. |

## 🎨 Design System (Gems)
- **Colors**: Defined in `globals.css` using CSS Variables for easy white-labeling.
- **Components**: Atomic design pattern used in `src/components/ui`.
- **Images**: Standardized `object-contain` for products and `object-cover` for hero/atmosphere shots.

## 🛡️ Future Security Considerations
- **Auth**: NextAuth transition for member-only sections.
- **DB**: Integration with MongoDB/PostgreSQL for application storage.
- **Environment**: Sensitive API keys must reside in `.env.local` (not tracked in Git).
