'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollProgressBar from '@/components/ScrollProgressBar'
import BackToTop from '@/components/BackToTop'
import SectionHeading from '@/components/SectionHeading'
import FadeIn from '@/components/FadeIn'
import { useState } from 'react'

const categories = ['All', 'Workshop', 'Seminar', 'Competition', 'Study Group']

const events = [
  {
    id: 1,
    title: 'Study Group 2025',
    category: 'Study Group',
    date: 'Maret - September 2025',
    location: 'Telkom University',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
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
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.',
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
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
    image: '/images/logo.png',
    status: 'completed' as const,
    gradient: 'from-amber-500 to-orange-500',
  },
]

export default function Events() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredEvents = activeCategory === 'All'
    ? events
    : events.filter(e => e.category === activeCategory)

  return (
    <main className="min-h-screen">
      <ScrollProgressBar />
      <Navbar />

      {/* Hero Section */}
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
              <span className="text-sm text-gray-700 font-medium">Events</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Our Events</span>
            </h1>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Ikuti berbagai kegiatan menarik yang kami selenggarakan — dari workshop, seminar, 
              hingga kompetisi teknologi.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="px-4 pb-4">
        <div className="max-w-6xl mx-auto">
          <FadeIn direction="up" delay={0.3}>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((cat) => (
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

      {/* Events Grid */}
      <section className="py-12 px-4 relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event, index) => (
              <FadeIn key={event.id} direction="up" delay={0.1 * (index + 1)}>
                <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg border border-white/60 hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-48 bg-gray-50 border-b border-gray-100 overflow-hidden">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-contain p-8 group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Status Badge */}
                    <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold ${
                      event.status === 'upcoming'
                        ? 'bg-accent-green text-white'
                        : 'bg-gray-200 text-gray-600'
                    }`}>
                      {event.status === 'upcoming' ? 'Upcoming' : 'Completed'}
                    </div>
                    {/* Gradient overlay bottom */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${event.gradient}`} />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    {/* Category & Date */}
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${event.gradient} text-white`}>
                        {event.category}
                      </span>
                      <span className="text-xs text-gray-400">{event.date}</span>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                      {event.title}
                    </h3>

                    <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-grow">
                      {event.description}
                    </p>

                    {/* Location */}
                    <div className="flex items-center gap-2 text-xs text-gray-400 mt-auto">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {event.location}
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

      <Footer />
      <BackToTop />
    </main>
  )
}
