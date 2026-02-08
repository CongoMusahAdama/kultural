import './Blog.css'

const Blog = () => {
    const articles = [
        {
            id: 1,
            category: 'Music & Culture',
            title: 'The Evolution of Afrobeats: From Local to Global',
            excerpt: 'Exploring how Afrobeats has transformed from a regional sound to a global phenomenon, influencing music culture worldwide.',
            image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80',
            date: 'Feb 5, 2026'
        },
        {
            id: 2,
            category: 'Faith & Society',
            title: 'Faith in the Modern World: Navigating Belief and Doubt',
            excerpt: 'A deep dive into how contemporary society is reshaping religious practices and spiritual beliefs in the digital age.',
            image: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=800&q=80',
            date: 'Feb 3, 2026'
        },
        {
            id: 3,
            category: 'Faded Facts',
            title: 'Remember Planking? The Rise and Fall of Viral Trends',
            excerpt: 'Looking back at internet trends that dominated our feeds and then vanished—what can we learn from these cultural moments?',
            image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80',
            date: 'Jan 30, 2026'
        }
    ]

    return (
        <section id="blog" className="blog section bg-dark">
            <div className="container">
                <div className="section-header text-center mb-xl">
                    <span className="section-label">Read & Reflect</span>
                    <h2 className="section-title text-white">
                        Latest Articles
                    </h2>
                </div>

                <div className="blog-grid">
                    {articles.map((article) => (
                        <article key={article.id} className="blog-card">
                            <div className="blog-image-wrapper">
                                <img src={article.image} alt={article.title} className="blog-img" />
                                <span className="blog-category">{article.category}</span>
                            </div>
                            <div className="blog-content">
                                <span className="blog-date">{article.date}</span>
                                <h3 className="blog-title">{article.title}</h3>
                                <p className="blog-excerpt">{article.excerpt}</p>
                                <a href={`#article-${article.id}`} className="blog-link">
                                    Read Article →
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Blog
