'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './About.module.css'

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className={styles.about}>
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className={`${styles.aboutContent} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.imageContainer}>
            <img src="/about-image.jpg" alt="Michael Dikandu" className={styles.aboutImage} />
          </div>
          <div className={styles.aboutTextContainer}>
            <div className={styles.codeSnippet}>
              <pre><code>{`const engineer = {
  name: "Michael Dikandu",
  role: "Mid Senior Software Engineer",
  passion: ["Clean Code", "Innovation"],
  mindset: "Problem Solver",
  approach: "User-Centric Design"
};`}</code></pre>
            </div>
            <p className={styles.aboutText}>
              Crafting elegant solutions to complex problems. With years of experience in software development, 
              I specialize in building scalable applications and leading technical teams to success.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
