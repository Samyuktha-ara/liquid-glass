import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import GlassCard from "../components/GlassCard";
import CourseCard from "../components/CourseCard";
import CategoryCard from "../components/CategoryCard";
import TestimonialCard from "../components/TestimonialCard";
import courses from "../data/courses.json";
import categories from "../data/categories.json";
import testimonials from "../data/testimonials.json";

const stats = [
  { value: "50K+", label: "Active Learners" },
  { value: "200+", label: "Expert Courses" },
  { value: "95%", label: "Completion Rate" },
  { value: "4.8", label: "Average Rating" },
];

export default function Home() {
  const featuredCourses = courses.slice(0, 4);

  return (
    <div className="relative z-10">
      {/* ============ HERO ============ */}
      <section className="min-h-screen flex items-center pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-white/[0.06] border border-white/[0.10] text-xs text-white/50">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Now Enrolling — Spring 2026 Cohort
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
                <span className="text-white">Master the Future</span>
                <br />
                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  with Liquid Glass
                </span>
              </h1>

              <p className="text-base sm:text-lg text-white/40 max-w-lg mb-8 leading-relaxed">
                Premium courses crafted by industry leaders. Learn AI, development, design, and more with a learning experience as refined as the technology you&apos;ll build.
              </p>

              <div className="flex flex-wrap gap-3 mb-12">
                <Link
                  to="/courses"
                  className="px-7 py-3.5 text-sm font-semibold bg-gradient-to-r from-violet-600 to-violet-500 text-white rounded-xl hover:shadow-lg hover:shadow-violet-500/25 transition-all duration-300 active:scale-[0.97]"
                >
                  Explore Courses
                </Link>
                <button className="px-7 py-3.5 text-sm font-medium bg-white/[0.06] border border-white/[0.12] text-white/70 rounded-xl hover:bg-white/[0.10] hover:text-white transition-all duration-300">
                  Watch Demo
                </button>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  >
                    <p className="text-2xl font-bold text-white mb-0.5">{stat.value}</p>
                    <p className="text-xs text-white/30">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right — Hero Glass Panel */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-violet-500/20 to-cyan-500/20 blur-3xl rounded-3xl" />
                <GlassCard variant="strong" hover={false} animate={false} className="relative p-8">
                  <div className="space-y-4">
                    {/* Simulated dashboard elements */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-cyan-400 flex items-center justify-center text-white font-bold text-sm">
                        AI
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white/80">ML & AI Bootcamp</p>
                        <p className="text-xs text-white/35">Dr. Arjun Mehta</p>
                      </div>
                      <span className="ml-auto px-2 py-0.5 text-[10px] font-medium bg-emerald-400/10 text-emerald-400 rounded-md border border-emerald-400/20">
                        Live
                      </span>
                    </div>
                    {/* Progress bars */}
                    {["Neural Networks", "Deep Learning", "NLP Basics"].map((topic, i) => (
                      <div key={topic}>
                        <div className="flex justify-between text-xs mb-1.5">
                          <span className="text-white/50">{topic}</span>
                          <span className="text-white/30">{75 + i * 8}%</span>
                        </div>
                        <div className="h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${75 + i * 8}%` }}
                            transition={{ duration: 1.2, delay: 0.6 + i * 0.2, ease: "easeOut" }}
                            className="h-full bg-gradient-to-r from-violet-500 to-cyan-400 rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                    {/* Bottom stat cards */}
                    <div className="grid grid-cols-3 gap-3 pt-4">
                      {[
                        { label: "Hours", value: "127" },
                        { label: "Streak", value: "23d" },
                        { label: "Rank", value: "Top 5%" },
                      ].map((item) => (
                        <div key={item.label} className="bg-white/[0.04] border border-white/[0.06] rounded-xl p-3 text-center">
                          <p className="text-lg font-bold text-white/80">{item.value}</p>
                          <p className="text-[10px] text-white/30">{item.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </GlassCard>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ CATEGORIES ============ */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
              Explore Categories
            </h2>
            <p className="text-sm text-white/35 max-w-md mx-auto">
              Dive into curated learning paths across the most in-demand technology domains.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.map((cat, i) => (
              <CategoryCard key={cat.id} category={cat} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ============ FEATURED COURSES ============ */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4"
          >
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                Featured Courses
              </h2>
              <p className="text-sm text-white/35 max-w-md">
                Hand-picked courses with the highest ratings and student satisfaction.
              </p>
            </div>
            <Link
              to="/courses"
              className="text-sm text-violet-400/70 hover:text-violet-400 transition-colors duration-300 flex items-center gap-1"
            >
              View all courses
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredCourses.map((course, i) => (
              <CourseCard key={course.id} course={course} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
              What Our Learners Say
            </h2>
            <p className="text-sm text-white/35 max-w-md mx-auto">
              Real stories from professionals who transformed their careers with us.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.id} testimonial={t} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <GlassCard variant="strong" className="relative overflow-hidden p-12 sm:p-16 text-center">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600/10 via-transparent to-cyan-600/10 pointer-events-none" />
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Start Your Learning Journey Today
                </h2>
                <p className="text-sm text-white/40 max-w-lg mx-auto mb-8">
                  Join 50,000+ learners who are already building the future. Get unlimited access to all courses with our Pro membership.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <Link
                    to="/courses"
                    className="px-8 py-3.5 text-sm font-semibold bg-gradient-to-r from-violet-600 to-violet-500 text-white rounded-xl hover:shadow-lg hover:shadow-violet-500/25 transition-all duration-300 active:scale-[0.97]"
                  >
                    Get Started Free
                  </Link>
                  <Link
                    to="/contact"
                    className="px-8 py-3.5 text-sm font-medium bg-white/[0.06] border border-white/[0.12] text-white/70 rounded-xl hover:bg-white/[0.10] hover:text-white transition-all duration-300"
                  >
                    Talk to Us
                  </Link>
                </div>
              </motion.div>
            </div>
          </GlassCard>
        </div>
      </section>
    </div>
  );
}
