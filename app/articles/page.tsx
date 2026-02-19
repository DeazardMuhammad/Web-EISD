'use client'

import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollProgressBar from '@/components/ScrollProgressBar'
import BackToTop from '@/components/BackToTop'
import FadeIn from '@/components/FadeIn'

const articles = [
  {
    title: 'Dampak AI Terhadap Skillset Developer: Adaptasi atau Tersingkir?',
    readTime: '7 min read',
    date: 'May 16, 2025',
    link: 'https://medium.com/@esdlaboratory/dampak-ai-terhadap-skillset-developer-adaptasi-atau-tersingkir-bf582b0d1302',
    image: '/images/artikel/thumbnailDampakAI.webp',
  },
  {
    title: 'MONOLITHIC VS MICROSERVICES ARCHITECTURE: Which to Use?',
    readTime: '5 min read',
    date: 'Apr 27, 2025',
    link: 'https://medium.com/@esdlaboratory/monolithic-vs-microservices-architecture-which-to-use-a64afb037290',
    image: '/images/artikel/thumbnailMONOLITHICvsMICROSERVICES.webp',
  },
  {
    title: 'Jetpack Compose vs XML: Masa Depan UI Development di Android?',
    readTime: '3 min read',
    date: 'Mar 31, 2025',
    link: 'https://medium.com/@esdlaboratory/jetpack-compose-vs-xml-masa-depan-ui-development-di-android-24bde3fe0a6c',
    image: '/images/artikel/thumbnailJetpackCompose.webp',
  },
  {
    title: 'HTTP vs WebSocket: Mana yang Cocok untuk Proyek Web Kamu?',
    readTime: '6 min read',
    date: 'Mar 6, 2025',
    link: 'https://medium.com/@esdlaboratory/http-vs-websocket-mana-yang-cocok-untuk-proyek-web-kamu-52f7012e66fc',
    image: '/images/artikel/ThumbnailHTTPvsWebSocket.webp',
  },
  {
    title: 'gRPC vs REST API: Memahami Dua Paradigma Komunikasi untuk Aplikasi Modern',
    readTime: '2 min read',
    date: 'Feb 16, 2025',
    link: 'https://medium.com/@esdlaboratory/grpc-vs-rest-api-memahami-dua-paradigma-komunikasi-untuk-aplikasi-modern-8bd2bd156383',
    image: '/images/artikel/thumbnailgRPCvsREST API.webp',
  },
  {
    title: 'Laravel vs Django: Pilihan Framework yang Tepat untuk Proyek Fullstack Kamu!',
    readTime: '7 min read',
    date: 'Dec 7, 2024',
    link: 'https://medium.com/@esdlaboratory/laravel-vs-django-pilihan-framework-yang-tepat-untuk-proyek-fullstack-kamu-2dae20538cf3',
    image: '/images/artikel/thumbnailLaravelvsDjango.webp',
  },
  {
    title: 'Animasi Web ReactJS: GSAP vs Vanilla CSS',
    readTime: '4 min read',
    date: 'Dec 7, 2024',
    link: 'https://medium.com/@esdlaboratory/animasi-web-reactjs-gsap-vs-vanilla-css-e4368cba92e0',
    image: '/images/artikel/Gif_GSAPvsVanillaCSS.gif',
  },
  {
    title: 'Laravel dengan Tailwind CSS vs Bootstrap: Pilihan Mana yang Tepat untuk Proyek Anda?',
    readTime: '3 min read',
    date: 'Nov 25, 2024',
    link: 'https://medium.com/@esdlaboratory/laravel-dengan-tailwind-css-vs-bootstrap-pilihan-mana-yang-tepat-untuk-proyek-anda-ebd7973a7bcf',
    image: '/images/logo.png',
  },
  {
    title: 'Component Party: Panduan bagi kamu yang ingin memahami berbagai framework Frontend JavaScript!',
    readTime: '4 min read',
    date: 'Nov 20, 2024',
    link: 'https://medium.com/@esdlaboratory/component-party-panduan-bagi-kamu-yang-ingin-memahami-berbagai-framework-frontend-javascript-5e58aa833b44',
    image: '/images/artikel/thumbnailComponentParty.webp',
  },
]

export default function Articles() {
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
              <span className="text-xs font-semibold text-primary tracking-wide uppercase">Blog</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-3">
              <span className="text-gray-900">Our </span>
              <span className="text-primary">Articles</span>
            </h1>
            <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto">
              Insight, tutorial, dan opini seputar teknologi dari tim EISD Laboratory.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Featured (first article) */}
      <section className="px-4 pb-8">
        <div className="max-w-5xl mx-auto">
          <FadeIn direction="up" delay={0.15}>
            <a
              href={articles[0].link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <div className="relative h-56 md:h-72">
                  <Image
                    src={articles[0].image}
                    alt={articles[0].title}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                </div>
                <div className="flex flex-col justify-center p-6 md:p-8">
                  <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                    <span className="bg-primary/10 text-primary font-semibold px-2.5 py-0.5 rounded-full">Featured</span>
                    <span>{articles[0].date}</span>
                    <span>·</span>
                    <span>{articles[0].readTime}</span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-200 mb-3 leading-tight">
                    {articles[0].title}
                  </h2>
                  <div className="flex items-center gap-1.5 text-sm font-medium text-primary">
                    <span>Read on Medium</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          </FadeIn>
        </div>
      </section>

      {/* Article Grid */}
      <section className="px-4 pb-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {articles.slice(1).map((article, index) => {
              const isLogo = article.image === '/images/logo.png'
              return (
                <FadeIn key={article.link} direction="up" delay={0.05 * (index + 1)}>
                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden h-full"
                  >
                    {/* Thumbnail */}
                    <div className={`relative h-40 ${isLogo ? 'bg-gray-50' : ''}`}>
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className={`group-hover:scale-[1.03] transition-transform duration-500 ${
                          isLogo ? 'object-contain p-6' : 'object-cover'
                        }`}
                        unoptimized={article.image.endsWith('.gif')}
                      />
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      <div className="flex items-center gap-1.5 text-[11px] text-gray-400 mb-2">
                        <span>{article.date}</span>
                        <span>·</span>
                        <span>{article.readTime}</span>
                      </div>
                      <h3 className="text-sm font-semibold text-gray-900 group-hover:text-primary transition-colors duration-200 leading-snug line-clamp-3">
                        {article.title}
                      </h3>
                      <div className="flex items-center gap-1 mt-3 text-xs font-medium text-primary">
                        <span>Read more</span>
                        <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </a>
                </FadeIn>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA — More on Medium */}
      <section className="px-4 pb-16">
        <div className="max-w-5xl mx-auto text-center">
          <FadeIn direction="up" delay={0.2}>
            <p className="text-gray-400 text-sm mb-4">Lihat semua artikel kami di Medium</p>
            <a
              href="https://medium.com/@esdlaboratory"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-full text-sm font-semibold transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
              </svg>
              Follow on Medium
            </a>
          </FadeIn>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </main>
  )
}
