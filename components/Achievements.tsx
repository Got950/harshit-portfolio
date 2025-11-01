'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiAward, FiStar, FiTrendingUp } from 'react-icons/fi'

interface Achievement {
  title: string
  description: string
  icon: React.ReactNode
  type: 'certification' | 'achievement' | 'leadership'
}

const achievements: Achievement[] = [
  {
    title: 'Achmegrade (IIT Bombay Partner)',
    description: 'Developed recommendation system models',
    icon: <FiAward />,
    type: 'certification',
  },
  {
    title: 'Club Head, Gas Monkeys Racing',
    description:
      'Led team to All India Rank 5; managed complete vehicle lifecycle for national competitions',
    icon: <FiStar />,
    type: 'leadership',
  },
  {
    title: 'AUV Team',
    description:
      'Developed AI navigation algorithms for underwater vehicles, optimizing obstacle avoidance',
    icon: <FiTrendingUp />,
    type: 'achievement',
  },
  {
    title: 'Merit Scholarship',
    description: 'Awarded ₹1,00,000 merit scholarship in the first year of B.Tech',
    icon: <FiAward />,
    type: 'achievement',
  },
]

export default function Achievements() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section
      id="achievements"
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
          <span className="gradient-text">Achievements & Leadership</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div className="glass rounded-2xl p-8 h-full hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="text-4xl text-purple-400 group-hover:text-purple-300 group-hover:scale-110 transition-all">
                    {achievement.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold gradient-text mb-3">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Training Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto mt-16"
        >
          <div className="glass rounded-2xl p-8">
            <h3 className="text-2xl font-bold gradient-text mb-4 text-center">
              Training & Certifications
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-purple-500/10 rounded-lg">
                <FiAward className="text-2xl text-purple-400" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-300">
                    Achmegrade (IIT Bombay Partner)
                  </h4>
                  <p className="text-gray-400">
                    Developed recommendation system models (Feb 2023 – May 2023)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

