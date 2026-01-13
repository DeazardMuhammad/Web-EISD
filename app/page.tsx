import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import FocusArea from '@/components/FocusArea'
import Divisions from '@/components/Divisions'
import Highlights from '@/components/Highlights'
import RecruitmentForm from '@/components/RecruitmentForm'
import Footer from '@/components/Footer'
import FadeIn from '@/components/FadeIn'
import ScrollProgressBar from '@/components/ScrollProgressBar'
import BackToTop from '@/components/BackToTop'

export default function Home() {
  return (
    <main className="min-h-screen">
      <ScrollProgressBar />
      <Navbar />
      
      <FadeIn direction="up" delay={0.2}>
        <Hero />
      </FadeIn>
      
      <FadeIn direction="up" delay={0.3}>
        <FocusArea />
      </FadeIn>
      
      <FadeIn direction="up" delay={0.4}>
        <Divisions />
      </FadeIn>
      
      <FadeIn direction="up" delay={0.5}>
        <Highlights />
      </FadeIn>
      
      {/* <FadeIn direction="up" delay={0.6}>
        <RecruitmentForm />
      </FadeIn> */}
      
      <Footer />
      <BackToTop />
    </main>
  )
}
