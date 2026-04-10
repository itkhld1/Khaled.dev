'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const SwiftChallenge = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const awards = [
    {
      subtitle: 'Official Recognition',
      title: 'Apple Swift Student Challenge Winner 2026',
      description: 'Selected by Apple as one of the global winners for demonstrating exceptional creativity, technical skill, and the power of coding to solve real-world problems. My winning submission focused on creating an interactive experience that combines intuitive design with advanced iOS frameworks.',
      points: [
        { title: 'Innovation', detail: 'Pushing the limits of SwiftUI and ARKit.' },
        { title: 'Impact', detail: 'Designed with accessibility at its core.' }
      ],
      type: 'video',
      media: '/SSCW.mp4'
    },
    {
      subtitle: 'Apple Park Event',
      title: 'WWDC26 Special Event Invitation',
      description: 'Selected to join Apple at the special event at Apple Park on June 8, 2026. This invitation is a recognition of passion for the Apple ecosystem and provides a unique opportunity to connect with developers and witness the future of technology at its heart.',
      points: [
        { title: 'Community', detail: 'Connecting with global developers at Apple Park.' },
        { title: 'Excellence', detail: 'Recognized for contributions to the ecosystem.' }
      ],
      type: 'image',
      media: '/ApplePark.jpg'
    }
  ]

  const nextAward = () => {
    setCurrentIndex((prev) => (prev + 1) % awards.length)
  }

  const currentAward = awards[currentIndex]

  return (
    <section id="award" className="py-24 bg-[#1A1A1A] relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/10 blur-[120px] rounded-full transition-colors duration-500"></div>
      
      <div className="max-w-[1100px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={`award-content-${currentIndex}`}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border-orange-500/20 border mb-6 transition-colors">
                <span className="text-orange-500 text-xs font-bold uppercase tracking-wider">
                  {currentAward.subtitle}
                </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                {currentAward.title.split(' Winner 2026')[0]}
                {currentAward.title.includes('Winner 2026') && (
                  <><br /><span className="text-orange-500">Winner 2026</span></>
                )}
              </h2>
              
              <p className="text-gray-400 text-lg mb-8 leading-relaxed h-[120px]">
                {currentAward.description}
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {currentAward.points.map((point, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/10">
                    <h4 className="text-white font-bold mb-1">{point.title}</h4>
                    <p className="text-sm text-gray-500">{point.detail}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="relative group cursor-pointer" onClick={nextAward}>
            <AnimatePresence mode="wait">
              <motion.div
                key={`award-card-${currentIndex}`}
                initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.9, rotate: 5 }}
                transition={{ duration: 0.5 }}
                className="relative aspect-square max-w-[400px] mx-auto"
              >
                {/* Layered Cards Effect */}
                <div className="absolute inset-0 bg-orange-500/10 rounded-[2.5rem] rotate-6 scale-95 transition-transform group-hover:rotate-12"></div>
                
                <div className="absolute inset-0 bg-[#2A2A2A] rounded-[2.5rem] border border-white/10 flex items-center justify-center overflow-hidden shadow-2xl transition-all group-active:scale-95">
                  {currentAward.type === 'video' ? (
                    <video 
                      src={currentAward.media} 
                      autoPlay 
                      loop 
                      muted 
                      playsInline 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <Image
                      src={currentAward.media}
                      alt={currentAward.title}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-3 mt-12">
              {awards.map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 transition-all duration-300 rounded-full ${
                    currentIndex === i ? 'w-8 bg-orange-500' : 'w-4 bg-white/10'
                  }`}
                ></div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default SwiftChallenge
