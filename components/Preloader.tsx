'use client'

import { motion } from 'framer-motion'

export default function Preloader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <div className="relative">
        <motion.div
          className="w-20 h-20 border-4 border-purple-500 border-t-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        />
        <motion.h1
          className="absolute inset-0 flex items-center justify-center text-2xl font-bold gradient-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          HP
        </motion.h1>
      </div>
      <motion.p
        className="absolute bottom-20 text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        Loading...
      </motion.p>
    </div>
  )
}


