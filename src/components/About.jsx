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
    <section id="about" className="bg-gray-50 dark:bg-gray-800/50 relative overflow-hidden">
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="heading-secondary mb-4">About Me</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A passionate Software QA Tester who are also into Frontend Development and Data Wrangling.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 text-justify">
              My journey began in Quality Assurance, where I developed a sharp eye for detail and a deep understanding of software reliability. This background gives me a unique edge in Frontend Development, allowing me to build interfaces that are not only visually engaging but also robust and user-friendly. Beyond coding, I also have a strong interest in Data Wrangling—transforming raw data into meaningful insights. I am driven by a passion for automation, continuous learning, and solving complex technical challenges efficiently.
            </p>

            {/* Tech Stack - Desktop Only */}
            <div className="hidden md:block w-full overflow-hidden mt-8 md:mt-12">
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
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="flex justify-center items-center"
          >
            <motion.div 
              className="relative w-64 h-64 md:w-96 md:h-96"
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