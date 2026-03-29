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
