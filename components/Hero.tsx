'use client'

import { useEffect, useState } from 'react'
import styles from './Hero.module.css'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className={styles.hero}>
      <div className={`${styles.heroContent} ${isVisible ? styles.visible : ''}`}>
        <div className={styles.avatarContainer}>
          <img src="/avatar.jpg" alt="Noubata Benoit" className={styles.avatar} />
        </div>
        <h1 className={styles.glitch}>Noubata Benoit</h1>
        <p className={styles.subtitle}>Software Engineer</p>
        <div className={styles.ctaButtons}>
          <a href="#contact" className={`${styles.btn} ${styles.btnPrimary}`}>
            Get In Touch
          </a>
          <a href="#about" className={`${styles.btn} ${styles.btnSecondary}`}>
            Learn More
          </a>
        </div>
      </div>
    </section>
  )
}
