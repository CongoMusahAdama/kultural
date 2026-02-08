import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Stats from './components/Stats'
import PodcastSegments from './components/PodcastSegments'
import Partners from './components/Partners'
import FeaturedVideos from './components/FeaturedVideos'
import Interviews from './components/Interviews'
import Advertise from './components/Advertise'
import Contact from './components/Contact'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Blog from './components/Blog'

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [currentView, setCurrentView] = useState('home') // 'home' or 'blog'
  const [selectedPost, setSelectedPost] = useState(null)

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
  }, [currentView, selectedPost]) // Re-run when view or post changes

  const handleNavigate = (view) => {
    setCurrentView(view)
    setSelectedPost(null) // Reset selection when navigating
    window.scrollTo(0, 0)
  }

  return (
    <div className="app">
      {/* Scroll Progress Bar */}
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      />

      <Navbar scrolled={scrolled} setView={handleNavigate} currentView={currentView} />

      {currentView === 'home' ? (
        <>
          <Hero />
          <About />
          <Stats />
          <Partners />
          <PodcastSegments />
          <FeaturedVideos />
          <Interviews />
          <Advertise />
          <Contact />
          <Newsletter />
        </>
      ) : (
        <Blog selectedPost={selectedPost} setSelectedPost={setSelectedPost} />
      )}

      <Footer />

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  )
}

export default App
