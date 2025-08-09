import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const projects = [
  {
    title: 'USANA Health Sciences Website',
    description: 'A modern e-commerce website for USANA Health Sciences, featuring premium nutritional supplements and skincare products. Built with Next.js, Tailwind CSS, and integrated e-commerce functionality.',
    image: '/images/usana.png',
    demo: 'https://usana-ten.vercel.app/',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'E-commerce', 'Responsive', 'React']
  },
  {
    title: 'NovaReach Website',
    description: 'NovaReach is a modern, responsive landing page for marketing platform built with React, Tailwind CSS, and Framer Motion.',
    image: '/images/nova.png',
    github: 'https://github.com/LeiyJames/NovaReach-Website',
    demo: 'https://nova-reach-website.vercel.app/',
    tags: ['TypeScript', 'JavaScript', 'Tailwind CSS', 'Framer Motion', 'Responsive', 'React']
  },
  {
    title: 'Cooking Show - Filipino Recipes',
    description: 'A beautiful, modern cooking app built with Next.js 14, featuring authentic Filipino recipes with step-by-step instructions, interactive timers, and advanced cooking features.',
    image: '/images/cook.png',
    github: 'https://github.com/LeiyJames/Cooking-show',
    demo: 'https://cooking-show.netlify.app/',
    tags: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Lucide React']
  },
]

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0)
  const projectsPerPage = 6
  const totalPages = Math.ceil(projects.length / projectsPerPage)
  
  const indexOfLastProject = currentPage * projectsPerPage
  const indexOfFirstProject = indexOfLastProject - projectsPerPage
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject)

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
    setCurrentCarouselIndex((prev) => (prev + 1) % projects.length)
  }

  const prevCarousel = () => {
    setCurrentCarouselIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  useEffect(() => {
    setCurrentPage(1)
    setCurrentCarouselIndex(0)
  }, [])

  const handleSwipe = (offsetX, velocityX) => {
    const swipe = Math.abs(offsetX) * velocityX
    if (offsetX < -100 || swipe < -1000) nextCarousel()
    if (offsetX > 100 || swipe > 1000) prevCarousel()
  }

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

  const carouselVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
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
          <h2 className="heading-secondary mb-4">Featured Projects</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in automation, frontend development, and QA testing.
          </p>
        </motion.div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="relative overflow-hidden rounded-xl">
            <motion.div
              key={currentCarouselIndex}
              custom={1}
              variants={carouselVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
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
                    src={projects[currentCarouselIndex].image}
                    alt={projects[currentCarouselIndex].title}
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                  />
                </motion.div>
                
                <motion.h3 
                  className="text-xl font-semibold mb-2 group-hover:text-primary-600 transition-colors duration-300"
                >
                  {projects[currentCarouselIndex].title}
                </motion.h3>
                
                <motion.p 
                  className="text-gray-600 dark:text-gray-300 mb-4"
                >
                  {projects[currentCarouselIndex].description}
                </motion.p>
                
                <motion.div 
                  className="flex flex-wrap gap-2 mb-4"
                >
                  {projects[currentCarouselIndex].tags.map((tag, tagIndex) => (
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
                  {projects[currentCarouselIndex].github && (
                    <a
                      href={projects[currentCarouselIndex].github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-700 font-medium transition-colors duration-300"
                    >
                      GitHub
                    </a>
                  )}
                  <a
                    href={projects[currentCarouselIndex].demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-primary transform hover:scale-105 transition-transform duration-300"
                  >
                    <span>Live Demo</span>
                  </a>
                </motion.div>
              </div>
            </motion.div>

            {/* Swipe navigation enabled; arrows removed on mobile */}

            {/* Carousel Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentCarouselIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    index === currentCarouselIndex
                      ? 'bg-primary-600'
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Grid */}
        <motion.div 
          className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
        >
          {currentProjects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={projectVariants}
              className="card overflow-hidden group hover:shadow-xl transition-shadow duration-300"
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
                className="flex justify-between items-center"
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

        {/* Desktop Pagination */}
        {totalPages > 1 && (
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
      </div>
    </section>
  )
}

export default Projects 