# AI Execution Rules — LiquidGlass Academy

This document defines the coding standards, conventions, and design rules that any AI agent or developer must follow when extending or modifying this project.

---

## 1. Coding Standards

- **Language**: JavaScript (ES2022+) with React JSX
- **Formatting**: 2-space indentation, double quotes for strings, semicolons required
- **Imports**: Group by — external packages → internal components → data/assets → styles
- **Functions**: Use named `export default function` declarations for components
- **State**: Prefer `useState` and `useEffect` hooks; no class components
- **Naming**: camelCase for variables/functions, PascalCase for components/files

## 2. Component Naming Conventions

| Type | Pattern | Example |
|------|---------|---------|
| Page component | `PascalCase.jsx` | `CourseDetail.jsx` |
| Reusable component | `PascalCase.jsx` | `GlassCard.jsx` |
| Layout component | `PascalCase.jsx` | `MainLayout.jsx` |
| Data file | `camelCase.json` | `courses.json` |

- One component per file
- Co-locate component-specific utilities within the component file
- Export components as default exports

## 3. File Structure Rules

```
/src
  /components    → Reusable UI building blocks
  /pages         → Route-level page components
  /layout        → Layout wrappers (Navbar, Footer, MainLayout)
  /data          → Static JSON mock data
  /assets        → Images, SVGs, static files
  /styles        → Global CSS and design tokens
```

- Never place page-specific logic in `/components`
- Never place reusable components in `/pages`
- All new data sources go in `/data`
- All route definitions live in `App.jsx`

## 4. Design Consistency Rules — Liquid Glass Theme

**These rules are NON-NEGOTIABLE. Do not break the Liquid Glass theme.**

### Background
- Base body gradient: deep navy → purple → black (dark luxury)
- Background blobs: fixed position, blur(120px), low opacity, animated

### Glass Surfaces
- **Default glass**: `bg-white/[0.06]`, `backdrop-blur-2xl`, `border border-white/[0.12]`, `rounded-2xl`
- **Strong glass**: `bg-white/[0.10]`, `backdrop-blur-[32px]`, `border border-white/[0.18]`
- **Subtle glass**: `bg-white/[0.03]`, `backdrop-blur-xl`, `border border-white/[0.08]`
- Always use the `GlassCard` component or `.glass` / `.glass-strong` / `.glass-subtle` CSS classes

### Typography
- Font: Inter (loaded via Google Fonts)
- Heading text: `text-white` or `text-white/90`
- Body text: `text-white/40` to `text-white/60`
- Muted text: `text-white/20` to `text-white/35`
- Never use pure black text or harsh white (#fff at full opacity on body text)

### Accent Colors
- Primary: Violet (`violet-500`, `violet-600`)
- Secondary: Cyan (`cyan-400`, `cyan-500`)
- Gradients: `from-violet-400 to-cyan-400` for highlights
- Success: Emerald (`emerald-400`)
- Warning: Amber (`amber-400`)

### Interactions
- Hover: increase background opacity, add glow shadow, subtle border brightening
- Transitions: minimum `duration-300`, prefer `duration-500` for glass surfaces
- Active states: `active:scale-[0.97]` for buttons
- All animations: use Framer Motion with `whileInView`, `once: true`

### Borders & Shadows
- Borders: always use `border-white/[0.XX]` — never solid borders
- Shadows: prefer glow effects (`shadow-violet-500/25`) over standard shadows
- Border radius: minimum `rounded-xl`, prefer `rounded-2xl`

## 5. How Future AI Should Extend This Project

1. **Read this file first** before making any changes
2. **Use existing components** — prefer composing with `GlassCard`, `CourseCard`, etc.
3. **Follow the data pattern** — add new JSON files in `/data` for mock data
4. **Register new routes** in `App.jsx` within the `MainLayout` wrapper
5. **Test visual consistency** — new elements must visually blend with existing glass surfaces
6. **Do not introduce new design systems** — extend the existing Liquid Glass tokens
7. **Animations** — use Framer Motion; stagger entrance animations with `delay` props

## 6. Performance Rules

- Lazy-load page components with `React.lazy()` when the project grows beyond 8 pages
- Use `loading="lazy"` on all images
- Keep component files under 250 lines; split if larger
- Avoid inline style objects in render — use Tailwind classes
- Images: use Unsplash CDN parameters (`w=`, `h=`, `fit=crop`) for responsive sizing
- Bundle size: monitor with `npm run build` — keep initial JS under 200KB gzipped

## 7. Absolute Rules

- **NEVER** remove glassmorphism effects from any surface
- **NEVER** use flat solid backgrounds on cards or panels
- **NEVER** use colors outside the defined accent palette without approval
- **NEVER** remove backdrop-blur from glass components
- **NEVER** use sharp corners (below `rounded-lg`)
- **ALWAYS** maintain the dark luxury aesthetic
- **ALWAYS** use soft, layered transitions
- **ALWAYS** keep the Inter font family
