import { Link } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/resume", label: "Resume" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

const socialLinks = [
  { href: "mailto:kendrick@example.com", label: "kendrick@example.com", icon: "✉️" },
  { href: "https://github.com/kendrick", label: "GitHub", icon: "🐙" },
  { href: "https://linkedin.com/in/kendrick", label: "LinkedIn", icon: "💼" },
  { href: "https://twitter.com/kendrick", label: "Twitter / X", icon: "🐦" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#1a1412] border-t border-white/10">
      {/* Subtle warm glow at top edge */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-orange-400/50 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link to="/" className="flex flex-col leading-tight group w-fit">
              <span className="text-base font-bold text-white group-hover:text-orange-400 transition-colors duration-200">
                Kendrick Khoo
              </span>
              <span className="text-xs text-gray-400 font-medium mt-0.5">
                Student of Singapore Polytechnic
              </span>
            </Link>

            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Building clean, thoughtful digital experiences. Open to internships and collaborations.
            </p>

            <span className="inline-flex items-center gap-2 text-xs text-green-400 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Available for opportunities
            </span>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold text-orange-400/80 uppercase tracking-widest mb-1">
              Navigation
            </p>
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="text-sm text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 w-fit flex items-center gap-1.5 group"
              >
                <span className="w-0 group-hover:w-2 h-px bg-orange-400 transition-all duration-200 rounded" />
                {label}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold text-orange-400/80 uppercase tracking-widest mb-1">
              Get in Touch
            </p>

            {socialLinks.map(({ href, label, icon }) => {
              const isMail = href.startsWith("mailto:");

              return (
                <a
                  key={label}
                  href={href}
                  target={isMail ? undefined : "_blank"}
                  rel={isMail ? undefined : "noopener noreferrer"}
                  className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-white transition-all duration-200 group w-fit"
                >
                  <span className="text-base grayscale group-hover:grayscale-0 transition-all duration-200">
                    {icon}
                  </span>
                  <span className="group-hover:translate-x-0.5 transition-transform duration-200">
                    {label}
                  </span>
                </a>
              );
            })}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            © {year} <span className="text-gray-400 font-medium">Kendrick Khoo</span>. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">Designed & built with ✦ in Singapore</p>
        </div>
      </div>
    </footer>
  );
}