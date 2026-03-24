import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import CertificateModal from './CertificateModal'

const GoogleIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    className="inline-block"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
  </svg>
)

const CourseraIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    className="inline-block"
    xmlns="http://www.w3.org/2000/svg"
    fill="#0056D2"
  >
    <path d="M16.7 11.5c0 .2-.2.4-.4.4h-2.1c-.1 0-.2-.1-.2-.2 0-1.3-.4-2.4-1.1-3.2-.7-.8-1.7-1.2-2.9-1.2-1.3 0-2.4.5-3.2 1.4-.8 1-1.3 2.2-1.3 3.8 0 1.5.4 2.8 1.3 3.7.8.9 1.9 1.4 3.2 1.4 1.2 0 2.2-.4 2.9-1.2.7-.8 1.1-1.9 1.1-3.2 0-.1.1-.2.2-.2h2.1c.1 0 .2.1.2.2 0 2-.6 3.6-1.8 4.9-1.2 1.3-2.9 2-4.9 2-2.1 0-3.9-.7-5.2-2.1C3.6 16.8 3 14.9 3 12.5c0-2.4.7-4.3 1.9-5.7C6.2 5.4 8 4.7 10 4.7c2 0 3.7.7 4.9 2 1.2 1.3 1.8 2.9 1.8 4.8z" />
  </svg>
)

const PostmanIcon = () => (
    <svg
      viewBox="0 0 256 256"
      width="1.2em"
      height="1.2em"
      className="inline-block"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="#FF6C37" d="M128 0C57.31 0 0 57.31 0 128s57.31 128 128 128 128-57.31 128-128S198.69 0 128 0z" />
      <path fill="#FFF" d="M120.35 174.4c-9.04 12.03-21.72 18.25-36.44 18.25-20.94 0-38.02-12.76-38.02-32.02 0-1.87.17-3.66.47-5.38-4.44-.22-8.16-1.75-11.05-4.52-3.55-3.4-5.22-8.57-5.22-14.63s1.66-11.23 5.22-14.63c2.81-2.69 6.4-4.18 10.66-4.47l-.12-.87c0-17.15 4.19-33.34 12.73-45.42 1.06-1.49 2.18-2.92 3.37-4.3 4.89 3.55 10.96 5.67 17.51 5.67 15.68 0 28.53-11.96 28.53-26.53 0-1.35-.1-2.68-.3-3.97 24.22 10.99 41.2 35.15 41.2 63.35 0 16.29-5.63 31.23-15.06 43.16-7.4-4.28-16.14-6.76-25.57-6.76-23.74 0-43.02 14.86-43.02 33.16 0 1.96.24 3.84.69 5.66l.24.92c-7.44 9.87-20.78 16.28-35.86 16.28-0.34 0-0.7 0-1.04-.02" />
    </svg>
  )

const certificates = {
  'data-analyst': [
    {
      name: 'Foundations: Data, Data, Everywhere',
      platform: 'Google',
      date: 'February 2025',
      icon: <GoogleIcon />,
      image: '/images/certificates/data1.png',
      url: 'https://coursera.org/share/96c4bfaece04e708d6b05e9cc21d5cc7'
    }
  ],
  'front-end': [
    {
      name: 'Build a Full Website using WordPress',
      platform: 'Coursera Project Network',
      date: 'October 2024',
      icon: <CourseraIcon />,
      image: '/images/certificates/front1.png',
      url: 'https://coursera.org/share/f54293958cda77ca660216eb13719606'
    }
  ],
  'it-support': [
    {
      name: 'Technical Support Fundamentals',
      platform: 'Google',
      date: 'October 2024',
      icon: <GoogleIcon />,
      image: '/images/certificates/tech1.png',
      url: 'https://coursera.org/share/a22964cb88400d73b1702fa26d5bc2ba'
    },
    {
      name: 'The Bits and Bytes of Computer Networking',
      platform: 'Google',
      date: 'August 2025',
      icon: <GoogleIcon />,
      image: '/images/certificates/tech2.png',
      url: 'https://coursera.org/share/b73a62deca7f58c189a265f124d33cc0'
    }
  ],
  'cybersecurity': [
    {
      name: 'Foundations of Cybersecurity',
      platform: 'Google',
      date: 'June 2024',
      icon: <GoogleIcon />,
      image: '/images/certificates/cyber1.png',
      url: 'https://coursera.org/share/4a421652b075fe8d530a95a8deea8f80'
    }
  ],
  'software-qa': [
    {
      name: 'Postman API Fundamentals Student Expert',
      platform: 'Postman',
      date: 'March 2024',
      icon: <PostmanIcon />,
      image: '/images/postman.png'
    }
  ],
  'ai-essentials': [
    {
      name: 'Google AI Essentials',
      platform: 'Google',
      date: 'August 2025',
      icon: <GoogleIcon />,
      image: '/images/certificates/aimain.png',
      url: 'https://www.coursera.org/account/accomplishments/specialization/C4CHANPS7CNE'
    },
    {
      name: 'Introduction to AI',
      platform: 'Google',
      date: 'August 2025',
      icon: <GoogleIcon />,
      image: '/images/certificates/ai1.png',
      url: 'https://www.coursera.org/account/accomplishments/verify/S8FBJEZC6BMJ'
    },
    {
      name: 'Maximize Productivity With AI Tools',
      platform: 'Google',
      date: 'August 2025',
      icon: <GoogleIcon />,
      image: '/images/certificates/ai2.png',
      url: 'https://www.coursera.org/account/accomplishments/verify/RWNDGPH24X2G'
    },
    {
      name: 'Discover the Art of Prompting',
      platform: 'Google',
      date: 'August 2025',
      icon: <GoogleIcon />,
      image: '/images/certificates/ai3.png',
      url: 'https://www.coursera.org/account/accomplishments/verify/UO35TIBGKIM4'
    },
    {
      name: 'Use AI Responsibly',
      platform: 'Google',
      date: 'August 2025',
      icon: <GoogleIcon />,
      image: '/images/certificates/ai4.png',
      url: 'https://www.coursera.org/account/accomplishments/verify/YHONA5LQB3OR'
    },
    {
      name: 'Stay Ahead of the AI Curve',
      platform: 'Google',
      date: 'August 2025',
      icon: <GoogleIcon />,
      image: '/images/certificates/ai5.png',
      url: 'https://www.coursera.org/account/accomplishments/verify/EDL1TIXN4KBV'
    }
  ]
}

const categories = [
  { key: 'all', label: 'All Certificates', icon: '🎓' },
  { key: 'it-support', label: 'IT Support', icon: '🔧' },
  { key: 'front-end', label: 'Front-End', icon: '💻' },
  { key: 'cybersecurity', label: 'Cybersecurity', icon: '🛡️' },
  { key: 'software-qa', label: 'Software QA', icon: '🧪' },
  { key: 'data-analyst', label: 'Data Analyst', icon: '📊' },
  { key: 'ai-essentials', label: 'AI Essentials', icon: '🤖' }
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
          <h2 className="heading-secondary mb-4 relative inline-block">
            Certificates
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-indigo-500 rounded-full opacity-70"></div>
          </h2>
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
          data-testid="certificates-category-tabs"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.key}
              onClick={() => handleCategoryChange(category.key)}
              data-testid={`certificates-category-${category.key}`}
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
                  data-testid="certificates-mobile-carousel"
                >
                  <motion.div
                    className="group relative overflow-hidden bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer p-6 text-center mx-4"
                    onClick={() => handleCertificateClick(filteredCertificates[currentMobileIndex])}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    data-testid="certificates-mobile-card"
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
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary-100/20 to-transparent dark:from-primary-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                </motion.div>
              </AnimatePresence>

              {/* Indicators */}
              {filteredCertificates.length > 1 && (
                <div className="flex justify-center mt-6 space-x-2" data-testid="certificates-mobile-indicators">
                  {filteredCertificates.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentMobileIndex(index)}
                      data-testid={`certificates-mobile-indicator-${index}`}
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
          data-testid="certificates-desktop-grid"
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
                data-testid={`certificates-desktop-card-${index}`}
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
                  className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary-100/20 to-transparent dark:from-primary-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
          <p className="text-sm text-gray-600 dark:text-gray-400" data-testid="certificates-count">
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
