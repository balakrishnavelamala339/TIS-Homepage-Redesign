# Tulas International School (TIS) - Homepage Redesign

A modern, animated redesign of the Tulas International School homepage focusing on high conversion, fluid animations, and mobile responsiveness. Copy and branding are retained from [tis.edu.in](https://tis.edu.in/).

## 🚀 Live Demo
- **Live URL:** https://tis-homepage-redesign-mu.vercel.app
- **Repository:** https://github.com/balakrishnavelamala339/TIS-Homepage-Redesign

## 🛠️ Tech Stack
- **Framework:** Next.js 14 (App Router) / React 18
- **Styling:** Tailwind CSS (CSS-variable design tokens)
- **Animations:** Framer Motion
- **Theming:** next-themes
- **Deployment:** Vercel

## ✨ Standout Features Implemented
1. **Custom Cursor:** Spring-smoothed ring + dot that scales up over links, buttons and inputs. Disabled on touch devices.
2. **Scroll-Triggered Reveals:** Staggered `whileInView` entrance animations (0.4-0.55s, `once: true`).
3. **Animated Theme Switcher:** Accessible light/dark switch with spring-animated thumb, persisted via next-themes.
4. **Scroll Progress Bar:** `useScroll` + `useSpring` reading indicator fixed to the top.

Also: count-up stats, hero parallax, marquee, `prefers-reduced-motion` support via `MotionConfig`.

## 📦 Getting Started Locally

```bash
git clone https://github.com/<your-username>/tis-homepage-redesign.git
cd tis-homepage-redesign
npm install
npm run dev
```

Open http://localhost:3000. Production check: `npm run build && npm start`.

## 🧩 Component Architecture
- `app/` - layout (fonts, metadata, providers) and page composition
- `components/sections/` - Header, Hero, About, Sports, Rankings, Testimonials, Enquire, Footer
- `components/ui/` - Button, Reveal, CountUp, ThemeToggle
- `components/animation/` - Cursor, ScrollProgress
- `data/content.js` - all copy and lists, kept out of JSX

## 🎨 Brand Identity Retained
School name, logo, copy, rankings, sports list, personalities and parent reviews from tis.edu.in; maroon and yellow palette.
