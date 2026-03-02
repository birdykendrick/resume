import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageTransition from "../components/PageTransition";
import { projects } from "../data/profile";

const allTags = ["All", ...new Set(projects.flatMap((p) => p.tags))];

function ProjectCard({ project, index }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.92 }}
      transition={{ duration: 0.35, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 flex flex-col gap-4 border border-orange-100 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-50 transition-all duration-300 group"
    >
      {project.featured && (
        <span className="self-start text-xs font-semibold px-2.5 py-1 rounded-full bg-orange-50 text-orange-400 border border-orange-100">
          ✦ Featured
        </span>
      )}
      <div>
        <h3 className="text-lg font-bold mb-1 text-gray-900 group-hover:text-orange-500 transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed">{project.description}</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="text-xs px-2.5 py-1 rounded-md bg-orange-50 text-orange-400 font-medium border border-orange-100">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex gap-3 mt-auto pt-2 border-t border-gray-50">
  {project.link && (
    <a
      href={project.link}
      target="_blank"
      rel="noreferrer"
      className="text-sm font-semibold text-orange-400 hover:text-orange-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 rounded"
    >
      Live Demo →
    </a>
  )}

  {project.github && (
    <a
      href={project.github}
      target="_blank"
      rel="noreferrer"
      className="text-sm font-semibold text-gray-400 hover:text-gray-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 rounded"
    >
      GitHub
    </a>
  )}
</div>
    </motion.article>
  );
}

export default function Projects() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.tags.includes(active));

  return (
    <PageTransition>
      <main className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50/60 to-rose-50/40">
        <div className="max-w-5xl mx-auto px-6 pt-28 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <h1 className="text-4xl font-black mb-2 text-gray-900">Projects</h1>
            <p className="text-gray-500">Things I've built that I'm proud of.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-2 mb-10"
          >
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActive(tag)}
                className={`px-4 py-2 text-sm rounded-xl font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                  active === tag
                    ? "bg-gray-900 text-white shadow-md"
                    : "bg-white/70 border border-orange-100 text-gray-500 hover:text-gray-900 hover:border-orange-200"
                }`}
              >
                {tag}
              </button>
            ))}
          </motion.div>

          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <ProjectCard key={project.title} project={project} index={i} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </main>
    </PageTransition>
  );
}