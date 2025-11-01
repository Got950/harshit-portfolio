'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiBriefcase, FiMapPin, FiCalendar } from 'react-icons/fi'

interface WorkItem {
  company: string
  position: string
  location: string
  period: string
  achievements: string[]
}

const workExperience: WorkItem[] = [
  {
    company: 'SSEV SoftSols Pvt Ltd',
    position: 'AI Intern/Trainee',
    location: 'Hyderabad, India',
    period: 'Jan 2025 – Present',
    achievements: [
      'Built a facial recognition attendance system on Raspberry Pi, integrating cloud dashboards for automated logging and validation',
      'Reduced manual entry time by 90% and achieved 98% recognition accuracy in real-world deployments',
      'Developed a YOLOv8-powered vehicle classification pipeline for ANPR, integrating real-time RTSP CCTV streaming with Python and OpenCV',
      'Achieved 95% classification accuracy and improved stream stability by 80% through optimized reconnection handling',
    ],
  },
]

export default function WorkExperience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section
      id="experience"
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
          <span className="gradient-text">Work Experience</span>
        </motion.h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {workExperience.map((work, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="glass rounded-2xl p-8 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <FiBriefcase className="text-2xl text-purple-400" />
                    <h3 className="text-2xl md:text-3xl font-bold gradient-text">
                      {work.company}
                    </h3>
                  </div>
                  <p className="text-xl text-gray-300 mb-4">{work.position}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mb-6 text-gray-400">
                <div className="flex items-center space-x-2">
                  <FiMapPin />
                  <span>{work.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FiCalendar />
                  <span>{work.period}</span>
                </div>
              </div>

              <div className="border-t border-purple-500/20 pt-6">
                <h4 className="text-lg font-semibold text-purple-400 mb-4">
                  Key Achievements:
                </h4>
                <ul className="space-y-3">
                  {work.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="text-gray-300 flex items-start space-x-3"
                    >
                      <span className="text-purple-400 mt-1">▸</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


