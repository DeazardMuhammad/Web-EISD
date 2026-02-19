'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollProgressBar from '@/components/ScrollProgressBar'
import BackToTop from '@/components/BackToTop'
import SectionHeading from '@/components/SectionHeading'
import FadeIn from '@/components/FadeIn'

const values = [
  {
    icon: '🚀',
    title: 'Fast',
    description: 'Bergerak cepat dalam mengembangkan solusi teknologi dan merespons tantangan industri.',
    gradient: 'from-purple-500 to-blue-500',
  },
  {
    icon: '🧠',
    title: 'Smart',
    description: 'Mengutamakan pendekatan cerdas dan berbasis data dalam setiap pengembangan proyek.',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    icon: '⚡',
    title: 'Efficient',
    description: 'Mengoptimalkan proses dan sumber daya untuk menghasilkan output terbaik.',
    gradient: 'from-amber-500 to-orange-500',
  },
]

const milestones = [
  { year: '2021', title: 'V1' },
  { year: '2022', title: 'V2' },
  { year: '2023', title: 'V3' },
  { year: '2024', title: 'V4' },
  { year: '2025', title: 'V5' },
  { year: '2026', title: 'V6' },
]

export default function About() {
  return (
    <main className="min-h-screen">
      <ScrollProgressBar />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-28 md:pt-32 pb-0">
        {/* Full-width photo background */}
        <div className="relative w-full h-[320px] md:h-[420px] overflow-hidden">
          <Image src="/images/fotostudio.JPG" alt="EISD Laboratory Team" fill className="object-cover object-top" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAFBFF] via-[#FAFBFF]/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAFBFF] via-transparent to-transparent" />

          {/* Text overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 z-10">
            <FadeIn direction="up" delay={0.2}>
              <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200/60 px-4 py-1.5 rounded-full mb-5">
                  <div className="w-1.5 h-1.5 bg-accent-green rounded-full" />
                  <span className="text-xs font-semibold text-primary tracking-wide uppercase">About Us</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
                  <span className="text-gray-600">Welcome To</span><br />
                  <span className="text-gray-900">Our </span>
                  <span className="text-primary">Research Laboratory</span>
                </h1>
                <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto">
                  Where Enterprise, Intelligence, and System Development meets
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* About description */}
      <section className="py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn direction="up" delay={0.2}>
            <div className="relative w-16 h-16 mx-auto mb-6">
              <Image src="/images/logo.png" alt="EISD Logo" fill className="object-contain" />
            </div>
            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
              Laboratorium kami berfokus pada pengembangan empat bidang utama: <span className="font-medium text-gray-800">technopreneurship</span> untuk menciptakan bisnis digital, <span className="font-medium text-gray-800">software engineering</span> untuk arsitektur sistem yang handal, <span className="font-medium text-gray-800">UI/UX design</span> untuk pengalaman pengguna yang intuitif, dan <span className="font-medium text-gray-800">AI/IoT</span> untuk integrasi sistem cerdas dan terkoneksi.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 px-4 relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <SectionHeading eyebrow="Our Purpose" title="Visi & Misi" subtitle="Arah dan tujuan yang kami kejar bersama." />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <FadeIn direction="left" delay={0.2}>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/60 h-full">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-purple-600 rounded-t-3xl" />
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center mb-5 shadow-lg">
                  <span className="text-2xl">🔭</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Visi</h3>
                <p className="text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.3}>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/60 h-full">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-green to-emerald-500 rounded-t-3xl" />
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-green to-emerald-500 flex items-center justify-center mb-5 shadow-lg">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Misi</h3>
                <ul className="text-gray-600 leading-relaxed space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-green mt-2 flex-shrink-0" />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-green mt-2 flex-shrink-0" />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-green mt-2 flex-shrink-0" />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-green mt-2 flex-shrink-0" />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-4 relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <SectionHeading eyebrow="Values" title="Core Values" subtitle="Fast, Smart, Efficient — prinsip yang kami pegang." />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {values.map((value, index) => (
              <FadeIn key={value.title} direction="up" delay={0.1 * (index + 1)}>
                <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/60 text-center hover:shadow-2xl transition-all duration-300 h-full">
                  <div className={`absolute -inset-0.5 bg-gradient-to-br ${value.gradient} rounded-3xl opacity-0 group-hover:opacity-10 blur transition-opacity duration-500 -z-10`} />
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mx-auto mb-5 shadow-lg`}>
                    <span className="text-3xl">{value.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones — Horizontal timeline */}
      <section className="py-16 px-4 relative">
        <div className="max-w-5xl mx-auto">
          <SectionHeading eyebrow="Journey" title="Our Milestones" subtitle="Perjalanan EISD Laboratory dari awal hingga sekarang." />

          <div className="relative mt-12">
            {/* Horizontal line */}
            <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2 hidden md:block" />

            <div className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-0">
              {milestones.map((milestone, index) => {
                const isLatest = index === milestones.length - 1
                return (
                  <FadeIn key={milestone.year} direction="up" delay={0.08 * (index + 1)}>
                    <div className="flex flex-col items-center text-center group">
                      <div className={`relative w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl ${
                        isLatest
                          ? 'bg-gradient-to-br from-primary to-accent-green text-white'
                          : 'bg-white border border-gray-200 text-gray-900 group-hover:border-primary/30'
                      }`}>
                        {isLatest && (
                          <div className="absolute -inset-1 bg-gradient-to-br from-primary to-accent-green rounded-2xl opacity-25 blur-md" />
                        )}
                        <span className="relative text-xl md:text-2xl font-black">{milestone.title}</span>
                      </div>
                      <p className={`mt-3 text-xs md:text-sm font-semibold ${
                        isLatest ? 'text-primary' : 'text-gray-400'
                      }`}>{milestone.year}</p>
                    </div>
                  </FadeIn>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </main>
  )
}
