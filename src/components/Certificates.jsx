import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import CertificateModal from './CertificateModal'

const certificates = {
  'data-analyst': [
    {
      name: 'Foundations: Data, Data, Everywhere',
      platform: 'Google',
      date: 'February 2025',
      icon: '📊',
      image: '/images/certificates/data1.png',
      url: 'https://coursera.org/share/96c4bfaece04e708d6b05e9cc21d5cc7'
    }
  ],
  'front-end': [
    {
      name: 'Build a Full Website using WordPress',
      platform: 'Coursera Project Network',
      date: 'October 2024',
      icon: '💻',
      image: '/images/certificates/front1.png',
      url: 'https://coursera.org/share/f54293958cda77ca660216eb13719606'
    }
  ],
  'it-support': [
    {
      name: 'Technical Support Fundamentals',
      platform: 'Google',
      date: 'October 2024',
      icon: '🔧',
      image: '/images/certificates/tech1.png',
      url: 'https://coursera.org/share/a22964cb88400d73b1702fa26d5bc2ba'
    },
    {
      name: 'The Bits and Bytes of Computer Networking',
      platform: 'Google',
      date: 'August 2025',
      icon: '🌐',
      image: '/images/certificates/tech2.png',
      url: 'https://coursera.org/share/b73a62deca7f58c189a265f124d33cc0'
    }
  ],
  'cybersecurity': [
    {
      name: 'Foundations of Cybersecurity',
      platform: 'Google',
      date: 'June 2024',
      icon: '🛡️',
      image: '/images/certificates/cyber1.png',
      url: 'https://coursera.org/share/4a421652b075fe8d530a95a8deea8f80'
    }
  ],
  'software-qa': [
    // Add QA certificates here when available
  ]
}

const categories = [
  { key: 'all', label: 'All Certificates', icon: '🎓' },
  { key: 'it-support', label: 'IT Support', icon: '🔧' },
  { key: 'front-end', label: 'Front-End', icon: '💻' },
  { key: 'cybersecurity', label: 'Cybersecurity', icon: '🛡️' },
  { key: 'software-qa', label: 'Software QA', icon: '🧪' },
  { key: 'data-analyst', label: 'Data Analyst', icon: '📊' }
]

const Certificates = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedCertificate, setSelectedCertificate] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentMobileIndex, setCurrentMobileIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const getAllCertificates = () => {
    return Object.values(certificates).flat()
  }

  const getFilteredCertificates = () => {
    if (activeCategory === 'all') {
      return getAllCertificates()
    }
    return certificates[activeCategory] || []
  }

  const handleCertificateClick = (certificate) => {
    setSelectedCertificate(certificate)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedCertificate(null)
  }

  const nextMobile = () => {
    const filteredCerts = getFilteredCertificates()
    setDirection(1)
    setCurrentMobileIndex((prev) => (prev + 1) % filteredCerts.length)
  }

  const prevMobile = () => {
    const filteredCerts = getFilteredCertificates()
    setDirection(-1)
    setCurrentMobileIndex((prev) => (prev - 1 + filteredCerts.length) % filteredCerts.length)
  }

  const handleSwipe = (offsetX, velocityX) => {
    const swipe = Math.abs(offsetX) * velocityX
    // Swipe left (negative offsetX) = next item
    // Swipe right (positive offsetX) = previous item
    if (offsetX < -100 || swipe < -1000) nextMobile()
    if (offsetX > 100 || swipe > 1000) prevMobile()
  }

  // Reset mobile index when category changes
  const handleCategoryChange = (categoryKey) => {
    setActiveCategory(categoryKey)
    setCurrentMobileIndex(0)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 30,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15,
        mass: 0.8
      }
    }
  }

  const mobileCarouselVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2
      }
    })
  }

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    }
  }

  const filteredCertificates = getFilteredCertificates()

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
            Continuous learning is key in tech. Here are my certifications organized by specialization.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          variants={categoryVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.key}
              onClick={() => handleCategoryChange(category.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category.key
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)"
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: index * 0.1,
                type: "spring",
                stiffness: 300,
                damping: 20
              }}
            >
              <span className="mr-2">{category.icon}</span>
              {category.label}
              {category.key !== 'all' && certificates[category.key] && (
                <span className="ml-2 px-2 py-0.5 text-xs bg-black/20 rounded-full">
                  {certificates[category.key].length}
                </span>
              )}
              {category.key === 'all' && (
                <span className="ml-2 px-2 py-0.5 text-xs bg-black/20 rounded-full">
                  {getAllCertificates().length}
                </span>
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Mobile Carousel */}
        <div className="md:hidden mb-8">
          {filteredCertificates.length > 0 ? (
            <div className="relative overflow-hidden rounded-xl">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={`${activeCategory}-${currentMobileIndex}`}
                  custom={direction}
                  variants={mobileCarouselVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="w-full"
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={(e, info) => handleSwipe(info.offset.x, info.velocity.x)}
                >
                  <motion.div
                    className="group relative overflow-hidden bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer p-6 text-center mx-4"
                    onClick={() => handleCertificateClick(filteredCertificates[currentMobileIndex])}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.span 
                      className="text-5xl mb-4 block transform group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                      {filteredCertificates[currentMobileIndex]?.icon}
                    </motion.span>
                    
                    <h3 className="font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                      {filteredCertificates[currentMobileIndex]?.name}
                    </h3>
                    
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                      {filteredCertificates[currentMobileIndex]?.platform}
                    </p>
                    
                    <p className="text-sm text-primary-600 dark:text-primary-400 mb-4">
                      {filteredCertificates[currentMobileIndex]?.date}
                    </p>
                    
                    <div className="inline-block px-4 py-2 bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white text-sm rounded-lg transform group-hover:scale-105 transition-all duration-300">
                      View Certificate
                    </div>
                    
                    {/* Hover effect background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-100/20 to-transparent dark:from-primary-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                </motion.div>
              </AnimatePresence>

              {/* Indicators */}
              {filteredCertificates.length > 1 && (
                <div className="flex justify-center mt-6 space-x-2">
                  {filteredCertificates.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentMobileIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentMobileIndex
                          ? 'bg-primary-600 w-6'
                          : 'bg-gray-300 dark:bg-gray-600'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12 mx-4 bg-gray-50 dark:bg-gray-800 rounded-xl"
            >
              <div className="text-6xl mb-4">📋</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                No certificates yet
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Certificates in this category will appear here as they are earned.
              </p>
            </motion.div>
          )}
        </div>

        {/* Desktop Grid */}
        <motion.div
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredCertificates.length > 0 ? (
            filteredCertificates.map((cert, index) => (
              <motion.div
                key={`${cert.name}-${index}`}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  transition: { 
                    type: "spring",
                    stiffness: 400,
                    damping: 25
                  }
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative overflow-hidden bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => handleCertificateClick(cert)}
              >
                <div className="p-6 text-center">
                  <motion.span 
                    className="text-4xl mb-4 block transform group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ 
                      rotate: 360,
                      scale: 1.2
                    }}
                    transition={{ 
                      duration: 0.6, 
                      ease: "easeInOut",
                      type: "spring",
                      stiffness: 300
                    }}
                  >
                    {cert.icon}
                  </motion.span>
                  
                  <motion.h3 
                    className="font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    {cert.name}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-sm text-gray-600 dark:text-gray-400 mb-1"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    {cert.platform}
                  </motion.p>
                  
                  <motion.p 
                    className="text-sm text-primary-600 dark:text-primary-400 mb-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.4 }}
                  >
                    {cert.date}
                  </motion.p>
                  
                  <motion.div 
                    className="inline-block px-4 py-2 bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white text-sm rounded-lg transform group-hover:scale-105 transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      delay: index * 0.1 + 0.5,
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Certificate
                  </motion.div>
                </div>
                
                {/* Hover effect background */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-primary-100/20 to-transparent dark:from-primary-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              </motion.div>
            ))
          ) : (
            <motion.div
              variants={itemVariants}
              className="col-span-full text-center py-12"
            >
              <div className="text-6xl mb-4">📋</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                No certificates yet
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Certificates in this category will appear here as they are earned.
              </p>
            </motion.div>
          )}
        </motion.div>

        {/* Total count */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-8"
        >
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Showing {filteredCertificates.length} certificate{filteredCertificates.length !== 1 ? 's' : ''}
            {activeCategory !== 'all' && ` in ${categories.find(c => c.key === activeCategory)?.label}`}
          </p>
        </motion.div>
      </div>

      {/* Certificate Modal */}
      <CertificateModal
        isOpen={isModalOpen}
        onClose={closeModal}
        certificate={selectedCertificate}
      />
    </section>
  )
}

export default Certificates