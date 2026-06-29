import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import CodeWindow from '../components/CodeWindow.jsx'
import Aurora from '../components/Aurora.jsx'
import { getTechnologyByName } from '../data/technologies.js'

const techStack = [
  'React', 'Node.js', 'Express', 'MongoDB', 'AWS', 'Docker',
  'Kubernetes', 'Python', 'TensorFlow', 'FreeRTOS', 'STM32', 'GraphQL',
]

export default function TechSection() {
  return (
    <section className="section section--alt section--aurora">
      <Aurora />
      <div className="container tech-split">
        <Reveal variant="left" className="tech-split__text">
          <span className="eyebrow">Engineering Excellence</span>
          <h2 className="section-header__title">A modern stack, end to end</h2>
          <p className="section-header__subtitle">
            From embedded firmware to cloud-native web apps, we build on a battle-tested
            toolchain — including the full <strong>MERN</strong> stack — for performance,
            scale and reliability.
          </p>
          <div className="tech-pills">
            {techStack.map((t, i) => {
              const match = getTechnologyByName(t)
              return (
                <Reveal
                  as={match ? Link : 'span'}
                  key={t}
                  variant="zoom"
                  delay={i * 50}
                  className={`tech-pill ${match ? 'tech-pill--link' : ''}`}
                  {...(match ? { to: `/technologies/${match.slug}` } : {})}
                >
                  {t}
                </Reveal>
              )
            })}
          </div>
        </Reveal>
        <Reveal variant="right" className="tech-split__code">
          <CodeWindow />
        </Reveal>
      </div>
    </section>
  )
}
