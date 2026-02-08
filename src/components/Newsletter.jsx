import { useState } from 'react'
import './Newsletter.css'

const Newsletter = () => {
    const [email, setEmail] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (email) {
            alert('Welcome to the Kompass Community!')
            setEmail('')
        }
    }

    return (
        <section className="newsletter section bg-dark-gray">
            <div className="container">
                <div className="newsletter-content text-center">
                    <h2 className="section-title text-white mb-md">
                        Join the Kompass Community
                    </h2>
                    <p className="newsletter-desc text-gray mb-lg">
                        Get updates, episodes, and cultural insights delivered straight to your inbox.
                    </p>

                    <form onSubmit={handleSubmit} className="newsletter-form">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="newsletter-input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button type="submit" className="btn btn-primary">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Newsletter
