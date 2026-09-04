import { Phone, ArrowUpRight } from 'lucide-react'
import { Reveal, useInView } from '../lib/motion.js'
import { SERVICES, BIZ } from '../data.js'
import Framed from './Framed.jsx'
import SectionHead from './SectionHead.jsx'
import './services.css'

function Row({ item, index }) {
  const [ref, inView] = useInView({ threshold: 0.18, rootMargin: '0px 0px -12% 0px' })
  return (
    <li className="svc__row" ref={ref} data-in={inView ? 'true' : 'false'} data-flip={index % 2 === 1 ? 'true' : 'false'}>
      <Framed
        className="svc__photo"
        src={item.img}
        alt={item.alt}
        style={{ '--frame-inset': '14px', '--frame-delay': '780ms' }}
      />
      <div className="svc__card grain">
        <div className="svc__cardHead">
          <span className="stencil svc__ref">
            Ref. {item.ref}-{String(index + 1).padStart(2, '0')}
          </span>
          <span className="svc__punch" aria-hidden="true" />
        </div>
        <h3 className="svc__title">{item.title}</h3>
        <p className="svc__text">{item.body}</p>
        <a className="svc__cta" href={BIZ.tel}>
          <Phone aria-hidden="true" />
          <span>Ask About This Job</span>
          <ArrowUpRight className="svc__ctaArrow" aria-hidden="true" />
        </a>
      </div>
    </li>
  )
}

export default function Services() {
  return (
    <section className="section svc grainbed" id="services" aria-labelledby="svc-title">
      <div className="shell">
        <SectionHead
          className="svc__head"
          eyebrow="Core Services"
          title="What Gets Wired Around Here"
          titleClassName="svc__h2"
          ledeClassName="svc__lede"
          id="svc-title"
          lede="Six things this shop does week in, week out — in town, out on the acreages, and in the storefronts along the way."
        />

        <ol className="svc__list list-reset">
          {SERVICES.map((s, i) => (
            <Row item={s} index={i} key={s.title} />
          ))}
        </ol>

        <Reveal technique="rise" className="svc__foot">
          <p className="svc__footText">
            Not on the list? It is probably still a job this crew has done. Ask.
          </p>
          <a className="btn btn--primary" href={BIZ.tel}>
            <Phone aria-hidden="true" />
            Call {BIZ.phone}
          </a>
        </Reveal>
      </div>
    </section>
  )
}
