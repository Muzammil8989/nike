# Nike — Modern Shoe Landing Page

A premium, animated Nike product landing page built as a portfolio/storefront demo. Designed to match the energy of nike.com and SNKRS — bold typography, scroll-driven motion, and a confident streetwear aesthetic.

**Live Demo:** [muzammil8989.github.io/nike-tailwind](https://Muzammil8989.github.io/nike-tailwind)

---

## Preview

![Hero Section](https://raw.githubusercontent.com/Muzammil8989/nike/main/public/favicon.ico)

> Premium · Streetwear · Athletic

---

## Features

- **Scroll reveal animations** — IntersectionObserver-powered fade-up reveals with staggered card entrances across every section
- **Hero load choreography** — eyebrow chip, headline, body copy, CTA, and stats each stagger in on mount
- **Interactive product cards** — hover reveals a "Shop Now" CTA that slides up from the image area
- **Sticky nav** — glass-blur navbar that gains a shadow on scroll
- **Mobile drawer** — full slide-in navigation for small screens with body scroll lock
- **Responsive layout** — fluid from 375px to 1440px+, optimized for all breakpoints
- **Reduced-motion safe** — all animations respect `prefers-reduced-motion`

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 |
| Build tool | Vite 5 |
| Styling | Tailwind CSS 3 |
| Icons | React Icons |
| Deployment | GitHub Pages via `gh-pages` |

---

## Project Structure

```
src/
├── assets/
│   ├── icons/        # SVG icons (re-exported via index.js)
│   └── images/       # Product images (re-exported via index.js)
├── components/       # Reusable UI: Button, Nav, ShoeCard, ProductCard, etc.
├── constant/         # All page content — products, reviews, nav links, footer links
├── hooks/
│   └── useReveal.js  # IntersectionObserver scroll-reveal hook
└── sections/         # Full-width page sections assembled in App.jsx
    ├── Hero.jsx
    ├── PopularProduct.jsx
    ├── SuperQuality.jsx
    ├── Services.jsx
    ├── SpecialOffer.jsx
    ├── CustomerReviews.jsx
    ├── Subscribe.jsx
    └── Fotter.jsx
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/Muzammil8989/nike.git
cd nike

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Available Scripts

```bash
npm run dev        # Start Vite dev server with HMR
npm run build      # Production build (output to dist/)
npm run preview    # Preview production build locally
npm run lint       # ESLint — zero warnings enforced
npm run deploy     # Build and deploy to GitHub Pages
```

---

## Design System

### Colors

| Token | Value | Usage |
|---|---|---|
| `coral-red` | `#FF6452` | Primary accent, CTAs, highlights |
| `slate-gray` | `#6D6D6D` | Body text, secondary elements |
| `pale-blue` | `#e2dfe8` | Section backgrounds, card borders |
| `primary` | `#ECEEFF` | Card backgrounds, subtle fills |

### Typography

| Font | Role |
|---|---|
| Palanquin | Display headings |
| Montserrat | Body text, labels, UI copy |

### Custom Breakpoint

| Name | Width |
|---|---|
| `wide` | 1440px |

---

## Deployment

Deploys automatically to GitHub Pages on `npm run deploy`. The `predeploy` script runs `build` first.

```bash
npm run deploy
```

Live at: `https://Muzammil8989.github.io/nike-tailwind`

---

## Author

**Muhammad Muzammil Khan**
- GitHub: [@Muzammil8989](https://github.com/Muzammil8989)
- Email: muzammilkhan89223@gmail.com

---

## License

This project is for portfolio and educational purposes. Nike brand assets and trademarks belong to Nike, Inc.
