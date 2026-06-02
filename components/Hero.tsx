'use client'

import { useEffect, useState } from 'react'
import { motion, type Variants } from 'framer-motion'
import { Linkedin, ArrowDown } from 'lucide-react'

const roles = ['Software Engineer', 'UI/UX Designer', 'IoT Builder', 'Full Stack Developer']

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

function TypingText() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return
    const current = roles[roleIndex]

    if (!isDeleting && displayed === current) {
      const t = setTimeout(() => setIsPaused(true), 1800)
      return () => clearTimeout(t)
    }

    if (isPaused) {
      const t = setTimeout(() => { setIsPaused(false); setIsDeleting(true) }, 0)
      return () => clearTimeout(t)
    }

    const speed = isDeleting ? 40 : 70
    const t = setTimeout(() => {
      if (isDeleting) {
        setDisplayed((d) => d.slice(0, -1))
        if (displayed.length === 1) {
          setIsDeleting(false)
          setRoleIndex((i) => (i + 1) % roles.length)
        }
      } else {
        setDisplayed(current.slice(0, displayed.length + 1))
      }
    }, speed)

    return () => clearTimeout(t)
  }, [displayed, isDeleting, isPaused, roleIndex])

  useEffect(() => {
    if (isPaused) {
      const t = setTimeout(() => { setIsPaused(false); setIsDeleting(true) }, 1800)
      return () => clearTimeout(t)
    }
  }, [isPaused])

  return (
    <span className="text-teal-400">
      {displayed}
      <span className="animate-blink ml-0.5 text-teal-300">|</span>
    </span>
  )
}

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      {/* Animated dot grid */}
      <div className="absolute inset-0 dot-grid-bg opacity-60 pointer-events-none" />

      {/* Radial fade overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 50%, transparent 40%, rgba(23,23,23,0.95) 100%)',
        }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center text-center gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={itemVariants}>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-800 border border-neutral-700 text-sm text-neutral-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
            </span>
            Currently Interning @ AsiaGMP
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold tracking-tight leading-none"
        >
          Kendrick{' '}
          <span className="text-teal-400">Khoo</span>
        </motion.h1>

        {/* Typing subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-2xl md:text-3xl font-medium text-neutral-300 h-10"
        >
          <TypingText />
        </motion.p>

        {/* Bio */}
        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg text-neutral-400 max-w-xl leading-relaxed"
        >
          Computer Engineering student at Singapore Polytechnic, building full-stack systems —
          from embedded IoT firmware to mobile apps and polished web interfaces.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center mt-2">
          <motion.button
            onClick={scrollToProjects}
            className="px-6 py-3 bg-teal-500 hover:bg-teal-400 text-neutral-900 font-semibold rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-neutral-900"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View My Work
          </motion.button>
          <motion.a
            href="https://www.linkedin.com/in/kendrick-khoo-586463252/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-teal-500/50 hover:border-teal-400 text-teal-400 hover:text-teal-300 font-semibold rounded-xl flex items-center gap-2 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-neutral-900"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Linkedin size={18} />
            LinkedIn
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-neutral-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 2, duration: 2, repeat: Infinity, repeatType: 'loop' }}
      >
        <ArrowDown size={20} />
      </motion.div>
    </div>
  )
}
