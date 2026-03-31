'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#1A1A1A] relative overflow-hidden pt-20">
      {/* Dynamic Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-orange-600/10 blur-[100px] rounded-full"></div>
      
      <div className="max-w-[1100px] mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
              <span className="text-gray-400 text-xs font-medium tracking-wide uppercase">Available for new projects</span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight font-jakarta">
              <span className="font-normal block text-2xl md:text-3xl mb-2 text-gray-400">Hello, I&apos;m</span>
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
                className="text-orange-500"
                repeat={Infinity}
              />
            </h1>

            <p className="text-gray-400 text-lg md:text-xl mb-10 leading-relaxed max-w-lg font-jakarta">
              I build elegant and intuitive applications that live at the intersection of design and technology. As an 
              <span className="text-white font-semibold"> Apple Swift Student Challenge Winner</span>, I focus on creating seamless experiences on the Apple ecosystem.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6 mb-12">
              <motion.a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-4 bg-orange-500 text-white rounded-2xl font-bold hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/20 text-center"
              >
                View CV
              </motion.a>
              
              <div className="flex items-center gap-6">
                <a
                  href="https://github.com/itkhld1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors text-2xl"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href="mailto:khalidsamim321@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors text-2xl"
                >
                  <i className="fas fa-envelope"></i>
                </a>
                <a
                  href="https://wa.me/+905558791740"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors text-2xl"
                >
                  <i className="fab fa-whatsapp"></i>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Visual Element / Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-[450px] h-[450px] mx-auto">
              {/* Decorative Rings */}
              <div className="absolute inset-0 border border-white/5 rounded-full animate-[spin_20s_linear_infinite]"></div>
              <div className="absolute inset-4 border border-orange-500/10 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
              
              {/* Image Container */}
              <div className="absolute inset-12 bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] rounded-[3rem] border border-white/10 overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-orange-500/5 group-hover:bg-orange-500/10 transition-colors"></div>
                {/* Fallback to stylized  if Subject.PNG isn't used or doesn't fit */}
                <div className="absolute inset-0 flex items-center justify-center text-[180px] text-white/5 font-bold select-none">
                  
                </div>
                {/* If you want to use your photo, uncomment below and ensure Subject.PNG is correct */}
                {/* <Image 
                  src="/Subject.PNG" 
                  alt="Khaled Samim" 
                  fill 
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                /> */}
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 right-10 px-4 py-2 bg-orange-500 rounded-xl shadow-xl z-20"
              >
                <span className="text-white text-xs font-bold uppercase tracking-widest">Class of 2026</span>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Hero
