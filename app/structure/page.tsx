'use client'

import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollProgressBar from '@/components/ScrollProgressBar'
import BackToTop from '@/components/BackToTop'
import FadeIn from '@/components/FadeIn'
import { useState } from 'react'

interface MemberData {
  name: string
  code: string
  role: 'koordinator' | 'member'
  image: string
  linkedin: string
}

interface Division {
  name: string
  icon: string
  gradient: string
  members: MemberData[]
}

const coreDivision = [
  { name: 'Fadia Rizqa Yunanto', code: 'RYUU', role: 'Ketua Lab', image: '/images/logo.png', linkedin: '#' },
  { name: 'Deazard Muhammad Arrayyan', code: 'DEZA', role: 'Wakil Ketua Lab', image: '/images/members/DEZA.png', linkedin: 'https://www.linkedin.com/in/deazard/' },
  { name: 'Kirei Najwa Shafira', code: 'IYEY', role: 'Sekretaris Lab', image: '/images/logo.png', linkedin: '#' },
]

const divisions: Division[] = [
  {
    name: 'Competition',
    icon: '🏆',
    gradient: 'from-amber-500 to-orange-500',
    members: [
      { name: 'Bimo Alfarizy Lukman', code: 'FRZY', role: 'koordinator', image: '/images/logo.png', linkedin: '#' },
      { name: 'Azzahra Aulia Khoirunnisa', code: 'ZAAR', role: 'member', image: '/images/logo.png', linkedin: '#' },
      { name: 'Nashwa Alya Zahra Pratiwi', code: 'NAZP', role: 'member', image: '/images/logo.png', linkedin: '#' },
      { name: 'Dhydo Aryo Jayanata', code: 'JAYY', role: 'member', image: '/images/logo.png', linkedin: '#' },
    ],
  },
  {
    name: 'Content',
    icon: '✍️',
    gradient: 'from-pink-500 to-rose-500',
    members: [
      { name: 'Muhammad Mufid Taqiyuddin', code: 'VIDS', role: 'koordinator', image: '/images/logo.png', linkedin: '#' },
      { name: 'Maurithania Joleesha Maria Tjakra', code: 'NIYO', role: 'member', image: '/images/logo.png', linkedin: '#' },
      { name: 'Muhammad Reyhan Armadani', code: 'REYY', role: 'member', image: '/images/logo.png', linkedin: '#' },
      { name: 'Renasya Cahya Handayani', code: 'IYAN', role: 'member', image: '/images/logo.png', linkedin: '#' },
      { name: 'Dinar Muhammad Akbar', code: 'DNMA', role: 'member', image: '/images/logo.png', linkedin: '#' },
      { name: 'Zhafran Ahmad Zaidan', code: 'FRAN', role: 'member', image: '/images/logo.png', linkedin: '#' },
    ],
  },
  {
    name: 'Enabler',
    icon: '⚙️',
    gradient: 'from-emerald-500 to-teal-500',
    members: [
      { name: 'Refaya Azzam Maheswara', code: 'PAYY', role: 'koordinator', image: '/images/logo.png', linkedin: '#' },
      { name: 'Muhammad Fatih', code: 'mfth', role: 'member', image: '/images/logo.png', linkedin: '#' },
      { name: 'Fasya Arinal Hudha', code: 'SYRN', role: 'member', image: '/images/logo.png', linkedin: '#' },
      { name: 'Elsa Ainun Yusniar', code: 'ESNY', role: 'member', image: '/images/logo.png', linkedin: '#' },
      { name: 'Aisyah Nur Raihandany Putri', code: 'ASYH', role: 'member', image: '/images/logo.png', linkedin: '#' },
    ],
  },
  {
    name: 'Event',
    icon: '🎪',
    gradient: 'from-indigo-500 to-purple-500',
    members: [
      { name: 'Muhammad Luthfi Tukhfattur Romadhoni', code: 'MLTR', role: 'koordinator', image: '/images/logo.png', linkedin: '#' },
      { name: 'Djaudza Djiyya Muhammad', code: 'DJZA', role: 'member', image: '/images/logo.png', linkedin: '#' },
      { name: 'Viki Firmansyah', code: 'VIKS', role: 'member', image: '/images/logo.png', linkedin: '#' },
      { name: 'Rosita Jian Syahiirah', code: 'RORA', role: 'member', image: '/images/logo.png', linkedin: '#' },
      { name: 'Jian Hazel Sitorus', code: 'ZELL', role: 'member', image: '/images/logo.png', linkedin: '#' },
    ],
  },
  {
    name: 'Research & Community',
    icon: '🔬',
    gradient: 'from-cyan-500 to-blue-500',
    members: [
      { name: 'Hilmi Zikri', code: 'ZIKK', role: 'koordinator', image: '/images/logo.png', linkedin: '#' },
      { name: 'Zuhri Pratisto Basuki', code: 'ZRII', role: 'member', image: '/images/logo.png', linkedin: '#' },
      { name: 'Rasya Akbar Lazuardi', code: 'LAZY', role: 'member', image: '/images/logo.png', linkedin: '#' },
      { name: 'Rizky Saputra Al Amir', code: 'EKAA', role: 'member', image: '/images/logo.png', linkedin: '#' },
      { name: 'Alif Muslim Abdurrahman', code: 'MSLMN', role: 'member', image: '/images/logo.png', linkedin: '#' },
      { name: 'Anisa Hanun', code: 'ASAA', role: 'member', image: '/images/logo.png', linkedin: '#' },
      { name: 'Fairuzia Meyla Fatinah', code: 'FZMY', role: 'member', image: '/images/logo.png', linkedin: '#' },
    ],
  },
  {
    name: 'Study Group',
    icon: '📚',
    gradient: 'from-violet-500 to-purple-600',
    members: [
      { name: 'Clarissa Tompunu', code: 'CARL', role: 'koordinator', image: '/images/logo.png', linkedin: '#' },
      { name: 'M. Paksi Pratama', code: 'MPP', role: 'member', image: '/images/logo.png', linkedin: '#' },
      { name: 'Naswa Gyna Sahira', code: 'SGYN', role: 'member', image: '/images/logo.png', linkedin: '#' },
      { name: 'Siti Amany Fakhirah Riby', code: 'SAFR', role: 'member', image: '/images/logo.png', linkedin: '#' },
    ],
  },
]

const linkedinPath = 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'

function PersonCard({ name, code, image, linkedin, badge, badgeGradient, size = 'sm' }: {
  name: string
  code: string
  image: string
  linkedin: string
  badge?: string
  badgeGradient?: string
  size?: 'sm' | 'md' | 'lg'
}) {
  const [hovered, setHovered] = useState(false)
  const isPlaceholder = image === '/images/logo.png'

  const sizeClasses = {
    sm: 'w-20 h-20 md:w-24 md:h-24',
    md: 'w-24 h-24 md:w-28 md:h-28',
    lg: 'w-32 h-32 md:w-36 md:h-36',
  }

  return (
    <div
      className="group text-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={`relative mx-auto mb-2 ${sizeClasses[size]} rounded-2xl overflow-hidden border-2 transition-all duration-300 bg-white ${
        badge ? 'border-primary/25 shadow-lg group-hover:border-primary/40 group-hover:shadow-xl' : 'border-gray-100 shadow-md group-hover:border-primary/20 group-hover:shadow-lg'
      }`}>
        <Image
          src={image}
          alt={name}
          fill
          className={isPlaceholder ? 'object-contain p-2' : 'object-cover'}
        />
        {linkedin && linkedin !== '#' && (
          <motion.a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-blue-600/80 backdrop-blur-sm flex items-center justify-center gap-1.5 z-10"
          >
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d={linkedinPath} />
            </svg>
            <span className="text-white text-xs font-semibold">LinkedIn</span>
          </motion.a>
        )}
      </div>
      <h4 className="text-xs md:text-sm font-semibold text-gray-800 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
        {name}
      </h4>
      {badge && (
        <span className={`inline-block mt-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold text-white bg-gradient-to-r ${badgeGradient || 'from-primary to-accent-green'}`}>
          {badge}
        </span>
      )}
      <p className="mt-0.5 font-mono text-[10px] tracking-wider text-gray-400">{code}</p>
    </div>
  )
}

export default function Structure() {
  const [activeTab, setActiveTab] = useState(0)
  const activeDivision = divisions[activeTab]

  const koordinator = activeDivision.members.find(m => m.role === 'koordinator')
  const members = activeDivision.members.filter(m => m.role === 'member')

  return (
    <main className="min-h-screen">
      <ScrollProgressBar />
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-8 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <FadeIn direction="up" delay={0.2}>
            <div className="inline-flex items-center gap-2 bg-primary/5 border border-primary/10 px-4 py-1.5 rounded-full mb-5">
              <div className="w-1.5 h-1.5 bg-accent-green rounded-full" />
              <span className="text-xs font-semibold text-primary tracking-wide uppercase">Organization</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-3">
              <span className="text-gray-900">Our </span>
              <span className="text-primary">Structure</span>
            </h1>
            <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto">
              Kenali orang-orang hebat di balik setiap divisi EISD Laboratory.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Core Division — Compact horizontal */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <FadeIn direction="up" delay={0.15}>
            <p className="text-center text-xs font-semibold text-gray-400 uppercase tracking-widest mb-6">Core Division</p>
            <div className="flex items-end justify-center gap-8 md:gap-14">
              {coreDivision.map((member, i) => {
                const isKetua = i === 0
                return (
                  <PersonCard
                    key={member.code}
                    name={member.name}
                    code={member.code}
                    image={member.image}
                    linkedin={member.linkedin}
                    badge={member.role}
                    size={isKetua ? 'lg' : 'md'}
                  />
                )
              })}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Separator */}
      <div className="max-w-xs mx-auto h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-4" />

      {/* Division Tabs + Members */}
      <section className="py-8 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Tab Bar */}
          <FadeIn direction="up" delay={0.1}>
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {divisions.map((div, i) => (
                <button
                  key={div.name}
                  onClick={() => setActiveTab(i)}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    i === activeTab
                      ? 'bg-primary text-white shadow-md'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <span>{div.icon}</span>
                  <span className="hidden sm:inline">{div.name}</span>
                </button>
              ))}
            </div>
          </FadeIn>

          {/* Active Division Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
            >
              {/* Division title */}
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{activeDivision.name}</h2>
                <div className={`mx-auto mt-2 h-1 w-16 rounded-full bg-gradient-to-r ${activeDivision.gradient}`} />
              </div>

              {/* Koordinator + Members in a single grid */}
              <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                {koordinator && (
                  <PersonCard
                    name={koordinator.name}
                    code={koordinator.code}
                    image={koordinator.image}
                    linkedin={koordinator.linkedin}
                    badge="Koordinator"
                    badgeGradient={activeDivision.gradient}
                    size="md"
                  />
                )}
                {members.map((member) => (
                  <PersonCard
                    key={member.code}
                    name={member.name}
                    code={member.code}
                    image={member.image}
                    linkedin={member.linkedin}
                    size="sm"
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <FadeIn direction="up" delay={0.2}>
            <div className="relative bg-gradient-to-br from-primary to-purple-700 rounded-3xl p-10 text-center text-white overflow-hidden">
              <div className="absolute inset-0 bg-white/5 backdrop-blur-[1px]" />
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-3">Tertarik Bergabung?</h2>
                <p className="text-white/80 mb-6 max-w-xl mx-auto">
                  EISD Laboratory selalu membuka kesempatan bagi mahasiswa yang ingin belajar,
                  berkembang, dan berkontribusi di bidang teknologi.
                </p>
                <button className="bg-white text-primary font-semibold px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105">
                  Join Open Recruitment
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
