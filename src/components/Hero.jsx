import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { ArrowDownIcon, MapPinIcon } from '@heroicons/react/24/outline'
import RoleSlider from './RoleSlider'
import Lottie from 'lottie-react'
import { useEffect, useState } from 'react'

const Hero = () => {
  const [animation, setAnimation] = useState(null)
  const [currentTime, setCurrentTime] = useState(new Date())
  const [isAvailable, setIsAvailable] = useState(true)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    // Update time every minute
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 60000)

    // Check availability based on time (example: available between 9 AM and 6 PM)
    const checkAvailability = () => {
      const hour = new Date().getHours()
      setIsAvailable(hour >= 9 && hour < 18)
    }
    checkAvailability()

    // Track mouse movement for parallax effect
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e
      const moveX = (clientX - window.innerWidth / 2) / 20
      const moveY = (clientY - window.innerHeight / 2) / 20
      setMousePosition({ x: moveX, y: moveY })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      clearInterval(timer)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  useEffect(() => {
    fetch('/Animation.json')
      .then(response => response.json())
      .then(data => {
        console.log('Animation data loaded:', data); // Debug log
        setAnimation(data);
      })
      .catch(error => console.error('Error loading animation:', error))
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  }

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    })
  }

  const stats = [
    { label: 'Years Experience', value: '1+' },
    { label: 'Projects Completed', value: '13+' },
    { label: 'Companies Worked', value: '2+' }
  ]

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative px-4 sm:px-6 py-16 sm:py-20 overflow-hidden">
      {/* Modern Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900"></div>
      
      {/* Geometric Pattern Overlay */}
      <div className="absolute inset-0 opacity-50 dark:opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.2),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(99,102,241,0.2),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(139,92,246,0.2),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_60%,rgba(236,72,153,0.15),transparent_50%)]"></div>
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-40 dark:opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59,130,246,0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.2) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Code-like floating elements */}
        <motion.div 
          className="absolute text-sm text-blue-500/60 dark:text-blue-400/60 font-mono font-bold"
          animate={{
            y: [0, -20, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            left: '10%',
            top: '20%'
          }}
        >
          &lt;div&gt;
        </motion.div>
        
        <motion.div 
          className="absolute text-sm text-indigo-500/60 dark:text-indigo-400/60 font-mono font-bold"
          animate={{
            y: [0, 15, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          style={{
            right: '15%',
            top: '30%'
          }}
        >
          &lt;/div&gt;
        </motion.div>

        <motion.div 
          className="absolute text-sm text-purple-500/60 dark:text-purple-400/60 font-mono font-bold"
          animate={{
            y: [0, -10, 0],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
          style={{
            left: '20%',
            bottom: '30%'
          }}
        >
          &lt;span&gt;
        </motion.div>

        <motion.div 
          className="absolute text-sm text-cyan-500/60 dark:text-cyan-400/60 font-mono font-bold"
          animate={{
            y: [0, 25, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          style={{
            right: '30%',
            top: '60%'
          }}
        >
          &lt;button&gt;
        </motion.div>

        <motion.div 
          className="absolute text-sm text-emerald-500/60 dark:text-emerald-400/60 font-mono font-bold"
          animate={{
            y: [0, -15, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
          style={{
            left: '35%',
            top: '15%'
          }}
        >
          &lt;/button&gt;
        </motion.div>

        <motion.div 
          className="absolute text-sm text-pink-500/60 dark:text-pink-400/60 font-mono font-bold"
          animate={{
            y: [0, 20, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
          style={{
            right: '10%',
            bottom: '20%'
          }}
        >
          &lt;input&gt;
        </motion.div>

        <motion.div 
          className="absolute text-sm text-orange-500/60 dark:text-orange-400/60 font-mono font-bold"
          animate={{
            y: [0, -25, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          style={{
            left: '50%',
            top: '25%'
          }}
        >
          &lt;/input&gt;
        </motion.div>

        <motion.div 
          className="absolute text-sm text-teal-500/60 dark:text-teal-400/60 font-mono font-bold"
          animate={{
            y: [0, 18, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
          style={{
            right: '40%',
            bottom: '35%'
          }}
        >
          &lt;form&gt;
        </motion.div>

        {/* QA Testing Icons */}
        <motion.div 
          className="absolute text-xl text-green-500/70 dark:text-green-400/70 font-bold"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            right: '25%',
            bottom: '25%'
          }}
        >
          ✓
        </motion.div>

        <motion.div 
          className="absolute text-xl text-red-500/70 dark:text-red-400/70 font-bold"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
            delay: 3
          }}
          style={{
            left: '15%',
            top: '60%'
          }}
        >
          ✗
        </motion.div>

        <motion.div 
          className="absolute text-lg text-green-500/70 dark:text-green-400/70 font-bold"
          animate={{
            scale: [1, 1.4, 1],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
            delay: 1
          }}
          style={{
            left: '25%',
            top: '45%'
          }}
        >
          ✓
        </motion.div>

        <motion.div 
          className="absolute text-lg text-red-500/70 dark:text-red-400/70 font-bold"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, -180, -270, -360],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "linear",
            delay: 2
          }}
          style={{
            right: '15%',
            top: '45%'
          }}
        >
          ✗
        </motion.div>

        <motion.div 
          className="absolute text-lg text-green-500/70 dark:text-green-400/70 font-bold"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 120, 240, 360],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "linear",
            delay: 4
          }}
          style={{
            left: '40%',
            bottom: '15%'
          }}
        >
          ✓
        </motion.div>

        <motion.div 
          className="absolute text-lg text-red-500/70 dark:text-red-400/70 font-bold"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -120, -240, -360],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "linear",
            delay: 5
          }}
          style={{
            right: '35%',
            top: '15%'
          }}
        >
          ✗
        </motion.div>

        {/* Additional QA Icons */}
        <motion.div 
          className="absolute text-lg text-blue-500/70 dark:text-blue-400/70 font-bold"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 45, 90, 135, 180],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
            delay: 3
          }}
          style={{
            left: '60%',
            top: '35%'
          }}
        >
          🔍
        </motion.div>

        <motion.div 
          className="absolute text-lg text-purple-500/70 dark:text-purple-400/70 font-bold"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -45, -90, -135, -180],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
            delay: 1
          }}
          style={{
            right: '50%',
            bottom: '45%'
          }}
        >
          🧪
        </motion.div>

        <motion.div 
          className="absolute text-lg text-orange-500/70 dark:text-orange-400/70 font-bold"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 60, 120, 180, 240, 300, 360],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
            delay: 2
          }}
          style={{
            left: '70%',
            top: '25%'
          }}
        >
          ⚡
        </motion.div>

        {/* Subtle Glowing Orbs */}
        <motion.div 
          className="absolute w-32 h-32 bg-blue-400/20 dark:bg-blue-300/20 rounded-full blur-xl"
          animate={{
            x: mousePosition.x * 0.5,
            y: mousePosition.y * 0.5,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3,
            ease: "easeOut",
            scale: {
              repeat: Infinity,
              duration: 6
            }
          }}
          style={{
            left: '30%',
            top: '40%'
          }}
        />
        
        <motion.div 
          className="absolute w-40 h-40 bg-indigo-400/20 dark:bg-indigo-300/20 rounded-full blur-xl"
          animate={{
            x: mousePosition.x * -0.3,
            y: mousePosition.y * -0.3,
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 4,
            ease: "easeOut",
            scale: {
              repeat: Infinity,
              duration: 8,
              delay: 2
            }
          }}
          style={{
            right: '20%',
            bottom: '40%'
          }}
        />
      </div>

      <div className="section-container relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left side - Text content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
            className="text-center md:text-left order-2 md:order-1"
          >
            {/* Time and Location Display */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400"
            >
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {formatTime(currentTime)} GMT+8
              </span>
              <span className={`flex items-center gap-2 ${isAvailable ? 'text-green-500' : 'text-gray-500'}`}>
                <span className={`w-2 h-2 rounded-full ${isAvailable ? 'bg-green-500' : 'bg-gray-500'}`}></span>
                {isAvailable ? 'Available for Work' : 'Currently Working'}
              </span>
              <span className="flex items-center gap-2">
                <MapPinIcon className="w-4 h-4" />
                Philippines
              </span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="heading-primary mb-6">
              <motion.span 
                variants={itemVariants}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl block mb-2"
              >
                Hi, I'm Leigh James
              </motion.span>
              <motion.div 
                variants={itemVariants}
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl flex items-center justify-center md:justify-start gap-2"
              >
                <RoleSlider />
              </motion.div>
            </motion.h1>
            
            {/* Quick Stats */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 mb-8 max-w-md mx-auto md:mx-0"
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="text-center p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">{stat.value}</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            <motion.p 
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto md:mx-0 px-4 md:px-0"
            >
              Passionate about creating seamless digital experiences through testing, development, and automation.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-6 sm:mb-8 px-4 md:px-0"
            >
              <Link to="projects" smooth={true} className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="button-primary w-full sm:w-auto text-sm sm:text-base px-6 py-2 sm:px-8 sm:py-3"
                >
                  <span>View My Work</span>
                </motion.button>
              </Link>
              
              <Link to="contact" smooth={true} className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="button-secondary w-full sm:w-auto text-sm sm:text-base px-6 py-2 sm:px-8 sm:py-3"
                >
                  Let's Connect
                </motion.button>
              </Link>
            </motion.div>

            {/* Social Icons */}
            <motion.div 
              variants={itemVariants}
              className="flex justify-center md:justify-start items-center gap-3 sm:gap-4 mb-6 sm:mb-8"
            >
              <a
                href="https://github.com/LeiyJames"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500 transition-colors"
              >
                <motion.svg 
                  whileHover={{ scale: 1.1 }}
                  className="w-5 h-5 sm:w-6 sm:h-6" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </motion.svg>
              </a>
              <a
                href="https://www.linkedin.com/in/leigh-james-presno-591468333/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500 transition-colors"
              >
                <motion.svg 
                  whileHover={{ scale: 1.1 }}
                  className="w-5 h-5 sm:w-6 sm:h-6" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </motion.svg>
              </a>
              <a
                href="mailto:leighpresno114@gmail.com"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500 transition-colors"
              >
                <motion.svg 
                  whileHover={{ scale: 1.1 }}
                  className="w-5 h-5 sm:w-6 sm:h-6" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </motion.svg>
              </a>
            </motion.div>
          </motion.div>

          {/* Right side - Lottie Animation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ 
              opacity: 1, 
              x: 0,
              y: mousePosition.y * 0.5,  // Subtle parallax effect
              rotateY: mousePosition.x * 0.05  // Subtle rotation based on mouse
            }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 md:order-2 w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto min-h-[250px] sm:min-h-[300px] md:min-h-[400px] flex items-center justify-center"
          >
            {animation && (
              <div className="w-full h-full">
                <Lottie 
                  animationData={animation}
                  loop={true}
                  autoplay={true}
                  style={{ width: '100%', height: '100%' }}
                  rendererSettings={{
                    preserveAspectRatio: 'xMidYMid meet'
                  }}
                />
              </div>
            )}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <Link to="about" smooth={true} className="animate-bounce cursor-pointer">
            <ArrowDownIcon className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-gray-400" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero 