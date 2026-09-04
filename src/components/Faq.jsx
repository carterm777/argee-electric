import { Warehouse, Route, Receipt, Handshake, Store, Scale, Plus } from 'lucide-react'
import { Reveal, Stagger, useAccordion } from '../lib/motion.js'
import { FAQ, BIZ } from '../data.js'
import SectionHead from './SectionHead.jsx'
import './faq.css'

const ICONS = [Warehouse, Route, Receipt, Handshake, Store, Scale]

export default function Faq() {
  const { toggle, isOpen } = useAccordion(0)

  return (
    <section className="section faq grainbed" id="faq" aria-labelledby="faq-title">
      <div className="shell faq__inner">
        <div className="faq__aside">
          <SectionHead
            eyebrow="Straight Answers"
            title="Questions People Ask Before They Book"
            titleClassName="faq__h2"
            ledeClassName="faq__lede"
            id="faq-title"
            lede="If the answer you need is not here, the phone is the fastest way to get it."
          >
            <a
              className="btn btn--ghost faq__ask"
              href={BIZ.tel}
              data-reveal="rise"
              style={{ '--reveal-delay': '420ms' }}
            >
              Ask Us Directly
            </a>
          </SectionHead>
        </div>

        <Stagger className="faq__list" itemClassName="faq__item" technique="rise" step={80} start={120}>
          {FAQ.map((row, i) => {
            const Icon = ICONS[i]
            const open = isOpen(i)
            return (
              <div className="faq__row" key={row.q} data-open={open ? 'true' : 'false'}>
                <h3 className="faq__qWrap">
                  <button
                    type="button"
                    className="faq__q"
                    aria-expanded={open}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-btn-${i}`}
                    onClick={() => toggle(i)}
                  >
                    <span className="faq__qIcon" aria-hidden="true">
                      <Icon />
                    </span>
                    <span className="faq__qText">{row.q}</span>
                    <span className="faq__toggle" aria-hidden="true">
                      <Plus />
                    </span>
                  </button>
                </h3>
                <div
                  className="faq__panel"
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-btn-${i}`}
                >
                  <div className="faq__panelInner">
                    <p className="faq__a">{row.a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </Stagger>
      </div>
    </section>
  )
}
