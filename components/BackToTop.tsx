'use client'

import { motion, useScroll, useSpring } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const { scrollYProgress } = useScroll()
  const circumference = 2 * Math.PI * 18
  const strokeDashoffset = useSpring(circumference, {
    stiffness: 100,
    damping: 30,
  })

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (value) => {
      setIsVisible(value > 0.2)
      strokeDashoffset.set(circumference * (1 - value))
    })
    return unsubscribe
  }, [scrollYProgress, strokeDashoffset, circumference])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <motion.button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 w-14 h-14 bg-white border-2 border-primary rounded-full shadow-lg flex items-center justify-center cursor-pointer z-40 group hover:bg-primary transition-colors"
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.3 }}
    >
      {/* Progress Circle */}
      <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 40 40">
        <circle
          cx="20"
          cy="20"
          r="18"
          stroke="rgba(73, 76, 160, 0.1)"
          strokeWidth="2"
          fill="none"
        />
        <motion.circle
          cx="20"
          cy="20"
          r="18"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="text-primary group-hover:text-white transition-colors"
          strokeDasharray={circumference}
          style={{ strokeDashoffset }}
          strokeLinecap="round"
        />
      </svg>
      
      {/* Arrow Icon */}
      <motion.svg
        className="w-5 h-5 text-primary group-hover:text-white transition-colors relative z-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </motion.svg>
    </motion.button>
  )
}

