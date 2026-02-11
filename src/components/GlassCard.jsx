import { motion } from "framer-motion";

export default function GlassCard({
  children,
  className = "",
  variant = "default",
  hover = true,
  animate = true,
  ...props
}) {
  const variants = {
    default: "bg-white/[0.06] border-white/[0.12]",
    strong: "bg-white/[0.10] border-white/[0.18]",
    subtle: "bg-white/[0.03] border-white/[0.08]",
  };

  const baseClasses = `
    backdrop-blur-2xl border rounded-2xl
    ${variants[variant]}
    ${hover ? "transition-all duration-500 hover:bg-white/[0.10] hover:border-white/[0.20] hover:shadow-[0_0_40px_rgba(124,58,237,0.12)]" : ""}
    ${className}
  `;

  if (!animate) {
    return (
      <div className={baseClasses} {...props}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={baseClasses}
      {...props}
    >
      {children}
    </motion.div>
  );
}
