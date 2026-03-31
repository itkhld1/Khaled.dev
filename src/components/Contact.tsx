'use client'
import React from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-[#1A1A1A] relative">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          {/* Decorative shapes */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-black/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let&apos;s build something <br className="hidden md:block" /> amazing together.
            </h2>
            <p className="text-white/80 text-lg mb-12 max-w-2xl mx-auto">
              Currently open to new opportunities and interesting projects. 
              Whether you have a question or just want to say hi, my inbox is always open!
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <a
                href="mailto:khalidsamim321@gmail.com"
                className="w-full md:w-auto px-8 py-4 bg-white text-orange-600 rounded-2xl font-bold hover:bg-gray-100 transition-colors shadow-xl"
              >
                Send an Email
              </a>
              <a
                href="https://wa.me/+905558791740"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto px-8 py-4 bg-black/20 text-white border border-white/20 rounded-2xl font-bold hover:bg-black/30 transition-colors backdrop-blur-sm"
              >
                WhatsApp Me
              </a>
            </div>
            
            <div className="mt-16 flex justify-center space-x-8 mb-12">
              <a href="https://github.com/itkhld1" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">Github</a>
              <a href="https://instagram.com/itkhld" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">Instagram</a>
            </div>

            <div className="pt-8 border-t border-white/10 text-white/40 text-sm">
              © 2026 <a href="https://github.com/itkhld1" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-orange-500 transition-colors">KHALID SAMIM</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
