import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import { 
  UserIcon, 
  FolderIcon, 
  BriefcaseIcon, 
  EnvelopeIcon
} from '@heroicons/react/24/outline'

const MobileNav = () => {
  const navLinks = [
    { 
      to: "about", 
      label: "About",
      icon: UserIcon
    },
    { 
      to: "projects", 
      label: "Projects",
      icon: FolderIcon
    },
    { 
      to: "experience", 
      label: "Experience",
      icon: BriefcaseIcon
    },
    { 
      to: "contact", 
      label: "Contact",
      icon: EnvelopeIcon
    }
  ]

  return (
    <div className="fixed bottom-6 left-0 right-0 md:hidden z-50 flex justify-center">
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-auto"
      >
        <nav className="flex items-center gap-2 p-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-full shadow-lg border border-gray-200 dark:border-gray-700">
          {navLinks.map((link) => {
            const Icon = link.icon
            return (
              <Link
                key={link.to}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-64}
                className="group relative p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                activeClass="active"
              >
                <Icon className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200" />
                
                {/* Tooltip */}
                <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gray-900 dark:bg-gray-700 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                  {link.label}
                </span>
              </Link>
            )
          })}

          {/* Theme toggle removed on mobile to avoid overlap with Back-To-Top */}
        </nav>
      </motion.div>
    </div>
  )
}

export default MobileNav