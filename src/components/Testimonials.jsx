import { useState } from 'react'
import './Testimonials.css'

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: 'Kwame Mensah',
            role: 'Regular Listener',
            location: 'Accra, Ghana',
            text: 'Kultural Kompass has opened my eyes to so many aspects of Ghanaian culture I never knew about. The interviews are always insightful and thought-provoking.',
            rating: 5
        },
        {
            id: 2,
            name: 'Ama Osei',
            role: 'Cultural Enthusiast',
            location: 'Kumasi, Ghana',
            text: 'This podcast is a must-listen for anyone interested in understanding the complexities of modern Ghanaian society. The host asks the right questions.',
            rating: 5
        },
        {
            id: 3,
            name: 'Kofi Asante',
            role: 'Music Producer',
            location: 'Tema, Ghana',
            text: 'The Truth & Tensions segment is brilliant! It tackles real issues that affect our community. Keep up the amazing work!',
            rating: 5
        }
    ]

    return (
        <section className="testimonials">
            <div className="container">
                <div className="testimonials-header">
                    <span className="section-label">Listener Voices</span>
                    <h2 className="section-title">What People Are Saying</h2>
                    <p className="testimonials-subtitle">
                        Join thousands of listeners who trust Kultural Kompass for authentic cultural conversations
                    </p>
                </div>

                <div className="testimonials-grid">
                    {testimonials.map((testimonial, index) => (
                        <div key={testimonial.id} className="testimonial-card" style={{ animationDelay: `${index * 0.15}s` }}>
                            <div className="testimonial-header">
                                <div className="testimonial-rating">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <svg key={i} className="star-icon" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                        </svg>
                                    ))}
                                </div>
                                <div className="quote-icon">
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                                        <path d="M10 20C10 14.477 14.477 10 20 10V14C16.686 14 14 16.686 14 20H18V30H10V20Z" fill="currentColor" opacity="0.2" />
                                        <path d="M22 20C22 14.477 26.477 10 32 10V14C28.686 14 26 16.686 26 20H30V30H22V20Z" fill="currentColor" opacity="0.2" />
                                    </svg>
                                </div>
                            </div>

                            <p className="testimonial-text">{testimonial.text}</p>

                            <div className="testimonial-author">
                                <div className="author-avatar">
                                    <span className="avatar-initials">{testimonial.name.split(' ').map(n => n[0]).join('')}</span>
                                </div>
                                <div className="author-info">
                                    <h4 className="author-name">{testimonial.name}</h4>
                                    <p className="author-role">{testimonial.role}</p>
                                    <p className="author-location">{testimonial.location}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="testimonials-stats">
                    <div className="stat-item">
                        <div className="stat-icon">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <path d="M16 2L20.12 10.36L29 11.62L22.5 17.96L24.24 26.76L16 22.46L7.76 26.76L9.5 17.96L3 11.62L11.88 10.36L16 2Z" fill="currentColor" />
                            </svg>
                        </div>
                        <span className="stat-value">4.9</span>
                        <span className="stat-label">Average Rating</span>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat-item">
                        <div className="stat-icon">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <path d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" stroke="currentColor" strokeWidth="2" />
                                <path d="M12 16L14.5 18.5L20 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </div>
                        <span className="stat-value">5,000+</span>
                        <span className="stat-label">Reviews</span>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat-item">
                        <div className="stat-icon">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <path d="M16 4L18 10H24L19 14L21 20L16 16L11 20L13 14L8 10H14L16 4Z" fill="currentColor" />
                            </svg>
                        </div>
                        <span className="stat-value">98%</span>
                        <span className="stat-label">Recommend</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials
