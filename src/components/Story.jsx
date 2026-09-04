import { useEffect, useRef } from 'react'
import { Reveal, useInView, prefersReducedMotion } from '../lib/motion.js'
import { STORY } from '../data.js'
import Framed from './Framed.jsx'
import SectionHead from './SectionHead.jsx'
import './story.css'

/* Timeline Progress Line Draw On Scroll. The kit's useScrub maps a single
   element's approach to viewport centre, which saturates immediately on a
   section taller than the viewport — so the spine gets its own mapping across
   the element's full scroll traversal, per that entry's premium execution
   note ("tie the line's draw progress precisely to scroll position"). */
function useSpine() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (prefersReducedMotion()) { el.style.setProperty('--spine', '1'); return }
    let raf = null
    const update = () => {
      raf = null
      const r = el.getBoundingClientRect()
      const vh = window.innerHeight
      const start = vh * 0.78
      const span = Math.max(r.height - vh * 0.4, 1)
      const p = Math.min(Math.max((start - r.top) / span, 0), 1)
      el.style.setProperty('--spine', p.toFixed(3))
    }
    const onScroll = () => { if (raf === null) raf = requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])
  return ref
}

function Chapter({ item, index }) {
  const [ref, inView] = useInView({ threshold: 0.24, rootMargin: '0px 0px -14% 0px' })
  return (
    <li className="story__ch" ref={ref} data-in={inView ? 'true' : 'false'} data-archival={item.archival ? 'true' : 'false'}>
      <div className="story__chBody">
        {/* The marker dot lives inside the text column, not as a third grid item:
            it stays absolutely positioned against the chapter either way. */}
        <span className="story__dot" aria-hidden="true" />
        <p className="story__marker">{item.marker}</p>
        <h3 className="story__chTitle">{item.heading}</h3>
        <p className="story__text">{item.body}</p>
      </div>
      <div className="story__chPhoto">
        {index === 0 && <span className="story__photoBack" aria-hidden="true" />}
        <Framed
          className="story__frame"
          src={item.img}
          alt={item.alt}
          style={{ '--frame-inset': '10px', '--frame-delay': '720ms' }}
        />
      </div>
    </li>
  )
}

export default function Story() {
  const spineRef = useSpine()

  return (
    <section className="section story" id="story" aria-labelledby="story-title">
      <div className="shell">
        <SectionHead
          className="story__head"
          eyebrow="Our Story"
          title="From One Truck in Fort St John to a Central Alberta Crew"
          titleClassName="story__h2"
          id="story-title"
        />

        <div className="story__body" ref={spineRef}>
          <span className="story__spine" aria-hidden="true">
            <span className="story__spineFill" />
          </span>
          <ol className="story__list list-reset">
            {STORY.map((item, i) => (
              <Chapter item={item} index={i} key={item.marker} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
