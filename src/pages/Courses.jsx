import { useState } from "react";
import { motion } from "framer-motion";
import CourseCard from "../components/CourseCard";
import courses from "../data/courses.json";

const allCategories = ["All", ...new Set(courses.map((c) => c.category))];
const levels = ["All Levels", "Beginner", "Intermediate", "Advanced"];

export default function Courses() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeLevel, setActiveLevel] = useState("All Levels");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = courses.filter((course) => {
    const matchCat = activeCategory === "All" || course.category === activeCategory;
    const matchLevel = activeLevel === "All Levels" || course.level.includes(activeLevel);
    const matchSearch =
      searchQuery === "" ||
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchLevel && matchSearch;
  });

  return (
    <div className="relative z-10 pt-28 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            All Courses
          </h1>
          <p className="text-sm text-white/35 max-w-lg">
            Explore our entire library of premium courses. Filter by category, level, or search to find exactly what you need.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white/[0.04] backdrop-blur-2xl border border-white/[0.08] rounded-2xl p-5 mb-8"
        >
          {/* Search */}
          <div className="mb-4">
            <div className="relative">
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/25"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search courses or instructors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white/[0.04] border border-white/[0.08] rounded-xl text-sm text-white/80 placeholder:text-white/20 focus:outline-none focus:border-white/[0.20] focus:bg-white/[0.06] transition-all duration-300"
              />
            </div>
          </div>

          {/* Category pills */}
          <div className="mb-3">
            <p className="text-xs text-white/25 mb-2 font-medium uppercase tracking-wider">Category</p>
            <div className="flex flex-wrap gap-2">
              {allCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-lg border transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-violet-500/20 border-violet-500/30 text-violet-300"
                      : "bg-white/[0.03] border-white/[0.06] text-white/40 hover:text-white/60 hover:border-white/[0.12]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Level pills */}
          <div>
            <p className="text-xs text-white/25 mb-2 font-medium uppercase tracking-wider">Level</p>
            <div className="flex flex-wrap gap-2">
              {levels.map((level) => (
                <button
                  key={level}
                  onClick={() => setActiveLevel(level)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-lg border transition-all duration-300 ${
                    activeLevel === level
                      ? "bg-cyan-500/20 border-cyan-500/30 text-cyan-300"
                      : "bg-white/[0.03] border-white/[0.06] text-white/40 hover:text-white/60 hover:border-white/[0.12]"
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Results count */}
        <div className="mb-6">
          <p className="text-xs text-white/25">
            Showing {filtered.length} of {courses.length} courses
          </p>
        </div>

        {/* Course Grid */}
        {filtered.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((course, i) => (
              <CourseCard key={course.id} course={course} index={i} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-4xl mb-4 opacity-30">🔍</div>
            <p className="text-sm text-white/30">No courses found matching your criteria.</p>
            <button
              onClick={() => {
                setActiveCategory("All");
                setActiveLevel("All Levels");
                setSearchQuery("");
              }}
              className="mt-4 text-xs text-violet-400/60 hover:text-violet-400 transition-colors"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
