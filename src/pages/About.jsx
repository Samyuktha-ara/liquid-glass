import { motion } from "framer-motion";
import GlassCard from "../components/GlassCard";

const stats = [
  { value: "50,000+", label: "Active Learners", description: "Across 40+ countries worldwide" },
  { value: "200+", label: "Premium Courses", description: "Curated by industry experts" },
  { value: "95%", label: "Completion Rate", description: "Industry-leading engagement" },
  { value: "500+", label: "Hiring Partners", description: "Top tech companies globally" },
];

const values = [
  {
    title: "Excellence First",
    description: "Every course undergoes rigorous quality review. We believe premium education should be accessible, not compromised.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0l-4.725 2.885a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
  {
    title: "Learn by Building",
    description: "Our project-based approach ensures you gain real-world skills. Theory is nothing without practice.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    title: "Community Driven",
    description: "Join a thriving community of learners and mentors. Collaboration accelerates growth.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    title: "Future Ready",
    description: "We continuously update our curriculum to match industry trends. Stay ahead of the curve.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
];

const team = [
  { name: "Arjun Mehta", role: "Founder & CEO", avatar: "AM" },
  { name: "Priya Sharma", role: "Head of Education", avatar: "PS" },
  { name: "Rohit Verma", role: "CTO", avatar: "RV" },
  { name: "Kavya Nair", role: "Head of Design", avatar: "KN" },
];

export default function About() {
  return (
    <div className="relative z-10 pt-28 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Redefining How the
            <br />
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              World Learns Technology
            </span>
          </h1>
          <p className="text-sm text-white/35 max-w-xl mx-auto leading-relaxed">
            LiquidGlass Academy was founded with a singular vision — to make world-class technology education accessible, engaging, and beautifully crafted.
          </p>
        </motion.div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          <GlassCard variant="strong" className="p-8">
            <div className="w-10 h-10 rounded-xl bg-violet-500/15 border border-violet-500/20 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-white mb-3">Our Vision</h2>
            <p className="text-sm text-white/40 leading-relaxed">
              To become the world&apos;s most premium and accessible technology education platform — where learning feels as refined as the products our students build. We envision a future where geography and background are no barriers to excellence.
            </p>
          </GlassCard>

          <GlassCard variant="strong" className="p-8">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-500/20 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-white mb-3">Our Mission</h2>
            <p className="text-sm text-white/40 leading-relaxed">
              To empower 1 million technology professionals by 2030 through meticulously crafted, industry-aligned courses taught by the best practitioners. Every lesson, every project, every interaction is designed to transform potential into expertise.
            </p>
          </GlassCard>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white/[0.04] backdrop-blur-2xl border border-white/[0.08] rounded-2xl p-6 text-center"
              >
                <p className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent mb-1">
                  {stat.value}
                </p>
                <p className="text-sm font-medium text-white/60 mb-1">{stat.label}</p>
                <p className="text-[11px] text-white/25">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-3">Our Core Values</h2>
          <p className="text-sm text-white/30 text-center mb-10 max-w-md mx-auto">
            The principles that guide everything we build and teach.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((value, i) => (
              <GlassCard key={value.title} className="p-6">
                <div className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/[0.10] flex items-center justify-center mb-4 text-violet-400/70">
                  {value.icon}
                </div>
                <h3 className="text-sm font-semibold text-white/80 mb-2">{value.title}</h3>
                <p className="text-xs text-white/35 leading-relaxed">{value.description}</p>
              </GlassCard>
            ))}
          </div>
        </motion.div>

        {/* Team */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-3">Leadership Team</h2>
          <p className="text-sm text-white/30 text-center mb-10 max-w-md mx-auto">
            Industry veterans committed to transforming education.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white/[0.04] backdrop-blur-2xl border border-white/[0.08] rounded-2xl p-6 text-center hover:bg-white/[0.07] hover:border-white/[0.15] transition-all duration-500"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-violet-500/40 to-cyan-400/40 flex items-center justify-center text-lg font-bold text-white border border-white/[0.15] mb-4">
                  {member.avatar}
                </div>
                <h3 className="text-sm font-semibold text-white/80 mb-1">{member.name}</h3>
                <p className="text-xs text-white/30">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
