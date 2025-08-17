import { motion } from 'framer-motion'

const experiences = [
  {
    title: "Software QA Tester",
    company: "GoodApps Inc.",
    period: "2025 - Present",
    description: "Collaborated with cross-functional development teams to design comprehensive test strategies, execute detailed test plans across multiple platforms, and identified critical defects early in the development cycle. Ensured software quality standards through systematic testing methodologies and continuous process improvement.",
    skills: ["Test Case Creation", "Usability Testing", "Black Box Testing", "API Testing", "Database Validation", "Basic Automation Testing", "Basic Performance Testing", "Regression Testing", "Agile"]
  },
  {
    title: "Software QA Tester - Internship",
    company: "ASV Business Solutions",
    period: "3 months",
    description: "Gained hands-on experience in manual testing of web applications while working closely with senior QA engineers. Created comprehensive test cases and documentation, executed functional and regression testing, and actively participated in agile development ceremonies including daily standups and sprint retrospectives.",
    skills: ["Test Case Creation", "Manual Testing", "Pentest", "Performance Testing", "Black Box Testing", "Regression Testing"]
  },
  {
    title: "Frontend Developer",
    company: "Self-Employed",
    period: "2021 - Present",
    description: "Developed and maintained web applications using React, Typescript, and Supabase. Collaborated with the design team to implement new features and improve the user experience.",
    skills: ["Web Development", "Frontend Development","React", "Typescript", "Supabase", "Tailwind CSS", "Framer Motion"]
  }
] 

const WorkExperience = () => {
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
      x: -50
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

  const skillVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 10
      }
    }
  }

  return (
    <section id="experience" className="bg-white dark:bg-gray-900">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="heading-secondary mb-4">Work Experience</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">My professional journey in tech</p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <motion.div 
            className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 1 }}
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                variants={itemVariants}
                className={`flex flex-col md:flex-row gap-6 md:gap-8 mb-8 md:mb-12 relative ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <motion.div 
                  className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  style={{ 
                    top: '50%',
                    transform: 'translate(-50%, -50%)'
                  }}
                />

                {/* Content */}
                <motion.div 
                  className={`w-full md:w-1/2 p-5 sm:p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-md md:shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                    index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                  }`}
                  whileHover={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <motion.h3 
                        className="text-lg sm:text-xl font-semibold"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                      >
                        {exp.title}
                      </motion.h3>
                      <motion.p 
                        className="text-primary-600 dark:text-primary-400"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: false }}
                      >
                        {exp.company}
                      </motion.p>
                    </div>
                    <motion.span 
                      className="text-sm text-gray-500 dark:text-gray-400"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: false }}
                    >
                      {exp.period}
                    </motion.span>
                  </div>
                  <motion.p 
                    className="text-gray-600 dark:text-gray-300 mb-4 text-sm sm:text-base"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                  >
                    {exp.description}
                  </motion.p>
                  <motion.div 
                    className="flex flex-wrap md:flex-wrap gap-2 overflow-x-auto md:overflow-visible -mx-1 px-1 whitespace-nowrap md:whitespace-normal"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                  >
                    {exp.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        variants={skillVariants}
                        className="px-3 py-1 text-sm bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full hover:scale-105 transition-transform duration-300 shrink-0"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default WorkExperience 