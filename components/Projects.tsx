'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

interface Project {
  title: string
  period: string
  description: string
  technologies: string[]
  achievements?: string[]
  github?: string
  demo?: string
}

const projects: Project[] = [
  {
    title: 'NFC Payment System with RAG Assistant',
    period: 'Mar 2025 – June 2025',
    description:
      'Cloud-integrated NFC payment platform with merchant and customer dashboards, real-time wallet sync, and sub-1s latency transactions. Integrated Supabase for scalable storage and a RAG-powered AI assistant using LangChain, vector embeddings, and document retrieval for intelligent transaction insights and customer support.',
    technologies: ['Flask', 'SQLite', 'Supabase', 'NFC', 'JS', 'LangChain', 'RAG', 'Vector DB'],
    achievements: [
      'Sub-1s transaction latency',
      'Real-time wallet synchronization',
      'RAG-powered transaction insights with context-aware responses',
      'Vector-based document retrieval for customer queries',
    ],
  },
  {
    title: 'Multimodal AI Agent',
    period: 'Nov 2024 – Feb 2025',
    description:
      'Multimodal agent integrating voice (Whisper) and gesture (Mediapipe) inputs for edge automation on Jetson hardware, leveraging cloud inference for high-accuracy, real-time control.',
    technologies: ['Python', 'Whisper', 'Mediapipe', 'DepthAI', 'Jetson'],
    achievements: [
      'Fully offline inference',
      '90% command accuracy',
      'Real-time gesture and voice recognition',
    ],
  },
  {
    title: 'Autonomous Ball Detection & Dropping Robot',
    period: 'Jan 2024 – Aug 2024',
    description:
      'Vision-guided robot for competitive ball sorting, integrating YOLOv8 for real-time detection with sub-50ms inference and optimized control for high-speed, precision drops in dynamic environments.',
    technologies: ['YOLOv8', 'Xavier', 'Computer Vision', 'Robotics'],
    achievements: [
      'Sub-50ms inference time',
      '80% drop accuracy in dynamic conditions',
      'Designed for Abu Robocon competition',
    ],
  },
  {
    title: 'Facial Recognition Attendance System',
    period: 'Jan 2025 – Present',
    description:
      'Built a facial recognition attendance system on Raspberry Pi, integrating cloud dashboards for automated logging and validation. Reduced manual entry time by 90% and achieved 98% recognition accuracy.',
    technologies: ['Python', 'OpenCV', 'Raspberry Pi', 'Cloud Dashboard'],
    achievements: [
      '98% recognition accuracy',
      '90% reduction in manual entry time',
      'Real-time cloud synchronization',
    ],
  },
  {
    title: 'YOLOv8 Vehicle Classification for ANPR',
    period: 'Jan 2025 – Present',
    description:
      'YOLOv8-powered vehicle classification pipeline for ANPR, integrating real-time RTSP CCTV streaming with Python and OpenCV. Achieved 95% classification accuracy and improved stream stability by 80%.',
    technologies: ['YOLOv8', 'Python', 'OpenCV', 'RTSP', 'CCTV'],
    achievements: [
      '95% classification accuracy',
      '80% improvement in stream stability',
      'Real-time RTSP processing',
    ],
  },
  {
    title: 'Twitter Sentiment Analysis',
    period: 'Nov 2023 – Dec 2023',
    description:
      'Live sentiment monitoring pipeline for Twitter data, using NLP and transformer embeddings to track public opinion. Processed 1k+ tweets/day and generated visual analytics with word clouds and trend plots.',
    technologies: ['Python', 'NLTK', 'TextBlob', 'Transformer Embeddings'],
    achievements: [
      'Processed 1k+ tweets/day',
      'Real-time sentiment tracking',
      'Interactive visual analytics',
    ],
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section
      id="projects"
      ref={ref}
      className="section bg-gradient-to-b from-gray-900 to-black relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
        >
          <span className="gradient-text">Projects</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div className="glass rounded-2xl p-6 h-full flex flex-col hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold gradient-text mb-2">{project.title}</h3>
                  <p className="text-purple-400 text-sm">{project.period}</p>
                </div>

                <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-purple-500/20 rounded-full text-xs text-purple-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {project.achievements && (
                  <ul className="mb-4 space-y-1">
                    {project.achievements.map((achievement, i) => (
                      <li key={i} className="text-sm text-gray-400 flex items-start">
                        <span className="text-purple-400 mr-2">✓</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="flex gap-4 mt-auto">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-400 hover:text-purple-400 transition-colors"
                    >
                      <FiGithub />
                      <span>Code</span>
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-400 hover:text-purple-400 transition-colors"
                    >
                      <FiExternalLink />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


