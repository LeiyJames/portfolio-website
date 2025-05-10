import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} Leigh. All rights reserved.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex space-x-6 mt-4 md:mt-0"
          >
            <a
              href="https://github.com/LeiyJames"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-500"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/leigh-james-presno-591468333/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-500"
            >
              LinkedIn
            </a>
            <a
              href="mailto:leighpresno114@gmail.com"
              className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-500"
            >
              Email
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 