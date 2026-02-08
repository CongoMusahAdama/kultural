import { useState, useEffect, useRef } from 'react'
import './Stats.css'

const Stats = () => {
    const [isVisible, setIsVisible] = useState(false)
    const statsRef = useRef(null)

    const stats = [
        { id: 1, value: 2660, suffix: '+', label: 'Subscribers' },
        { id: 2, value: 106, suffix: '+', label: 'Videos' },
        { id: 3, value: 150000, suffix: '+', label: 'Views' },
        { id: 4, value: 30, suffix: '+', label: 'Guests' }
    ]

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.3 }
        )

        if (statsRef.current) {
            observer.observe(statsRef.current)
        }

        return () => {
            if (statsRef.current) {
                observer.unobserve(statsRef.current)
            }
        }
    }, [])

    const AnimatedCounter = ({ value, suffix }) => {
        const [count, setCount] = useState(0)

        useEffect(() => {
            if (!isVisible) return

            const duration = 2000
            const steps = 60
            const increment = value / steps
            let current = 0

            const timer = setInterval(() => {
                current += increment
                if (current >= value) {
                    setCount(value)
                    clearInterval(timer)
                } else {
                    setCount(Math.floor(current))
                }
            }, duration / steps)

            return () => clearInterval(timer)
        }, [isVisible, value])

        const formatNumber = (num) => {
            if (num >= 1000000) {
                return (num / 1000000).toFixed(1) + 'M'
            } else if (num >= 1000) {
                return (num / 1000).toFixed(2) + 'K'
            }
            return num.toString()
        }

        return (
            <span className="stat-number">
                {formatNumber(count)}{suffix}
            </span>
        )
    }

    return (
        <section className="stats" ref={statsRef}>
            <div className="container">
                <div className="stats-grid">
                    {stats.map((stat) => (
                        <div key={stat.id} className="stat-item">
                            <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                            <span className="stat-label">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Stats
