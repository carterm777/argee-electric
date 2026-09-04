import { useRef, useCallback } from 'react'
import { Phone, MessageSquareText, ShieldCheck } from 'lucide-react'
import { Reveal, prefersReducedMotion } from '../lib/motion.js'
import { BIZ, FINAL_CTA } from '../data.js'
import './cta.css'

/* Button Magnetic Hover — a few pixels of pull, no more, per the entry's
   premium execution note. */
function useMagnet(strength = 6) {
  const ref = useRef(null)
  const onMove = useCallback(
    (e) => {
      const el = ref.current
      if (!el || prefersReducedMotion()) return
      if (window.matchMedia('(hover: none)').matches) return
      const r = el.getBoundingClientRect()
      const x = ((e.clientX - r.left) / r.width - 0.5) * strength * 2
      const y = ((e.clientY - r.top) / r.height - 0.5) * strength
      el.style.setProperty('--mx', `${x.toFixed(1)}px`)
      el.style.setProperty('--my', `${y.toFixed(1)}px`)
    },
    [strength]
  )
  const onLeave = useCallback(() => {
    const el = ref.current
    if (!el) return
    el.style.setProperty('--mx', '0px')
    el.style.setProperty('--my', '0px')
  }, [])
  return { ref, onPointerMove: onMove, onPointerLeave: onLeave }
}

export default function FinalCta() {
  const magnet = useMagnet(7)

  return (
    <section className="cta" id="contact" aria-labelledby="cta-title">
      <div className="cta__bed" aria-hidden="true">
        <img
          src="/images/flatlay-materials.webp"
          alt=""
          width={2000}
          height={1125}
          loading="lazy"
          decoding="async"
        />
        <span className="cta__wash" />
        <span className="cta__grain" />
      </div>

      <div className="shell cta__inner">
        <Reveal technique="rise" className="cta__block">
          <p className="eyebrow eyebrow--light cta__eyebrow">Free Estimate</p>
          <h2 className="cta__title" id="cta-title">{FINAL_CTA.headline}</h2>
          <p className="cta__sub">{FINAL_CTA.sub}</p>

          <div className="cta__actions">
            <a
              className="btn btn--onDark cta__call"
              href={BIZ.tel}
              ref={magnet.ref}
              onPointerMove={magnet.onPointerMove}
              onPointerLeave={magnet.onPointerLeave}
            >
              <Phone aria-hidden="true" />
              Call {BIZ.phone}
            </a>
            <a className="btn btn--outlineLight" href={BIZ.sms}>
              <MessageSquareText aria-hidden="true" />
              Text Us Instead
            </a>
          </div>

          <p className="reassure reassure--light cta__reassure">
            <ShieldCheck aria-hidden="true" />
            <span>
              No cost, no obligation, and we never share your information. Quote the job,
              do the job, invoice the same number.
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  )
}
