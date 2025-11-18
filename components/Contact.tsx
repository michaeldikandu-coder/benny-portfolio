'use client'

import { useEffect, useRef, useState } from 'react'
import { HiMail, HiPhone, HiDocumentText } from 'react-icons/hi'
import { FaXTwitter, FaGithub } from 'react-icons/fa6'
import styles from './Contact.module.css'

const contacts = [
  {
    icon: HiMail,
    text: 'dikandumichael@gmail.com',
    href: 'mailto:dikandumichael@gmail.com',
  },
  {
    icon: HiPhone,
    text: '+234 706 699 3421',
    href: 'tel:+2347066993421',
  },
  {
    icon: FaXTwitter,
    text: '@BlockVerse3235',
    href: 'https://x.com/BlockVerse3235',
  },
  {
    icon: FaGithub,
    text: 'GitHub: Michael262626',
    href: 'https://github.com/Michael262626',
  },
  {
    icon: HiDocumentText,
    text: 'Download Resume',
    href: '/michael-resume.pdf',
  },
]

export default function Contact() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards(contacts.map(() => true))
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
    <section id="contact" ref={sectionRef} className={styles.contact}>
      <div className="container">
        <h2 className="section-title">Let&apos;s Connect</h2>
        <div className={styles.contactContent}>
          <div className={styles.contactLinks}>
            {contacts.map((contact, index) => {
              const IconComponent = contact.icon
              return (
                <a
                  key={index}
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : undefined}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  download={contact.href.endsWith('.pdf') ? true : undefined}
                  className={`${styles.contactCard} ${visibleCards[index] ? styles.visible : ''}`}
                  style={{ transitionDelay: `${index * 0.2}s` }}
                >
                  <span className={styles.contactIcon}>
                    <IconComponent />
                  </span>
                  <span className={styles.contactText}>{contact.text}</span>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
