'use client'

import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollProgressBar from '@/components/ScrollProgressBar'
import BackToTop from '@/components/BackToTop'
import FadeIn from '@/components/FadeIn'
import { useState } from 'react'

const galleryCategories = ['All', 'Events', 'Workshop', 'Team', 'Competition']

const galleryItems = [
  { id: 1, title: 'Web Dev Bootcamp 2025', category: 'Workshop', image: '/images/logo.png', span: 'col-span-1 row-span-1' },
  { id: 2, title: 'Team Building Activity', category: 'Team', image: '/images/logo.png', span: 'col-span-1 md:col-span-2 row-span-1' },
  { id: 3, title: 'Hackathon EISD 2024', category: 'Competition', image: '/images/logo.png', span: 'col-span-1 row-span-1' },
  { id: 4, title: 'AI Workshop Session', category: 'Workshop', image: '/images/logo.png', span: 'col-span-1 row-span-1' },
  { id: 5, title: 'Annual Lab Gathering', category: 'Events', image: '/images/logo.png', span: 'col-span-1 row-span-1' },
  { id: 6, title: 'Tech Seminar 2024', category: 'Events', image: '/images/logo.png', span: 'col-span-1 md:col-span-2 row-span-1' },
  { id: 7, title: 'Competition Team Photo', category: 'Competition', image: '/images/logo.png', span: 'col-span-1 row-span-1' },
  { id: 8, title: 'Lab Members 2024', category: 'Team', image: '/images/logo.png', span: 'col-span-1 row-span-1' },
  { id: 9, title: 'UI/UX Design Workshop', category: 'Workshop', image: '/images/logo.png', span: 'col-span-1 row-span-1' },
  { id: 10, title: 'Open Recruitment 2024', category: 'Events', image: '/images/logo.png', span: 'col-span-1 row-span-1' },
  { id: 11, title: 'IoT Project Demo', category: 'Workshop', image: '/images/logo.png', span: 'col-span-1 md:col-span-2 row-span-1' },
  { id: 12, title: 'National Competition Win', category: 'Competition', image: '/images/logo.png', span: 'col-span-1 row-span-1' },
]

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null)

  const filteredItems = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory)

  return (
    <main className="min-h-screen">
      <ScrollProgressBar />
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-12 px-4 relative">
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <FadeIn direction="up" delay={0.2}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 glass-card px-5 py-2.5 rounded-full shadow-soft mb-6 shimmer-enhanced"
            >
              <div className="w-2 h-2 bg-primary rounded-full pulse-subtle" />
              <span className="text-sm text-gray-700 font-medium">Gallery</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Our Gallery</span>
            </h1>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Momen-momen terbaik dari berbagai kegiatan dan pencapaian EISD Laboratory.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Filter */}
      <section className="px-4 pb-4">
        <div className="max-w-6xl mx-auto">
          <FadeIn direction="up" delay={0.3}>
            <div className="flex flex-wrap justify-center gap-3">
              {galleryCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === cat
                      ? 'bg-primary text-white shadow-lg shadow-primary/25'
                      : 'bg-white/80 text-gray-600 border border-gray-200 hover:border-primary/30 hover:text-primary'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 px-4 relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div layout className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  className={`${item.span} cursor-pointer`}
                  onClick={() => setSelectedImage(item)}
                >
                  <div className="group relative h-full min-h-[200px] bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-white/60 hover:shadow-2xl transition-all duration-300">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4">
                        <span className="text-white/70 text-xs font-medium">{item.category}</span>
                        <h3 className="text-white font-bold text-sm">{item.title}</h3>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-400 text-lg">Belum ada foto di kategori ini.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              className="relative max-w-3xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-80 md:h-96 bg-gray-50">
                <Image
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  fill
                  className="object-contain p-8"
                />
              </div>
              <div className="p-6">
                <span className="text-primary text-xs font-medium">{selectedImage.category}</span>
                <h3 className="text-xl font-bold text-gray-900 mt-1">{selectedImage.title}</h3>
                <p className="text-gray-500 text-sm mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 border border-gray-200 shadow-md flex items-center justify-center text-gray-600 hover:text-red-500 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
      <BackToTop />
    </main>
  )
}
