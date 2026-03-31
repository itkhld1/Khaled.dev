'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const SwiftChallenge = () => {
  return (
    <section id="award" className="py-24 bg-[#1A1A1A] relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/10 blur-[120px] rounded-full"></div>
      
      <div className="max-w-[1100px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <span className="text-orange-500 text-xs font-bold uppercase tracking-wider">Official Recognition</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Apple Swift Student <br />
              <span className="text-orange-500">Challenge Winner 2026</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Selected by Apple as one of the global winners for demonstrating exceptional 
              creativity, technical skill, and the power of coding to solve real-world problems. 
              My winning submission focused on creating an interactive experience that 
              combines intuitive design with advanced iOS frameworks.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <h4 className="text-white font-bold mb-1">Innovation</h4>
                <p className="text-sm text-gray-500">Pushing the limits of SwiftUI and ARKit.</p>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <h4 className="text-white font-bold mb-1">Impact</h4>
                <p className="text-sm text-gray-500">Designed with accessibility at its core.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square max-w-[400px] mx-auto">
              {/* This represents the Award/Memoji area */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 rounded-[2.5rem] rotate-6 opacity-20"></div>
              <div className="absolute inset-0 bg-[#2A2A2A] rounded-[2.5rem] border border-white/10 flex items-center justify-center overflow-hidden shadow-2xl">
                <div className="text-9xl"></div>
                <div className="absolute bottom-8 left-0 right-0 text-center">
                  <span className="text-orange-500 font-mono text-sm">Class of 2026</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default SwiftChallenge 
