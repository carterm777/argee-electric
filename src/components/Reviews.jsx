import { Star, Info } from 'lucide-react'
import { Reveal, Stagger, useCountUp, useInView } from '../lib/motion.js'
import { REVIEWS } from '../data.js'
import SectionHead from './SectionHead.jsx'
import './reviews.css'

function GoogleG({ className }) {
  return (
    <svg className={className} viewBox="0 0 48 48" role="img" aria-label="Google" focusable="false">
      <path fill="var(--g-blue)" d="M45.1 24.5c0-1.6-.1-2.7-.4-4H24v7.3h12.1c-.2 1.9-1.6 4.9-4.5 6.9l-.1.4 6.5 5 .5.1c4.1-3.8 6.6-9.4 6.6-15.7z" />
      <path fill="var(--g-green)" d="M24 46c5.9 0 10.9-2 14.5-5.3l-6.9-5.4c-1.8 1.3-4.3 2.2-7.6 2.2-5.8 0-10.7-3.8-12.5-9.1l-.4.1-6.7 5.2-.1.4C7.9 41 15.4 46 24 46z" />
      <path fill="var(--g-yellow)" d="M11.5 28.4c-.5-1.4-.7-2.9-.7-4.4 0-1.6.3-3 .7-4.4v-.5l-6.8-5.3-.2.1A22 22 0 0 0 2 24c0 3.6.9 6.9 2.5 9.9l7-5.5z" />
      <path fill="var(--g-red)" d="M24 10.1c4.1 0 6.9 1.8 8.5 3.3l6.2-6C34.9 3.9 29.9 2 24 2 15.4 2 7.9 7 4.5 14.1l7 5.5c1.8-5.3 6.7-9.5 12.5-9.5z" />
    </svg>
  )
}

function Stars({ count = 5, sweep = false, size = 'sm' }) {
  return (
    <span className={`rev__stars rev__stars--${size}`} data-sweep={sweep ? 'true' : 'false'} aria-hidden="true">
      {Array.from({ length: count }, (_, i) => (
        <Star key={i} className="rev__star" style={{ '--i': i }} />
      ))}
    </span>
  )
}

export default function Reviews() {
  const [featured, ...rest] = REVIEWS
  const [countRef, value] = useCountUp(4.9, { duration: 1500, decimals: 1 })
  const [starRef, starsIn] = useInView({ threshold: 0.4 })

  return (
    <section className="section rev grainbed" id="reviews" aria-labelledby="rev-title">
      <div className="shell">
        <div className="rev__top">
          <SectionHead
            className="rev__head"
            eyebrow="What Central Alberta Says"
            title="Reviews From the People Whose Power It Is"
            titleClassName="rev__title"
            id="rev-title"
          />

          <Reveal technique="rise" delay={140} className="rev__agg">
            <div className="rev__aggCard grain">
              <div className="rev__aggHead">
                <GoogleG className="rev__g" />
                <span className="stencil">Google Reviews</span>
              </div>
              <p className="rev__score" ref={countRef}>
                <span className="rev__scoreNum">{value.toFixed(1)}</span>
                <span className="rev__scoreOf">/ 5</span>
              </p>
              <span ref={starRef}>
                <Stars sweep={starsIn} size="lg" />
              </span>
              <p className="rev__aggLine">4.9 out of 5 stars, based on real Google reviews</p>
            </div>
          </Reveal>
        </div>

        <Reveal technique="rise" delay={280} className="rev__featured">
          <span className="rev__carbon" aria-hidden="true" />
          <figure className="rev__quote paper grain">
            <span className="rev__mark" aria-hidden="true">&ldquo;</span>
            <blockquote className="rev__quoteText">{featured.quote}</blockquote>
            <figcaption className="rev__quoteFoot">
              <span className="rev__avatar" aria-hidden="true">{featured.initial}</span>
              <span className="rev__who">
                <b>{featured.name}</b>
                <i>{featured.focus} &middot; Red Deer</i>
              </span>
              <Stars size="sm" sweep />
            </figcaption>
          </figure>
        </Reveal>

        <Stagger className="rev__row" itemClassName="rev__rowItem" technique="rise" step={110} start={60}>
          {rest.map((r) => (
            <figure className="rev__card" key={r.name}>
              <div className="rev__cardTop">
                <Stars size="sm" sweep />
                <GoogleG className="rev__gSmall" />
              </div>
              <blockquote className="rev__cardText">{r.quote}</blockquote>
              <figcaption className="rev__cardFoot">
                <span className="rev__avatar rev__avatar--sm" aria-hidden="true">{r.initial}</span>
                <span className="rev__who">
                  <b>{r.name}</b>
                  <i>{r.focus}</i>
                </span>
              </figcaption>
            </figure>
          ))}
        </Stagger>

        <p className="rev__note">
          <Info aria-hidden="true" />
          <span>
            Placeholder reviews for this demo. Before launch these get replaced with the real
            Google Business Profile reviews and live rating.
          </span>
        </p>
      </div>
    </section>
  )
}
