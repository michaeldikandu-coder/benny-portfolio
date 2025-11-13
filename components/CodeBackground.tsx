'use client'

import { useEffect, useRef } from 'react'
import styles from './CodeBackground.module.css'

export default function CodeBackground() {
  const backgroundRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const codeSnippets = [
      'function solve(problem) {',
      '  const solution = analyze(problem);',
      '  return optimize(solution);',
      '}',
      '',
      'class Engineer {',
      '  constructor() {',
      '    this.passion = "code";',
      '  }',
      '}',
      '',
      'const build = async () => {',
      '  await design();',
      '  await implement();',
      '  await deploy();',
      '};',
      '',
      'if (challenge) {',
      '  embrace(challenge);',
      '  learn();',
      '  grow();',
      '}',
    ]

    if (backgroundRef.current) {
      let content = ''
      for (let i = 0; i < 50; i++) {
        content += codeSnippets.join('\n') + '\n\n'
      }
      backgroundRef.current.textContent = content

      let position = 0
      const animate = () => {
        position -= 0.5
        if (backgroundRef.current) {
          backgroundRef.current.style.transform = `translateY(${position}px)`
          if (position < -1000) {
            position = 0
          }
        }
        requestAnimationFrame(animate)
      }
      animate()
    }
  }, [])

  return <div ref={backgroundRef} className={styles.codeBackground}></div>
}
