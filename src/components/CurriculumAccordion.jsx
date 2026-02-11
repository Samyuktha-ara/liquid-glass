import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CurriculumAccordion({ curriculum }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-2">
      {curriculum.map((section, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`border rounded-xl transition-all duration-300 ${
              isOpen
                ? "bg-white/[0.06] border-white/[0.15]"
                : "bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04]"
            }`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="w-full flex items-center justify-between p-4 text-left"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-lg bg-white/[0.06] border border-white/[0.10] flex items-center justify-center text-xs font-semibold text-white/50">
                  {index + 1}
                </span>
                <span className="text-sm font-medium text-white/80">
                  {section.section}
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs text-white/30 hidden sm:block">
                  {section.lectures} lectures &middot; {section.duration}
                </span>
                <motion.svg
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="w-4 h-4 text-white/30"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </motion.svg>
              </div>
            </button>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-4 pb-4 pt-0">
                    <div className="border-t border-white/[0.06] pt-3 space-y-2">
                      {Array.from({ length: section.lectures }).map((_, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-white/[0.03] transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <svg className="w-4 h-4 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                            </svg>
                            <span className="text-xs text-white/45">
                              Lecture {i + 1}: {section.section} — Part {i + 1}
                            </span>
                          </div>
                          <span className="text-[11px] text-white/20">
                            {Math.floor(Math.random() * 20 + 5)}:00
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
