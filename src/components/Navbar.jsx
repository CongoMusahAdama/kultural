import { useState } from 'react'
import './Navbar.css'

const Navbar = ({ scrolled }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Segments', href: '#segments' },
        { name: 'Videos', href: '#videos' },
        { name: 'Advertise', href: '#advertise' },
        { name: 'Contact', href: '#contact' },
    ]

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <div className="navbar-content">
                    {/* Logo - Image */}
                    <a href="#home" className="navbar-logo">
                        <img src="/image.png" alt="Kultural Kompass" className="logo-img" />
                    </a>

                    {/* Desktop Navigation */}
                    <ul className="navbar-links">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a href={link.href} className="nav-link">
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
                                    href={link.href}
                                    className="mobile-nav-link"
                                    onClick={() => setMobileMenuOpen(false)}
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
                                className="btn btn-primary"
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
