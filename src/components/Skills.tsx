'use client'
import React from 'react'
import { motion } from 'framer-motion'

const Skills = () => {
  const skills = ['Swift', 'SwiftUI', 'Xcode']

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-[1100px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold text-white mb-3 font-montserrat text-balance">Technical Expertise</h2>
          <p className="text-sm text-gray-400 font-inter">Core technologies I use to build world-class iOS applications</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 hover:border-orange-500/30 transition-all hover:translate-y-[-2px] group"
            >
              <span className="text-lg md:text-xl font-bold text-gray-400 group-hover:text-orange-500 transition-colors font-montserrat">
                {skill}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
