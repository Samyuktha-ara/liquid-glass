import { motion } from "framer-motion";
import GlassCard from "../components/GlassCard";

const contactInfo = [
  {
    label: "Email",
    value: "hello@liquidglass.academy",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "+91 98765 43210",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
  },
  {
    label: "Location",
    value: "Bengaluru, India",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <div className="relative z-10 pt-28 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Get in Touch
          </h1>
          <p className="text-sm text-white/35 max-w-md mx-auto">
            Have questions about our courses or want to discuss enterprise solutions? We&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-5"
          >
            {contactInfo.map((info) => (
              <div
                key={info.label}
                className="flex items-start gap-4 p-4 bg-white/[0.04] backdrop-blur-2xl border border-white/[0.08] rounded-2xl hover:bg-white/[0.06] transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/[0.10] flex items-center justify-center text-violet-400/70 shrink-0">
                  {info.icon}
                </div>
                <div>
                  <p className="text-xs text-white/30 mb-0.5">{info.label}</p>
                  <p className="text-sm text-white/70 font-medium">{info.value}</p>
                </div>
              </div>
            ))}

            {/* Office hours */}
            <div className="p-4 bg-white/[0.03] border border-white/[0.06] rounded-2xl">
              <p className="text-xs text-white/25 uppercase tracking-wider font-medium mb-2">Office Hours</p>
              <p className="text-sm text-white/50">Monday — Friday</p>
              <p className="text-sm text-white/50">9:00 AM — 6:00 PM IST</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <GlassCard variant="strong" hover={false} animate={false} className="p-8">
              <h2 className="text-lg font-semibold text-white/80 mb-6">Send us a message</h2>

              <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-white/30 mb-1.5 font-medium">First Name</label>
                    <input
                      type="text"
                      placeholder="John"
                      className="w-full px-4 py-2.5 bg-white/[0.04] border border-white/[0.08] rounded-xl text-sm text-white/80 placeholder:text-white/15 focus:outline-none focus:border-white/[0.20] focus:bg-white/[0.06] transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-white/30 mb-1.5 font-medium">Last Name</label>
                    <input
                      type="text"
                      placeholder="Doe"
                      className="w-full px-4 py-2.5 bg-white/[0.04] border border-white/[0.08] rounded-xl text-sm text-white/80 placeholder:text-white/15 focus:outline-none focus:border-white/[0.20] focus:bg-white/[0.06] transition-all duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-white/30 mb-1.5 font-medium">Email</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-2.5 bg-white/[0.04] border border-white/[0.08] rounded-xl text-sm text-white/80 placeholder:text-white/15 focus:outline-none focus:border-white/[0.20] focus:bg-white/[0.06] transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-xs text-white/30 mb-1.5 font-medium">Subject</label>
                  <select className="w-full px-4 py-2.5 bg-white/[0.04] border border-white/[0.08] rounded-xl text-sm text-white/50 focus:outline-none focus:border-white/[0.20] focus:bg-white/[0.06] transition-all duration-300 appearance-none">
                    <option value="">Select a topic</option>
                    <option value="courses">Course Inquiry</option>
                    <option value="enterprise">Enterprise Solutions</option>
                    <option value="partnership">Partnership</option>
                    <option value="support">Technical Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs text-white/30 mb-1.5 font-medium">Message</label>
                  <textarea
                    rows={5}
                    placeholder="Tell us how we can help..."
                    className="w-full px-4 py-2.5 bg-white/[0.04] border border-white/[0.08] rounded-xl text-sm text-white/80 placeholder:text-white/15 focus:outline-none focus:border-white/[0.20] focus:bg-white/[0.06] transition-all duration-300 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 text-sm font-semibold bg-gradient-to-r from-violet-600 to-violet-500 text-white rounded-xl hover:shadow-lg hover:shadow-violet-500/25 transition-all duration-300 active:scale-[0.98]"
                >
                  Send Message
                </button>

                <p className="text-[11px] text-white/20 text-center">
                  We typically respond within 24 hours on business days.
                </p>
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
