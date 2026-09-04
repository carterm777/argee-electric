import { HeartHandshake, ShieldCheck, ClipboardList, CalendarClock, Phone, ArrowDown } from 'lucide-react'
import { WordReveal, prefersReducedMotion } from '../lib/motion.js'
import { BIZ, HERO } from '../data.js'
import PhotoDiagnosis from './PhotoDiagnosis.jsx'
import './hero.css'

const BADGES = [
  { Icon: HeartHandshake, label: 'Satisfaction Guarantee' },
  { Icon: ShieldCheck, label: 'Licensed & Insured' },
  { Icon: ClipboardList, label: 'Free Estimates' },
  { Icon: CalendarClock, label: 'Flexible Scheduling' },
]

export default function Hero() {
  const still = prefersReducedMotion()
  return (
    <section className="hero grainbed" aria-labelledby="hero-title">
      <div className="hero__ground" aria-hidden="true" />

      <div className="shell shell--wide hero__inner">
        <div className="hero__copy">
          <p className="eyebrow hero__eyebrow" data-load style={{ '--reveal-delay': '80ms' }}>
            Red Deer &amp; Central Alberta
          </p>

          <h1 className="hero__title" id="hero-title">
            {still ? (
              HERO.headline
            ) : (
              <WordReveal as="span" text={HERO.headline} step={68} start={180} />
            )}
          </h1>

          <p className="hero__sub" data-load style={{ '--reveal-delay': '760ms' }}>
            {HERO.sub}
          </p>

          <ul className="hero__badges list-reset" data-load style={{ '--reveal-delay': '880ms' }}>
            {BADGES.map(({ Icon, label }, i) => (
              <li className="hero__badge" key={label} style={{ '--i': i }}>
                <Icon className="hero__badgeIcon" aria-hidden="true" />
                <span>{label}</span>
              </li>
            ))}
          </ul>

          <div className="hero__actions" data-load style={{ '--reveal-delay': '1020ms' }}>
            <a className="btn btn--primary hero__call" href={BIZ.tel}>
              <Phone aria-hidden="true" />
              <span className="hero__callFull">Call {BIZ.phone}</span>
              <span className="hero__callShort">Call the Shop</span>
            </a>
            <a className="btn btn--ghost" href="#services">
              See What We Do
              <ArrowDown aria-hidden="true" />
            </a>
          </div>

          <p className="hero__note" data-load style={{ '--reveal-delay': '1140ms' }}>
            Two generations, one crew, and the same number since the shop moved to Red Deer.
          </p>
        </div>

        <div className="hero__widget" data-load style={{ '--reveal-delay': '380ms' }}>
          <PhotoDiagnosis />
        </div>
      </div>

      <div className="hero__photo">
        <img
          src="/images/home-hero.webp"
          alt="An Argee Electric service van parked at the curb of a Red Deer bungalow with its rear doors open on a stocked interior."
          width={2000}
          height={1125}
          fetchpriority="high"
          decoding="async"
        />
        <span className="hero__scrim" aria-hidden="true" />
        <span className="hero__grain" aria-hidden="true" />
      </div>
    </section>
  )
}
