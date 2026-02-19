'use client'

import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { useState, useCallback } from 'react'

export default function FocusArea() {
  // order[0] = front card, order[3] = back card
  const [order, setOrder] = useState([0, 1, 2, 3])
  const [isShuffling, setIsShuffling] = useState(false)
  const [flyingCard, setFlyingCard] = useState<number | null>(null)

  const items = [
    {
      id: 1,
      title: 'Software Development',
      description: 'Building scalable applications and innovative software solutions for real-world problems.',
      icon: '💻',
    },
    {
      id: 2,
      title: 'UI / UX Design',
      description: 'Creating beautiful and intuitive user experiences with modern design principles.',
      icon: '🎨',
    },
    {
      id: 3,
      title: 'Intelligence System',
      description: 'Exploring AI, machine learning, and Internet of Things for smart solutions.',
      icon: '🤖',
    },
    {
      id: 4,
      title: 'Technopreneurship',
      description: 'Developing entrepreneurial mindset and building tech-based startups.',
      icon: '🚀',
    },
  ]

  const handleShuffle = useCallback(() => {
    if (isShuffling) return
    setIsShuffling(true)

    const frontCardIndex = order[0]
    setFlyingCard(frontCardIndex)

    // Fast shuffle - card flies out then reorder
    setTimeout(() => {
      setOrder((prev) => {
        const newOrder = [...prev]
        const front = newOrder.shift()!
        newOrder.push(front)
        return newOrder
      })
      setFlyingCard(null)
      setIsShuffling(false)
    }, 350)
  }, [isShuffling, order])

  // Stack position for each card
  const getStackStyle = (itemIndex: number) => {
    const stackPos = order.indexOf(itemIndex)
    const isFlying = flyingCard === itemIndex

    if (isFlying) {
      return {
        y: -180,
        x: 80,
        scale: 0.75,
        rotate: 12,
        opacity: 0,
        zIndex: 50,
      }
    }

    switch (stackPos) {
      case 0: // Front
        return { y: 0, x: 0, scale: 1, rotate: 0, opacity: 1, zIndex: 4 }
      case 1: // Second - offset right & tilted
        return { y: 8, x: 30, scale: 0.95, rotate: 2.5, opacity: 0.65, zIndex: 3 }
      case 2: // Third
        return { y: 16, x: 56, scale: 0.90, rotate: 5, opacity: 0.4, zIndex: 2 }
      case 3: // Back
        return { y: 24, x: 78, scale: 0.85, rotate: 7.5, opacity: 0.2, zIndex: 1 }
      default:
        return { y: 24, x: 78, scale: 0.85, rotate: 7.5, opacity: 0, zIndex: 0 }
    }
  }

  const iconGradient = 'from-primary via-purple-600 to-accent-green'
  const frontItemIndex = order[0]

  // Shared card rendering
  const renderCards = (size: 'desktop' | 'mobile') => {
    const cardW = size === 'desktop' ? '340px' : '280px'
    const cardH = size === 'desktop' ? '360px' : '300px'

    return (
      <div className="relative" style={{ width: cardW, height: cardH }}>
        {/* Shadow under stack */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/3 w-[75%] h-6 bg-black/5 blur-xl rounded-full" />

        {items.map((item, index) => {
          const style = getStackStyle(index)
          const isFront = index === frontItemIndex && flyingCard !== index

          return (
            <motion.div
              key={item.id}
              className="absolute inset-0"
              initial={false}
              animate={{
                y: style.y,
                x: style.x,
                scale: style.scale,
                rotate: style.rotate,
                opacity: style.opacity,
                zIndex: style.zIndex,
              }}
              transition={{
                type: 'tween',
                duration: flyingCard === index ? 0.3 : 0.4,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              {/* Glow behind front card */}
              {isFront && (
                <div className={`absolute -inset-3 bg-gradient-to-br ${iconGradient} rounded-3xl opacity-20 blur-2xl`} />
              )}

              <div className={`relative h-full rounded-3xl border-2 overflow-hidden flex flex-col transition-colors duration-200 ${
                isFront
                  ? 'bg-white shadow-2xl border-primary/25 ring-1 ring-primary/10'
                  : 'bg-white/80 shadow-xl border-white/70'
              }`}>
                <div className={`h-1.5 bg-gradient-to-r ${iconGradient} flex-shrink-0`} />

                <div className={`flex flex-col items-center text-center flex-1 justify-center ${
                  size === 'desktop' ? 'p-7' : 'p-5'
                }`}>
                  <div className={`rounded-2xl bg-gradient-to-br ${iconGradient} flex items-center justify-center shadow-lg mb-4 ${
                    size === 'desktop' ? 'w-20 h-20' : 'w-16 h-16'
                  }`}>
                    <span className={size === 'desktop' ? 'text-4xl' : 'text-3xl'}>{item.icon}</span>
                  </div>

                  <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gray-900 mb-2 shadow-md">
                    <span className="text-white text-[10px] font-bold">{String(index + 1).padStart(2, '0')}</span>
                  </div>

                  <h3 className={`font-bold mb-2 transition-colors duration-200 ${
                    isFront ? 'text-primary' : 'text-gray-900'
                  } ${size === 'desktop' ? 'text-xl' : 'text-lg'}`}>{item.title}</h3>

                  <p className={`text-gray-600 leading-relaxed max-w-[260px] ${
                    size === 'desktop' ? 'text-sm' : 'text-xs'
                  }`}>{item.description}</p>
                </div>

                <div className={`h-1 bg-gradient-to-r ${iconGradient} flex-shrink-0`} />
              </div>
            </motion.div>
          )
        })}
      </div>
    )
  }

  // Shared focus button
  const renderFocusButton = (size: 'desktop' | 'mobile') => {
    const btnSize = size === 'desktop' ? 'w-36 h-36' : 'w-28 h-28'
    const iconSize = size === 'desktop' ? 'text-4xl' : 'text-3xl'
    const titleSize = size === 'desktop' ? 'text-sm' : 'text-[10px]'
    const subSize = size === 'desktop' ? 'text-xs' : 'text-[9px]'

    return (
      <div className="flex flex-col items-center gap-4">
        <button
          type="button"
          onClick={handleShuffle}
          disabled={isShuffling}
          className={`relative ${btnSize} rounded-full focus:outline-none active:scale-95 transition-transform disabled:active:scale-100`}
        >
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30" />
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/15 to-accent-green/15 blur-lg" />

          {/* Spinning ring */}
          <motion.div
            className="absolute inset-1 rounded-full border-2 border-transparent"
            style={{
              borderTopColor: 'rgba(73, 76, 160, 0.4)',
              borderRightColor: 'rgba(0, 217, 122, 0.4)',
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          />

          <div className="relative w-full h-full rounded-full bg-gradient-to-br from-primary via-purple-600 to-accent-green flex items-center justify-center shadow-2xl">
            <div className="text-center">
              <motion.div
                className={`${iconSize} mb-0.5`}
                animate={isShuffling ? { rotate: [0, -15, 15, 0], scale: [1, 1.15, 1] } : {}}
                transition={{ duration: 0.3 }}
              >
                ⚡
              </motion.div>
              <h3 className={`text-white font-black ${titleSize}`}>FOCUS</h3>
              <p className={`text-white/70 ${subSize}`}>
                {size === 'desktop' ? 'Click to shuffle' : 'Tap to shuffle'}
              </p>
            </div>
          </div>
        </button>

        {/* Dot indicators */}
        <div className="flex items-center gap-2">
          {items.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === frontItemIndex
                  ? 'w-8 bg-gradient-to-r from-primary to-accent-green'
                  : 'w-2 bg-gray-300'
              }`}
            />
          ))}
        </div>

        {/* Counter */}
        <motion.p
          key={frontItemIndex}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="text-xs text-gray-400"
        >
          {String(frontItemIndex + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
        </motion.p>
      </div>
    )
  }

  return (
    <section className="py-16 px-4 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading 
          eyebrow="Explore"
          title="Our Focus Area" 
          subtitle="Code, Create, Launch, Learn."
        />

        {/* Desktop: Button LEFT, Cards RIGHT */}
        <div className="hidden md:flex items-center justify-center gap-20 mt-12 px-8">
          {renderFocusButton('desktop')}
          {renderCards('desktop')}
        </div>

        {/* Mobile: Cards on top, Button below */}
        <div className="md:hidden mt-8 flex flex-col items-center gap-6">
          {renderCards('mobile')}
          {renderFocusButton('mobile')}
        </div>

        {/* Hint */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="text-sm text-gray-400 mt-6 text-center"
        >
          <span className="hidden md:inline">Click the focus button to shuffle through areas</span>
          <span className="md:hidden">Tap the focus button to shuffle</span>
        </motion.p>
      </div>
    </section>
  )
}
