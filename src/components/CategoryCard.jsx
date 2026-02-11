import { motion } from "framer-motion";

export default function CategoryCard({ category, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className={`group cursor-pointer bg-gradient-to-br ${category.gradient} backdrop-blur-2xl border border-white/[0.10] rounded-2xl p-6 transition-all duration-500 hover:border-white/[0.20] hover:shadow-[0_0_40px_rgba(124,58,237,0.1)] hover:-translate-y-0.5`}
    >
      <div className="text-3xl mb-3">{category.icon}</div>
      <h3 className="text-sm font-semibold text-white/80 mb-1 group-hover:text-white/95 transition-colors">
        {category.name}
      </h3>
      <p className="text-xs text-white/35">{category.count} courses</p>
    </motion.div>
  );
}
