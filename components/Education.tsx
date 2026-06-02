'use client'

import { motion, type Variants } from 'framer-motion'

const education = [
  {
    institution: 'Singapore Polytechnic',
    degree: 'Diploma in Computer Engineering',
    period: '2024 – 2027',
    modules: [
      'Full Stack Development',
      'Mobile App Development',
      'DevOps for AIoT',
      'Cloud Foundations (AWS)',
      'Microcontroller Applications',
      'Network Fundamentals',
    ],
  },
  {
    institution: 'ITE Central',
    degree: 'Higher Nitec in Electronic Engineering',
    period: '2022 – 2024',
    modules: [],
  },
  {
    institution: 'Anglo-Chinese School (Barker Road)',
    degree: 'PSLE & GCE N Level',
    period: '2012 – 2021',
    modules: [],
  },
]

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

export default function Education() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.p
          className="text-teal-400 text-sm font-semibold uppercase tracking-widest mb-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Education
        </motion.p>

        <motion.h2
          className="text-4xl md:text-5xl font-bold tracking-tight mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Academic background
        </motion.h2>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          {education.map((edu) => (
            <motion.div
              key={edu.institution}
              variants={fadeUp}
              className="p-6 rounded-2xl bg-neutral-800/50 border border-neutral-700/50 hover:border-teal-500/30 transition-colors flex flex-col gap-3"
            >
              <div>
                <p className="text-xs font-semibold text-teal-400 mb-1">{edu.period}</p>
                <h3 className="font-bold text-neutral-100 text-base leading-snug">{edu.institution}</h3>
                <p className="text-neutral-400 text-sm mt-1">{edu.degree}</p>
              </div>

              {edu.modules.length > 0 && (
                <div>
                  <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">
                    Relevant Modules
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.modules.map((mod) => (
                      <span
                        key={mod}
                        className="text-xs px-2.5 py-1 rounded-full bg-neutral-700/60 text-neutral-400 border border-neutral-600/50"
                      >
                        {mod}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
