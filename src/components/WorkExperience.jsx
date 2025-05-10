import { motion } from 'framer-motion'

const experiences = [
  {
    title: "Software QA Tester",
    company: "GoodApps Inc.",
    period: "2025 - Present",
    description: "Led end-to-end testing of web applications, created automated test scripts using Selenium and Cypress, and collaborated with development teams to improve software quality.",
    skills: ["Manual Testing", "Playwright", "Bug Tracking", "Trello", "Agile"]
  },
  {
    title: "Software QA Tester - Internship",
    company: "ASV Business Solutions",
    period: "3 months",
    description: "Developed and maintained sales funnel automation systems for clients, improving their conversion rates and streamlining their business processes.",
    skills: ["Manual Testing", "Pentest", "Test Case Creation"]
  },
  {
    title: "Frontend Developer",
    company: "Self-Employed",
    period: "2021 - Present",
    description: "Performed manual testing of web applications, created test cases and documentation, and participated in agile development processes.",
    skills: ["Web Development", "Frontend Development","React", "Typescript", "Supabase"]
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
            className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700"
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
                className={`flex flex-col md:flex-row gap-8 mb-12 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <motion.div 
                  className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  style={{ top: `${index * 200 + 20}px` }}
                />

                {/* Content */}
                <motion.div 
                  className="w-full md:w-1/2 ml-12 md:ml-0 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <motion.h3 
                        className="text-xl font-bold"
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
                    className="text-gray-600 dark:text-gray-300 mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                  >
                    {exp.description}
                  </motion.p>
                  <motion.div 
                    className="flex flex-wrap gap-2"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                  >
                    {exp.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        variants={skillVariants}
                        className="px-3 py-1 text-sm bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full hover:scale-105 transition-transform duration-300"
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