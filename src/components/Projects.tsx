'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Projects = () => {
  const projects = [
    {
      title: 'WhatAmI',
      description: 'An innovative app that helps users discover and explore new categories with an engaging interface.',
      tech: ['Swift', 'UIKit', 'CoreData', 'Xcode'],
      image: '/whatami.png',
      link: 'https://github.com/itkhld1/WhatAmI-'
    },
    {
      title: 'First Aid Guide',
      description: 'An offline mobile app providing essential first aid techniques with step-by-step instructions and voice guidance.',
      tech: ['Swift', 'SwiftUI', 'CoreLocation', 'Xcode'],
      image: '/first-aid.png',
      link: 'https://github.com/itkhld1/FirstAidGuide'
    },
    {
      title: 'Font',
      description: 'Font Customizer is an iOS app that lets users preview, customize, and copy text in various fonts and styles as images.',
      tech: ['Swift', 'Xcode', 'SwiftUI'],
      image: '/font.png',
      link: 'https://github.com/itkhld1/Font'
    }
  ]

  return (
    <section id="projects" className="min-h-screen bg-[#1A1A1A] py-20 relative">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-20 h-20 transform rotate-45 bg-orange-500/10"></div>
      <div className="absolute bottom-10 left-10 w-16 h-16 transform -rotate-12 bg-orange-500/10"></div>

      <div className="max-w-[1100px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Projects</h2>
          <p className="text-gray-400">Check out some of my recent work, Click on the project to view the code. Find more projects on my GitHub</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              {/* Phone Frame */}
              <div className="relative mx-auto w-[280px] h-[580px] rounded-[3rem] border-[14px] border-gray-800 overflow-hidden shadow-xl bg-gray-800">
                {/* Status Bar */}
                <div className="absolute top-0 inset-x-0 h-6 bg-black rounded-t-2xl">
                  <div className="absolute top-1.5 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-700 rounded-full"></div>
                </div>
                
                {/* Project Image */}
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-sm text-gray-300 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 text-xs text-orange-500 bg-orange-500/10 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
      
      {/* Copyright Footer */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mt-20 text-gray-400 text-sm"
      >
        © 2025 <a 
          href="https://github.com/itkhld1" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white-500 hover:text-orange-400 transition-colors"
        >
          KHALID SAMIM
        </a>
      </motion.div>
    </section>
  )
}

export default Projects 