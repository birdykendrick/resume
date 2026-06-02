'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: -200, y: -200 })
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    setIsDesktop(window.innerWidth > 768)

    const handleResize = () => setIsDesktop(window.innerWidth > 768)
    const handleMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMove)
    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMove)
    }
  }, [])

  if (!isDesktop) return null

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 mix-blend-screen"
      animate={{ x: position.x - 200, y: position.y - 200 }}
      transition={{ duration: 0 }}
      style={{
        width: 400,
        height: 400,
        background:
          'radial-gradient(circle, rgba(20,184,166,0.12) 0%, rgba(20,184,166,0.04) 40%, transparent 70%)',
        borderRadius: '50%',
      }}
    />
  )
}
