import { useEffect } from 'react'
import '../styles/Loader.css'

const Loader = ({ isDarkMode }) => {
  useEffect(() => {
    // Prevent scrolling while loader is visible
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  return (
    <div className={`loader-container ${isDarkMode ? 'dark' : ''}`}>
      <div className="loader-content">
        <div className="loader">
          <svg viewBox="0 0 80 80">
            <circle r="32" cy="40" cx="40" id="test"></circle>
          </svg>
        </div>

        <div className="loader triangle">
          <svg viewBox="0 0 86 80">
            <polygon points="43 8 79 72 7 72"></polygon>
          </svg>
        </div>

        <div className="loader">
          <svg viewBox="0 0 80 80">
            <rect height="64" width="64" y="8" x="8"></rect>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Loader 