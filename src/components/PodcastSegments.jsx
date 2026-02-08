import './PodcastSegments.css'

const PodcastSegments = () => {
    const segments = [
        {
            id: 'truth-tensions',
            title: 'Truth & Tensions',
            subtitle: 'Real Conversations',
            description: 'Unpacking music, entertainment, faith, and societal issues—bringing truth and tension to conversations that matter.',
            image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&q=80',
            topics: [
                'Music & Entertainment 🎶',
                'Lifestyle & Society',
                'Religion & Faith (Impacts)',
                'Interviews & Real Conversations'
            ]
        },
        {
            id: 'faded-facts',
            title: 'Faded Facts',
            subtitle: 'Trends & Nostalgia',
            description: 'Exploring trends, ideas, and movements that rose and disappeared. What can we learn from these cultural moments?',
            image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&q=80',
            topics: [
                'Viral Trends & fads',
                'Forgotten Movements',
                'Lessons & Awareness',
                'Nostalgia'
            ]
        }
    ]

    return (
        <section id="segments" className="segments section bg-black">
            <div className="container">
                <div className="section-header text-center mb-xl">
                    <span className="section-label">Our Format</span>
                    <h2 className="section-title text-white">
                        Podcast Segments
                    </h2>
                </div>

                <div className="segments-grid">
                    {segments.map((segment) => (
                        <div key={segment.id} className="segment-card">
                            <div className="segment-image-wrapper">
                                <img src={segment.image} alt={segment.title} className="segment-img" />
                            </div>
                            <div className="segment-content">
                                <span className="segment-subtitle">{segment.subtitle}</span>
                                <h3 className="segment-title">{segment.title}</h3>
                                <p className="segment-description">{segment.description}</p>

                                <div className="segment-topics">
                                    {segment.topics.map((topic, i) => (
                                        <span key={i} className="topic-tag">{topic}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default PodcastSegments
