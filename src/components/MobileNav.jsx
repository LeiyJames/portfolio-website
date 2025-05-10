import { useState } from 'react'
import { Link } from 'react-scroll'
import { motion, AnimatePresence } from 'framer-motion'

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="md:hidden">
      {/* Hamburger Menu Button */}
      <label className="flex flex-col gap-2 w-8 cursor-pointer z-50 relative" onClick={toggleMenu}>
        <input className="peer hidden" type="checkbox" checked={isOpen} readOnly />
        <div
          className={`rounded-2xl h-[3px] w-1/2 bg-gray-800 dark:bg-white duration-500 ${
            isOpen ? 'rotate-[225deg] origin-right -translate-x-[12px] -translate-y-[1px]' : ''
          }`}
        ></div>
        <div
          className={`rounded-2xl h-[3px] w-full bg-gray-800 dark:bg-white duration-500 ${
            isOpen ? '-rotate-45' : ''
          }`}
        ></div>
        <div
          className={`rounded-2xl h-[3px] w-1/2 bg-gray-800 dark:bg-white duration-500 place-self-end ${
            isOpen ? 'rotate-[225deg] origin-left translate-x-[12px] translate-y-[1px]' : ''
          }`}
        ></div>
      </label>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-white/95 dark:bg-gray-900/95 z-40 flex items-center justify-center"
          >
            <nav className="flex flex-col items-center space-y-8 text-2xl">
              <Link
                to="about"
                spy={true}
                smooth={true}
                className="nav-link text-2xl"
                activeClass="active"
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                className="nav-link text-2xl"
                activeClass="active"
                onClick={toggleMenu}
              >
                Projects
              </Link>
              <Link
                to="experience"
                spy={true}
                smooth={true}
                className="nav-link text-2xl"
                activeClass="active"
                onClick={toggleMenu}
              >
                Experience
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                className="nav-link text-2xl"
                activeClass="active"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default MobileNav 