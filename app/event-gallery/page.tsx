'use client'

import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollProgressBar from '@/components/ScrollProgressBar'
import BackToTop from '@/components/BackToTop'
import SectionHeading from '@/components/SectionHeading'
import FadeIn from '@/components/FadeIn'
import { useState } from 'react'

/* ── Data ── */
const eventCategories = ['All', 'Workshop', 'Seminar', 'Competition', 'Study Group']

const events = [
  {
    id: 1,
    title: 'Study Group 2025',
    category: 'Study Group',
    date: 'Maret - September 2025',
    location: 'Telkom University',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/images/logo.png',
    status: 'upcoming' as const,
    gradient: 'from-purple-500 to-blue-500',
  },
  {
    id: 2,
    title: 'Belajar Blender',
    category: 'Workshop',
    date: '22 Februari 2025',
    location: 'Lab EISD, Telkom University',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
    image: '/images/logo.png',
    status: 'upcoming' as const,
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    id: 3,
    title: 'Quality Assurance Workshop',
    category: 'Seminar',
    date: '10 November 2025',
    location: 'Auditorium Telkom University',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident.',
    image: '/images/logo.png',
    status: 'completed' as const,
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    id: 4,
    title: 'Hackathon EISD 2025',
    category: 'Competition',
    date: 'Desember 2025',
    location: 'Telkom University',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nemo enim ipsam voluptatem quia voluptas sit aspernatur.',
    image: '/images/logo.png',
    status: 'completed' as const,
    gradient: 'from-amber-500 to-orange-500',
  },
]

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

/* ── Page Component ── */
export default function EventGallery() {
  const [activeTab, setActiveTab] = useState<'events' | 'gallery'>('events')
  const [eventFilter, setEventFilter] = useState('All')
  const [galleryFilter, setGalleryFilter] = useState('All')
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null)

  const filteredEvents = eventFilter === 'All' ? events : events.filter(e => e.category === eventFilter)
  const filteredGallery = galleryFilter === 'All' ? galleryItems : galleryItems.filter(g => g.category === galleryFilter)

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
              <span className="text-sm text-gray-700 font-medium">Events & Gallery</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Events & Gallery</span>
            </h1>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Ikuti berbagai kegiatan menarik kami dan lihat momen-momen terbaik
              dari perjalanan EISD Laboratory.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Tab Switcher */}
      <section className="px-4 pb-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn direction="up" delay={0.3}>
            <div className="flex justify-center">
              <div className="inline-flex bg-white/80 backdrop-blur-sm rounded-2xl p-1.5 border border-gray-200 shadow-lg">
                <button
                  onClick={() => setActiveTab('events')}
                  className={`relative px-8 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    activeTab === 'events'
                      ? 'text-white'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {activeTab === 'events' && (
                    <motion.div
                      layoutId="activeTabBg"
                      className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 rounded-xl shadow-lg shadow-primary/25"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Events
                  </span>
                </button>

                <button
                  onClick={() => setActiveTab('gallery')}
                  className={`relative px-8 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    activeTab === 'gallery'
                      ? 'text-white'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {activeTab === 'gallery' && (
                    <motion.div
                      layoutId="activeTabBg"
                      className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 rounded-xl shadow-lg shadow-primary/25"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Gallery
                  </span>
                </button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Content Area */}
      <AnimatePresence mode="wait">
        {activeTab === 'events' ? (
          <motion.div
            key="events"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Event Filters */}
            <section className="px-4 pb-4">
              <div className="max-w-6xl mx-auto">
                <div className="flex flex-wrap justify-center gap-3">
                  {eventCategories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setEventFilter(cat)}
                      className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        eventFilter === cat
                          ? 'bg-primary text-white shadow-lg shadow-primary/25'
                          : 'bg-white/80 text-gray-600 border border-gray-200 hover:border-primary/30 hover:text-primary'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </section>

            {/* Events Grid */}
            <section className="py-12 px-4 relative">
              <div className="max-w-6xl mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredEvents.map((event, index) => (
                    <FadeIn key={event.id} direction="up" delay={0.1 * (index + 1)}>
                      <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg border border-white/60 hover:shadow-2xl transition-all duration-300 h-full">
                        <div className="flex flex-col sm:flex-row">
                          {/* Image */}
                          <div className="relative h-48 sm:h-auto sm:w-2/5 bg-gray-50 overflow-hidden flex-shrink-0">
                            <Image
                              src={event.image}
                              alt={event.title}
                              fill
                              className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                            />
                            {/* Status */}
                            <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold ${
                              event.status === 'upcoming'
                                ? 'bg-accent-green text-white'
                                : 'bg-gray-200 text-gray-600'
                            }`}>
                              {event.status === 'upcoming' ? 'Upcoming' : 'Completed'}
                            </div>
                            <div className={`absolute bottom-0 left-0 right-0 h-1 sm:h-full sm:w-1 sm:right-0 sm:left-auto sm:top-0 bg-gradient-to-r sm:bg-gradient-to-b ${event.gradient}`} />
                          </div>

                          {/* Content */}
                          <div className="flex-1 p-6">
                            <div className="flex items-center gap-3 mb-3">
                              <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${event.gradient} text-white`}>
                                {event.category}
                              </span>
                              <span className="text-xs text-gray-400">{event.date}</span>
                            </div>

                            <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                              {event.title}
                            </h3>

                            <p className="text-sm text-gray-600 leading-relaxed mb-4">
                              {event.description}
                            </p>

                            <div className="flex items-center gap-2 text-xs text-gray-400 mt-auto">
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              {event.location}
                            </div>
                          </div>
                        </div>
                      </div>
                    </FadeIn>
                  ))}
                </div>

                {filteredEvents.length === 0 && (
                  <div className="text-center py-16">
                    <p className="text-gray-400 text-lg">Belum ada event di kategori ini.</p>
                  </div>
                )}
              </div>
            </section>
          </motion.div>
        ) : (
          <motion.div
            key="gallery"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Gallery Filters */}
            <section className="px-4 pb-4">
              <div className="max-w-6xl mx-auto">
                <div className="flex flex-wrap justify-center gap-3">
                  {galleryCategories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setGalleryFilter(cat)}
                      className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        galleryFilter === cat
                          ? 'bg-primary text-white shadow-lg shadow-primary/25'
                          : 'bg-white/80 text-gray-600 border border-gray-200 hover:border-primary/30 hover:text-primary'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </section>

            {/* Gallery Grid */}
            <section className="py-12 px-4 relative">
              <div className="max-w-6xl mx-auto relative z-10">
                <motion.div layout className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <AnimatePresence mode="popLayout">
                    {filteredGallery.map((item, index) => (
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

                {filteredGallery.length === 0 && (
                  <div className="text-center py-16">
                    <p className="text-gray-400 text-lg">Belum ada foto di kategori ini.</p>
                  </div>
                )}
              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <FadeIn direction="up" delay={0.2}>
            <div className="relative bg-gradient-to-br from-primary to-purple-700 rounded-3xl p-10 text-center text-white overflow-hidden">
              <div className="absolute inset-0 bg-white/5 backdrop-blur-[1px]" />
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-3">Ingin Mengikuti Event Kami?</h2>
                <p className="text-white/80 mb-6 max-w-xl mx-auto">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ikuti media sosial kami
                  untuk informasi event terbaru.
                </p>
                <button className="bg-white text-primary font-semibold px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105">
                  Follow Our Instagram
                </button>
              </div>
            </div>
          </FadeIn>
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
              transition={{ type: 'spring', stiffness: 200, damping: 25 }}
              className="relative max-w-3xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-80 md:h-96 bg-gray-50">
                <Image src={selectedImage.image} alt={selectedImage.title} fill className="object-contain p-8" />
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
