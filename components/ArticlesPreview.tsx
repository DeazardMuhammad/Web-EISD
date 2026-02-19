'use client'

import Image from 'next/image'
import SectionHeading from './SectionHeading'

const articles = [
  {
    title: 'Dampak AI Terhadap Skillset Developer: Adaptasi atau Tersingkir?',
    readTime: '7 min read',
    date: 'May 16, 2025',
    link: 'https://medium.com/@esdlaboratory/dampak-ai-terhadap-skillset-developer-adaptasi-atau-tersingkir-bf582b0d1302',
    image: '/images/artikel/thumbnailDampakAI.webp',
    accent: 'bg-red-500',
  },
  {
    title: 'MONOLITHIC VS MICROSERVICES ARCHITECTURE: Which to Use?',
    readTime: '5 min read',
    date: 'Apr 27, 2025',
    link: 'https://medium.com/@esdlaboratory/monolithic-vs-microservices-architecture-which-to-use-a64afb037290',
    image: '/images/artikel/thumbnailMONOLITHICvsMICROSERVICES.webp',
    accent: 'bg-blue-500',
  },
  {
    title: 'Jetpack Compose vs XML: Masa Depan UI Development di Android?',
    readTime: '3 min read',
    date: 'Mar 31, 2025',
    link: 'https://medium.com/@esdlaboratory/jetpack-compose-vs-xml-masa-depan-ui-development-di-android-24bde3fe0a6c',
    image: '/images/artikel/thumbnailJetpackCompose.webp',
    accent: 'bg-emerald-500',
  },
  {
    title: 'HTTP vs WebSocket: Mana yang Cocok untuk Proyek Web Kamu?',
    readTime: '6 min read',
    date: 'Mar 6, 2025',
    link: 'https://medium.com/@esdlaboratory/http-vs-websocket-mana-yang-cocok-untuk-proyek-web-kamu-52f7012e66fc',
    image: '/images/artikel/ThumbnailHTTPvsWebSocket.webp',
    accent: 'bg-purple-500',
  },
]

export default function ArticlesPreview() {
  const featured = articles[0]
  const sideArticles = articles.slice(1)

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Blog"
          title="Latest Articles"
          subtitle="Insight dan tutorial teknologi dari tim EISD Laboratory."
        />

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* ── Left: Featured article (large) ── */}
          <a
            href={featured.link}
            target="_blank"
            rel="noopener noreferrer"
            className="lg:col-span-7 group block relative rounded-2xl overflow-hidden min-h-[320px] md:min-h-[400px]"
          >
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-white/20 backdrop-blur-sm text-white text-[11px] font-semibold px-2.5 py-0.5 rounded-full">
                  Featured
                </span>
                <span className="text-white/60 text-xs">{featured.date}</span>
                <span className="text-white/40 text-xs">·</span>
                <span className="text-white/60 text-xs">{featured.readTime}</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white leading-tight mb-2 group-hover:text-accent-green transition-colors duration-300">
                {featured.title}
              </h3>
              <div className="flex items-center gap-1.5 text-sm font-medium text-white/70 group-hover:text-white transition-colors">
                <span>Read on Medium</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </a>

          {/* ── Right: Stacked list + CTA ── */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {sideArticles.map((article) => (
              <a
                key={article.link}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 bg-white rounded-xl p-4 border border-gray-100 hover:border-primary/20 hover:shadow-md transition-all duration-300"
              >
                <div className={`w-1 self-stretch rounded-full flex-shrink-0 ${article.accent}`} />

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 text-[11px] text-gray-400 mb-1.5">
                    <span>{article.date}</span>
                    <span>·</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h4 className="text-sm font-semibold text-gray-900 group-hover:text-primary transition-colors duration-200 leading-snug line-clamp-2">
                    {article.title}
                  </h4>
                </div>

                <svg className="w-4 h-4 text-gray-300 group-hover:text-primary flex-shrink-0 mt-1 group-hover:translate-x-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            ))}

            <a
              href="/articles"
              className="group flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white rounded-xl py-3.5 px-5 text-sm font-semibold transition-colors duration-200 mt-auto"
            >
              <span>All Articles</span>
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
