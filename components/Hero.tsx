'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import NeuralNetwork from './NeuralNetwork'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900"
    >
      {/* Particle Background */}
      <div className="absolute inset-0 particles">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <div className="text-center md:text-left">
            <motion.h1
              variants={itemVariants}
              className="text-6xl md:text-8xl font-bold mb-4"
            >
              <span className="text-white">Harshit Preetam R</span>
            </motion.h1>
            
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-300 mb-6"
            >
              AI Graduate | NLP & Computer Vision Specialist
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-gray-400 mb-8 max-w-xl"
            >
              Specializing in Large Language Models, Computer Vision, and Edge AI Deployment.
              Passionate about building intelligent systems that solve real-world problems.
            </motion.p>

            {/* Contact Info */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 justify-center md:justify-start mb-8"
            >
              <a
                href="https://maps.google.com/?q=Hyderabad,India"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-300 hover:text-purple-400 transition-colors"
              >
                <FiMapPin />
                <span>Hyderabad, India</span>
              </a>
              <a
                href="mailto:rampalliharshit@gmail.com"
                className="flex items-center space-x-2 text-gray-300 hover:text-purple-400 transition-colors"
              >
                <FiMail />
                <span>rampalliharshit@gmail.com</span>
              </a>
              <a
                href="tel:+918792738152"
                className="flex items-center space-x-2 text-gray-300 hover:text-purple-400 transition-colors"
              >
                <FiPhone />
                <span>+91 8792738152</span>
              </a>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex gap-4 justify-center md:justify-start"
            >
              <a
                href="#projects"
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all transform hover:scale-105"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border-2 border-purple-500 rounded-lg font-semibold hover:bg-purple-500/20 transition-all"
              >
                Get In Touch
              </a>
            </motion.div>
          </div>

          {/* Right 3D Animation */}
          <motion.div
            variants={itemVariants}
            className="h-[500px] w-full hidden md:block"
          >
            <Canvas>
              <PerspectiveCamera makeDefault position={[0, 0, 5]} />
              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <NeuralNetwork />
            </Canvas>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-purple-400 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  )
}

