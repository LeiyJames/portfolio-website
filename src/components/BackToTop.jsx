import { useEffect, useState } from 'react'
import { ChevronUpIcon } from '@heroicons/react/24/solid'

const BackToTop = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      aria-label="Back to top"
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 rounded-full shadow-lg bg-primary-600 hover:bg-primary-700 text-white p-3 md:p-4 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 dark:focus:ring-offset-gray-900 ${
        visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <ChevronUpIcon className="w-5 h-5 md:w-6 md:h-6" />
    </button>
  )
}

export default BackToTop


