# AI TODO — LiquidGlass Academy Roadmap

This file tracks planned features and integrations for future development phases.

---

## Phase 2 — Dynamic Backend Integration

- [ ] Set up Node.js/Express API server (or Next.js API routes)
- [ ] Design PostgreSQL/MongoDB database schema for courses, users, enrollments
- [ ] Create REST API endpoints: `/api/courses`, `/api/users`, `/api/enrollments`
- [ ] Replace static JSON data imports with API fetch calls
- [ ] Add loading skeletons and error states for all data-driven components
- [ ] Implement server-side pagination for course listings
- [ ] Add Redis caching layer for frequently accessed data

## Phase 2 — Authentication System

- [ ] Integrate NextAuth.js or Auth0 for authentication
- [ ] Implement email/password sign-up and sign-in flows
- [ ] Add Google and GitHub OAuth providers
- [ ] Create user profile page with avatar upload
- [ ] Build protected route middleware for enrolled-only content
- [ ] Add email verification flow
- [ ] Implement password reset functionality
- [ ] Add session management and JWT token refresh

## Phase 2 — Payment Integration

- [ ] Integrate Razorpay payment gateway (primary — India market)
- [ ] Integrate Stripe payment gateway (international market)
- [ ] Build checkout flow with order summary glass card
- [ ] Implement coupon/promo code system
- [ ] Add payment confirmation and receipt pages
- [ ] Build refund request system
- [ ] Implement subscription-based pricing tier (monthly/annual Pro)
- [ ] Add GST/tax calculation for Indian transactions

## Phase 3 — Admin Dashboard

- [ ] Build admin layout with glass sidebar navigation
- [ ] Course management CRUD interface
- [ ] User management with search and filtering
- [ ] Revenue analytics dashboard with charts (Recharts or Chart.js)
- [ ] Enrollment statistics and completion tracking
- [ ] Content moderation tools
- [ ] System settings and configuration panel
- [ ] Bulk operations (course publish, user notifications)

## Phase 3 — Instructor Dashboard

- [ ] Instructor onboarding and verification flow
- [ ] Course creation wizard (multi-step glass form)
- [ ] Video upload interface with progress tracking
- [ ] Course analytics (views, enrollments, completion rates)
- [ ] Student Q&A management
- [ ] Revenue and payout tracking
- [ ] Course review and rating management
- [ ] Instructor profile editor

## Phase 3 — Video Hosting Integration

- [ ] Integrate Mux or Cloudflare Stream for video hosting
- [ ] Build custom video player with glass UI overlay
- [ ] Implement adaptive bitrate streaming (HLS)
- [ ] Add video progress tracking and resume functionality
- [ ] Build video bookmarking system
- [ ] Implement playback speed controls
- [ ] Add closed captions/subtitles support
- [ ] Implement DRM protection for premium content

## Phase 2 — Search Functionality

- [ ] Implement full-text search with Algolia or Meilisearch
- [ ] Build glass search modal with keyboard shortcuts (Cmd+K)
- [ ] Add search suggestions and autocomplete
- [ ] Implement search result highlighting
- [ ] Add search filters (category, level, price range, rating)
- [ ] Build recent searches functionality
- [ ] Add search analytics tracking

## Phase 3 — LMS Progress Tracking

- [ ] Build course progress tracker with percentage completion
- [ ] Implement lesson completion marking
- [ ] Add quiz/assessment system
- [ ] Build achievement/badge system
- [ ] Create learning streak tracker
- [ ] Implement spaced repetition review system
- [ ] Build downloadable certificate generation (PDF)
- [ ] Add learning path recommendations

## Deployment Checklist

- [ ] Configure environment variables for production
- [ ] Set up Vercel/Netlify deployment pipeline
- [ ] Configure custom domain and SSL
- [ ] Set up CDN for static assets
- [ ] Implement image optimization pipeline
- [ ] Configure CORS policies
- [ ] Set up error monitoring (Sentry)
- [ ] Configure analytics (Plausible or PostHog)
- [ ] Add rate limiting for API endpoints
- [ ] Set up automated backups for database
- [ ] Configure CI/CD pipeline (GitHub Actions)
- [ ] Run Lighthouse audit and fix performance issues

## SEO Optimization Checklist

- [ ] Add dynamic meta tags per page (react-helmet-async)
- [ ] Implement Open Graph and Twitter Card meta tags
- [ ] Generate dynamic sitemap.xml
- [ ] Add robots.txt configuration
- [ ] Implement structured data (JSON-LD) for courses
- [ ] Add canonical URLs for all pages
- [ ] Implement breadcrumb structured data
- [ ] Optimize Core Web Vitals (LCP, FID, CLS)
- [ ] Add alt text to all images
- [ ] Implement proper heading hierarchy (h1-h6)
- [ ] Set up Google Search Console
- [ ] Create blog section for organic SEO growth
- [ ] Implement SSR/SSG for critical pages (migrate to Next.js)
