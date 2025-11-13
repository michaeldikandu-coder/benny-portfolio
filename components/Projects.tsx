'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './Projects.module.css'

const projects = [
  {
    title: 'Food Hubs',
    description: 'Food delivery platform with real-time ordering',
    liveUrl: 'https://food-hubs.vercel.app/',
    type: 'live',
    tags: ['Next.js', 'React', 'Full Stack']
  },
  {
    title: 'Cash Prediction',
    description: 'Financial forecasting and analytics platform',
    liveUrl: 'https://cashprediction-orpin.vercel.app/',
    type: 'live',
    tags: ['Machine Learning', 'React', 'Analytics']
  },
  {
    title: 'Smith Repo',
    description: 'Portfolio and project showcase',
    liveUrl: 'https://smith-repo.vercel.app/',
    type: 'live',
    tags: ['Next.js', 'TypeScript', 'UI/UX']
  },
  {
    title: 'Sentoria',
    description: 'Enterprise solution platform',
    liveUrl: 'https://www.sentoria.org/',
    type: 'live',
    tags: ['React', 'Enterprise', 'SaaS']
  },
  {
    title: 'Meeting Minds',
    description: 'Collaborative meeting and scheduling app',
    liveUrl: 'https://meeting-minds.vercel.app/',
    type: 'live',
    tags: ['React', 'Real-time', 'Collaboration']
  },
  {
    title: 'FX Trading API',
    description: 'Backend API for forex trading platform',
    githubUrl: 'https://github.com/Michael262626/Fx_trading_app',
    type: 'backend',
    tags: ['Node.js', 'API', 'Trading']
  },
  {
    title: 'Wallet System',
    description: 'Digital wallet backend infrastructure',
    githubUrl: 'https://github.com/Michael262626/Wallet',
    type: 'backend',
    tags: ['Backend', 'Payments', 'Security']
  },
  {
    title: 'Music Booking',
    description: 'Event and artist booking management system',
    githubUrl: 'https://github.com/Michael262626/music-booking',
    type: 'backend',
    tags: ['Node.js', 'Database', 'Booking']
  }
]

export default function Projects() {
  const [showAll, setShowAll] = useState(false)
  const [visibleCards, setVisibleCards] = useState<boolean[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  const displayedProjects = showAll ? projects : projects.slice(0, 4)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards(projects.map(() => true))
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" ref={sectionRef} className={styles.projects}>
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className={styles.projectsGrid}>
          {displayedProjects.map((project, index) => (
            <div
              key={index}
              className={`${styles.projectCard} ${visibleCards[index] ? styles.visible : ''}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className={styles.projectContent}>
                <div className={styles.projectHeader}>
                  <div className={styles.projectIcon}>
                    {project.type === 'live' ? '🌐' : '⚙'}
                  </div>
                  <h3>{project.title}</h3>
                </div>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.projectTags}>
                  {project.tags.map((tag, i) => (
                    <span key={i} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              </div>
              <div className={styles.projectFooter}>
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.projectLink}
                  >
                    View Live →
                  </a>
                )}
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.projectLink}
                  >
                    View Code →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {!showAll && projects.length > 4 && (
          <div className={styles.viewMoreContainer}>
            <button 
              onClick={() => setShowAll(true)}
              className={styles.viewMoreBtn}
            >
              View More Projects
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
