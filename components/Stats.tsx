'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: 3, suffix: '+', label: 'Live Websites Built' },
  { value: 2, suffix: '', label: 'IoT Systems' },
  { value: 10, suffix: '+', label: 'Technologies' },
  { value: 2, suffix: '', label: 'Years Building' },
]

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 1500
    const startTime = performance.now()

    const tick = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      start = Math.round(eased * target)
      setCount(start)
      if (progress < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [inView, target])

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold text-teal-400 tabular-nums">
      {count}{suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <div className="bg-neutral-800/40 border-y border-neutral-700/50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {stats.map(({ value, suffix, label }) => (
            <div key={label} className="flex flex-col items-center gap-2 text-center">
              <Counter target={value} suffix={suffix} />
              <span className="text-sm text-neutral-400 font-medium">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
