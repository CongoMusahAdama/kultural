import { useState } from 'react'
import './Contact.css'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    // Basic form handling (no backend connected yet)
    const handleSubmit = (e) => {
        e.preventDefault()
        alert('Thank you for contacting us! We will get back to you soon.')
        setFormData({ name: '', email: '', message: '' })
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <section id="contact" className="contact section bg-black">
            <div className="container">
                <div className="contact-wrapper">
                    <div className="contact-info">
                        <span className="section-label">Get In Touch</span>
                        <h2 className="section-title text-white mb-lg">
                            Contact <span className="text-orange">Us</span>
                        </h2>
                        <p className="contact-desc mb-xl">
                            Have a question, feedback, or just want to say hello? We'd love to hear from you.
                        </p>

                        <div className="contact-details">
                            <div className="contact-item">
                                <h4 className="contact-label">Phone</h4>
                                <p className="contact-text">+233 206 005 260</p>
                                <p className="contact-text">+1 (943) 231-7847</p>
                            </div>

                            <div className="contact-item">
                                <h4 className="contact-label">Email</h4>
                                <a href="mailto:kulturalkompass@gmail.com" className="contact-link">
                                    kulturalkompass@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-wrapper">
                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-group">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="form-input"
                                    placeholder="Your Name"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="form-input"
                                    placeholder="your@email.com"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    className="form-input"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary w-full">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
