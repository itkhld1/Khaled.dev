'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#1A1A1A] relative overflow-hidden">
      {/* Orange cube decorations */}
      <div className="absolute top-4 right-4 w-16 h-16 transform rotate-45 bg-orange-500/20"></div>
      <div className="absolute bottom-4 left-4 w-12 w-12 transform rotate-12 bg-orange-500/20"></div>
      
      <div className="max-w-[1100px] mx-auto px-6 w-full">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-gray-400 mb-4"
            >
              ⎯ Hello
            </motion.p>
            <h2 className="text-5xl text-white mb-4 flex items-center justify-center gap-2">
              <span className="font-normal">I&apos;m</span>{' '}
              <TypeAnimation
                sequence={[
                  'Khaled Samim',
                  2000,
                  'an  Developer',
                  2000,
                  'a Creator',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                className="font-bold text-orange-500"
                repeat={Infinity}
              />
            </h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-gray-500 text-lg mb-8 font-semibold"
            >
              developer
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-gray-300 text-lg mb-8"
            >
              I&apos;m a passionate developer who loves building elegant and intuitive applications. Exploring the magic of coding fuels my creativity and problem-solving skills. I&apos;m constantly learning and pushing the boundaries of what&apos;s possible.
            </motion.p>

            {/* Social Media Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex justify-center space-x-6 mb-8"
            >
              <a
                href="https://github.com/itkhld1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-orange-500 transition-colors text-2xl"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="mailto:khalidsamim321@gmail.com"
                className="text-white hover:text-orange-500 transition-colors text-2xl"
              >
                <i className="fas fa-envelope"></i>
              </a>
              <a
                href="https://wa.me/00905558791740"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-orange-500 transition-colors text-2xl"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
              <a
                href="https://instagram.com/itkhld"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-orange-500 transition-colors text-2xl"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </motion.div>

            <motion.a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="inline-block bg-orange-500 text-white px-8 py-3 rounded-md hover:bg-orange-600 transition-colors"
              download
            >
              Download CV
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero 