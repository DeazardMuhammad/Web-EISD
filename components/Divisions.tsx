'use client'

import Image from 'next/image'
import { motion, AnimatePresence, type PanInfo } from 'framer-motion'
import { divisions } from '@/lib/data'
import SectionHeading from './SectionHeading'
import { useState, useCallback } from 'react'

export default function Divisions() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(0)
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

  // Desktop: horizontal position for each card
  const getDesktopPosition = (index: number) => {
    const diff = index - activeIndex
    const half = Math.floor(totalCards / 2)

    let normalizedDiff = diff
    if (diff > half) normalizedDiff = diff - totalCards
    if (diff < -half) normalizedDiff = diff + totalCards

    switch (normalizedDiff) {
      case 0:
        return { x: 0, scale: 1, opacity: 1, zIndex: 3 }
      case 1:
        return { x: 340, scale: 0.88, opacity: 0.45, zIndex: 2 }
      case -1:
        return { x: -340, scale: 0.88, opacity: 0.45, zIndex: 2 }
      default:
        return { x: normalizedDiff > 0 ? 500 : -500, scale: 0.8, opacity: 0, zIndex: 1 }
    }
  }

  const navigate = useCallback((dir: number) => {
    setDirection(dir)
    setActiveIndex((prev) => {
      if (dir === 1) return (prev + 1) % totalCards
      return prev === 0 ? totalCards - 1 : prev - 1
    })
  }, [totalCards])

  // Swipe handler for mobile
  const handleDragEnd = useCallback((_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const swipeThreshold = 50
    if (info.offset.x < -swipeThreshold) {
      navigate(1) // swipe left -> next
    } else if (info.offset.x > swipeThreshold) {
      navigate(-1) // swipe right -> prev
    }
  }, [navigate])

  // Mobile slide variants
  const mobileVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.92,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.92,
    }),
  }

  const activeCard = divisions[activeIndex]
  const activeGradient = gradients[activeIndex % gradients.length]

  return (
    <section className="py-16 px-4 relative">
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
            className="absolute -left-1 md:left-4 top-1/2 -translate-y-1/2 z-30 w-9 h-9 md:w-10 md:h-10 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-gray-600 hover:text-primary hover:border-primary/30 hover:shadow-lg transition-all duration-200"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={() => navigate(1)}
            className="absolute -right-1 md:right-4 top-1/2 -translate-y-1/2 z-30 w-9 h-9 md:w-10 md:h-10 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-gray-600 hover:text-primary hover:border-primary/30 hover:shadow-lg transition-all duration-200"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* ===== Desktop: Horizontal Stacked Cards (unchanged) ===== */}
          <div className="hidden md:flex relative items-center justify-center px-8" style={{ height: '420px' }}>
            {divisions.map((card, index) => {
              const position = getDesktopPosition(index)
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

          {/* ===== Mobile: Single full-width card with swipe + slide ===== */}
          <div className="md:hidden relative mx-10">
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={mobileVariants}
                initial="enter"
                animate="center"
                exit="exit"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.3}
                onDragEnd={handleDragEnd}
                transition={{
                  type: 'tween',
                  duration: 0.3,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="w-full cursor-grab active:cursor-grabbing"
              >
                {/* Glow aura */}
                <div className={`absolute -inset-3 bg-gradient-to-br ${activeGradient} rounded-2xl opacity-15 blur-xl pointer-events-none`} />

                {/* Card */}
                <div className="relative bg-white rounded-2xl shadow-xl border border-primary/15 ring-1 ring-primary/5 overflow-hidden">
                  {/* Gradient top */}
                  <div className={`h-1.5 bg-gradient-to-r ${activeGradient}`} />

                  <div className="p-5">
                    {/* Title */}
                    <h3 className="text-lg font-bold text-primary mb-2">
                      {activeCard.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      {activeCard.description}
                    </p>

                    {/* Image - auto height, no cut off */}
                    <div className="relative rounded-xl overflow-hidden border border-primary/10 bg-gray-50">
                      <Image
                        src={activeCard.image}
                        alt={activeCard.title}
                        width={800}
                        height={500}
                        className="w-full h-auto object-contain p-4"
                      />
                    </div>
                  </div>

                  {/* Gradient bottom */}
                  <div className={`h-1 bg-gradient-to-r ${activeGradient}`} />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {divisions.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > activeIndex ? 1 : -1)
                  setActiveIndex(index)
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'w-8 bg-gradient-to-r from-primary to-accent-green'
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          <p className="text-center mt-4 text-sm text-gray-400">
            <span className="hidden md:inline">Click arrows or dots to navigate</span>
            <span className="md:hidden">Swipe or tap dots to navigate</span>
          </p>
        </div>
      </div>
    </section>
  )
}
