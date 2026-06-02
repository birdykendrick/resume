import { Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-neutral-900 border-t border-teal-500/20 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-neutral-500">
          Designed &amp; Built by{' '}
          <span className="text-neutral-400 font-medium">Kendrick Khoo</span>{' '}
          · © 2025
        </p>

        <a
          href="https://www.linkedin.com/in/kendrick-khoo-586463252/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg text-neutral-500 hover:text-teal-400 hover:bg-teal-500/10 transition-all focus:outline-none focus:ring-2 focus:ring-teal-500/50"
          aria-label="LinkedIn"
        >
          <Linkedin size={18} />
        </a>
      </div>
    </footer>
  )
}
