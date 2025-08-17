import { motion } from 'framer-motion'

const techStack = [
  { name: 'JavaScript', icon: '⚡' },
  { name: 'React', icon: '⚛️' },
  { name: 'Next', icon: '▲' },
  { name: 'Tailwind', icon: '🌊' },
  { name: 'Manual Test', icon: '🔍' },
  { name: 'Playwright', icon: '🤖' },
  { name: 'JIRA', icon: '📋' },
  { name: 'And More', icon: '✨' },
]

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0,
      x: -20
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  }

  const techItemVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  }

  return (
    <section id="about" className="bg-gray-50 dark:bg-gray-800/50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="heading-secondary mb-4">About Me</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A passionate Software QA Engineer transitioning into frontend development, with expertise in quality assurance, frontend technologies, and automation solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
          >
            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-600 dark:text-gray-300 mb-12"
            >
              My professional journey started in Quality Assurance, where I cultivated a meticulous attention to detail and developed comprehensive understanding of software quality standards. This solid QA foundation provides me with a unique advantage as I expand into frontend development, enabling me to build not only visually stunning interfaces but also robust, user-centric applications with quality built-in from the ground up. I'm driven by a passion for automation, continuous learning, and finding innovative solutions to complex technical challenges.
            </motion.p>

            {/* Tech Stack */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  variants={techItemVariants}
                  whileHover={{ 
                    scale: 1.1,
                    transition: { type: "spring", stiffness: 400 }
                  }}
                  className="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-lg text-center group hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors duration-300"
                >
                  <motion.span 
                    className="text-4xl mb-2 block group-hover:scale-110 transition-transform duration-300"
                    initial={{ rotate: 0 }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {tech.icon}
                  </motion.span>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400">
                    {tech.name}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Picture */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
            className="flex justify-center items-center"
          >
            <motion.div 
              className="relative w-64 h-64 md:w-96 md:h-96"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Background blur effect */}
              <motion.div 
                className="absolute -inset-4 bg-primary-500/20 rounded-2xl blur-xl"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.3, 0.5]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              
              {/* Profile Image Container */}
              <motion.div 
                className="relative rounded-2xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl aspect-square"
              >
                <img
                  src="/images/profile.jpg"
                  alt="Profile photo"
                  className="w-full h-full object-cover"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-500/20 via-transparent to-transparent" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About 