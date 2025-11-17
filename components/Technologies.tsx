'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  SiPython,
  SiJavascript,
  SiTensorflow,
  SiPytorch,
  SiOpencv,
  SiGit,
  SiLinux,
  SiRaspberrypi,
  SiNvidia,
} from 'react-icons/si'
import { TbBrandCpp } from 'react-icons/tb'

interface Skill {
  name: string
  icon: React.ReactNode
  level: number
  category: 'language' | 'framework' | 'tool' | 'hardware'
}

const skills: Skill[] = [
  // Languages
  { name: 'Python', icon: <SiPython />, level: 95, category: 'language' },
  { name: 'Shell Scripting', icon: <SiLinux />, level: 80, category: 'language' },
  { name: 'SQL', icon: <SiPython />, level: 85, category: 'language' },
  { name: 'JavaScript', icon: <SiJavascript />, level: 60, category: 'language' },
  { name: 'C++', icon: <TbBrandCpp />, level: 70, category: 'language' },
  
  // Frameworks & Libraries
  { name: 'TensorFlow', icon: <SiTensorflow />, level: 90, category: 'framework' },
  { name: 'PyTorch', icon: <SiPytorch />, level: 88, category: 'framework' },
  { name: 'OpenCV', icon: <SiOpencv />, level: 92, category: 'framework' },
  
  // Tools
  { name: 'Git', icon: <SiGit />, level: 85, category: 'tool' },
  { name: 'Linux', icon: <SiLinux />, level: 90, category: 'tool' },
  
  // Hardware
  { name: 'Raspberry Pi', icon: <SiRaspberrypi />, level: 88, category: 'hardware' },
  { name: 'NVIDIA Jetson', icon: <SiNvidia />, level: 85, category: 'hardware' },
]

const specializations = [
  'Large Language Models (LLMs)',
  'Retrieval-Augmented Generation (RAG)',
  'RLHF',
  'NLP',
  'ASR (Speech Recognition)',
  'TTS (Speech Synthesis)',
  'Computer Vision',
  'Object Detection and Tracking',
  'Edge AI Deployment',
  'Data Preprocessing and Pipelines',
  'Vector Databases',
  'Prompt Engineering',
]

export default function Technologies() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section
      id="technologies"
      ref={ref}
      className="section bg-gradient-to-b from-black to-gray-900 relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
        >
          <span className="gradient-text">Technical Skills</span>
        </motion.h2>

        {/* Skills Cloud */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-16"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.1, y: -5 }}
              className="glass rounded-xl p-6 flex flex-col items-center justify-center hover:shadow-lg hover:shadow-purple-500/20 transition-all group"
            >
              <div className="text-4xl mb-3 text-purple-400 group-hover:text-purple-300 transition-colors">
                {skill.icon}
              </div>
              <h3 className="text-sm font-semibold text-gray-300 text-center mb-2">
                {skill.name}
              </h3>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <motion.div
                  className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Specializations */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center gradient-text">
            Specializations
          </h3>
          <div className="glass rounded-2xl p-8">
            <div className="flex flex-wrap gap-3 justify-center">
              {specializations.map((spec, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-full text-gray-300 hover:border-purple-400 hover:text-purple-300 transition-all cursor-default"
                >
                  {spec}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Additional Frameworks */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-4xl mx-auto mt-12"
        >
          <h3 className="text-xl md:text-2xl font-bold mb-6 text-center text-gray-300">
            Frameworks & Libraries
          </h3>
          <div className="glass rounded-2xl p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {[
                'TensorFlow',
                'PyTorch',
                'Keras',
                'Scikit-learn',
                'Hugging Face',
                'Sentence Transformers',
                'LangChain',
                'LlamaIndex',
                'ChromaDB',
                'Pinecone',
                'YOLOv5/v8',
                'Mediapipe',
                'OpenCV',
                'NLTK',
                'TextBlob',
                'Transformers',
              ].map((framework, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.6 + index * 0.05 }}
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  {framework}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


