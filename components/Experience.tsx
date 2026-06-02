'use client'

import { motion, type Variants } from 'framer-motion'

interface ExperienceEntry {
  company: string
  role: string
  period: string
  bullets: string[]
}

const experiences: ExperienceEntry[] = [
  {
    company: 'AsiaGMP Pte. Ltd',
    role: 'Software Engineering Intern',
    period: 'Mar 2025 – Aug 2025',
    bullets: [
      'Building an end-to-end IoT pipeline from temperature & humidity sensors to cloud via ThingsBoard and PostgreSQL',
      'Frontend dashboard development and deployment on DigitalOcean',
    ],
  },
  {
    company: 'RLyCoffee',
    role: 'Web Designer & Developer',
    period: 'Mar 2025 – Apr 2025',
    bullets: [
      'Designed and developed clean modern UI layouts using React',
      'Integrated backend structure with Node.js and Express.js',
    ],
  },
  {
    company: 'Yong Yue Biotechnology Co., Ltd (Taiwan)',
    role: 'Marketing & Photography Intern',
    period: 'Sep 2023 – Oct 2023',
    bullets: [
      'Applied professional product photography and editing techniques',
      'Designed marketing posters and managed online store content',
    ],
  },
  {
    company: 'Mac.infinity Pte. Ltd',
    role: 'Hardware Technician',
    period: 'Apr 2023 – Sep 2023',
    bullets: [
      'Conducted MacBook motherboard repairs via soldering',
      'Proficient in full disassembly and diagnosis of Apple hardware',
    ],
  },
]

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function Experience() {
  return (
    <section className="py-24 md:py-32 bg-neutral-800/20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.p
          className="text-teal-400 text-sm font-semibold uppercase tracking-widest mb-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Experience
        </motion.p>

        <motion.h2
          className="text-4xl md:text-5xl font-bold tracking-tight mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Where I&apos;ve worked
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-teal-500/60 via-teal-500/20 to-transparent md:left-6" />

          <div className="flex flex-col gap-12">
            {experiences.map((entry, i) => (
              <motion.div
                key={entry.company}
                className="relative pl-12 md:pl-16"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {/* Dot */}
                <motion.div
                  className="absolute left-0 top-1.5 w-8 h-8 md:left-2 rounded-full border-2 border-teal-500 bg-neutral-900 flex items-center justify-center"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.1 + 0.1, type: 'spring', stiffness: 300 }}
                >
                  <div className="w-2 h-2 rounded-full bg-teal-400" />
                </motion.div>

                <div className="p-5 rounded-2xl bg-neutral-800/50 border border-neutral-700/50 hover:border-teal-500/30 transition-colors">
                  <div className="flex flex-wrap gap-2 items-start justify-between mb-3">
                    <div>
                      <h3 className="font-bold text-neutral-100 text-base">{entry.company}</h3>
                      <p className="text-teal-400 text-sm font-medium mt-0.5">{entry.role}</p>
                    </div>
                    <span className="text-xs text-neutral-500 font-medium bg-neutral-700/50 px-3 py-1 rounded-full shrink-0">
                      {entry.period}
                    </span>
                  </div>

                  <ul className="flex flex-col gap-2">
                    {entry.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2 text-sm text-neutral-400 leading-relaxed">
                        <span className="text-teal-500 mt-1.5 shrink-0">▸</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
