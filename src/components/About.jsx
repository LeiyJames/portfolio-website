import { motion } from 'framer-motion'
import ScrollVelocity from './ScrollVelocity'

const techStack = [
  { name: 'Postman', icon: 'https://cdn.simpleicons.org/postman/FF6C37' },
  { name: 'Python', icon: 'https://cdn.simpleicons.org/python/3776AB' },
  { name: 'Burp Suite', icon: 'https://cdn.simpleicons.org/burpsuite/FF6633' },
  { name: 'HTML', icon: 'https://cdn.simpleicons.org/html5/E34F26' },
  { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
  { name: 'Tailwind CSS', icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
  { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript/3178C6' },
  { name: 'React', icon: 'https://cdn.simpleicons.org/react/61DAFB' },
  { name: 'Next.js', icon: 'https://cdn.simpleicons.org/nextdotjs/000000', className: 'dark:invert' },
  { name: 'Vue', icon: 'https://cdn.simpleicons.org/vuedotjs/4FC08D' },
  { name: 'Vite', icon: 'https://cdn.simpleicons.org/vite/646CFF' },
  { name: 'Svelte', icon: 'https://cdn.simpleicons.org/svelte/FF3E00' },
  { name: 'Framer Motion', icon: 'https://cdn.simpleicons.org/framer/0055FF' },
  { name: 'Motion One', icon: 'https://avatars.githubusercontent.com/u/106745794?s=200&v=4' },
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

  const midpoint = Math.ceil(techStack.length / 2)
  const row1 = techStack.slice(0, midpoint)
  const row2 = techStack.slice(midpoint)

  const TechRow = ({ items }) => (
    <div className="flex items-center">
      {items.map((tech, index) => (
        <div 
          key={index} 
          className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 mx-2 md:mx-4 bg-white dark:bg-gray-700 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
          title={tech.name}
        >
          <img 
            src={tech.icon} 
            alt={tech.name} 
            className={`w-8 h-8 md:w-10 md:h-10 object-contain ${tech.className || ''}`}
            loading="lazy"
          />
        </div>
      ))}
    </div>
  )

  return (
    <section id="about" className="relative overflow-hidden py-20">
      {/* Subtle Background Mesh */}
      <div className="absolute inset-0 bg-gray-50 dark:bg-gray-900 transition-colors duration-500"></div>
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary-100 dark:bg-primary-900/30 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-color-dodge"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-indigo-100 dark:bg-indigo-900/30 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-color-dodge"></div>
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-secondary mb-4 relative inline-block">
            About Me
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-indigo-500 rounded-full opacity-70"></div>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-6 text-lg leading-relaxed">
            A passionate Software QA Tester who is also into Frontend Development and Data Analyst.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center px-4">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute -left-4 -top-4 w-20 h-20 bg-primary-200 dark:bg-primary-800/30 rounded-full blur-2xl opacity-50"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 text-justify leading-relaxed relative z-10">
              My journey began in Quality Assurance, where I developed a sharp eye for detail and a deep understanding of software reliability. This background gives me a unique edge in Frontend Development, allowing me to build interfaces that are not only visually engaging but also robust and user-friendly. Beyond coding, I also have a strong interest in Data Analyst—transforming raw data into meaningful insights. I am driven by a passion for automation, continuous learning, and solving complex technical challenges efficiently.
            </p>
            
            <div className="flex gap-4 mb-8">
              <div className="h-1 w-20 bg-gradient-to-r from-primary-500 to-indigo-500 rounded-full"></div>
            </div>

            {/* Tech Stack - Desktop Only */}
            <div className="hidden md:block w-full overflow-hidden">
              <ScrollVelocity
                texts={[
                  <TechRow key="row1" items={row1} />,
                  <TechRow key="row2" items={row2} />
                ]} 
                velocity={30} 
                className="py-2"
              />
            </div>
          </motion.div>

          {/* Profile Picture */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="flex justify-center items-center relative"
          >
            <motion.div 
              className="relative w-72 h-72 md:w-96 md:h-96 group"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Spinning border effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 via-indigo-500 to-primary-500 rounded-2xl opacity-75 blur-sm group-hover:opacity-100 transition-opacity duration-500 animate-tilt"></div>
              
              {/* Profile Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-square bg-white dark:bg-gray-800 p-1">

                <img
                  src="/images/certificates/24678.png"
                  alt="Profile photo"
                  className="w-full h-full object-cover rounded-xl"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-500/20 via-transparent to-transparent rounded-xl" />
              </div>
            </motion.div>
          </motion.div>

          {/* Tech Stack - Mobile Scroll */}
          <div className="md:hidden w-full overflow-hidden mt-8">
            <ScrollVelocity
              texts={[
                <TechRow key="row1" items={row1} />,
                <TechRow key="row2" items={row2} />
              ]} 
              velocity={30} 
              className="py-2"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 