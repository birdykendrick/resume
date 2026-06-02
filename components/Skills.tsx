'use client'

import { motion, type Variants } from 'framer-motion'
import Image from 'next/image'

interface SkillGroup {
  label: string
  icons?: string
  pills?: string[]
}

const skillGroups: SkillGroup[] = [
  {
    label: 'Languages',
    icons: 'python,cpp,js,ts,html,css',
  },
  {
    label: 'Frontend',
    icons: 'react,nextjs,tailwind,flutter,figma',
  },
  {
    label: 'Backend',
    icons: 'nodejs,express,firebase',
  },
  {
    label: 'Database',
    icons: 'mysql,postgresql',
  },
  {
    label: 'Hardware / IoT',
    icons: 'arduino',
    pills: ['STM32', 'Mbed OS'],
  },
  {
    label: 'DevOps / Tools',
    icons: 'git,aws,docker,linux,kubernetes,postman,vscode',
    pills: ['DigitalOcean', 'ThingsBoard'],
  },
]

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const iconItem: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
}

export default function Skills() {
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
          Skills
        </motion.p>

        <motion.h2
          className="text-4xl md:text-5xl font-bold tracking-tight mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Tech I work with
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group) => (
            <motion.div
              key={group.label}
              className="p-6 rounded-2xl bg-neutral-800/50 border border-neutral-700/50 hover:border-teal-500/30 transition-colors"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.p
                variants={fadeUp}
                className="text-xs font-semibold text-neutral-500 uppercase tracking-widest mb-4"
              >
                {group.label}
              </motion.p>

              <div className="flex flex-wrap gap-3 items-center">
                {group.icons && (
                  <motion.div variants={iconItem}>
                    <Image
                      src={`https://skillicons.dev/icons?i=${group.icons}&theme=dark`}
                      alt={`${group.label} icons`}
                      width={group.icons.split(',').length * 50}
                      height={50}
                      className="h-10 w-auto"
                      unoptimized
                    />
                  </motion.div>
                )}
                {group.pills?.map((pill) => (
                  <motion.span
                    key={pill}
                    variants={iconItem}
                    className="px-3 py-1.5 text-xs font-semibold rounded-full bg-teal-500/10 text-teal-400 border border-teal-500/30 hover:bg-teal-500/20 transition-colors"
                  >
                    {pill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
