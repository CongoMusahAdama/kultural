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

    return (
        <section id="interviews" className="interviews section bg-black">
            <div className="container">
                <div className="section-header text-center mb-xl">
                    <span className="section-label">Conversations</span>
                    <h2 className="section-title text-white">
                        Featured Guests
                    </h2>
                </div>

                <div className="guests-grid">
                    {guests.map((guest) => (
                        <div key={guest.id} className="guest-card">
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

                    {/* CTA Card */}
                    <div className="guest-card guest-cta-card">
                        <div className="guest-cta-content">
                            <h3 className="guest-cta-title">Want to be a guest?</h3>
                            <p className="guest-cta-text">
                                We are always looking for unique voices and perspectives.
                            </p>
                            <a href="#contact" className="btn btn-outline">
                                Apply Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Interviews
