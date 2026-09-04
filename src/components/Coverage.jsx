import { MapPin, Phone, Compass } from 'lucide-react'
import { Reveal, Stagger } from '../lib/motion.js'
import { AREA_LINKS, COVERAGE_COPY, BIZ } from '../data.js'
import Framed from './Framed.jsx'
import SectionHead from './SectionHead.jsx'
import './coverage.css'

export default function Coverage() {
  return (
    <section className="section cov grainbed" id="coverage" aria-labelledby="cov-title">
      <div className="shell cov__inner">
        <div className="cov__left">
          <SectionHead
            eyebrow="Where the Truck Goes"
            title="Every Direction Out of Red Deer"
            titleClassName="cov__h2"
            id="cov-title"
          />

          <Reveal technique="rise" delay={120} className="cov__cardWrap">
            <div className="cov__card grain">
              <span className="cov__cardTag stencil">Service Area</span>
              <p className="cov__copy">{COVERAGE_COPY}</p>
              <div className="cov__cardFoot">
                <span className="cov__base">
                  <MapPin aria-hidden="true" />
                  <span>Based in {BIZ.address}</span>
                </span>
                <a className="btn btn--primary btn--sm" href={BIZ.tel}>
                  <Phone aria-hidden="true" />
                  Check Your Address
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal technique="settle" delay={200} className="cov__photoWrap">
            <Framed
              className="cov__photo"
              src="/images/tuscany-hero.webp"
              alt="A suburban Alberta street at dusk with the Rocky Mountain foothills on the horizon behind the rooflines."
              style={{ '--frame-inset': '16px', '--frame-delay': '760ms' }}
            />
            <span className="cov__photoCap">Central Alberta, from the shop door</span>
          </Reveal>
        </div>

        <div className="cov__right">
          <div className="cov__ledgerHead">
            <Compass className="cov__compass" aria-hidden="true" />
            <h3 className="cov__ledgerTitle">Towns on the Regular Run</h3>
          </div>
          <Stagger className="cov__ledger" itemClassName="cov__townItem" technique="rise" step={60} start={80}>
            {AREA_LINKS.map((town, i) => (
              <a className="cov__town" href={BIZ.tel} key={town}>
                <span className="cov__townNo" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                <span className="cov__townName">{town}</span>
                <span className="cov__leader" aria-hidden="true" />
                <span className="cov__townTag">AB</span>
                <span className="cov__townRule" aria-hidden="true" />
              </a>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  )
}
