import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer bg-black">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <a href="#home" className="footer-logo">
                            <img src="/image.png" alt="Kultural Kompass" className="logo-img" style={{ height: '40px' }} />
                        </a>
                        <p className="footer-tagline">
                            Exploring culture, truth, and the tensions that shape our world.
                        </p>
                    </div>

                    <div className="footer-links">
                        <h4 className="footer-heading">Quick Links</h4>
                        <ul className="footer-list">
                            <li><a href="#videos">Videos</a></li>
                            <li><a href="https://youtube.com/@kulturalkompass/community?si=G9DK9A2T_QD9hflU" target="_blank" rel="noopener noreferrer">Community</a></li>
                            <li><a href="#advertise">Advertise</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-socials">
                        <h4 className="footer-heading">Follow Us</h4>
                        <div className="social-icons">
                            <a href="https://www.youtube.com/@KulturalKompass" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                                YouTube
                            </a>
                            <a href="#" aria-label="Instagram">Instagram</a>
                            <a href="#" aria-label="Twitter">Twitter</a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom text-center">
                    <p>&copy; 2024 Kultural Kompass. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
