# Product Requirements Document — LiquidGlass Academy

---

## Product Vision

LiquidGlass Academy is a **premium EdTech platform** that delivers world-class technology education through a luxury digital experience. The platform combines Silicon Valley-grade course content with an Apple-inspired user interface, creating a learning environment that feels as polished as the products our students aspire to build.

We believe that the learning experience itself is a teacher — a beautifully crafted platform subconsciously raises the standard of what our students consider "quality."

---

## Target Audience

### Primary: Indian Tech Students & Professionals
- **Age range**: 18–35
- **Profile**: College students, recent graduates, early-career professionals
- **Motivation**: Career advancement, skill upgradation, placement preparation
- **Price sensitivity**: High — value-conscious, expects significant discounts
- **Device**: Primarily mobile (60%), followed by laptop (35%), tablet (5%)

### Secondary: Global Learners
- **Profile**: Self-taught developers, career switchers, freelancers
- **Motivation**: Portfolio-building, freelance skill expansion, startup preparation
- **Price sensitivity**: Moderate — willing to pay for premium quality
- **Device**: Laptop-first (55%), mobile (35%), tablet (10%)

### Tertiary: Enterprise & Teams
- **Profile**: HR managers, L&D departments, startup CTOs
- **Motivation**: Team upskilling, onboarding, compliance training
- **Price sensitivity**: Low — budget-allocated, value ROI metrics

---

## Core Features — Static Version (Phase 1)

### Delivered
1. **Home Page** — Hero section, featured courses, categories, testimonials, CTA
2. **Course Catalog** — Grid layout with search, category filters, level filters
3. **Course Detail Page** — Banner, overview, curriculum accordion, instructor bio, pricing
4. **About Page** — Vision, mission, stats, team, core values
5. **Contact Page** — Glass contact form with info cards
6. **Responsive Design** — Mobile-first, works across all viewport sizes
7. **Liquid Glass UI** — Consistent glassmorphism design system throughout
8. **Smooth Animations** — Framer Motion entrance and interaction animations

### Architecture Delivered
- Component-based React architecture
- Reusable GlassCard design system component
- Mock JSON data structure (ready for API replacement)
- Clean routing with React Router v7
- TailwindCSS v4 utility-first styling
- Performance-optimized image loading

---

## Future Roadmap

### Phase 2 — Core Platform (Months 1–3)
- User authentication (email + OAuth)
- Payment integration (Razorpay + Stripe)
- Course enrollment system
- Basic video player
- User profiles and dashboards
- Search with Algolia/Meilisearch
- Backend API (Node.js + PostgreSQL)

### Phase 3 — Engagement & Growth (Months 4–6)
- Progress tracking and completion certificates
- Instructor dashboard and course creation tools
- Admin panel with analytics
- Quiz and assessment system
- Discussion forums per course
- Mobile app (React Native / Flutter)
- Push notifications

### Phase 4 — Scale & Monetize (Months 7–12)
- Subscription model (Pro/Premium tiers)
- Enterprise team management
- AI-powered course recommendations
- Live classes and webinars
- Mentorship marketplace
- Referral and affiliate program
- Multi-language support (Hindi, Tamil, Telugu)
- Offline download capability

---

## Monetization Strategy

### Revenue Streams
1. **Individual Course Sales** — One-time purchase, lifetime access
2. **Pro Subscription** — ₹999/month or ₹7,999/year — unlimited access to all courses
3. **Enterprise Licensing** — Custom pricing per seat, analytics dashboard, SSO
4. **Certificate Fees** — Verified certificates with blockchain validation
5. **Instructor Revenue Share** — 70/30 split (instructor/platform)

### Pricing Strategy (India Market)
- Entry courses: ₹499–₹1,999
- Professional courses: ₹2,999–₹5,999
- Specialization bundles: ₹9,999–₹14,999
- Perpetual discounts: 50–70% off MRP (psychological anchor pricing)
- Pro subscription: ₹999/mo (positioned as "less than a daily coffee")

### Pricing Strategy (International)
- Entry courses: $19–$49
- Professional courses: $49–$99
- Specialization bundles: $149–$249
- Pro subscription: $19/mo or $149/year

---

## UX Philosophy

### Core Principles

1. **Effortless Discovery**
   Every interaction should feel intuitive. Users should never need to "figure out" how to navigate. The UI guides them naturally through content discovery and enrollment.

2. **Premium Minimalism**
   Less is more. Every element on screen must justify its presence. White space is a design element, not wasted space. Inspired by Apple's product pages and Linear's dashboard aesthetic.

3. **Fluid Interaction**
   Every state change — hover, click, scroll, page transition — should be animated. The interface should feel alive and responsive, never static or jarring. Glass surfaces breathe with subtle opacity shifts.

4. **Accessible Luxury**
   Premium doesn't mean exclusive. The design must be fully accessible (WCAG 2.1 AA) while maintaining its luxury feel. Glassmorphism with sufficient contrast ratios. Screen reader compatible.

5. **Mobile Dignity**
   The mobile experience is not a "lesser" version. It's a first-class citizen with touch-optimized interactions, appropriate sizing, and the same visual quality as desktop.

---

## Branding Direction

### Visual Identity
- **Primary Color**: Violet (#7c3aed) — intelligence, creativity, premium
- **Secondary Color**: Cyan (#06b6d4) — technology, clarity, innovation
- **Background**: Deep navy-to-black gradient — sophistication, depth
- **Surface Treatment**: Glassmorphism — modernity, transparency, trust

### Brand Voice
- **Tone**: Confident but approachable. Expert but not intimidating.
- **Language**: Clean, concise, aspirational. No jargon for jargon's sake.
- **Personality**: A brilliant mentor who also happens to have impeccable taste.

### Brand Positioning
- **Not**: Another Udemy clone with cheap courses
- **Not**: An exclusive, gate-kept ivory tower
- **Yes**: The intersection of world-class education and world-class design
- **Tagline candidates**:
  - "Where brilliance meets beauty"
  - "Premium learning, perfectly crafted"
  - "Master the future"

### Competitive Differentiation
| Aspect | Competitors | LiquidGlass |
|--------|------------|-------------|
| UI Quality | Functional but generic | Apple-level polish |
| Content | Quantity-focused | Quality-curated |
| Pricing | Race to bottom | Premium with perceived value |
| Experience | Transactional | Aspirational |
| Brand Feel | Commodity | Luxury EdTech |
