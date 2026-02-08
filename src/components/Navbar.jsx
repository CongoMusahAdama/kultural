import { useState } from 'react'
import './Navbar.css'

const Navbar = ({ scrolled, setView, currentView }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const navLinks = [
        { name: 'Home', type: 'view', value: 'home' },
        { name: 'About', href: '#about' },
        { name: 'Videos', href: '#videos' },
        { name: 'Segments', href: '#segments' },
        { name: 'Community', href: 'https://youtube.com/@kulturalkompass/community?si=G9DK9A2T_QD9hflU', target: '_blank' },
        { name: 'Blog', type: 'view', value: 'blog' },
        { name: 'Contact', href: '#contact' },
    ]

    const handleLinkClick = (e, link) => {
        if (link.type === 'view') {
            e.preventDefault()
            setView(link.value)
            setMobileMenuOpen(false)
        } else {
            // If we're on blog view and click a section link, go home first then section
            if (currentView !== 'home' && link.href.startsWith('#')) {
                // We'll just go home for now, as scrolling to section after view change 
                // requires more complex sync logic or a slight delay
                setView('home')
                // Optional: after state update, scroll to the id
                setTimeout(() => {
                    const el = document.querySelector(link.href)
                    if (el) el.scrollIntoView({ behavior: 'smooth' })
                }, 100)
            }
            setMobileMenuOpen(false)
        }
    }

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <div className="navbar-content">
                    {/* Logo - Image */}
                    <a
                        href="#home"
                        className="navbar-logo"
                        onClick={(e) => {
                            e.preventDefault()
                            setView('home')
                        }}
                    >
                        <img src="/image.png" alt="Kultural Kompass" className="logo-img" />
                        <span className="logo-text">Kultural <span className="text-orange">Kompass</span></span>
                    </a>

                    {/* Desktop Navigation */}
                    <ul className="navbar-links">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href || '#'}
                                    target={link.target}
                                    rel={link.target === '_blank' ? 'noopener noreferrer' : undefined}
                                    className={`nav-link ${(link.type === 'view' && currentView === link.value) ? 'active' : ''
                                        }`}
                                    onClick={(e) => handleLinkClick(e, link)}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* CTA Button */}
                    <a
                        href="https://www.youtube.com/@KulturalKompass"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary navbar-cta"
                    >
                        Subscribe
                    </a>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="mobile-menu-toggle"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
                    <ul className="mobile-menu-links">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href || '#'}
                                    target={link.target}
                                    rel={link.target === '_blank' ? 'noopener noreferrer' : undefined}
                                    className={`mobile-nav-link ${(link.type === 'view' && currentView === link.value) ? 'active' : ''
                                        }`}
                                    onClick={(e) => handleLinkClick(e, link)}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                        <li>
                            <a
                                href="https://www.youtube.com/@KulturalKompass"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary navbar-mobile-cta"
                                style={{ width: '100%', marginTop: '1rem' }}
                            >
                                Subscribe on YouTube
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
