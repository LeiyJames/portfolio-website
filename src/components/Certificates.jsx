import { motion } from 'framer-motion'

const certificates = [
  {
    name: 'Foundations: Data, Data, Everywhere',
    platform: 'Google',
    date: '2025',
    icon: '🎓',
    url: 'https://www.coursera.org/account/accomplishments/verify/06LJLJW2CEXQ?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course'
  },
  {
    name: 'Build a Full Website using WordPress',
    platform: 'Coursera',
    date: '2025',
    icon: '📜',
    url: 'https://www.coursera.org/account/accomplishments/verify/UZ7HOWZHFEP1'
  },
  {
    name: 'Technical Support Fundamentals',
    platform: 'Google',
    date: '2024',
    icon: '🏆',
    url: 'https://www.coursera.org/account/accomplishments/verify/F2Q4KW9ISOIL'
  },
  {
    name: 'Foundations of Cybersecurity',
    platform: 'Google',
    date: '2024',
    icon: '⚡',
    url: 'https://www.coursera.org/account/accomplishments/verify/PVU8Q3AJ6PCA'
  }
]

const Certificates = () => {
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
      y: 20,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  }

  return (
    <section id="certificates">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="heading-secondary mb-4">Certificates</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Continuous learning is key in tech. Here are some of my recent certifications.
          </p>
        </motion.div>

        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
        >
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.name}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="card text-center group relative overflow-hidden bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <motion.div 
                className="relative z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
              >
                <motion.span 
                  className="text-4xl mb-4 block transform group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {cert.icon}
                </motion.span>
                <motion.h3 
                  className="font-semibold mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300"
                >
                  {cert.name}
                </motion.h3>
                <motion.p 
                  className="text-sm text-gray-600 dark:text-gray-400"
                >
                  {cert.platform}
                </motion.p>
                <motion.p 
                  className="text-sm text-primary-600 mt-2 mb-4"
                >
                  {cert.date}
                </motion.p>
                
                <motion.a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white rounded-lg transform hover:scale-105 transition-all duration-300 hover:shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Certificate
                </motion.a>
              </motion.div>
              
              {/* Hover effect background */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-primary-100/20 to-transparent dark:from-primary-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Certificates 