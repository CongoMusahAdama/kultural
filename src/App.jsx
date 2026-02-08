import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Stats from './components/Stats'
import PodcastSegments from './components/PodcastSegments'
import FeaturedVideos from './components/FeaturedVideos'
import Interviews from './components/Interviews'
import Advertise from './components/Advertise'
import Contact from './components/Contact'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Calculate scroll progress
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY
      const progress = (scrollTop / (documentHeight - windowHeight)) * 100
      setScrollProgress(progress)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Scroll animation observer
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, observerOptions)

    // Observe all section titles and animated elements
    const animatedElements = document.querySelectorAll('.section-title, .animate-on-scroll')
    animatedElements.forEach(el => observer.observe(el))

    return () => {
      animatedElements.forEach(el => observer.unobserve(el))
    }
  }, [])

  return (
    <div className="app">
      {/* Scroll Progress Bar */}
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      />

      <Navbar scrolled={scrolled} />
      <Hero />
      <About />
      <Stats />
      <PodcastSegments />
      <FeaturedVideos />
      <Interviews />
      <Advertise />
      <Contact />
      <Newsletter />
      <Footer />

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  )
}

export default App
