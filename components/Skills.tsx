'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './Skills.module.css'

const skills = [
  { icon: '{ }', title: 'Frontend', description: 'React, ReactNative, TypeScript, CSS' },
  { icon: '⚙', title: 'Backend', description: 'Next.js, Node.js, C#, Java' },
  { icon: '☁', title: 'Cloud', description: 'AWS, Azure, Docker' },
  { icon: '⚡', title: 'Architecture', description: 'Microservices, APIs' },
  { icon: '📱', title: 'Languages', description: 'JavaScript, TypeScript, C#, Java' },
  { icon: '🛠', title: 'Frameworks', description: 'React.js, Next.js, Node.js' },
  { icon: '⛓', title: 'Web3', description: 'Sui Move, Blockchain, Smart Contracts' },
]

export default function Skills() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards(skills.map(() => true))
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
    <section id="skills" ref={sectionRef} className={styles.skills}>
      <div className="container">
        <h2 className="section-title">Technical Expertise</h2>
        <div className={styles.skillsGrid}>
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`${styles.skillCard} ${visibleCards[index] ? styles.visible : ''}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className={styles.skillIcon}>{skill.icon}</div>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
