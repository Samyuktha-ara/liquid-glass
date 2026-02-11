import { Link } from "react-router-dom";

const footerLinks = {
  Platform: [
    { label: "Browse Courses", path: "/courses" },
    { label: "Become Instructor", path: "#" },
    { label: "Pricing", path: "#" },
    { label: "Enterprise", path: "#" },
  ],
  Company: [
    { label: "About Us", path: "/about" },
    { label: "Careers", path: "#" },
    { label: "Blog", path: "#" },
    { label: "Contact", path: "/contact" },
  ],
  Support: [
    { label: "Help Center", path: "#" },
    { label: "Terms of Service", path: "#" },
    { label: "Privacy Policy", path: "#" },
    { label: "Refund Policy", path: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative mt-32">
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-8">
        <div className="glass-subtle p-8 sm:p-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div>
              <Link to="/" className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-cyan-400 flex items-center justify-center text-white font-bold text-sm">
                  LG
                </div>
                <span className="text-lg font-semibold tracking-tight text-white/90">
                  Liquid<span className="text-violet-400">Glass</span>
                </span>
              </Link>
              <p className="text-sm text-white/40 leading-relaxed mb-6">
                Premium learning experiences crafted for the next generation of tech professionals.
              </p>
              <div className="flex gap-3">
                {["X", "In", "YT", "GH"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-9 h-9 rounded-lg bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-xs text-white/40 hover:text-white/80 hover:bg-white/[0.12] transition-all duration-300"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-sm font-semibold text-white/70 mb-4 tracking-wide uppercase">
                  {title}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.path}
                        className="text-sm text-white/35 hover:text-white/70 transition-colors duration-300"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom */}
          <div className="border-t border-white/[0.06] mt-10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-white/25">
              &copy; {new Date().getFullYear()} LiquidGlass Academy. All rights reserved.
            </p>
            <p className="text-xs text-white/25">
              Crafted with precision for the future of education.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
