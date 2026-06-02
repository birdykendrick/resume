import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import CursorGlow from '@/components/CursorGlow'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Kendrick Khoo — Software Engineer & UI/UX Designer',
  description:
    'Computer Engineering student at Singapore Polytechnic. Building full-stack systems — from embedded IoT firmware to mobile apps and polished web interfaces.',
  keywords: [
    'Kendrick Khoo',
    'Software Engineer',
    'UI/UX Designer',
    'Singapore',
    'Portfolio',
    'Next.js',
    'React',
    'IoT',
    'Full Stack Developer',
    'Singapore Polytechnic',
  ],
  authors: [{ name: 'Kendrick Khoo' }],
  creator: 'Kendrick Khoo',
  openGraph: {
    type: 'website',
    locale: 'en_SG',
    url: 'https://kendrickkhoo.com',
    title: 'Kendrick Khoo — Software Engineer & UI/UX Designer',
    description:
      'Computer Engineering student at Singapore Polytechnic. Building full-stack systems — from embedded IoT firmware to mobile apps and polished web interfaces.',
    siteName: 'Kendrick Khoo Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Kendrick Khoo — Software Engineer & UI/UX Designer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kendrick Khoo — Software Engineer & UI/UX Designer',
    description:
      'Computer Engineering student at Singapore Polytechnic. Building full-stack systems from IoT to web.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="bg-neutral-900 text-neutral-100 antialiased overflow-x-hidden">
        <CursorGlow />
        {children}
      </body>
    </html>
  )
}
