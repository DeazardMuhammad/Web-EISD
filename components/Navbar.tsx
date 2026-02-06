'use client'

import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { navItems } from '@/lib/data'
import { useState } from 'react'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-4xl px-4">
      <div className="navbar-glass rounded-full px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <motion.a 
          href="/"
          className="flex items-center gap-3 cursor-pointer group"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div 
            className="w-10 h-10 relative rounded-lg overflow-hidden bg-white p-1 border border-gray-100 shadow-soft"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <Image 
              src="/images/logo.png" 
              alt="EISD Logo" 
              fill
              className="object-contain"
            />
          </motion.div>
          <span className="font-bold text-primary hidden sm:inline group-hover:text-accent-green transition-colors duration-300">EISD Laboratory</span>
        </motion.a>

        {/* Desktop Menu Items */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-all duration-300 relative group"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ y: -2 }}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <motion.button
          className="hidden md:block bg-primary hover:bg-primary-dark text-white text-sm font-semibold px-5 py-2 rounded-full transition-all shadow-soft relative overflow-hidden group"
          whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(109, 94, 246, 0.3)" }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          <span className="relative z-10">Contact Us</span>
          <motion.div
            className="absolute inset-0 bg-accent-green"
            initial={{ x: '-100%' }}
            whileHover={{ x: 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden flex flex-col items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <motion.span
            className="block w-5 h-0.5 bg-gray-700 rounded-full"
            animate={mobileOpen ? { rotate: 45, y: 3 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="block w-5 h-0.5 bg-gray-700 rounded-full mt-1"
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="block w-5 h-0.5 bg-gray-700 rounded-full mt-1"
            animate={mobileOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
          />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-2 navbar-glass rounded-2xl px-4 py-4 shadow-lg"
          >
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium text-gray-700 hover:text-primary hover:bg-primary/5 px-4 py-2.5 rounded-xl transition-all duration-200"
                >
                  {item.label}
                </a>
              ))}
              <div className="h-px bg-gray-200 my-2" />
              <button className="bg-primary text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-all hover:bg-primary-dark">
                Contact Us
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
