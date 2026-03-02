import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import { experience, skills, education } from "../data/profile";

const stagger = { animate: { transition: { staggerChildren: 0.1 } } };
const item = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

function SectionTitle({ children }) {
  return (
    <motion.h2 variants={item} className="text-2xl font-bold mb-8 flex items-center gap-3">
      <span className="text-gradient">{children}</span>
      <span className="flex-1 h-px bg-gradient-to-r from-orange-200 to-transparent" />
    </motion.h2>
  );
}

function Tag({ label }) {
  return (
    <span className="px-2.5 py-1 text-xs rounded-md bg-orange-50 text-orange-500 font-medium border border-orange-100">
      {label}
    </span>
  );
}

export default function Resume() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50/60 to-rose-50/40 max-w-full">
        <div className="max-w-4xl mx-auto px-6 pt-28 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h1 className="text-4xl font-black mb-2 text-gray-900">Resume</h1>
            <p className="text-gray-500">My experience, skills, and education.</p>
          </motion.div>

          {/* Experience */}
          <motion.section variants={stagger} initial="initial" animate="animate" className="mb-16">
            <SectionTitle>Experience</SectionTitle>
            <div className="relative">
              <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-orange-300 via-orange-100 to-transparent ml-[7px]" />
              <div className="space-y-8 pl-8">
                {experience.map((exp, i) => (
                  <motion.div key={i} variants={item} className="relative group">
                    <div className="absolute -left-8 top-1.5 w-4 h-4 rounded-full border-2 border-orange-300 bg-amber-50 group-hover:bg-orange-300 transition-colors duration-300" />
                    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-5 border border-orange-100 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-50 transition-all duration-300">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <div>
                          <h3 className="font-bold text-lg text-gray-900">{exp.role}</h3>
                          <p className="text-orange-400 text-sm font-medium">{exp.company}</p>
                        </div>
                        <span className="text-xs text-gray-400 font-mono bg-orange-50 px-2.5 py-1 rounded-lg border border-orange-100">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed mb-3">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((t) => <Tag key={t} label={t} />)}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Skills */}
          <motion.section variants={stagger} initial="initial" animate="animate" className="mb-16">
            <SectionTitle>Skills</SectionTitle>
            <div className="grid sm:grid-cols-2 gap-4">
              {skills.map((group, i) => (
                <motion.div key={i} variants={item} className="bg-white/70 backdrop-blur-sm rounded-2xl p-5 border border-orange-100 hover:border-orange-200 hover:shadow-md hover:shadow-orange-50 transition-all duration-300">
                  <h3 className="font-semibold text-xs text-gray-400 uppercase tracking-wider mb-3">
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill) => <Tag key={skill} label={skill} />)}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Education */}
          <motion.section variants={stagger} initial="initial" animate="animate">
            <SectionTitle>Education</SectionTitle>
            {education.map((edu, i) => (
              <motion.div key={i} variants={item} className="bg-white/70 backdrop-blur-sm rounded-2xl p-5 border border-orange-100 hover:border-orange-200 hover:shadow-md hover:shadow-orange-50 transition-all duration-300">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">{edu.degree}</h3>
                    <p className="text-orange-400 text-sm font-medium">{edu.school}</p>
                  </div>
                  <span className="text-xs text-gray-400 font-mono bg-orange-50 px-2.5 py-1 rounded-lg border border-orange-100">
                    {edu.period}
                  </span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mt-2">{edu.description}</p>
              </motion.div>
            ))}
          </motion.section>
        </div>
      </main>
    </PageTransition>
  );
}