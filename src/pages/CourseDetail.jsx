import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import GlassCard from "../components/GlassCard";
import CurriculumAccordion from "../components/CurriculumAccordion";
import courses from "../data/courses.json";

export default function CourseDetail() {
  const { slug } = useParams();
  const course = courses.find((c) => c.slug === slug);

  if (!course) {
    return (
      <div className="relative z-10 pt-32 pb-16 text-center">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="text-2xl font-bold text-white mb-4">Course Not Found</h1>
          <p className="text-sm text-white/40 mb-6">
            The course you&apos;re looking for doesn&apos;t exist or has been removed.
          </p>
          <Link
            to="/courses"
            className="px-6 py-2.5 text-sm font-medium bg-violet-600/80 text-white rounded-xl hover:bg-violet-600 transition-colors"
          >
            Browse Courses
          </Link>
        </div>
      </div>
    );
  }

  const totalLectures = course.curriculum.reduce((sum, s) => sum + s.lectures, 0);

  return (
    <div className="relative z-10 pt-24 pb-16">
      {/* Banner */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={course.thumbnail}
            alt=""
            className="w-full h-full object-cover opacity-15 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a]/60 via-[#0a0a1a]/90 to-[#0a0a1a]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-white/30 mb-6">
              <Link to="/courses" className="hover:text-white/50 transition-colors">Courses</Link>
              <span>/</span>
              <span className="text-white/50">{course.category}</span>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left — Info */}
              <div className="lg:col-span-2">
                <span className="inline-block px-3 py-1 text-[11px] font-semibold bg-violet-500/20 border border-violet-500/25 rounded-full text-violet-300 mb-4">
                  {course.category}
                </span>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">
                  {course.title}
                </h1>

                <p className="text-sm text-white/40 leading-relaxed mb-6 max-w-2xl">
                  {course.description}
                </p>

                {/* Meta */}
                <div className="flex flex-wrap items-center gap-4 text-xs text-white/40 mb-6">
                  <span className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-white/60 font-medium">{course.rating}</span>
                    ({course.reviews.toLocaleString()} reviews)
                  </span>
                  <span className="w-px h-3 bg-white/10" />
                  <span>{course.students.toLocaleString()} students</span>
                  <span className="w-px h-3 bg-white/10" />
                  <span>{course.duration}</span>
                  <span className="w-px h-3 bg-white/10" />
                  <span>{course.level}</span>
                </div>

                {/* Instructor mini */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-violet-500/60 to-cyan-400/60 flex items-center justify-center text-xs font-bold text-white border border-white/[0.15]">
                    {course.instructorAvatar}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white/70">{course.instructor}</p>
                    <p className="text-[11px] text-white/30">Instructor</p>
                  </div>
                </div>
              </div>

              {/* Right — Enroll Card */}
              <div className="lg:col-span-1">
                <GlassCard variant="strong" hover={false} animate={false} className="p-6 sticky top-28">
                  {/* Thumbnail */}
                  <div className="rounded-xl overflow-hidden mb-5 aspect-video">
                    <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover" />
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-3xl font-bold text-white">
                      {course.currency}{course.price.toLocaleString()}
                    </span>
                    <span className="text-sm text-white/25 line-through">
                      {course.currency}{course.originalPrice.toLocaleString()}
                    </span>
                    <span className="px-2 py-0.5 text-xs font-medium text-emerald-400 bg-emerald-400/[0.08] rounded-md">
                      {Math.round((1 - course.price / course.originalPrice) * 100)}% off
                    </span>
                  </div>

                  {/* CTA */}
                  <button className="w-full py-3.5 text-sm font-semibold bg-gradient-to-r from-violet-600 to-violet-500 text-white rounded-xl hover:shadow-lg hover:shadow-violet-500/25 transition-all duration-300 active:scale-[0.97] mb-3">
                    Enroll Now
                  </button>
                  <button className="w-full py-3 text-sm font-medium bg-white/[0.06] border border-white/[0.10] text-white/60 rounded-xl hover:bg-white/[0.10] hover:text-white/80 transition-all duration-300 mb-5">
                    Add to Wishlist
                  </button>

                  {/* Quick facts */}
                  <div className="space-y-3 text-xs">
                    {[
                      { label: "Duration", value: course.duration },
                      { label: "Lectures", value: `${totalLectures} lectures` },
                      { label: "Level", value: course.level },
                      { label: "Certificate", value: "Yes, on completion" },
                      { label: "Access", value: "Lifetime access" },
                    ].map((item) => (
                      <div key={item.label} className="flex justify-between py-2 border-b border-white/[0.04]">
                        <span className="text-white/35">{item.label}</span>
                        <span className="text-white/60 font-medium">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Course Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-12">
            {/* Highlights */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xl font-bold text-white mb-5">What You&apos;ll Learn</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {course.highlights.map((h) => (
                  <div
                    key={h}
                    className="flex items-start gap-3 p-3 bg-white/[0.03] border border-white/[0.06] rounded-xl"
                  >
                    <svg className="w-4 h-4 text-emerald-400/70 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-white/55">{h}</span>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Curriculum */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex justify-between items-end mb-5">
                <h2 className="text-xl font-bold text-white">Curriculum</h2>
                <p className="text-xs text-white/30">
                  {course.curriculum.length} sections &middot; {totalLectures} lectures &middot; {course.duration}
                </p>
              </div>
              <CurriculumAccordion curriculum={course.curriculum} />
            </motion.section>

            {/* Instructor */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xl font-bold text-white mb-5">Your Instructor</h2>
              <GlassCard hover={false} className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500/50 to-cyan-400/50 flex items-center justify-center text-xl font-bold text-white border border-white/[0.15] shrink-0">
                    {course.instructorAvatar}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white/85 mb-1">{course.instructor}</h3>
                    <p className="text-xs text-violet-400/60 mb-3">{course.category} Expert</p>
                    <p className="text-sm text-white/40 leading-relaxed">{course.instructorBio}</p>
                  </div>
                </div>
              </GlassCard>
            </motion.section>
          </div>

          {/* Spacer for sticky sidebar */}
          <div className="hidden lg:block" />
        </div>
      </div>
    </div>
  );
}
