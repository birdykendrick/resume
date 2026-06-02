'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, type Variants } from 'framer-motion'
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react'

interface Project {
  images: string[]
  badge?: string
  title: string
  description: string
  tags: string[]
  link?: string
}

const projects: Project[] = [
  {
    images: ['/images/stickkhoo.png'],
    title: 'StickKhoo — E-Commerce Sticker Shop',
    description:
      'Designed and developed a home-based e-commerce storefront for an independent sticker brand. Built a clean, illustrated UI with product collections, cart, and checkout flow.',
    tags: ['E-Commerce', 'Web Design', 'UI/UX'],
    link: 'https://stickkhoo.com',
  },
  {
    images: ['/images/rlycoffee.png'],
    title: 'RLY Coffee — Brand Website',
    description:
      "Contributed to the web design of RLY Coffee's brand website. Built modern UI layouts using React and frontend styling tools, with Node.js and Express.js for backend structure.",
    tags: ['React', 'Node.js', 'Express.js', 'Web Design'],
    link: 'https://rlycoffee.com',
  },
  {
    images: ['/images/asiagmp.png'],
    title: 'Asia GMP — Corporate Website',
    description:
      'Designed and developed a professional corporate website for a Singapore calibration laboratory, featuring services overview, contact forms, and a clean trusted aesthetic.',
    tags: ['Web Design', 'UI/UX', 'Business'],
    link: 'https://singlascalibration.com',
  },
  {
    images: ['/images/smarthome1.jpg', '/images/smarthome2.jpg', '/images/smarthome3.jpg'],
    badge: 'SP Final Year Project · Apr 2025',
    title: 'Smart Home — Embedded IoT & Automation System',
    description:
      'A full-stack smart home prototype built end-to-end — STM32 Nucleo firmware in Mbed C++ communicating via ESP8266 WiFi to an Express.js REST API syncing with Firebase Firestore, with a Flutter mobile app for real-time monitoring. Features: RFID + PIN smart lock, automated lighting, plant watering, ultrasonic intruder detection, and emergency alerts.',
    tags: ['STM32', 'C++', 'Flutter', 'Firebase', 'Express.js', 'IoT'],
  },
  {
    images: [
      '/images/ecobot1.jpeg',
      '/images/ecobot2.jpeg',
      '/images/ecobot3.jpeg',
      '/images/ecobotposter.jpeg',
    ],
    badge: 'SP Project · Sep 2024',
    title: 'EcoBot — Autonomous Waste Collection Robot',
    description:
      'An Arduino-based autonomous line-following robot that detects full rubbish bins via ultrasonic sensors and navigates to a dump site using IR line tracking. Features rain detection for auto return-to-base and real-time IoT status logging to ThingSpeak via WiFi. Supports SDG 11: Sustainable Cities and Communities.',
    tags: ['Arduino', 'C++', 'IoT', 'Embedded Systems', 'ThingSpeak'],
  },
]

function Carousel({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)

  const go = (dir: number) => {
    setDirection(dir)
    setIndex((i) => (i + dir + images.length) % images.length)
  }

  if (images.length === 1) {
    return (
      <div className="relative w-full h-48 overflow-hidden rounded-t-2xl bg-neutral-800">
        <Image src={images[0]} alt="" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
      </div>
    )
  }

  return (
    <div className="relative w-full h-48 overflow-hidden rounded-t-2xl bg-neutral-800 group">
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={index}
          custom={direction}
          initial={{ x: direction * 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -direction * 40, opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <Image
            src={images[index]}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </motion.div>
      </AnimatePresence>

      {/* Arrows */}
      <button
        onClick={(e) => { e.stopPropagation(); go(-1) }}
        className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-neutral-900/70 text-neutral-300 hover:text-teal-400 opacity-0 group-hover:opacity-100 transition-all focus:outline-none focus:ring-2 focus:ring-teal-500/50"
        aria-label="Previous image"
      >
        <ChevronLeft size={14} />
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); go(1) }}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-neutral-900/70 text-neutral-300 hover:text-teal-400 opacity-0 group-hover:opacity-100 transition-all focus:outline-none focus:ring-2 focus:ring-teal-500/50"
        aria-label="Next image"
      >
        <ChevronRight size={14} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={(e) => { e.stopPropagation(); setDirection(i > index ? 1 : -1); setIndex(i) }}
            className={`w-1.5 h-1.5 rounded-full transition-all focus:outline-none ${
              i === index ? 'bg-teal-400 w-3' : 'bg-neutral-500 hover:bg-neutral-300'
            }`}
            aria-label={`Image ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      className="flex flex-col rounded-2xl bg-neutral-800/60 border border-neutral-700/60 overflow-hidden hover:border-teal-500/40 transition-colors cursor-default"
      whileHover={{ y: -4, boxShadow: '0 0 32px rgba(20,184,166,0.2)' }}
      transition={{ duration: 0.25 }}
    >
      <Carousel images={project.images} />

      <div className="flex flex-col flex-1 p-5 gap-3">
        {project.badge && (
          <span className="text-xs font-semibold text-teal-400 bg-teal-500/10 border border-teal-500/20 rounded-full px-3 py-1 self-start">
            {project.badge}
          </span>
        )}

        <h3 className="text-base font-bold text-neutral-100 leading-snug">{project.title}</h3>

        <p className="text-sm text-neutral-400 leading-relaxed flex-1">{project.description}</p>

        <div className="flex flex-wrap gap-1.5 mt-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-full bg-neutral-700/60 text-neutral-400 border border-neutral-600/50"
            >
              {tag}
            </span>
          ))}
        </div>

        {project.link && (
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-teal-400 hover:text-teal-300 transition-colors focus:outline-none focus:underline self-start"
            whileHover={{ x: 2 }}
          >
            <ExternalLink size={14} />
            View Live Site
          </motion.a>
        )}
      </div>
    </motion.div>
  )
}

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function Projects() {
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
          Projects
        </motion.p>

        <motion.h2
          className="text-4xl md:text-5xl font-bold tracking-tight mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Things I&apos;ve built
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {projects.map((project) => (
            <motion.div key={project.title} variants={cardVariants}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
