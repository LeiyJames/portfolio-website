import { useEffect, useState } from 'react'
import { Link } from 'react-scroll'

// Import components
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import WorkExperience from './components/WorkExperience'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Loader from './components/Loader'
import ThemeToggle from './components/ThemeToggle'
import MobileNav from './components/MobileNav'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    document.documentElement.classList.add('dark')

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e
      document.documentElement.style.setProperty('--mouse-x', `${clientX}px`)
      document.documentElement.style.setProperty('--mouse-y', `${clientY}px`)
      setMousePosition({ x: clientX, y: clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      clearTimeout(timer)
    }
  }, [])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle('dark')
  }

  if (isLoading) {
    return <Loader isDarkMode={isDarkMode} />
  }

  return (
    <div className="min-h-screen relative">
      {/* Spotlight overlay */}
      <div className="fixed inset-0 spotlight pointer-events-none" />
      
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link 
            to="hero" 
            smooth={true} 
            className="logo-link py-2"
          >
            Leigh.dev
          </Link>
          <div className="flex items-center space-x-6">
            <div className="hidden md:flex space-x-6">
              <Link 
                to="about" 
                spy={true}
                smooth={true} 
                className="nav-link"
                activeClass="active"
              >
                About
              </Link>
              <Link 
                to="projects" 
                spy={true}
                smooth={true} 
                className="nav-link"
                activeClass="active"
              >
                Projects
              </Link>
              <Link 
                to="experience" 
                spy={true}
                smooth={true} 
                className="nav-link"
                activeClass="active"
              >
                Experience
              </Link>
              <Link 
                to="contact" 
                spy={true}
                smooth={true} 
                className="nav-link"
                activeClass="active"
              >
                Contact
              </Link>
            </div>
            <ThemeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            <MobileNav />
          </div>
        </nav>
      </header>

      {/* Main content */}
      <main className="pt-16">
        <Hero />
        <About />
        <Projects />
        <Testimonials />
        <WorkExperience />
        <Certificates />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
