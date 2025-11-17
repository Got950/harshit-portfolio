'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section
      id="about"
      ref={ref}
      className="section bg-gradient-to-b from-gray-900 to-black relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            <span className="gradient-text">About Me</span>
          </h2>

          <div className="glass rounded-2xl p-8 md:p-12">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              AI graduate with hands-on experience in Python-based projects focused on NLP 
              and computer vision. Experienced with tools like TensorFlow, YOLO, and NLTK. 
              Currently expanding skills in web development and API design to build scalable, 
              real-world applications. Enthusiastic about learning cloud technologies and 
              contributing to impactful tech teams.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I specialize in Large Language Models (LLMs), RLHF, NLP, ASR (Speech Recognition), 
              TTS (Speech Synthesis), Computer Vision, Object Detection and Tracking, and Edge AI 
              Deployment. My work spans from building facial recognition systems on Raspberry Pi 
              to developing real-time vehicle classification pipelines using YOLOv8.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              Currently working as an AI Intern/Trainee at SSEV SoftSols Pvt Ltd, where I've 
              built production systems achieving 98% recognition accuracy and 95% classification 
              accuracy. I'm passionate about creating intelligent solutions that bridge the gap 
              between research and real-world applications.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


