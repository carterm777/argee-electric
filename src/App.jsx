import { useEffect } from 'react'
import { Phone } from 'lucide-react'
import { useScrollY, prefersReducedMotion } from './lib/motion.js'
import { BIZ } from './data.js'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Reviews from './components/Reviews.jsx'
import TrustBanner from './components/TrustBanner.jsx'
import WhyUs from './components/WhyUs.jsx'
import Services from './components/Services.jsx'
import Coverage from './components/Coverage.jsx'
import Story from './components/Story.jsx'
import FinalCta from './components/FinalCta.jsx'
import Faq from './components/Faq.jsx'
import Footer from './components/Footer.jsx'

/* Reveal safety net.
   The page uses `scroll-behavior: smooth`, so an in-page anchor jump — or any
   scripted scroll — animates the viewport past whole sections in a few frames.
   An IntersectionObserver can miss its threshold entirely across a jump like
   that, which leaves a section stuck at opacity 0 forever. The observers stay
   the primary trigger; this re-checks the same geometry they use (the element's
   top crossing 88% of the viewport height, i.e. meaningfully inside, never at
   first pixel) and releases anything they skipped. Attributes are written
   directly because the kit's Reveal/Stagger own them in React state and only
   ever re-render toward the same value. */
function useRevealSafetyNet() {
  useEffect(() => {
    const release = () => {
      const vh = window.innerHeight
      const stuck = document.querySelectorAll('[data-in="false"]')
      for (const el of stuck) {
        if (el.getBoundingClientRect().top < vh * 0.88) el.setAttribute('data-in', 'true')
      }
    }
    if (prefersReducedMotion()) {
      for (const el of document.querySelectorAll('[data-in="false"]')) {
        el.setAttribute('data-in', 'true')
      }
      return
    }
    let raf = null
    const onScroll = () => {
      if (raf !== null) return
      raf = requestAnimationFrame(() => { raf = null; release() })
    }
    release()
    /* Scroll only: a resize handler that mutates the DOM can fire in the middle
       of a tiled full-page rasterisation and tear the result. */
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (raf !== null) cancelAnimationFrame(raf)
    }
  }, [])
}

export default function App() {
  const y = useScrollY()
  useRevealSafetyNet()

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <Reviews />
        <TrustBanner />
        <WhyUs />
        <Services />
        <Coverage />
        <Story />
        <Faq />
        <FinalCta />
      </main>
      <Footer />

      <div className="callbar" data-shown={y > 420 ? 'true' : 'false'}>
        <a className="callbar__link" href={BIZ.tel}>
          <Phone aria-hidden="true" />
          Call {BIZ.phone}
        </a>
      </div>
    </>
  )
}
