# HKUST Climbing Society Website (V0.0.3)

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

### 📝 Edited: Community Support (v0.0.3)
- **Support Section**: Added instructions for bug reporting via GitHub Issues and Instagram contact.
- **Version Sync**: Consistent versioning across all project metadata.

### 📝 Edited: Event Refinement (v0.0.2)
- **Fee Transparency**: Updated "Top Out Climbing" fee to explicitly include equipment rentals.
- **Workflow Optimization**: Synchronized versioning across `package.json` and documentation for meaningful build logs.

### 📝 Edited: Minor Adjustments (v0.0.1)
- **Project Structure**: Consolidated the codebase into the root directory for seamless Vercel integration.
- **Asset Management**: Synchronized photos and icons into the `public/` directory for production availability.
- **Responsive Calendar**: High-precision CSS adjustments to ensure the calendar looks premium on laptops and mobile devices.
- **Fixed Schedule**: Adjusted training dates to match real-world society schedules (e.g., excluding April 7/4).
