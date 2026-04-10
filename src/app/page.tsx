import Header from '@/components/Header'
import Hero from '@/components/Hero'
import SwiftChallenge from '@/components/SwiftChallenge'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="relative bg-[#1A1A1A] min-h-screen">
      {/* Global Smooth Glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-orange-500/10 blur-[150px] rounded-full"></div>
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-orange-500/5 blur-[130px] rounded-full"></div>
        <div className="absolute bottom-[20%] left-[-5%] w-[550px] h-[550px] bg-orange-500/5 blur-[140px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-orange-500/10 blur-[150px] rounded-full"></div>
      </div>

      <div className="relative z-10">
        <Header />
        <Hero />
        <SwiftChallenge />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </main>
  )
}
