import { Users, Tractor, Calculator, Zap } from 'lucide-react'
import { Reveal, useInView } from '../lib/motion.js'
import { WHY } from '../data.js'
import Framed from './Framed.jsx'
import SectionHead from './SectionHead.jsx'
import './why.css'

const ICONS = [Users, Tractor, Calculator, Zap]

function Reason({ item, index }) {
  const [ref, inView] = useInView({ threshold: 0.35, rootMargin: '0px 0px -10% 0px' })
  const Icon = ICONS[index]
  return (
    <li
      ref={ref}
      className="why__row"
      data-in={inView ? 'true' : 'false'}
      style={{ '--d': `${index * 120}ms` }}
    >
      <span className="why__n" aria-hidden="true">{item.n}</span>
      <div className="why__body">
        <div className="why__headRow">
          <Icon className="why__icon" aria-hidden="true" />
          <h3 className="why__title">{item.title}</h3>
        </div>
        <span className="why__rule" aria-hidden="true" />
        <p className="why__text">{item.body}</p>
      </div>
    </li>
  )
}

export default function WhyUs() {
  return (
    <section className="section why grainbed" id="why" aria-labelledby="why-title">
      <div className="shell why__inner">
        <div className="why__aside">
          <SectionHead
            eyebrow="Why This Crew"
            title="Four Reasons People Keep the Number"
            titleClassName="why__h2"
            ledeClassName="why__lede"
            id="why-title"
            lede="Nothing here is a slogan. Each one is something a customer in Central Alberta can check on the day the truck shows up."
          />

          {/* Tilted or Rotated Photo Card — use 1 of 2 */}
          <Reveal technique="settle" delay={160} className="why__photoWrap">
            <span className="why__photoBack" aria-hidden="true" />
            <Framed
              className="why__photo"
              src="/images/about-crew.webp"
              alt="The five-person Argee Electric crew lined up in front of two service vans inside their shop."
              style={{ '--frame-inset': '9px', '--frame-delay': '700ms' }}
            />
            <span className="why__cap">The crew, Red Deer shop</span>
          </Reveal>
        </div>

        <ol className="why__list list-reset">
          {WHY.map((item, i) => (
            <Reason item={item} index={i} key={item.n} />
          ))}
        </ol>
      </div>
    </section>
  )
}
