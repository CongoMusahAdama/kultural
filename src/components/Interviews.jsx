import './Interviews.css'

const Interviews = () => {
    const guests = [
        {
            id: 1,
            name: 'Braa Kwame',
            role: 'Motivational Speaker',
            image: '/brakwame.png',
            topic: '223KM Walk for Dreams'
        },
        {
            id: 2,
            name: 'Gyedu Blay Ambulley',
            role: 'Highlife Godfather',
            image: '/gyedu.png',
            topic: 'Origins of RAP in Ghana'
        },
        {
            id: 3,
            name: 'PM',
            role: 'MC/HYPEMAN & Radio Personality',
            image: '/pm.png',
            topic: 'Made in Taadi Backstage'
        },
        {
            id: 4,
            name: 'Jelvis',
            role: 'Cultural Influencer',
            image: '/jelvis.png',
            topic: 'Culture & Entertainment'
        },
        {
            id: 5,
            name: 'Kofi Bentil',
            role: 'Highlife Musician',
            image: '/kofibentil.png',
            topic: 'From Sekondi to Highlife Glory'
        }
    ]

    // Create a duplicated list for seamless looping
    const displayGuests = [...guests, ...guests]

    return (
        <section id="interviews" className="interviews section bg-black">
            <div className="container-fluid px-0">
                <div className="section-header text-center mb-xl">
                    <span className="section-label">Conversations</span>
                    <h2 className="section-title text-white">Featured Guests</h2>
                </div>

                {/* Infinite Scrolling Ticker */}
                <div className="guests-ticker">
                    <div className="ticker-track">
                        {displayGuests.map((guest, idx) => (
                            <div key={`${guest.id}-${idx}`} className="guest-card-ticker">
                                <div className="guest-image-wrapper">
                                    <img src={guest.image} alt={guest.name} className="guest-img" />
                                    <div className="guest-overlay">
                                        <span className="guest-topic">{guest.topic}</span>
                                    </div>
                                </div>
                                <div className="guest-info">
                                    <h3 className="guest-name">{guest.name}</h3>
                                    <p className="guest-role">{guest.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Static CTA Card Section */}
                <div className="container mt-2xl">
                    <div className="guest-cta-wrapper">
                        <div className="guest-cta-card-static">
                            <div className="cta-brand-tag">Join the Conversation</div>
                            <h3 className="guest-cta-title">Want to share your story?</h3>
                            <p className="guest-cta-text">
                                Kultural Kompass is always looking for unique voices, cultural pioneers,
                                and people with stories that need to be told.
                            </p>
                            <a href="#contact" className="btn btn-primary btn-rounded">
                                Apply to be a Guest
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Interviews
