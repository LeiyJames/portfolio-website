import { motion } from 'framer-motion'
import DecryptedText from './DecryptedText'

const testimonials = [
  {
    name: 'Judd Bahian',
    role: 'Software QA Intern',
    company: 'GoodApps Inc.',
    content: "Kuya Leigh is a very dedicated and hardworking person. He is a very good supervisor and he is always willing to help us as immersions student. He is very hospitable, friendly and approachable person and not strict supervisor. ",
    image: '/images/judd.jpg'
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-gray-50 dark:bg-gray-800/50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="heading-secondary mb-4">What People Say</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here's what clients and colleagues have to say about working with me.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="card"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">
                    <DecryptedText 
                      text={testimonial.name} 
                      animateOn="view" 
                      revealDirection="center" 
                      speed={100}
                      maxIterations={20}
                    />
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <DecryptedText 
                      text={testimonial.role} 
                      animateOn="view" 
                      revealDirection="center" 
                      speed={100}
                      maxIterations={20}
                    />
                    {' at '}
                    <DecryptedText 
                      text={testimonial.company} 
                      animateOn="view" 
                      revealDirection="center" 
                      speed={100}
                      maxIterations={20}
                    />
                  </p>
                </div>
              </div>
              <blockquote className="text-gray-600 dark:text-gray-300 italic">
                "<DecryptedText text={testimonial.content} animateOn="view" revealDirection="start" speed={80} maxIterations={25} />"
              </blockquote>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials 