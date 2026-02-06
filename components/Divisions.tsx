'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { divisions } from '@/lib/data'
import SectionHeading from './SectionHeading'
import { useState } from 'react'

export default function Divisions() {
  const [activeIndex, setActiveIndex] = useState(0)
  const totalCards = divisions.length

  const gradients = [
    'from-purple-500 via-blue-500 to-cyan-500',
    'from-pink-500 via-rose-500 to-orange-500',
    'from-emerald-500 via-teal-500 to-cyan-500',
    'from-amber-500 via-orange-500 to-red-500',
    'from-indigo-500 via-purple-500 to-pink-500',
    'from-cyan-500 via-blue-500 to-indigo-500',
    'from-rose-500 via-pink-500 to-purple-500',
  ]

  // Horizontal position for each card
  const getCardPosition = (index: number, isMobile: boolean) => {
    const diff = index - activeIndex
    const half = Math.floor(totalCards / 2)

    let normalizedDiff = diff
    if (diff > half) normalizedDiff = diff - totalCards
    if (diff < -half) normalizedDiff = diff + totalCards

    const offset = isMobile ? 200 : 340
    const hiddenOffset = isMobile ? 320 : 500

    switch (normalizedDiff) {
      case 0:
        return { x: 0, scale: 1, opacity: 1, zIndex: 3 }
      case 1:
        return { x: offset, scale: isMobile ? 0.85 : 0.88, opacity: 0.45, zIndex: 2 }
      case -1:
        return { x: -offset, scale: isMobile ? 0.85 : 0.88, opacity: 0.45, zIndex: 2 }
      default:
        return { x: normalizedDiff > 0 ? hiddenOffset : -hiddenOffset, scale: 0.8, opacity: 0, zIndex: 1 }
    }
  }

  const navigate = (dir: number) => {
    setActiveIndex((prev) => {
      if (dir === 1) return (prev + 1) % totalCards
      return prev === 0 ? totalCards - 1 : prev - 1
    })
  }

  return (
    <section className="py-16 px-4 relative glow-pink-left overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading 
          eyebrow="Division"
          title="Meet Our Division" 
          subtitle="From strategy to execution, these teams keep the lab running, growing, and innovating."
        />

        <div className="relative mt-12">
          {/* Navigation Buttons */}
          <button
            onClick={() => navigate(-1)}
            className="absolute left-1 md:left-4 top-1/2 -translate-y-1/2 z-30 w-9 h-9 md:w-10 md:h-10 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-gray-600 hover:text-primary hover:border-primary/30 hover:shadow-lg transition-all duration-200"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={() => navigate(1)}
            className="absolute right-1 md:right-4 top-1/2 -translate-y-1/2 z-30 w-9 h-9 md:w-10 md:h-10 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-gray-600 hover:text-primary hover:border-primary/30 hover:shadow-lg transition-all duration-200"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Desktop: Horizontal Stacked Cards */}
          <div className="hidden md:flex relative items-center justify-center overflow-hidden px-8" style={{ height: '420px' }}>
            {divisions.map((card, index) => {
              const position = getCardPosition(index, false)
              const isCenter = index === activeIndex
              const gradientClass = gradients[index % gradients.length]

              return (
                <motion.div
                  key={card.id}
                  className="absolute"
                  style={{ width: '320px' }}
                  initial={false}
                  animate={{
                    x: position.x,
                    scale: position.scale,
                    opacity: position.opacity,
                    zIndex: position.zIndex,
                  }}
                  transition={{ type: "spring", stiffness: 120, damping: 25, mass: 0.8 }}
                >
                  {/* Glow aura behind center card */}
                  {isCenter && (
                    <div className={`absolute -inset-3 bg-gradient-to-br ${gradientClass} rounded-3xl opacity-20 blur-2xl`} />
                  )}

                  <div className={`relative rounded-3xl p-6 border transition-all duration-300 min-h-[380px] flex flex-col overflow-hidden ${
                    isCenter
                      ? 'bg-white shadow-2xl border-primary/20 ring-1 ring-primary/10'
                      : 'bg-white/60 shadow-md border-white/80'
                  }`}>
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradientClass}`} />

                    <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${
                      isCenter ? 'text-primary' : 'text-gray-900'
                    }`}>{card.title}</h3>

                    <p className={`text-sm leading-relaxed mb-4 flex-grow ${
                      isCenter ? 'text-gray-700' : 'text-gray-500'
                    }`}>{card.description}</p>

                    <div className={`relative rounded-2xl overflow-hidden border h-36 transition-colors duration-300 mt-auto ${
                      isCenter ? 'bg-gray-50 border-primary/20' : 'bg-gray-50/50 border-gray-100'
                    }`}>
                      <Image src={card.image} alt={card.title} width={1200} height={800} className="w-full h-full object-contain p-4" />
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Mobile: Horizontal Stacked Cards (left/right pattern) */}
          <div className="md:hidden relative flex items-center justify-center overflow-hidden" style={{ height: '130px' }}>
            {divisions.map((card, index) => {
              const position = getCardPosition(index, true)
              const isCenter = index === activeIndex
              const gradientClass = gradients[index % gradients.length]

              return (
                <motion.div
                  key={card.id}
                  className="absolute"
                  style={{ width: '250px' }}
                  initial={false}
                  animate={{
                    x: position.x,
                    scale: position.scale,
                    opacity: position.opacity,
                    zIndex: position.zIndex,
                  }}
                  transition={{ type: "spring", stiffness: 120, damping: 25, mass: 0.8 }}
                >
                  {/* Glow aura behind center card */}
                  {isCenter && (
                    <div className={`absolute -inset-2 bg-gradient-to-br ${gradientClass} rounded-2xl opacity-25 blur-xl`} />
                  )}

                  <div className={`relative rounded-2xl p-3.5 border transition-all duration-300 overflow-hidden ${
                    isCenter
                      ? 'bg-white shadow-2xl border-primary/20 ring-1 ring-primary/10'
                      : 'bg-white/60 shadow-md border-white/80'
                  }`}>
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradientClass}`} />

                    <div className="flex items-center gap-3">
                      <div className={`relative rounded-xl overflow-hidden border w-14 h-14 flex-shrink-0 ${
                        isCenter ? 'bg-gray-50 border-primary/20' : 'bg-gray-50/50 border-gray-100'
                      }`}>
                        <Image src={card.image} alt={card.title} width={200} height={200} className="w-full h-full object-contain p-1.5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className={`text-sm font-bold mb-0.5 transition-colors duration-300 ${
                          isCenter ? 'text-primary' : 'text-gray-900'
                        }`}>{card.title}</h3>
                        <p className={`text-[11px] leading-relaxed line-clamp-2 ${
                          isCenter ? 'text-gray-700' : 'text-gray-500'
                        }`}>{card.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {divisions.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'w-8 bg-gradient-to-r from-primary to-accent-green'
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          <p className="text-center mt-4 text-sm text-gray-400">
            Click arrows or dots to navigate
          </p>
        </div>
      </div>
    </section>
  )
}
