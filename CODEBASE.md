# Codebase Map & Agent Tracing (V0.0.7)

This document serves as a guide for developers and AI agents to understand the project architecture, file responsibilities, and standardized workflows.

## 🤖 Agent Knowledge Base
For any AI helper working on this repo:
- **System Instructions**: Refer to `.agent/instructions.md` for design and logic rules.
- **Workflow - Minor Adjustment**: Call `.agent/workflows/minor-adjustment.md` for any small fixes or text updates.

## 📂 Directory Tree

```text
hkust_climb_soc/
├── .agent/                 # 🤖 Agent instructions & local workflows
├── .github/                # 🚀 CI/CD & GitHub Actions
│   └── workflows/          # Deployment names & logic
├── public/                 # Static assets (Visible on web)
│   └── photos/             # Categorized photos (equipment, events, etc.)
├── src/
│   ├── app/                # Application Layer (Next.js App Router)
│   │   ├── interactive3d/  # Portfolio & 3D experiences
│   │   ├── events/         # Schedule & Gallery
│   │   ├── ...             # Other route segments
│   ├── components/         # Presentation Layer
│   │   └── ui/             # Atomic & Interactive components
│   └── lib/                # Logic Layer (utils.ts)
├── README.md               # User & Community documentation
├── CODEBASE.md             # Developer & Agent roadmap
└── VERSION_UPDATES.md      # Detailed changelog (bbed by every change)
```

## 🛠️ File Responsibility Mapping

| Path | Purpose | Key Logic |
|:---|:---|:---|
| `src/app/page.tsx` | Main entry point | Orchestrates the Bento Grid landing page. |
| `src/components/ui/calendar-widget.tsx` | Schedule logic | Interactive monthly view for HKUST climbing slots. |
| `.agent/workflows/` | Process logic | Defines how agents should commit and version the project. |
| `.github/workflows/` | Deployment UI | Controls how build logs appear in GitHub Actions. |

## 🎨 Design System (Source of Truth)
- **Design Tokens**: Defined in `globals.css`. Always use `[var(--accent)]`, `[var(--card)]`, etc.
- **Component Standard**: Always use the **Aceternity** / **shadcn** hybrid style established in `src/components/ui`.
- **Versioning**: Every push = Version bump. This is non-negotiable for project tracing.
