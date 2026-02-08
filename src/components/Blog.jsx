import { useState } from 'react'
import './Blog.css'

const Blog = ({ selectedPost, setSelectedPost }) => {
    const posts = [
        {
            id: 'Dm-Gv5Hgh0c',
            category: 'Endurance & Mindset',
            title: 'I Walked 223KM from Takoradi to Accra: The Untold Story of Resilience',
            date: 'Feb 2, 2026',
            author: 'Kultural Team',
            image: 'https://img.youtube.com/vi/Dm-Gv5Hgh0c/maxresdefault.jpg',
            excerpt: "Braa Kwame highlights the epic 223km walk from Takoradi to Accra, inspiring Ghanaian youth with a powerful 'start now' message.",
            content: `
                <p>The journey from Takoradi to Accra is usually a three-hour drive along a well-paved highway. But for Braa Kwame, this stretch of road became a four-day sanctuary of self-discovery, physical agony, and unyielding purpose. Walking 223 kilometers is not merely a feat of physical strength; it is a profound statement directed at a generation of Ghanaians often paralyzed by the wait for "the right opportunity."</p>

                <h2>The First Step: Breaking the Mental Barrier</h2>
                <p>Starting at the harbor city of Takoradi, the initial few kilometers were filled with adrenaline. However, as the urban sprawl of Sekondi faded into the rural coastal roads, the reality of the task at hand began to set in. Kwame explains that the hardest part wasn't the walking itself, but the decision to actually begin when everyone around him thought it was madness.</p>
                <blockquote>"The world is full of people waiting for a sign. I decided to be the sign. The road doesn't care about your fears, only your commitment to the next step."</blockquote>
                
                <h2>Battling the Elements</h2>
                <p>The Ghanaian sun is unforgiving, especially on the open road where shade is a rare luxury. By day two, reaching the historic Cape Coast, Kwame's feet were a map of blisters, and his joints screamed for rest. He shared stories of local villagers who would offer water and encouragement, their eyes wide with disbelief at his mission. These interactions became the fuel for his journey.</p>
                <p>He describes the experience of walking through the night—the sound of the Atlantic waves crashing nearby, the solitude of the dark highway, and the intense mental battle to keep his legs moving when every nerve ending was signaling him to stop.</p>

                <h2>A Message for the Youth</h2>
                <p>Why walk when you can drive? Kwame's mission was clear: to prove that "starting now" is the most powerful tool in the arsenal of the Ghanaian youth. In an era where many feel stuck, he wanted to demonstrate that progress is made one step at a time, regardless of the distance.</p>
                <p>By the time the skyline of Accra appeared on the horizon on day four, Kwame had shed weight, skin, and doubt. He arrived not just as a man who had conquered a road, but as a living testament to the power of the human spirit. This story is for anyone who has a dream but is waiting for the "perfect" moment. The moment is now.</p>
            `
        },
        {
            id: 'ElRQuDrEiNI',
            category: 'Music Heritage',
            title: 'Gyedu Blay Ambulley: The Architect of the Simigwa Movement',
            date: 'Dec 13, 2025',
            author: 'Kultural Team',
            image: 'https://img.youtube.com/vi/ElRQuDrEiNI/maxresdefault.jpg',
            excerpt: "Ghana's Highlife Godfather talks about music, legacy, and his claim of originating RAP in 1973.",
            content: `
                <p>Long before the Bronx birthed Hip-hop in the late 1970s, a young musician in the coastal town of Sekondi was already experimenting with a rhythmic, spoken-word style of delivery over the infectious grooves of Highlife. That man was Gyedu Blay Ambulley, and the world is only just catching up to his legacy.</p>

                <h2>Simigwa-Do: The Birth of a New Sound</h2>
                <p>In our deep-dive interview, Ambulley takes us back to 1973, the year he released "Simigwa-Do." It was a revolutionary moment. While his contemporaries were sticking to traditional Highlife structures, Ambulley introduced "Simigwa"—a fusion of jazz, funk, and local rhythms, topped with a fast-paced, melodic chanting that we now recognize as rap.</p>
                <blockquote>"I didn't call it rap back then. It was just the rhythm of my soul meeting the beat of the highlife. It was natural, it was SIMIGWA."</blockquote>

                <h2>The Resistance of the Traditionalists</h2>
                <p>Innovation rarely comes without pushback. Ambulley recalls how the gatekeepers of the Ghanaian music scene initially dismissed his style. He was accused of "spoiling" the purity of Highlife. Yet, the youth connected with it instantly. The energy was undeniable, and the "Simigwa" movement began to take over the airwaves across West Africa.</p>
                <p>He speaks candidly about his time in the United States, his collaborations with international legends, and the lessons he learned about the business of music. For Ambulley, music has always been more than entertainment; it's a vehicle for social commentary and cultural pride.</p>

                <h2>Claiming the Crown</h2>
                <p>Ambulley isn't shy about his claim: Rap was born in Ghana. He breaks down the linguistic and rhythmic connections between traditional African storytelling and modern Hip-hop. Whether you agree with him or not, his influence is etched into every Afrobeats track playing today. He remains a vibrant, vocal, and vital part of our cultural history—a true Godfather who refuses to let the fire of authentic African music dim.</p>
            `
        },
        {
            id: 'cmc5I_BDnbk',
            category: 'Travel & Lifestyle',
            title: 'Gomoa Nsuaem: The Hidden Sanctuary of BON Hotel Crown Forest',
            date: 'Dec 9, 2025',
            author: 'Kultural Team',
            image: 'https://img.youtube.com/vi/cmc5I_BDnbk/maxresdefault.jpg',
            excerpt: "Exploring the luxury eco-resort and safari hotel located in Gomoa Nsuaem, Central Region.",
            content: `
                <p>Escape is a word used often in the travel industry, but at BON Hotel Crown Forest in Gomoa Nsuaem, it is a lived reality. Tucked away in the dense, vibrant greenery of the Central Region, this eco-resort offers a stark contrast to the concrete cacophony of Ghana's urban centers.</p>

                <h2>Into the Wild: The Safari Experience</h2>
                <p>Our journey began with a trek through the resort's private forest trails. Unlike traditional safaris on open plains, the Crown Forest offers an intimate encounter with nature. The air is thick with the scent of wet earth and ancient trees. We explored the canopy walks that offer a bird's-eye view of the ecosystem—a breathtaking reminder of the natural beauty Ghana has to offer.</p>
                <blockquote>"In the forest, time doesn't tick. It breathes. You don't just see the nature; you become part of its rhythm."</blockquote>

                <h2>Sustainability Meets Luxury</h2>
                <p>We spent time with the resort's management to discuss the philosophy behind the hotel. It's a delicate balance: providing high-end comfort while minimizing the environmental footprint. From the architectural design that mimics the terrain to the locally sourced materials used in the interior, every detail at Crown Forest is a nod to sustainability.</p>
                <p>We also explored the culinary offerings, where traditional Ghanaian flavors are elevated into fine-dining experiences using ingredients harvested from the surrounding communities. This "farm-to-table" approach isn't just a trend here; it's a way of supporting the local economy in Gomoa Nsuaem.</p>

                <h2>The Future of African Eco-Tourism</h2>
                <p>As more travelers seek meaningful, low-impact experiences, Crown Forest stands as a blueprint for what is possible. It's a sanctuary for the modern professional looking to "digitally detox" and reconnect with the land. Our weekend at Gomoa Nsuaem was a reminder that sometimes, the best way to move forward is to step back into the wild.</p>
            `
        },
        {
            id: 'QejWqAF_Pj8',
            category: 'Entertainment',
            title: 'The Hypeman\'s Truth: PM Addresses the "Late for Taddy" Controversy',
            date: 'Jan 19, 2026',
            author: 'Kultural Team',
            image: 'https://img.youtube.com/vi/QejWqAF_Pj8/maxresdefault.jpg',
            excerpt: "PM talks about his life as an MC/HYPEMAN, Radio, and what really happened backstage at Made in Taadi.",
            content: `
                <p>In the high-energy world of Ghanaian showbusiness, the MC or Hypeman is the glue that holds a performance together. They are the masters of the crowd, the conductors of the vibe. But what happens when the man behind the mic becomes the center of the drama? We sat down with PM, one of Takoradi's most influential voices, to peel back the curtain.</p>

                <h2>Behind the Glamour: The Life on Radio</h2>
                <p>PM's journey didn't start on the big stages of festivals. It began in the radio booths of Sekondi-Takoradi. He discusses the discipline required to maintain a daily show, the art of "talking to a wall" and making it sound like a conversation with the world, and how radio prepared him for the unpredictability of live events.</p>
                <blockquote>"People think you just hold a mic and shout. No. You are a psychologist. You have to read the room, the energy, and the silence."</blockquote>

                <h2>The "Made in Taadi" Incident</h2>
                <p>We didn't shy away from the tough questions. For the first time, PM breaks down the events of "Made in Taadi" that led to the viral "Was I Really Late?" headlines. He provides a candid look at the logistical nightmares that often plague large-scale festivals—from transportation hitches to backstage miscommunications.</p>
                <p>This isn't just about a missed time slot; it's about the pressure of performing in your hometown, where the expectations are higher than anywhere else. PM speaks on how he handled the social media backlash and the lessons he learned about professionalism in the "Wild West" of entertainment.</p>

                <h2>The Future of the MC in Ghana</h2>
                <p>As the entertainment industry matures, PM is vocal about the need for better structures and respect for the craft of the MC. He shares his vision for the next generation of hypemen and his commitment to putting Takoradi on the global entertainment map. This is a story of resilience, growth, and the man who refuses to be silenced by the noise.</p>
            `
        },
        {
            id: 'KR1dm1-5FX8',
            category: 'Culture',
            title: 'Kofi Bentil: The Voice of the Western Region\'s Highlife Soul',
            date: 'Nov 19, 2025',
            author: 'Kultural Team',
            image: 'https://img.youtube.com/vi/KR1dm1-5FX8/maxresdefault.jpg',
            excerpt: "Highlife musician Kofi Bentil shares his story from his early journey to finding his sound.",
            content: `
                <p>If you listen closely to the breeze in the twin city of Sekondi-Takoradi, you might catch the faint echoes of a brass band or the strum of an acoustic guitar. This is the heartland of Highlife, and Kofi Bentil is its living, breathing soul. For decades, he has carried the torch of authentic Ghanaian music, and his story is as rich as the melodies he composes.</p>

                <h2>From the Streets of Sekondi to the Stage</h2>
                <p>Bentil takes us back to his childhood, where the sounds of the neighborhood were his first music teachers. He describes the era of live bands in Sekondi—a time when every weekend was a festival of sound. These early influences shaped his understanding of rhythm and his deep respect for the instrumentals that define Highlife.</p>
                <blockquote>"Highlife is not just music. It's the history of our people written in notes. If we lose the groove, we lose our memory."</blockquote>

                <h2>The Struggle for Authenticity in a Digital Age</h2>
                <p>One of the most poignant parts of our conversation centers on the shift from live instrumentation to digital production. Bentil is not a luddite, but he is a purist. He discusses the "loss of soul" when a computer replaces a human drummer or a horn section. We explored his creative process—how he still writes music that breathes and lives, even in an era of 15-second TikTok hits.</p>
                <p>He speaks on the financial challenges facing traditional musicians and the lack of heritage protection for genres like Highlife. For him, every performance is a battle to keep the authentic sound of the Western Region alive.</p>

                <h2>A Legacy in the Making</h2>
                <p>Kofi Bentil isn't just looking back; he is mentoring the next generation. He shares his hopes for his children and his students, emphasizing the importance of learning the "roots" before reaching for the "leaves" of modern music. His interview is a masterclass in artistic integrity and a heartfelt love letter to the music that makes us who we are.</p>
            `
        },
        {
            id: 'PGp1vgkwyKc',
            category: 'Tradition',
            title: 'SUPREME: The Discipline Behind the Masquerade Mask',
            date: 'Jan 5, 2026',
            author: 'Kultural Team',
            image: 'https://img.youtube.com/vi/PGp1vgkwyKc/maxresdefault.jpg',
            excerpt: "Exclusive behind-the-mask footage and the culture that makes Supreme the biggest masquerade club in Sekondi Takoradi.",
            content: `
                <p>Every December 25th, Sekondi-Takoradi undergoes a transformation. The ordinary streets become a stage for one of Ghana's most vibrant and misunderstood traditions: the Ankos (Masquerade) festival. At the center of this cultural explosion is "Supreme," a club whose name carries a heavy weight of history and pride.</p>

                <h2>More Than Just a Costume</h2>
                <p>With over 7,000 members, Supreme is more than a social club; it's a social institution. We went behind the scenes to the rehearsals that start months before December. Contrary to popular belief, being a masquerade isn't just about wearing a mask and dancing. It requires intense physical stamina and artistic precision. The brass bands, the meticulously designed costumes, and the synchronized footwork are the results of hundreds of hours of practice.</p>
                <blockquote>"When you put on that mask, you are no longer yourself. You are the spirit of the city. You carry the joy of thousands on your shoulders."</blockquote>

                <h2>The Spiritual and Social Bond</h2>
                <p>We sat down with the leaders of Supreme to understand the "secrets" of the club. They spoke about the bond of brotherhood (and sisterhood) that the masquerade fosters. In a city where life can be tough, the club provides a sense of belonging and a support system that lasts all year round. We explored the history of the various masquerade styles and how they evolved from colonial influences into a uniquely Ghanaian expression of joy.</p>

                <h2>Preserving the Pride of Taadi</h2>
                <p>As the festival grows in popularity, attracting tourists from across the globe, the members of Supreme are focused on maintaining the "purity" of their tradition. They discuss the costs of the elaborate costumes—often funded by the members themselves—and the challenges of managing such a massive group. This story is an exclusive look into the heart of the Twin City, where the mask is not a way to hide, but a way to truly be seen.</p>
            `
        }
    ]

    if (selectedPost) {
        return (
            <section className="blog-article-view section animate-fade-in">
                <div className="container">
                    <div className="article-top-nav">
                        <button className="back-btn" onClick={() => setSelectedPost(null)}>
                            ← Back to Stories
                        </button>
                    </div>

                    <div className="article-layout">
                        {/* Main Content Column */}
                        <main className="article-main">
                            <header className="article-header">
                                <span className="article-category-tag">{selectedPost.category}</span>
                                <h1 className="article-title">{selectedPost.title}</h1>
                                <div className="article-meta-info">
                                    <span className="author">By {selectedPost.author}</span>
                                    <span className="separator">•</span>
                                    <span className="date">{selectedPost.date}</span>
                                </div>
                            </header>

                            <div className="article-hero-image">
                                <img src={selectedPost.image} alt={selectedPost.title} />
                            </div>

                            <div className="article-body-content" dangerouslySetInnerHTML={{ __html: selectedPost.content }} />
                        </main>

                        {/* Sidebar Column */}
                        <aside className="article-sidebar">
                            <div className="sidebar-widget video-widget">
                                <h3 className="widget-title">Watch the Episode</h3>
                                <div className="sidebar-video-wrapper">
                                    <iframe
                                        src={`https://www.youtube.com/embed/${selectedPost.id}`}
                                        title={selectedPost.title}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <p className="video-caption">Experience the full conversation on our YouTube channel.</p>
                                <a
                                    href={`https://youtube.com/watch?v=${selectedPost.id}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline btn-sm full-width"
                                >
                                    Watch on YouTube
                                </a>
                            </div>

                            <div className="sidebar-widget about-widget">
                                <h3 className="widget-title">The Kultural Mission</h3>
                                <p>We deep dive into the people, places, and sounds that shape our world. Our stories are narratives of resilience, creativity, and cultural pride.</p>
                            </div>

                            <div className="sidebar-widget newsletter-mini">
                                <h3 className="widget-title">Stay Updated</h3>
                                <p>Get the latest stories delivered to your inbox.</p>
                                <div className="mini-form">
                                    <input type="email" placeholder="Email Address" />
                                    <button className="btn btn-primary btn-sm">Join</button>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section id="blog" className="blog-page section">
            <div className="container">
                <div className="section-header text-center mb-xl">
                    <span className="section-label">The Kultural Blog</span>
                    <h2 className="section-title text-white">
                        Stories Behind the Lens
                    </h2>
                    <p className="section-subtitle">Deep dives into the people, places, and sounds that shape our culture.</p>
                </div>

                <div className="blog-grid">
                    {posts.map((post) => (
                        <article key={post.id} className="blog-card animate-on-scroll">
                            <div className="blog-image-wrapper">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="blog-img"
                                    onError={(e) => {
                                        // Fallback to high quality if max res is unavailable
                                        e.target.src = `https://img.youtube.com/vi/${post.id}/hqdefault.jpg`
                                    }}
                                />
                                <span className="blog-category">{post.category}</span>
                            </div>
                            <div className="blog-content">
                                <span className="blog-date">{post.date}</span>
                                <h3 className="blog-title">{post.title}</h3>
                                <p className="blog-excerpt">{post.excerpt}</p>
                                <button className="blog-link" onClick={() => setSelectedPost(post)}>
                                    Read Full Story →
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Blog
