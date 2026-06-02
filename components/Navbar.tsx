'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Linkedin } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

const sectionIds = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'contact']

export default function Navbar() {
  const [visible, setVisible] = useState(true)
  const [activeSection, setActiveSection] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      setVisible(currentY < lastScrollY.current || currentY < 80)
      lastScrollY.current = currentY
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { rootMargin: '-40% 0px -55% 0px' }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-40"
      animate={{ y: visible ? 0 : -80 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <nav className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between backdrop-blur-md bg-neutral-900/80 border-b border-teal-500/10 rounded-b-xl">
        {/* Monogram */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNavClick('#home') }}
          className="text-xl font-bold text-teal-400 tracking-tight hover:text-teal-300 transition-colors"
        >
          KK
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => {
            const id = href.replace('#', '')
            const isActive = activeSection === id
            return (
              <button
                key={href}
                onClick={() => handleNavClick(href)}
                className={`text-sm font-medium transition-colors relative ${
                  isActive ? 'text-teal-400' : 'text-neutral-400 hover:text-neutral-100'
                }`}
              >
                {label}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-teal-400"
                  />
                )}
              </button>
            )
          })}
          <a
            href="https://www.linkedin.com/in/kendrick-khoo-586463252/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-neutral-400 hover:text-teal-400 hover:bg-teal-500/10 transition-all focus:outline-none focus:ring-2 focus:ring-teal-500/50"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 text-neutral-400 hover:text-teal-400 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500/50 rounded"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-current transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-current transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-current transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-neutral-900/95 backdrop-blur-md border-b border-teal-500/10"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map(({ label, href }) => (
                <button
                  key={href}
                  onClick={() => handleNavClick(href)}
                  className="text-left text-sm font-medium text-neutral-300 hover:text-teal-400 transition-colors py-1"
                >
                  {label}
                </button>
              ))}
              <a
                href="https://www.linkedin.com/in/kendrick-khoo-586463252/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-neutral-400 hover:text-teal-400 transition-colors py-1"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
