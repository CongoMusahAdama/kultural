import './Advertise.css'

const Advertise = () => {
    return (
        <section id="advertise" className="advertise section">
            <div className="container">
                <div className="advertise-wrapper">
                    <div className="advertise-content text-center">
                        <span className="section-label">Partner With Us</span>
                        <h2 className="section-title mb-md">
                            Advertise With <span className="text-white">Kultural Kompass</span>
                        </h2>
                        <p className="advertise-intro mb-lg">
                            Connect your brand with a highly engaged audience passionate about culture, lifestyle, and truth.
                            Our platform offers unique opportunities for brands looking to make a meaningful impact.
                        </p>

                        <div className="platforms-grid mb-xl">
                            <div className="platform-item">
                                <h4 className="platform-name">YouTube</h4>
                                <p className="platform-desc">Visual storytelling & integration</p>
                            </div>
                            <div className="platform-item">
                                <h4 className="platform-name">Podcast</h4>
                                <p className="platform-desc">Audio ads & host-reads</p>
                            </div>
                            <div className="platform-item">
                                <h4 className="platform-name">Blog & Socials</h4>
                                <p className="platform-desc">Written content & reach</p>
                            </div>
                        </div>

                        <a href="#contact" className="btn btn-dark-advertise">
                            Advertise With Kultural Kompass
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Advertise
