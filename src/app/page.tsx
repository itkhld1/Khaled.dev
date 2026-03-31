import Header from '@/components/Header'
import Hero from '@/components/Hero'
import SwiftChallenge from '@/components/SwiftChallenge'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="relative bg-[#1A1A1A]">
      <Header />
      <Hero />
      <SwiftChallenge />
      <Projects />
      <Skills />
      <Contact />
    </main>
  )
} 
