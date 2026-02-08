import './About.css'

const About = () => {
    return (
        <section id="about" className="about section bg-black">
            <div className="container">
                <div className="about-content-wrapper">
                    {/* Text Content */}
                    <div className="about-text-column">
                        <span className="section-label">About the Podcast</span>
                        <h2 className="section-title text-white mb-md">
                            Unpacking Truth <br /> & Tensions
                        </h2>
                        <p className="about-subheadline text-orange mb-md">
                            EXPLORING CULTURE, FAITH, MUSIC, AND REAL CONVERSATIONS THAT SHAPE OUR WORLD
                        </p>
                        <p className="about-description mb-lg">
                            Kultural Kompass is a cultural podcast unpacking music, entertainment, faith, and societal issues—bringing truth and tension to conversations that matter. We dive deep into the cultural currents shaping our world, exploring the intersections of art, belief, and society.
                        </p>
                        <a href="#videos" className="btn btn-primary">
                            Watch Videos
                        </a>
                    </div>

                    {/* Image Content */}
                    <div className="about-image-column">
                        <div className="about-img-container">
                            <img
                                src="/about.png"
                                alt="Podcast Host"
                                className="about-img"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
