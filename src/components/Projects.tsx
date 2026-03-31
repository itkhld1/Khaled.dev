'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence, color } from 'framer-motion'
import { title } from 'process'
import { link } from 'fs'

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const projects = [
    {
      title: 'Zeytin',
      description: 'Zeytin is an AI-powered mobile assistant designed to empower olive farmers and enthusiasts. Developed with a focus on the rich olive heritage of the Aegean region, Zeytin uses on-device Machine Learning to provide real-time insights into olive health and harvest readiness.',
      tech: ['Swift', 'SwiftUI', 'Xcode', 'CoreML', 'wwdc'],
      link: 'https://github.com/itkhld1/Zeytin-Swift',
      isWinner: true,
      color: 'from-purple-500/20 to-purple-600/20'
    },
    {
      title: 'Planet',
      description: 'Planet is an interactive iOS app built with Swift and SwiftUI, designed to visualize our solar system in a beautiful, educational, and dynamic way.',
      tech: ['Swift', 'UIKit', 'CoreAnimation', 'Xcode'],
      link: 'https://github.com/itkhld1/Planet',
      color: 'from-green-500/20 to-green-600/20'
    },
    {
      title: 'WhatAmI',
      description: 'An innovative app that helps users discover and explore new categories with an engaging interface. Winner of the 2026 Apple Swift Student Challenge.',
      tech: ['Swift', 'UIKit', 'CoreData', 'Xcode'],
      link: 'https://github.com/itkhld1/WhatAmI-',
      color: 'from-orange-500/20 to-orange-600/20'
    },
    { 
      title: 'Quote',
      description: 'Daily Motivation is a sleek and simple Apple Watch app designed to uplift your day with powerful and inspiring quotes. Whether you are starting your morning or need a midday boost, this app is here to fuel your mindset—right from your wrist.',
      tech: ['Swift', 'SwiftUI', 'WatchKit','Xcode'],
      link: 'https://github.com/itkhld1/Quote',
      color: 'from-yellow-500/20 to-yellow-600/20'
    },
    {
      title: 'First Aid Guide',
      description: 'An offline mobile app providing essential first aid techniques with step-by-step instructions and voice guidance for emergency situations.',
      tech: ['Swift', 'SwiftUI', 'CoreLocation', 'Xcode'],
      link: 'https://github.com/itkhld1/FirstAidGuide',
      color: 'from-blue-500/20 to-blue-600/20'
    },
    {
      title: 'Font Customizer',
      description: 'An iOS app that lets users preview, customize, and copy text in various fonts and styles as images for social media and design.',
      tech: ['Swift', 'Xcode', 'SwiftUI'],
      link: 'https://github.com/itkhld1/Font',
      color: 'from-purple-500/20 to-purple-600/20'
    }
  ]

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }

  return (
    <section id="projects" className="py-24 bg-[#1A1A1A] relative overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Project Details */}
          <motion.div
            key={`content-${currentIndex}`}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <span className="text-orange-500 text-xs font-bold uppercase tracking-wider">Featured Project</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {projects[currentIndex].title}
            </h2>
            
            <p className="text-gray-400 text-lg mb-8 leading-relaxed h-[120px] line-clamp-4">
              {projects[currentIndex].description}
            </p>
            
            <div className="flex flex-wrap gap-3 mb-8">
              {projects[currentIndex].tech.map((tech, i) => (
                <span key={i} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white/70 text-sm">
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={projects[currentIndex].link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-orange-500 text-white px-8 py-4 rounded-2xl font-bold hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20"
            >
              View Repository
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </motion.div>

          {/* Project Switcher Card (Award/Memoji Style) */}
          <div className="relative group cursor-pointer" onClick={nextProject}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.9, rotate: 5 }}
                transition={{ duration: 0.5 }}
                className="relative aspect-square max-w-[420px] mx-auto"
              >
                {/* Layered Cards Effect */}
                <div className="absolute inset-0 bg-orange-500/10 rounded-[2.5rem] rotate-6 scale-95 transition-transform group-hover:rotate-12"></div>
                <div className={`absolute inset-0 bg-gradient-to-br ${projects[currentIndex].color} rounded-[2.5rem] border border-white/10 flex items-center justify-center overflow-hidden shadow-2xl backdrop-blur-xl transition-all group-active:scale-95`}>
                  
                  {/* Project Icon/Symbol Area */}
                  <div className="text-8xl md:text-9xl font-bold text-white/20 select-none">
                    {projects[currentIndex].title.charAt(0)}
                  </div>

                  <div className="absolute top-8 right-8 text-white/30 font-mono text-xl">
                    0{currentIndex + 1}
                  </div>

                  <div className="absolute bottom-10 left-0 right-0 text-center flex flex-col items-center">
                    <span className="text-white font-bold text-xl mb-1">{projects[currentIndex].title}</span>
                    <span className="text-white/40 text-xs uppercase tracking-widest">Click to Switch</span>
                  </div>

                  {/* Winner Badge on Card */}
                  {projects[currentIndex].isWinner && (
                    <div className="absolute top-8 left-8">
                      <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-white text-xs"></span>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Hint */}
            <div className="flex justify-center gap-3 mt-12">
              {projects.map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 transition-all duration-300 rounded-full ${currentIndex === i ? 'w-8 bg-orange-500' : 'w-4 bg-white/10'}`}
                ></div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Projects
