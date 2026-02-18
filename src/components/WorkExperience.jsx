import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'

const experiences = [
  {
    title: "Software QA Tester - Full-Time",
    company: "GoodApps Inc.",
    period: "2024 - Present",
    description: [
      "Collaborate with teams to plan and define test strategies",
      "Design and document test cases and test data",
      "Perform manual and automated testing",
      "Log and track bugs, verify fixes",
      "Maintain test plans, scripts, and reports",
      "Suggest improvements to enhance software quality",
      "Communicate clearly with developers and project teams"
    ],
    skills: ["Test Strategy", "Test Case Design", "Manual & Automated Testing", "Bug Tracking", "Test Planning", "Communication"]
  },
  {
    title: "Software QA Tester - Internship",
    company: "ASV Business Solutions",
    period: "Feb 2024 - May 2024 · 4 mos",
    description: [
      "Developed and executed test plans and cases to ensure feature quality",
      "Logged and tracked bugs using Jira; collaborated closely with developers",
      "Performed manual, functional, regression, performance, and basic security testing",
      "Simulated database load to test query response times and performance under stress",
      "Created clear test reports and documentation to support future QA improvements"
    ],
    skills: ["Test Planning", "Jira", "Functional Testing", "Regression Testing", "Performance Testing", "Database Testing"]
  },
  {
    title: "Frontend Developer",
    company: "Self-Employed",
    period: "2021 - Present",
    description: [
      "Developed and maintained web applications using React, Typescript, and Supabase",
      "Collaborated with design teams to implement new features and improve user experience",
      "Built responsive and interactive user interfaces using Tailwind CSS and Framer Motion"
    ],
    skills: ["React", "Next.js", "TypeScript", "Supabase", "Tailwind CSS", "Framer Motion"]
  }
] 

const WorkExperience = () => {
  const timelineRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end start"]
  })
  
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

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
          <h2 className="heading-secondary mb-4 relative inline-block">
            Work Experience
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-indigo-500 rounded-full opacity-70"></div>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">My professional journey in tech</p>
        </motion.div>

        <div className="relative" ref={timelineRef}>
          {/* Timeline background line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-gray-700" />
          
          {/* Animated blue timeline line */}
          <motion.div 
            className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary-600 origin-top z-20"
            style={{ 
              scaleY: scaleY,
              height: "100%"
            }}
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

                {/* Content */}
                <motion.div 
                  className={`w-full md:w-1/2 p-5 sm:p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-md md:shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                    index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'
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
                  <motion.div 
                    className="text-gray-600 dark:text-gray-300 mb-4 text-sm sm:text-base"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                  >
                    <ul className="list-disc pl-5 space-y-1">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </motion.div>
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