import './Sponsors.css'

const Sponsors = () => {
    const sponsors = [
        {
            id: 1,
            name: 'MTN Ghana',
            logo: '📱',
            tier: 'platinum'
        },
        {
            id: 2,
            name: 'Vodafone',
            logo: '📡',
            tier: 'platinum'
        },
        {
            id: 3,
            name: 'Guinness Ghana',
            logo: '🍺',
            tier: 'gold'
        },
        {
            id: 4,
            name: 'Coca-Cola',
            logo: '🥤',
            tier: 'gold'
        },
        {
            id: 5,
            name: 'Ecobank',
            logo: '🏦',
            tier: 'silver'
        },
        {
            id: 6,
            name: 'Ghana Tourism',
            logo: '✈️',
            tier: 'silver'
        }
    ]

    const platinumSponsors = sponsors.filter(s => s.tier === 'platinum')
    const goldSponsors = sponsors.filter(s => s.tier === 'gold')
    const silverSponsors = sponsors.filter(s => s.tier === 'silver')

    return (
        <section className="sponsors">
            <div className="container">
                <span className="section-label">Trusted By</span>
                <h2 className="section-title">Our Partners & Sponsors</h2>
                <p className="sponsors-subtitle">
                    Proudly supported by leading brands who believe in our mission
                </p>

                {/* Platinum Sponsors */}
                {platinumSponsors.length > 0 && (
                    <div className="sponsor-tier">
                        <div className="tier-badge platinum">
                            <span className="tier-icon">💎</span>
                            <span className="tier-label">Platinum Partners</span>
                        </div>
                        <div className="sponsors-grid platinum-grid">
                            {platinumSponsors.map((sponsor) => (
                                <div key={sponsor.id} className="sponsor-card platinum">
                                    <div className="sponsor-logo">{sponsor.logo}</div>
                                    <h3 className="sponsor-name">{sponsor.name}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Gold Sponsors */}
                {goldSponsors.length > 0 && (
                    <div className="sponsor-tier">
                        <div className="tier-badge gold">
                            <span className="tier-icon">🥇</span>
                            <span className="tier-label">Gold Partners</span>
                        </div>
                        <div className="sponsors-grid gold-grid">
                            {goldSponsors.map((sponsor) => (
                                <div key={sponsor.id} className="sponsor-card gold">
                                    <div className="sponsor-logo">{sponsor.logo}</div>
                                    <h3 className="sponsor-name">{sponsor.name}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Silver Sponsors */}
                {silverSponsors.length > 0 && (
                    <div className="sponsor-tier">
                        <div className="tier-badge silver">
                            <span className="tier-icon">🥈</span>
                            <span className="tier-label">Silver Partners</span>
                        </div>
                        <div className="sponsors-grid silver-grid">
                            {silverSponsors.map((sponsor) => (
                                <div key={sponsor.id} className="sponsor-card silver">
                                    <div className="sponsor-logo">{sponsor.logo}</div>
                                    <h3 className="sponsor-name">{sponsor.name}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* CTA */}
                <div className="sponsors-cta">
                    <h3 className="cta-title">Become a Partner</h3>
                    <p className="cta-text">
                        Join leading brands in supporting quality cultural content
                    </p>
                    <a href="#advertise" className="btn btn-primary btn-rounded">
                        Partner With Us
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Sponsors
