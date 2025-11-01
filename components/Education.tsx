'use client'

import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface EducationItem {
  institution: string
  degree: string
  location: string
  period: string
  score: string
  details?: string[]
}

const education: EducationItem[] = [
  {
    institution: 'Mahindra University',
    degree: 'B.Tech in Artificial Intelligence',
    location: 'Hyderabad, India',
    period: 'Aug 2021 – Aug 2025',
    score: 'CGPA: 6.0/10',
  },
  {
    institution: 'Narayan College',
    degree: 'Intermediate (Science)',
    location: 'Bellary, Karnataka',
    period: 'Jun 2019 – May 2021',
    score: 'Percentage: 89%',
  },
]

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section
      id="education"
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
          <span className="gradient-text">Education</span>
        </motion.h2>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500 transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-black transform md:-translate-x-1/2 z-10 animate-pulse"></div>

                {/* Content Card */}
                <div
                  className={`ml-16 md:ml-0 flex-1 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}
                >
                  <div className="glass rounded-2xl p-6 hover:shadow-lg hover:shadow-purple-500/20 transition-all">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-2xl font-bold gradient-text mb-2 md:mb-0">
                        {item.institution}
                      </h3>
                      <span className="text-purple-400 font-semibold">{item.score}</span>
                    </div>
                    <p className="text-xl text-gray-300 mb-2">{item.degree}</p>
                    <div className="flex flex-wrap gap-4 text-gray-400">
                      <span>{item.location}</span>
                      <span>•</span>
                      <span>{item.period}</span>
                    </div>
                    {item.details && (
                      <ul className="mt-4 space-y-2">
                        {item.details.map((detail, i) => (
                          <li key={i} className="text-gray-400 flex items-start">
                            <span className="text-purple-400 mr-2">▹</span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


