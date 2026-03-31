# hkust_climb_soc_web

Public repository maintained by @tototofu123.

## Website

- GitHub Pages: https://tototofu123.github.io/hkust_climb_soc_web/

## Features

- **Interactive Bento Grid**: A visual, interactive homepage layout highlighting News, Schedule, Shop, and Community.
- **Dynamic Calendar**: Real-time event tracking and monthly scheduling for training sessions.
- **Mobile-Responsive**: Optimized for all devices with premium animations and transitions.
- **Asset Hub**: Organized equipment gallery and community event showcase.
- **Custom 404 Experience**: Branded error handling with generative background patterns.
- **AI Chatbot**: Smart assistant powered by AI (Ollama + Qwen 0.5B) that answers FAQs about training, membership, equipment, and events. Uses hybrid LLM/retrieval system - first 5 messages per user use LLM, then switches to retrieval-only.

## Tech Stack

- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Components**: Custom-built UI library with Radix primitives.
- **AI Chatbot**: FastAPI backend with Ollama (Qwen 0.5B) deployed on AWS EC2

## Security

- Secret scanning workflow: ".github/workflows/security-secrets-scan.yml"
- Gitleaks config: ".gitleaks.toml"

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

## Notes

### Release: v1.8.6 (No Upcoming Events UI)
- **Feature**: Implemented "No Upcoming Events" placeholder UI for both `/events` and `/news` pages.
- **Maintenance**: Cleared all existing events from `events.json` and `events.csv`.
- **Date**: 2026-03-31

### Release: v1.8.5 (Fix duplicate labels & cost FAQ)
- **Fix**: Duplicate "Email: Email:" and "Instagram: Instagram:" labels
- **Feature**: Added "open", "public" keywords to cost FAQ
- **Fix**: Cost answer now includes "open to all HKUST students"
- **Date**: 2026-03-30

### Release: v1.8.4 (Fix FAQ prefixes)
- **Fix**: Removed "No." and "Yes." prefixes from FAQ answers
- **Date**: 2026-03-30

### Release: v1.8.3 (Chat fixes)
- **Fix**: Removed test markers and cleaned up responses
- **Date**: 2026-03-30

### Release: v1.8.2 (Fix keyword matching)
- **Fix**: Better keyword matching - skip common words, use weighted scoring
- **Date**: 2026-03-29

### Release: v1.8.1 (Fix retrieval & contact formatting)
- **Fix**: Improved keyword matching - now finds matches properly
- **Fix**: Contact formatting only on real answers, not fallback
- **Date**: 2026-03-29

### Release: v1.8.0 (Fixed chat - keyword-based retrieval)
- **Fix**: Changed from TF-IDF to simple keyword matching for reliability
- **Change**: Uses faq.json directly instead of index.joblib
- **Date**: 2026-03-29

### Release: v1.7.0 (LLM badge disabled)
- **Change**: Disabled 🤖 LLM badge (will re-enable when VM LLM reconnected)
- **Date**: 2026-03-29

### Release: v1.6.0 (Chat fixes & cookie session)
- **Fix**: Chat UI - top gradient not overwritten, proper mobile positioning
- **Fix**: Better error handling for chat API
- **Feature**: Cookie-based session for user name persistence
- **Date**: 2026-03-29

### Release: v1.5.0 (Vercel-first chatbot)
- **Feature**: Moved chatbot to Vercel serverless - now runs without VM
- **Changes**: TypeScript-based retrieval, JSON index, no external dependencies
- **Future**: Will reconnect to VM for LLM when AWS credentials provided
- **Date**: 2026-03-29

### Release: v1.4.0 (Chat polish)
- **Fixes**: Prevent duplicate user messages; improved mobile keyboard handling and auto-scroll; show stored name only on initial greeting; status messages while loading.
- **Date**: 2026-03-29

### Release: v1.1.0 (AI Chatbot Integration)
- **Feature**: Added AI chatbot with smart FAQ answering
- **Backend**: Connected to AWS EC2 deployed chatbot (Ollama + Qwen 0.5B)
- **Hybrid AI**: LLM for first 5 messages per user, then retrieval-only
- **Date**: 2026-03-29

### Release: v1.0.1 (Post-Launch Patch)
- **Fixes**: Updated Google Maps links in Contact page and Footer to point correctly to the HKUST Sports Complex.
- **Date**: 2026-01-29

### Release: v1.0.0 (Official Launch)
- **Milestone**: Official stable release of the new HKUST Climbing Society website.
- **Features**: Complete visual overhaul, CSV-driven event management, interactive wall guide, and mobile-first design.
- **Date**: 2026-01-29

### Release: v0.3.2
- **UI Tweaks**: Refined Contact page headers for clarity ("Get in Touch", "Contact Us").
- **Documentation**: Corrected version history logs.
- **Date**: 2026-01-29

### Release: v0.3.0
- **Architecture**: Implemented CSV-driven database (`src/data/events.csv`) for easy Excel management.
- **Assets**: Complete restructuring of `public/photos` into strict categories (`wall`, `equipment`, `events`).
- **UI/UX**: Standardized button design system (removed Liquid Glass) and cleaned up navigation routes.
- **Date**: 2026-01-29

### Release: v0.2.x
- **UI**: Removed Liquid Glass effects, standardized CTA buttons.
- **Data**: CSV Pipeline integration.
- **Date**: 2026-01-29

### Release: v0.1.x
- **Security**: Added pre-push linting and auditing.
- **Privacy**: Hidden internal dev tools.
- **UI**: Initial Liquid Glass implementation and performance upgrades.
- **Date**: 2026-01-29
