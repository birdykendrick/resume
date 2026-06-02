'use client'

import { motion, type Variants } from 'framer-motion'

const highlights = [
  {
    icon: '🎓',
    text: 'Diploma in Computer Engineering, Singapore Polytechnic (2024–2027)',
  },
  {
    icon: '💼',
    text: 'Currently interning at AsiaGMP as Software Engineer',
  },
  {
    icon: '🏆',
    text: 'Leadership Merit Award (Honours – Merit) 2020 & 2021',
  },
  {
    icon: '🌏',
    text: 'Based in Singapore, open to opportunities',
  },
]

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

export default function About() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <motion.p
          className="text-teal-400 text-sm font-semibold uppercase tracking-widest mb-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          About Me
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Bio */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight"
            >
              Crafting things{' '}
              <span className="text-teal-400">end-to-end</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-neutral-400 leading-relaxed max-w-[65ch] text-base md:text-lg"
            >
              Motivated Computer Engineering student at Singapore Polytechnic with a passion for
              building things end-to-end — from soldering circuits to shipping production
              websites. I love the intersection of hardware, software, and design.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="text-neutral-400 leading-relaxed max-w-[65ch] text-base md:text-lg mt-4"
            >
              Whether it&apos;s an IoT pipeline feeding real-time sensor data to a cloud dashboard, a
              Flutter mobile app, or a pixel-perfect React UI — I care deeply about the craft at
              every layer of the stack.
            </motion.p>
          </motion.div>

          {/* Right: Highlights */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="flex flex-col gap-4"
          >
            {highlights.map(({ icon, text }) => (
              <motion.div
                key={text}
                variants={fadeUp}
                className="flex items-start gap-4 p-4 rounded-2xl bg-neutral-800/50 border border-neutral-700/50 hover:border-teal-500/30 transition-colors"
              >
                <span className="text-xl mt-0.5 shrink-0">{icon}</span>
                <p className="text-neutral-300 text-sm leading-relaxed">{text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
