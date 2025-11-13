'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './Experience.module.css'

const experiences = [
  {
    title: 'Frontend & Mobile Developer',
    company: 'AqulineTech',
    period: '2025 - Present',
    description: 'Mid-Senior developer building modern web and mobile applications.',
    achievements: [
      'Developed cross-platform mobile applications',
      'Implemented responsive web interfaces',
      'Collaborated with cross-functional teams'
    ]
  },
  {
    title: 'Full Stack Developer',
    company: 'IETECH',
    period: '2025',
    description: 'Developed and maintained multiple client projects with focus on performance.',
    achievements: [
      'Implemented CI/CD pipelines',
      'Improved development workflows',
      'Reduced application load times by 40%'
    ]
  },
  {
    title: 'Fullstack Developer',
    company: 'Aceletis Ltd',
    period: '2024',
    description: 'Created responsive web applications using React and .NET.',
    achievements: [
      'Collaborated with designers for pixel-perfect UIs',
      'Optimized application performance',
      'Built full-stack solutions with React and .NET'
    ]
  },
  {
    title: 'Frontend Developer',
    company: 'Semicolon',
    period: '2023 - 2024',
    description: 'Created responsive web applications using React and Java.',
    achievements: [
      'Implemented pixel-perfect UIs',
      'Collaborated with design team',
      'Optimized application performance'
    ]
  },
  {
    title: 'Software Engineer',
    company: 'Semicolon',
    period: '2022 - 2023',
    description: 'Graduated with honors. Specialized in web technologies and software engineering.',
    achievements: [
      'Completed capstone project on real-time data visualization',
      'Specialized in web technologies',
      'Graduated with honors'
    ]
  }
]

export default function Experience() {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems(experiences.map(() => true))
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
    <section id="experience" ref={sectionRef} className={styles.experience}>
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`${styles.timelineItem} ${visibleItems[index] ? styles.visible : ''}`}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <div className={styles.timelineHeader}>
                  <div>
                    <h3>{exp.title}</h3>
                    <h4>{exp.company}</h4>
                  </div>
                  <span className={styles.period}>{exp.period}</span>
                </div>
                <p className={styles.description}>{exp.description}</p>
                <ul className={styles.achievements}>
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
