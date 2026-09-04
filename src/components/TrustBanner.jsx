import { BadgeCheck, MapPin, Award, ThumbsUp } from 'lucide-react'
import { Reveal, Stagger } from '../lib/motion.js'
import './trust.css'

const BADGES = [
  { Icon: BadgeCheck, label: 'Licensed & Insured', note: 'Certified Trade' },
  { Icon: MapPin, label: 'Locally Owned & Operated', note: 'Red Deer, AB' },
  { Icon: Award, label: 'Years of Experience', note: 'Two Generations' },
  { Icon: ThumbsUp, label: 'Satisfaction Guaranteed', note: 'We Stand Behind It' },
]

export default function TrustBanner() {
  return (
    <section className="section section--tight trust grainbed" aria-labelledby="trust-title">
      <div className="shell">
        <div className="trust__panel grain">
          <span className="trust__corner trust__corner--tl" aria-hidden="true" />
          <span className="trust__corner trust__corner--tr" aria-hidden="true" />
          <span className="trust__corner trust__corner--bl" aria-hidden="true" />
          <span className="trust__corner trust__corner--br" aria-hidden="true" />

          <Reveal technique="fade" className="trust__intro">
            <span className="trust__ruleTop" data-reveal="wipe" aria-hidden="true" />
            <h2 className="trust__title" id="trust-title" data-reveal="rise" style={{ '--reveal-delay': '120ms' }}>
              What You Are Hiring
            </h2>
          </Reveal>

          <Stagger className="trust__grid" itemClassName="trust__cell" technique="rise" step={90} start={120}>
            {BADGES.map(({ Icon, label, note }) => (
              <div className="trust__badge" key={label}>
                <span className="trust__seal" aria-hidden="true">
                  <Icon />
                </span>
                <h3 className="trust__label">{label}</h3>
                <p className="trust__note">{note}</p>
              </div>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  )
}
