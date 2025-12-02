import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const roles = [
  { text: "Software QA Tester", color: "text-primary-600" },
  { text: "Frontend Developer", color: "text-primary-600" },
  { text: "Data Wrangler", color: "text-primary-600" }
]

const RoleSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % roles.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="inline-block relative h-[1.2em] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ 
            duration: 0.5,
            ease: [0.165, 0.84, 0.44, 1],
            opacity: { duration: 0.25 }
          }}
          className={`${roles[currentIndex].color} whitespace-nowrap font-semibold tracking-wide`}
        >
          {roles[currentIndex].text}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default RoleSlider 