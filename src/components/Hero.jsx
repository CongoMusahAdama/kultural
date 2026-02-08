import { useState, useEffect, useRef } from 'react'
import './Hero.css'

const Hero = () => {
    const [showContent, setShowContent] = useState(true)
    const playerRef = useRef(null)
    const intervalRef = useRef(null)
    const isRestartingRef = useRef(false)

    useEffect(() => {
        // Load YouTube IFrame API
        const tag = document.createElement('script')
        tag.src = 'https://www.youtube.com/iframe_api'
        const firstScriptTag = document.getElementsByTagName('script')[0]
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

        // Initialize player when API is ready
        window.onYouTubeIframeAPIReady = () => {
            playerRef.current = new window.YT.Player('hero-video-player', {
                videoId: 'Dm-Gv5Hgh0c',
                playerVars: {
                    autoplay: 1,
                    mute: 1,
                    controls: 0,
                    showinfo: 0,
                    rel: 0,
                    modestbranding: 1,
                    playsinline: 1,
                    disablekb: 1,
                    fs: 0,
                    iv_load_policy: 3
                },
                events: {
                    onReady: (event) => {
                        event.target.seekTo(13, true)
                        event.target.playVideo()
                        setShowContent(false)

                        // Monitor playback to keep it within 13-30 seconds
                        intervalRef.current = setInterval(() => {
                            if (isRestartingRef.current) return

                            const currentTime = event.target.getCurrentTime()

                            // If video reaches 30s, trigger the pause/text reveal
                            if (currentTime >= 30) {
                                isRestartingRef.current = true
                                event.target.pauseVideo()
                                setShowContent(true)

                                // Wait for 5 seconds showing text, then restart video
                                setTimeout(() => {
                                    setShowContent(false)
                                    event.target.seekTo(13, true)
                                    event.target.playVideo()
                                    isRestartingRef.current = false
                                }, 5000)
                            } else if (currentTime < 13) {
                                // Forced correction if it somehow jumps back
                                event.target.seekTo(13, true)
                            }
                        }, 100)
                    },
                    onStateChange: (event) => {
                        // Ensure video keeps playing if it ends out of cycle
                        if (event.data === window.YT.PlayerState.ENDED) {
                            if (!isRestartingRef.current) {
                                event.target.seekTo(13, true)
                                event.target.playVideo()
                            }
                        }
                    }
                }
            })
        }

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current)
            }
            if (playerRef.current && playerRef.current.destroy) {
                playerRef.current.destroy()
            }
        }
    }, [])

    return (
        <section id="home" className="hero">
            {/* Video Background */}
            <div className="hero-video-background">
                <div id="hero-video-player"></div>
                <div className="hero-overlay"></div>
            </div>

            {/* Main Content */}
            <div className={`container hero-container ${showContent ? 'visible' : 'hidden'}`}>
                <div className="hero-content-grid">
                    {/* Left Column - Text Content */}
                    <div className="hero-text-column">
                        <h1 className="hero-title">
                            Kultural <span className="text-orange">Kompass</span>
                        </h1>
                        <p className="hero-tagline">
                            Exploring culture, truth, and the tensions that shape our world.
                        </p>

                        <div className="hero-cta">
                            <a
                                href="https://www.youtube.com/@KulturalKompass"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary btn-rounded"
                            >
                                Subscribe
                            </a>
                            <a href="#videos" className="btn btn-outline btn-rounded">
                                Latest Episode
                            </a>
                        </div>
                    </div>

                    {/* Right Column - Image (optional, can be removed if background is enough) */}
                    <div className="hero-image-column">
                        {/* Image is in background, this column provides spacing */}
                    </div>
                </div>

                {/* Social Media Platforms */}
                <div className="hero-platforms">
                    <span className="platforms-label">Podcast available on:</span>
                    <div className="platforms-carousel">
                        <div className="platforms-track">
                            <a href="https://www.youtube.com/@KulturalKompass" target="_blank" rel="noopener noreferrer" className="platform-link youtube" title="YouTube">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="#FF0000">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                </svg>
                                <span>YouTube</span>
                            </a>
                            <a href="https://youtube.com/@kulturalkompass/community?si=G9DK9A2T_QD9hflU" target="_blank" rel="noopener noreferrer" className="platform-link community" title="Join Community">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="var(--brand-orange)">
                                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 0 5 1.34 5 3s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                                </svg>
                                <span>Community</span>
                            </a>
                            <a href="https://tiktok.com/@kulturalkompass?_r=1&_t=ZS-93jMrut6M9A" target="_blank" rel="noopener noreferrer" className="platform-link tiktok" title="TikTok">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="#000000">
                                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                                </svg>
                                <span>TikTok</span>
                            </a>
                            <a href="https://facebook.com/share/1AZxhyRNth/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="platform-link facebook" title="Facebook">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="#1877F2">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                                <span>Facebook</span>
                            </a>
                            <a href="https://x.com/oldghanaempire?s=21" target="_blank" rel="noopener noreferrer" className="platform-link twitter" title="X (Twitter)">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="#000000">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                                <span>X</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
