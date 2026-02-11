import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function CourseCard({ course, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <Link
        to={`/courses/${course.slug}`}
        className="group block h-full"
      >
        <div className="h-full bg-white/[0.05] backdrop-blur-2xl border border-white/[0.10] rounded-2xl overflow-hidden transition-all duration-500 hover:bg-white/[0.08] hover:border-white/[0.18] hover:shadow-[0_8px_60px_rgba(124,58,237,0.12)] hover:-translate-y-1">
          {/* Thumbnail */}
          <div className="relative overflow-hidden aspect-video">
            <img
              src={course.thumbnail}
              alt={course.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute top-3 left-3">
              <span className="px-3 py-1 text-[11px] font-semibold bg-white/[0.12] backdrop-blur-md border border-white/[0.15] rounded-full text-white/90">
                {course.category}
              </span>
            </div>
            <div className="absolute top-3 right-3">
              <span className="px-3 py-1 text-[11px] font-semibold bg-violet-500/80 backdrop-blur-md rounded-full text-white">
                {course.level}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-5">
            <h3 className="text-base font-semibold text-white/90 leading-snug mb-3 line-clamp-2 group-hover:text-white transition-colors duration-300">
              {course.title}
            </h3>

            {/* Instructor */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-violet-500/60 to-cyan-400/60 flex items-center justify-center text-[10px] font-bold text-white">
                {course.instructorAvatar}
              </div>
              <span className="text-xs text-white/45">{course.instructor}</span>
            </div>

            {/* Meta */}
            <div className="flex items-center gap-3 mb-4 text-xs text-white/40">
              <span className="flex items-center gap-1">
                <svg className="w-3.5 h-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-white/60 font-medium">{course.rating}</span>
                <span>({course.reviews.toLocaleString()})</span>
              </span>
              <span className="w-px h-3 bg-white/10" />
              <span>{course.duration}</span>
            </div>

            {/* Price */}
            <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-white">
                  {course.currency}{course.price.toLocaleString()}
                </span>
                <span className="text-xs text-white/30 line-through">
                  {course.currency}{course.originalPrice.toLocaleString()}
                </span>
              </div>
              <span className="text-xs font-medium text-emerald-400/80 bg-emerald-400/[0.08] px-2 py-0.5 rounded-md">
                {Math.round((1 - course.price / course.originalPrice) * 100)}% off
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
