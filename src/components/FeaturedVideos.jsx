import './FeaturedVideos.css'

const FeaturedVideos = () => {
    const videos = [
        {
            id: 'Dm-Gv5Hgh0c',
            title: 'I Walked 223KM from Takoradi to Accra within 4 Days',
            description: "Braa Kwame highlights the epic 223km walk from Takoradi to Accra, inspiring Ghanaian youth with a powerful 'start now' message."
        },
        {
            id: 'ElRQuDrEiNI',
            title: 'Gyedu Blay Ambulley: RAP Was Born In Ghana in 1973',
            description: "Ghana's Highlife Godfather talks about music, legacy, and his claim of originating RAP in 1973."
        },
        {
            id: 'cmc5I_BDnbk',
            title: 'A Glimpse Of A Weekend at BON Hotel Crown Forest',
            description: "Exploring the luxury eco-resort and safari hotel located in Gomoa Nsuaem, Central Region."
        },
        {
            id: 'QejWqAF_Pj8',
            title: 'PM (MC/HYPEMAN) - "WAS I REALLY LATE" FOR MADE IN TAADI?',
            description: "PM talks about his life as an MC/HYPEMAN, Radio, and why he was late for Made in Taadi and what really happened backstage."
        },
        {
            id: 'KR1dm1-5FX8',
            title: 'From SEKONDI to Highlife Glory: Kofi Bentil Speaks Out....',
            description: "Highlife musician Kofi Bentil shares his story from his early journey to finding his sound. He talks about the heart of highlife, the lessons he's learned, and more."
        },
        {
            id: 'PGp1vgkwyKc',
            title: 'SUPREME: 7000+ Members on 25th December - The Biggest Masquerade Club In Sekondi Takoradi',
            description: "Exclusive behind-the-mask footage, rehearsals, epic performances, member spotlights, throwbacks, and everything that makes Supreme the most feared masquerade club."
        }
    ]

    return (
        <section id="videos" className="videos section bg-black">
            <div className="container">
                <div className="section-header text-center mb-xl">
                    <span className="section-label">Watch Now</span>
                    <h2 className="section-title text-white">
                        Latest Episodes
                    </h2>
                </div>

                <div className="videos-grid">
                    {videos.map((video) => (
                        <div key={video.id} className="video-card">
                            <div className="video-wrapper">
                                <iframe
                                    src={`https://www.youtube.com/embed/${video.id}`}
                                    title={video.title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <h3 className="video-title mt-sm">{video.title}</h3>
                            <p className="video-description">{video.description}</p>
                        </div>
                    ))}
                </div>

                <div className="videos-cta text-center mt-xl">
                    <a
                        href="https://www.youtube.com/@KulturalKompass"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                    >
                        View All Episodes
                    </a>
                </div>
            </div>
        </section>
    )
}

export default FeaturedVideos
