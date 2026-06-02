'use client'

import { motion, type Variants } from 'framer-motion'
import { Mail, Phone, Linkedin } from 'lucide-react'

const contacts = [
  {
    icon: Mail,
    label: 'Email',
    value: 'khookendrick@gmail.com',
    href: 'mailto:khookendrick@gmail.com',
    display: 'khookendrick@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+65 9730 5388',
    href: 'tel:+6597305388',
    display: '+65 9730 5388',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'View Profile',
    href: 'https://www.linkedin.com/in/kendrick-khoo-586463252/',
    display: 'View Profile →',
    external: true,
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

export default function Contact() {
  return (
    <section className="py-24 md:py-32 bg-neutral-800/20 relative overflow-hidden">
      {/* Teal radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(20,184,166,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <motion.p
          className="text-teal-400 text-sm font-semibold uppercase tracking-widest mb-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Contact
        </motion.p>

        <motion.h2
          className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Let&apos;s Build Something
        </motion.h2>

        <motion.p
          className="text-neutral-400 leading-relaxed mb-12 max-w-xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Open to internships, freelance projects, and full-time opportunities after graduation.
          Let&apos;s create something great together.
        </motion.p>

        <motion.div
          className="grid sm:grid-cols-3 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          {contacts.map(({ icon: Icon, label, href, display, external }) => (
            <motion.a
              key={label}
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              variants={fadeUp}
              className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-neutral-800/60 border border-neutral-700/60 hover:border-teal-500/40 transition-all group focus:outline-none focus:ring-2 focus:ring-teal-500/50"
              whileHover={{ y: -4, boxShadow: '0 0 24px rgba(20,184,166,0.15)' }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 group-hover:bg-teal-500/20 transition-colors">
                <Icon size={18} />
              </div>
              <div>
                <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-1">
                  {label}
                </p>
                <p className="text-sm font-medium text-neutral-200 group-hover:text-teal-400 transition-colors">
                  {display}
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
