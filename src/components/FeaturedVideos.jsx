import { useState, useEffect } from 'react'
import './FeaturedVideos.css'

// Configuration - Replace with your own or use environment variables
// You can get these from the Google Cloud Console (API Key) and YouTube (Channel ID)
const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY || ''
const CHANNEL_ID = import.meta.env.VITE_YOUTUBE_CHANNEL_ID || 'UC6E9bY9R9C6QeB-eL-E-eEg' // Example ID, replace with real one

const FeaturedVideos = () => {
    // Fallback/Initial videos
    const initialVideos = [
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

    const [videos, setVideos] = useState(initialVideos)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchVideos = async () => {
            if (!YOUTUBE_API_KEY || !CHANNEL_ID) return

            setLoading(true)
            try {
                // First, get the 'uploads' playlist ID for the channel
                const channelResponse = await fetch(
                    `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${CHANNEL_ID}&key=${YOUTUBE_API_KEY}`
                )
                const channelData = await channelResponse.json()

                if (channelData.items && channelData.items.length > 0) {
                    const uploadsPlaylistId = channelData.items[0].contentDetails.relatedPlaylists.uploads

                    // Then, fetch the videos from that playlist
                    const playlistResponse = await fetch(
                        `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=6&playlistId=${uploadsPlaylistId}&key=${YOUTUBE_API_KEY}`
                    )
                    const playlistData = await playlistResponse.json()

                    if (playlistData.items) {
                        const fetchedVideos = playlistData.items.map(item => ({
                            id: item.snippet.resourceId.videoId,
                            title: item.snippet.title,
                            description: item.snippet.description.length > 150
                                ? item.snippet.description.substring(0, 150) + '...'
                                : item.snippet.description
                        }))
                        setVideos(fetchedVideos)
                    }
                }
            } catch (error) {
                console.error('Error fetching YouTube videos:', error)
                // Stay with initialVideos on error
            } finally {
                setLoading(false)
            }
        }

        fetchVideos()
    }, [])

    return (
        <section id="videos" className="videos section bg-black">
            <div className="container">
                <div className="section-header text-center mb-xl">
                    <span className="section-label">Watch Now</span>
                    <h2 className="section-title text-white">
                        Latest Episodes
                    </h2>
                </div>

                {loading ? (
                    <div className="loading-spinner text-center">
                        <p>Loading latest videos...</p>
                    </div>
                ) : (
                    <div className="videos-grid">
                        {videos.map((video) => (
                            <div key={video.id} className="video-card animate-fade-in">
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
                )}

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
