'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollProgressBar from '@/components/ScrollProgressBar'
import BackToTop from '@/components/BackToTop'
import FadeIn from '@/components/FadeIn'

const instagramPath = 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z'
const linkedinPath = 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'

export default function Contact() {
  return (
    <main className="min-h-screen">
      <ScrollProgressBar />
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn direction="up" delay={0.2}>
            <div className="inline-flex items-center gap-2 bg-primary/5 border border-primary/10 px-4 py-1.5 rounded-full mb-5">
              <div className="w-1.5 h-1.5 bg-accent-green rounded-full" />
              <span className="text-xs font-semibold text-primary tracking-wide uppercase">Get in Touch</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-3">
              <span className="text-gray-900">Contact </span>
              <span className="text-primary">Us</span>
            </h1>
            <p className="text-gray-500 text-sm md:text-base max-w-lg mx-auto">
              Punya pertanyaan atau ingin berkolaborasi? Jangan ragu untuk menghubungi kami.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 2x2 Grid Cards */}
      <section className="px-4 pb-10">
        <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Location */}
          <FadeIn direction="up" delay={0.1}>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 h-full flex flex-col">
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-1">Location</h3>
              <p className="text-sm text-gray-500 leading-relaxed flex-1">
                Telkom University Landmark Tower (TULT)<br />
                <span className="font-medium text-gray-700">Ruangan 0810</span> — Lantai 8<br />
                Bandung, Jawa Barat
              </p>
            </div>
          </FadeIn>

          {/* Email */}
          <FadeIn direction="up" delay={0.15}>
            <a
              href="mailto:eisdlaboratory@gmail.com"
              className="group bg-white rounded-2xl border border-gray-100 shadow-sm p-6 h-full flex flex-col hover:border-primary/20 hover:shadow-md transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-accent-green/10 flex items-center justify-center mb-4 group-hover:bg-accent-green/20 transition-colors">
                <svg className="w-5 h-5 text-accent-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-1">Email</h3>
              <p className="text-sm text-gray-500 flex-1 mb-4">eisdlaboratory@gmail.com</p>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary group-hover:text-accent-green transition-colors">
                <span>Send Email</span>
                <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </a>
          </FadeIn>

          {/* Instagram */}
          <FadeIn direction="up" delay={0.2}>
            <a
              href="https://www.instagram.com/peopleateisd/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl border border-gray-100 shadow-sm p-6 h-full flex flex-col hover:border-pink-200 hover:shadow-md transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-pink-500 to-orange-400 flex items-center justify-center mb-4 shadow-md">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d={instagramPath} />
                </svg>
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-1">Instagram</h3>
              <p className="text-sm text-gray-500 flex-1 mb-4">@peopleateisd</p>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-pink-500 group-hover:text-pink-600 transition-colors">
                <span>Follow</span>
                <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </a>
          </FadeIn>

          {/* LinkedIn */}
          <FadeIn direction="up" delay={0.25}>
            <a
              href="https://www.linkedin.com/company/eisd-laboratory/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl border border-gray-100 shadow-sm p-6 h-full flex flex-col hover:border-blue-200 hover:shadow-md transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-[#0A66C2] flex items-center justify-center mb-4 shadow-md">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d={linkedinPath} />
                </svg>
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-1">LinkedIn</h3>
              <p className="text-sm text-gray-500 flex-1 mb-4">EISD Laboratory</p>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0A66C2] group-hover:text-blue-700 transition-colors">
                <span>Connect</span>
                <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </a>
          </FadeIn>
        </div>
      </section>

      {/* Maps — Full width */}
      <section className="px-4 pb-16">
        <div className="max-w-3xl mx-auto">
          <FadeIn direction="up" delay={0.15}>
            <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.3034498652655!2d107.6305881!3d-6.9730408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e9adf177bf8d%3A0x437398556f9fa03!2sTelkom%20University%20Landmark%20Tower!5e0!3m2!1sen!2sid!4v1700000000000"
                className="w-full h-56 md:h-72"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Telkom University Landmark Tower"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </main>
  )
}
