import './Partners.css'

const Partners = () => {
    return (
        <section id="partners" className="partners section">
            <div className="container">
                <div className="section-header text-center mb-xl">
                    <span className="section-label">Our Partners</span>
                    <h2 className="section-title text-white">Cultivating Culture Together</h2>
                </div>

                <div className="partner-card animate-on-scroll">
                    <div className="partner-content">
                        <div className="partner-info">
                            <span className="partner-tag">Featured Global Partner</span>
                            <h3 className="partner-name">Primac Wear</h3>
                            <p className="partner-description">
                                Primac Wear was founded in 2019 with a simple belief: fashion should celebrate culture while inspiring confidence.
                                Based in Ohio and inspired by African heritage, they design custom jerseys, hoodies, and shirts that bring people
                                together through style and storytelling.
                            </p>
                            <p className="partner-description">
                                Their logo represents pride in African identity, while their products reflect the creativity and boldness of modern fashion.
                                We welcome all fashion lovers to join us in our journey—because when you wear Primac, you’re not just wearing clothes,
                                you’re wearing culture.
                            </p>
                            <div className="partner-cta">
                                <a href="https://primacwear.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                                    Visit Primac Wear →
                                </a>
                            </div>
                        </div>
                        <div className="partner-visual">
                            <img src="/primac.png" alt="Primac Wear" className="partner-logo-img" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Partners
