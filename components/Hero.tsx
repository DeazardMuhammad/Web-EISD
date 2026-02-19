'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const stats = [
  { value: '30+', label: 'Members' },
  { value: '7', label: 'Divisions' },
  { value: '4', label: 'Focus Areas' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-stretch pt-16 md:pt-0">
      {/* ── Left: Text content ── */}
      <div className="w-full md:w-5/12 flex flex-col justify-center px-6 sm:px-10 lg:px-16 xl:px-20 py-16 md:py-24 relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 bg-primary/5 border border-primary/10 px-4 py-1.5 rounded-full mb-8 w-fit"
        >
          <div className="w-1.5 h-1.5 bg-accent-green rounded-full" />
          <span className="text-xs font-semibold text-primary tracking-wide uppercase">Laboratory Profile</span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-5xl font-bold leading-[1.15] mb-6"
        >
          <span className="text-gray-900">Enterprise Intelligence</span><br />
          <span className="text-gray-900">System </span>
          <span className="text-accent-green">Development</span><br />
          <span className="text-primary">Laboratory</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="text-gray-500 text-sm lg:text-base leading-relaxed mb-8 max-w-md"
        >
          Laboratorium riset di Telkom University yang berfokus pada IoT, Software Development, UI/UX, AI, dan Digital Innovation.
        </motion.p>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex items-center gap-6 mb-8"
        >
          {stats.map((stat, i) => (
            <div key={stat.label} className="flex items-center gap-3">
              {i > 0 && <div className="w-px h-8 bg-gray-200" />}
              <div className={i > 0 ? 'pl-3' : ''}>
                <p className="text-2xl lg:text-3xl font-bold text-primary leading-none">{stat.value}</p>
                <p className="text-[11px] text-gray-400 font-medium mt-0.5">{stat.label}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="flex flex-wrap gap-3"
        >
          <a
            href="/about"
            className="bg-primary hover:bg-primary-dark text-white px-7 py-3 rounded-full text-sm font-semibold transition-colors duration-200"
          >
            Discover More
          </a>
          <a
            href="/structure"
            className="bg-white border border-gray-200 hover:border-primary/30 hover:text-primary text-gray-600 px-7 py-3 rounded-full text-sm font-semibold transition-all duration-200"
          >
            Our Team
          </a>
        </motion.div>
      </div>

      {/* ── Right: Photo edge-to-edge ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="hidden md:block flex-1 relative"
      >
        <Image
          src="/images/fotostudio.JPG"
          alt="EISD Laboratory Team"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient fade on left edge */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#FAFBFF] to-transparent z-10" />

        {/* Label */}
        <div className="absolute bottom-6 right-6 z-20">
          <div className="bg-white/90 backdrop-blur-sm border border-white/60 rounded-xl px-4 py-2 shadow-sm">
            <p className="text-xs font-semibold text-gray-700">EISD Laboratory <span className="text-accent-green">V6</span></p>
          </div>
        </div>
      </motion.div>

      {/* ── Mobile: Photo as faint background ── */}
      <div className="md:hidden absolute inset-0 -z-10">
        <Image
          src="/images/fotostudio.JPG"
          alt="EISD Laboratory Team"
          fill
          className="object-cover opacity-[0.07]"
          priority
        />
      </div>
    </section>
  )
}
