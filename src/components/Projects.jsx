import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { WrenchScrewdriverIcon } from '@heroicons/react/24/outline'

const projects = [
  {
    title: 'Code Rabbit Challenge',
    description: 'A clean and modern showcase of coding challenges and solutions, built to demonstrate technical proficiency and problem-solving capabilities.',
    image: '/images/dev.png',
    github: 'https://github.com/LeiyJames/Code-Rabbit-Challenge-',
    demo: 'https://leigh-devcode.netlify.app/',
    tags: ['React', 'Tailwind CSS', 'JavaScript', 'Problem Solving'],
    category: 'Front-End'
  },
  {
    title: 'HydroDash - Water Business Management',
    description: 'A comprehensive management platform for water refill businesses. Features real-time route tracking, revenue protection, and an intuitive admin dashboard for complete business control.',
    image: '/images/hydrodash1.png',
    demo: 'https://hydro-dash-ruby.vercel.app/#hero',
    tags: ['Vue.js', 'Tailwind CSS', 'Responsive', 'Business Management', 'Mobile App'],
    category: 'Front-End'
  },
  {
    title: 'USANA Health Sciences Website',
    description: 'A modern e-commerce website for USANA Health Sciences, featuring premium nutritional supplements and skincare products. Built with Next.js, Tailwind CSS, and integrated e-commerce functionality.',
    image: '/images/usana.png',
    demo: 'https://demo-usanaph.netlify.app/',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'E-commerce', 'Responsive', 'React'],
    category: 'Front-End'
  },
  {
    title: 'Aura & Co. e-commerce store',
    description: 'A modern, responsive e-commerce storefront built with Nuxt 3, Tailwind CSS, and Pinia. Features a fully functional shopping cart, product filtering, and a mock data layer for instant deployment.',
    image: '/images/aura.png',
    github: 'https://github.com/LeiyJames/demo-shopify',
    demo: 'https://demo-shopify1.netlify.app/',
    tags: ['Nuxt 3', 'Tailwind CSS', 'Pinia', 'E-commerce', 'Responsive'],
    category: 'Front-End'
  },
  {
    title: 'NovaReach Website',
    description: 'NovaReach is a modern, responsive landing page for marketing platform built with React, Tailwind CSS, and Framer Motion.',
    image: '/images/nova.png',
    github: 'https://github.com/LeiyJames/NovaReach-Website',
    demo: 'https://nova-reach-website.vercel.app/',
    tags: ['TypeScript', 'JavaScript', 'Tailwind CSS', 'Framer Motion', 'Responsive', 'React'],
    category: 'Front-End'
  },
  {
    title: 'Cooking Show - Filipino Recipes',
    description: 'A beautiful, modern cooking app built with Next.js 14, featuring authentic Filipino recipes with step-by-step instructions, interactive timers, and advanced cooking features.',
    image: '/images/cook.png',
    github: 'https://github.com/LeiyJames/Cooking-show',
    demo: 'https://cooking-show.netlify.app/',
    tags: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Lucide React'],
    category: 'Front-End'
  },
  {
    title: 'Expense Tracker Dashboard',
    description: 'A modern and responsive expense tracking dashboard featuring analytics and data export capabilities. Built with Next.js 14 and includes interactive charts for spending patterns.',
    image: '/images/tracker.png',
    github: 'https://github.com/LeiyJames/expense-tracker-app',
    demo: 'https://expenses-tracker-pro.netlify.app/',
    tags: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Chart.js', 'Framer Motion', 'React'],
    category: 'Front-End'
  },
]

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [showAllProjects, setShowAllProjects] = useState(false)
  const [activeTab, setActiveTab] = useState('Front-End')
  
  const filteredProjects = projects.filter(project => project.category === activeTab)
  
  const initialProjectsToShow = 3
  const projectsPerPage = showAllProjects ? 6 : initialProjectsToShow
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage)
  
  const indexOfLastProject = currentPage * projectsPerPage
  const indexOfFirstProject = indexOfLastProject - projectsPerPage
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject)

  const paginate = (pageNumber, e) => {
    e.preventDefault()
    setCurrentPage(pageNumber)
    
    const projectsSection = document.getElementById('projects')
    const headerOffset = 80
    const elementPosition = projectsSection.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset
    
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    })
  }

  const nextCarousel = () => {
    setDirection(1)
    setCurrentCarouselIndex((prev) => (prev + 1) % filteredProjects.length)
  }

  const prevCarousel = () => {
    setDirection(-1)
    setCurrentCarouselIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length)
  }

  useEffect(() => {
    setCurrentPage(1)
    setCurrentCarouselIndex(0)
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

  const projectVariants = {
    hidden: { 
      opacity: 0,
      y: 50
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

  const handleSwipe = (offsetX, velocityX) => {
    const swipe = Math.abs(offsetX) * velocityX
    if (offsetX < -100 || swipe < -1000) nextCarousel()
    if (offsetX > 100 || swipe > 1000) prevCarousel()
  }

  return (
    <section id="projects">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="heading-secondary mb-4 relative inline-block">
            Featured Projects
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-indigo-500 rounded-full opacity-70"></div>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Here are some of my recent projects that showcase my skills in QA testing, frontend development & data analyst
          </p>

          {/* Category Tabs */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {['Front-End', 'QA', 'Data Analyst'].map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab)
                  setCurrentPage(1)
                  setCurrentCarouselIndex(0)
                  setShowAllProjects(false)
                }}
                className={`px-6 py-2 rounded-full transition-all duration-300 border border-transparent ${
                  activeTab === tab
                    ? 'bg-primary-600 text-white shadow-lg scale-105'
                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border-gray-200 dark:border-gray-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </motion.div>

        {filteredProjects.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center py-16 px-4"
          >
            <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 max-w-md mx-auto border border-gray-200 dark:border-gray-700 shadow-sm">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                 <WrenchScrewdriverIcon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Coming Soon!
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                I'm currently working on curating my {activeTab} projects. Check back soon for updates!
              </p>
            </div>
          </motion.div>
        ) : (
          <>
            {/* Mobile Carousel */}
            <div className="md:hidden">
              <div className="relative overflow-hidden rounded-xl">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={`${currentCarouselIndex}-${activeTab}`}
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
                    <div className="card overflow-hidden group hover:shadow-xl transition-shadow duration-300 mb-12">
                      <motion.div 
                        className="relative aspect-video mb-4 overflow-hidden rounded-lg"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      >
                        <img
                        src={filteredProjects[currentCarouselIndex]?.image}
                        alt={filteredProjects[currentCarouselIndex]?.title}
                        className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                      />
                      </motion.div>
                      
                      <motion.h3 
                        className="text-xl font-semibold mb-2 group-hover:text-primary-600 transition-colors duration-300"
                      >
                        {filteredProjects[currentCarouselIndex]?.title}
                      </motion.h3>
                      
                      <motion.p 
                        className="text-gray-600 dark:text-gray-300 mb-4"
                      >
                        {filteredProjects[currentCarouselIndex]?.description}
                      </motion.p>
                      
                      <motion.div 
                        className="flex flex-wrap gap-2 mb-4"
                      >
                        {filteredProjects[currentCarouselIndex]?.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 text-sm bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </motion.div>
                      
                      <motion.div 
                        className="flex justify-between items-center"
                      >
                        {filteredProjects[currentCarouselIndex]?.github && (
                          <a
                            href={filteredProjects[currentCarouselIndex].github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-600 hover:text-primary-700 font-medium transition-colors duration-300"
                          >
                            GitHub
                          </a>
                        )}
                        <a
                          href={filteredProjects[currentCarouselIndex]?.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="button-primary transform hover:scale-105 transition-transform duration-300"
                        >
                          <span>Live Demo</span>
                        </a>
                      </motion.div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Carousel Indicators */}
                <div className="flex justify-center mt-6 space-x-2">
                  {filteredProjects.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentCarouselIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentCarouselIndex
                          ? 'bg-primary-600 w-6'
                          : 'bg-gray-300 dark:bg-gray-600'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Project count */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center mt-8"
              >
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''} in {activeTab}
                </p>
              </motion.div>
            </div>

            {/* Desktop Grid */}
            <motion.div 
              className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {currentProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  variants={projectVariants}
                  className={`card flex flex-col h-full overflow-hidden group hover:shadow-xl transition-all duration-300 ${
                    index >= initialProjectsToShow && !showAllProjects ? 'hidden' : ''
                  }`}
                >
                  <motion.div 
                    className="relative aspect-video mb-4 overflow-hidden rounded-lg"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </motion.div>
                  
                  <motion.h3 
                    className="text-xl font-semibold mb-2 group-hover:text-primary-600 transition-colors duration-300"
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -20 }}
                    viewport={{ once: false }}
                  >
                    {project.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-gray-600 dark:text-gray-300 mb-4"
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 20 }}
                    viewport={{ once: false }}
                  >
                    {project.description}
                  </motion.p>
                  
                  <motion.div 
                    className="flex flex-wrap gap-2 mb-4"
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 20 }}
                    viewport={{ once: false }}
                  >
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 text-sm bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </motion.div>
                  
                  <motion.div 
                    className="flex justify-between items-center mt-auto"
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 20 }}
                    viewport={{ once: false }}
                  >
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 hover:text-primary-700 font-medium transition-colors duration-300"
                      >
                        GitHub
                      </a>
                    )}
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button-primary transform hover:scale-105 transition-transform duration-300"
                    >
                      <span>Live Demo</span>
                    </a>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>

            {/* See More/Less Button */}
            {filteredProjects.length > initialProjectsToShow && (
              <motion.div 
                className="hidden md:flex justify-center mt-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{ duration: 0.5 }}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setShowAllProjects(!showAllProjects)
                    setCurrentPage(1) // Reset to first page when toggling
                    
                    // Scroll to top of projects section when clicking "See Less"
                    if (showAllProjects) {
                      const projectsSection = document.getElementById('projects')
                      const headerOffset = 80
                      const elementPosition = projectsSection.getBoundingClientRect().top
                      const offsetPosition = elementPosition + window.pageYOffset - headerOffset
                      
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                      })
                    }
                  }}
                  className="button-primary text-sm sm:text-base px-6 py-2 sm:px-8 sm:py-3"
                >
                  <span>{showAllProjects ? 'See Less Projects' : 'See More Projects'}</span>
                  </motion.button>
                </motion.div>
            )}

            {/* Desktop Pagination */}
            {showAllProjects && totalPages > 1 && (
              <motion.div 
                className="hidden md:flex justify-center items-center space-x-2 mt-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{ duration: 0.5 }}
              >
                <button
                  onClick={(e) => paginate(currentPage - 1, e)}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
                    currentPage === 1
                    ? 'bg-gray-200 text-gray-500 cursor-not-allowed dark:bg-gray-700'
                    : 'bg-primary-600 text-white hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600'
                  }`}
                >
                  Previous
                </button>
                
                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => paginate(index + 1, e)}
                    className={`w-10 h-10 rounded-lg transition-colors duration-300 ${
                      currentPage === index + 1
                      ? 'bg-primary-600 text-white dark:bg-primary-500'
                      : 'bg-gray-200 text-gray-700 hover:bg-primary-100 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-primary-900/30'
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
                
                <button
                  onClick={(e) => paginate(currentPage + 1, e)}
                  disabled={currentPage === totalPages}
                  className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
                    currentPage === totalPages
                    ? 'bg-gray-200 text-gray-500 cursor-not-allowed dark:bg-gray-700'
                    : 'bg-primary-600 text-white hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600'
                  }`}
                >
                  Next
                </button>
              </motion.div>
            )}
          </>
        )}
      </div>
    </section>
  )
}

export default Projects 