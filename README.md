# LiquidGlass Academy

A premium, static Learning Management System (LMS) built with a **Liquid Glass UI** design system. This project showcases a luxury EdTech platform with Apple-inspired aesthetics, glassmorphism surfaces, and smooth animations.

> **Note**: This is a static frontend — no backend, authentication, or database. All data is served from local JSON files.

---

## Tech Stack

| Technology | Purpose |
|-----------|---------|
| **React 19** | UI component library |
| **Vite 7** | Build tool and dev server |
| **TailwindCSS 4** | Utility-first CSS framework |
| **Framer Motion** | Animation library |
| **React Router 7** | Client-side routing |

---

## Getting Started

### Prerequisites
- Node.js 18+ and npm 9+

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd liquid-glass

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`.

### Build for Production

```bash
npm run build
npm run preview
```

---

## Project Structure

```
liquid-glass/
├── index.html                  # HTML entry point with Inter font & meta tags
├── vite.config.js              # Vite config with React & TailwindCSS plugins
├── package.json
│
├── src/
│   ├── main.jsx                # React entry point
│   ├── App.jsx                 # Route definitions
│   │
│   ├── components/             # Reusable UI components
│   │   ├── GlassCard.jsx       # Core glass surface component (3 variants)
│   │   ├── Navbar.jsx          # Fixed glass navigation bar
│   │   ├── Footer.jsx          # Site footer with link columns
│   │   ├── CourseCard.jsx      # Course preview card
│   │   ├── CategoryCard.jsx    # Category grid item
│   │   ├── TestimonialCard.jsx # Testimonial card with rating
│   │   ├── CurriculumAccordion.jsx # Expandable course sections
│   │   └── BackgroundBlobs.jsx # Animated gradient background blobs
│   │
│   ├── pages/                  # Route-level page components
│   │   ├── Home.jsx            # Landing page (hero, categories, courses, CTA)
│   │   ├── Courses.jsx         # Course catalog with filters
│   │   ├── CourseDetail.jsx    # Individual course page
│   │   ├── About.jsx           # About page (vision, mission, team)
│   │   └── Contact.jsx         # Contact form page
│   │
│   ├── layout/
│   │   └── MainLayout.jsx      # App shell (Navbar + Outlet + Footer)
│   │
│   ├── data/                   # Static mock data
│   │   ├── courses.json        # 8 courses with full details
│   │   ├── categories.json     # 8 course categories
│   │   └── testimonials.json   # 4 student testimonials
│   │
│   ├── styles/
│   │   └── index.css           # TailwindCSS imports, theme, glass utilities
│   │
│   └── assets/                 # Static assets (images, SVGs)
│
├── AI_EXECUTION_RULES.md       # Coding standards & design rules for AI agents
├── AI_TODO.md                  # Future development roadmap & checklists
├── PRODUCT_REQUIREMENTS.md     # Product vision, audience, monetization
└── README.md                   # This file
```

---

## Pages

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Hero, categories, featured courses, testimonials, CTA |
| `/courses` | Courses | Full catalog with search, category & level filters |
| `/courses/:slug` | Course Detail | Banner, overview, curriculum, instructor, pricing |
| `/about` | About | Vision, mission, stats, values, team |
| `/contact` | Contact | Glass contact form with info cards |

---

## Design System — Liquid Glass

The UI follows a consistent glassmorphism design language:

- **Glass surfaces**: Semi-transparent backgrounds with backdrop blur
- **3 glass variants**: Default, Strong, Subtle (via `GlassCard` component)
- **Color palette**: Violet (primary), Cyan (secondary), on dark navy/purple gradient
- **Typography**: Inter font, soft white text with varying opacities
- **Animations**: Framer Motion entrance animations, hover glow effects
- **Background**: Animated gradient blobs with slow pulse

See [AI_EXECUTION_RULES.md](./AI_EXECUTION_RULES.md) for full design specifications.

---

## How to Extend

### Adding a new page

1. Create a component in `src/pages/NewPage.jsx`
2. Add a route in `src/App.jsx` inside the `MainLayout` wrapper
3. Add a navigation link in `src/components/Navbar.jsx`
4. Use `GlassCard` and existing components for consistent styling

### Adding new course data

1. Add entries to `src/data/courses.json` following the existing schema
2. Ensure `slug` is unique and URL-friendly
3. Include all required fields: `id`, `title`, `slug`, `instructor`, `price`, `rating`, `duration`, `category`, `thumbnail`, `curriculum`

### Creating new components

1. Place in `src/components/`
2. Use the glass design tokens from `src/styles/index.css`
3. Wrap with Framer Motion for entrance animations
4. Follow the pattern of existing components

---

## Future Roadmap

- **Phase 2**: Authentication, payments (Razorpay/Stripe), backend API, search
- **Phase 3**: Video hosting, progress tracking, instructor/admin dashboards
- **Phase 4**: Mobile app, AI recommendations, live classes, multi-language

See [AI_TODO.md](./AI_TODO.md) for the complete feature roadmap.
See [PRODUCT_REQUIREMENTS.md](./PRODUCT_REQUIREMENTS.md) for product strategy.

---

## License

This project is private and proprietary. All rights reserved.
