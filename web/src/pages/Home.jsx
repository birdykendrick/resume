import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import { profile } from "../data/profile";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

function FloatingBlob({ className }) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl opacity-40 pointer-events-none ${className}`}
      animate={{ scale: [1, 1.12, 1], x: [0, 18, 0], y: [0, -18, 0] }}
      transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

export default function Home() {
  return (
    <PageTransition>
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden pt-16 bg-gradient-to-br from-orange-100 via-rose-50 to-amber-100">
        <FloatingBlob className="w-[520px] h-[520px] bg-orange-200 -top-40 -left-40" />
        <FloatingBlob className="w-[420px] h-[420px] bg-rose-200 -bottom-24 -right-24" />
        <FloatingBlob className="w-[320px] h-[320px] bg-yellow-100 top-1/3 left-1/2 -translate-x-1/2" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.div {...fadeUp(0)}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-white/80 border border-orange-200 text-orange-500 mb-8 tracking-wide shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Available for opportunities
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.1)}
            className="text-6xl sm:text-7xl md:text-8xl font-black leading-none mb-6 text-gray-900"
          >
            Hi, I'm{" "}
            <span className="text-gradient">{profile.name}.</span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.2)}
            className="text-lg text-gray-500 font-medium mb-4"
          >
            {profile.title}
          </motion.p>

          <motion.p
            {...fadeUp(0.3)}
            className="text-gray-500 text-base leading-relaxed max-w-2xl mx-auto mb-10"
          >
            {profile.about}
          </motion.p>

          <motion.div
            {...fadeUp(0.4)}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              to="/resume"
              className="px-7 py-3 rounded-xl font-semibold text-sm bg-gray-900 text-white hover:bg-gray-700 transition-all duration-200 shadow-lg shadow-gray-300 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2"
            >
              View Resume
            </Link>
            <Link
              to="/projects"
              className="px-7 py-3 rounded-xl font-semibold text-sm bg-white border border-orange-200 text-gray-700 hover:border-orange-300 hover:text-orange-500 transition-all duration-200 hover:scale-105 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              See Projects
            </Link>
            <Link
              to="/contact"
              className="px-7 py-3 rounded-xl font-semibold text-sm text-orange-400 hover:text-orange-600 transition-colors duration-200 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
            >
              Get in touch →
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-xs text-gray-400 tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-gray-300 to-transparent" />
        </motion.div>
      </section>
    </PageTransition>
  );
}