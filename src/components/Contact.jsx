import { motion } from 'framer-motion'
import { useForm, ValidationError } from '@formspree/react'
import { DocumentArrowDownIcon, ArrowDownIcon } from '@heroicons/react/24/outline'

const Contact = () => {
  const [state, handleSubmit] = useForm("xkgrvjbo")

  if (state.succeeded) {
    return (
      <div className="section-container text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="card max-w-lg mx-auto p-8"
        >
          <span className="text-5xl mb-4 block">✨</span>
          <h3 className="heading-secondary mb-4">Thanks for reaching out!</h3>
          <p className="text-gray-600 dark:text-gray-300">
            I'll get back to you as soon as possible.
          </p>
        </motion.div>
      </div>
    )
  }

  return (
    <section id="contact" className="bg-white dark:bg-gray-900">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="heading-secondary mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
          
          {/* Resume Download Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6"
          >
            <motion.a 
              href="/FrontendDev.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="button-primary-simple text-sm sm:text-base px-6 py-2 sm:px-8 sm:py-3"
            >
              <span>Download Resume</span>
              <ArrowDownIcon className="w-5 h-5 ml-2" />
            </motion.a>
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Contact info items with hover effects */}
            {[
              {
                icon: (
                  <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                title: 'Email',
                value: 'leighpresno114@gmail.com',
                href: 'mailto:leighpresno114@gmail.com'
              },
              {
                icon: (
                  <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                ),
                title: 'Phone',
                value: '+63 961 145 4129',
                href: 'tel:+639611454129'
              },
              {
                icon: (
                  <svg className="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                ),
                title: 'GitHub',
                value: 'github.com/LeiyJames',
                href: 'https://github.com/LeiyJames'
              },
              {
                icon: (
                  <svg className="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                ),
                title: 'LinkedIn',
                value: 'Leigh James Presno',
                href: 'https://www.linkedin.com/in/leigh-james-presno-591468333/'
              }
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center group-hover:bg-primary-200 dark:group-hover:bg-primary-800/30 transition-colors duration-300">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <span className="text-gray-600 dark:text-gray-300 group-hover:text-primary-500 dark:group-hover:text-primary-300 transition-colors duration-300">
                    {item.value}
                  </span>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Form with enhanced interactivity */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
            onSubmit={handleSubmit}
            method="POST"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <ValidationError prefix="Name" field="name" errors={state.errors} />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>
            <button 
              type="submit" 
              className="button-primary w-full"
              disabled={state.submitting}
            >
              <span>{state.submitting ? 'Sending...' : 'Send Message'}</span>
            </button>
            <ValidationError errors={state.errors} />
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact 