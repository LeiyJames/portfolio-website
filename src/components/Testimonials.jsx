import { motion } from 'framer-motion'

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
          <h2 className="heading-secondary mb-4 relative inline-block">
            What People Say
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-indigo-500 rounded-full opacity-70"></div>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here's what clients and colleagues have to say about working with me.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="card w-full max-w-lg"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role}
                    {' at '}
                    {testimonial.company}
                  </p>
                </div>
              </div>
              <blockquote className="text-gray-600 dark:text-gray-300 italic">
                "{testimonial.content}"
              </blockquote>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials 