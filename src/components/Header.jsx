import { useEffect, useRef, useState } from 'react'
import { Phone, Mail, MapPin, ChevronDown } from 'lucide-react'
import { useScrollY, useMediaQuery } from '../lib/motion.js'
import { BIZ, SERVICE_LINKS, AREA_LINKS } from '../data.js'
import './header.css'

const LEFT_NAV = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#story' },
  { label: 'Services', href: '#services', menu: 'services' },
  { label: 'Service Areas', href: '#coverage', menu: 'areas' },
]
const RIGHT_NAV = [
  { label: 'FAQ', href: '#faq' },
  { label: 'Blog', href: '#site-footer' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const y = useScrollY()
  const compact = y > 40
  const isDesktop = useMediaQuery('(min-width: 901px)')
  const [open, setOpen] = useState(null)
  const navRef = useRef(null)
  const closeTimer = useRef(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => { if (e.key === 'Escape') setOpen(null) }
    const onClick = (e) => { if (navRef.current && !navRef.current.contains(e.target)) setOpen(null) }
    document.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onClick)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onClick)
    }
  }, [open])

  useEffect(() => { if (!isDesktop) setOpen(null) }, [isDesktop])

  const hoverOpen = (id) => {
    if (!isDesktop) return
    clearTimeout(closeTimer.current)
    setOpen(id)
  }
  const hoverClose = () => {
    if (!isDesktop) return
    closeTimer.current = setTimeout(() => setOpen(null), 160)
  }

  const menuFor = (id) =>
    id === 'services'
      ? { items: SERVICE_LINKS, target: '#services', label: 'Our Services', cols: 3 }
      : { items: AREA_LINKS, target: '#coverage', label: 'Where We Work', cols: 2 }

  const renderLink = (item) => {
    if (!item.menu) {
      return (
        <li key={item.label} className="hdr__item">
          <a className="hdr__link" href={item.href}>{item.label}</a>
        </li>
      )
    }
    const m = menuFor(item.menu)
    const id = `menu-${item.menu}`
    const isOpen = open === item.menu
    return (
      <li
        key={item.label}
        className="hdr__item hdr__item--has-menu"
        onMouseEnter={() => hoverOpen(item.menu)}
        onMouseLeave={hoverClose}
      >
        <button
          type="button"
          className="hdr__link hdr__link--btn"
          aria-expanded={isOpen}
          aria-controls={id}
          aria-haspopup="true"
          onClick={() => setOpen(isOpen ? null : item.menu)}
        >
          {item.label}
          <ChevronDown className="hdr__chev" aria-hidden="true" />
        </button>
        {isOpen && (
          <div
            id={id}
            className="hdr__menu"
            data-cols={m.cols}
            onMouseEnter={() => hoverOpen(item.menu)}
            onMouseLeave={hoverClose}
          >
            <div className="hdr__menuHead">
              <span className="stencil">{m.label}</span>
              <a className="hdr__menuAll tlink" href={m.target} onClick={() => setOpen(null)}>
                View section
              </a>
            </div>
            <ul className="hdr__menuList list-reset">
              {m.items.map((s, i) => (
                <li key={s} style={{ '--i': i }}>
                  <a href={m.target} onClick={() => setOpen(null)}>
                    <span className="hdr__menuNo">{String(i + 1).padStart(2, '0')}</span>
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </li>
    )
  }

  return (
    <header className="hdr" data-compact={compact ? 'true' : 'false'} id="top">
      <div className="hdr__sub">
        <div className="shell hdr__subInner">
          <a className="hdr__subItem" href={BIZ.tel}>
            <Phone aria-hidden="true" />
            <span>{BIZ.phone}</span>
          </a>
          <span className="hdr__subDot" aria-hidden="true" />
          <a className="hdr__subItem hdr__subItem--wide" href={`mailto:${BIZ.email}`}>
            <Mail aria-hidden="true" />
            <span>{BIZ.email}</span>
          </a>
          <span className="hdr__subDot" aria-hidden="true" />
          <span className="hdr__subItem hdr__subItem--wide">
            <MapPin aria-hidden="true" />
            <span>{BIZ.address}</span>
          </span>
        </div>
      </div>

      <div className="hdr__bar">
        <div className="shell hdr__barInner" ref={navRef}>
          <nav className="hdr__nav hdr__nav--left" aria-label="Primary">
            <ul className="hdr__list list-reset">{LEFT_NAV.map(renderLink)}</ul>
          </nav>

          <a className="hdr__mark" href="#top" aria-label="Argee Electric, home">
            <span className="hdr__markName">Argee</span>
            <span className="hdr__markRule" aria-hidden="true" />
            <span className="hdr__markSub">Electric</span>
          </a>

          <div className="hdr__right">
            <nav className="hdr__nav hdr__nav--right" aria-label="Secondary">
              <ul className="hdr__list list-reset">{RIGHT_NAV.map(renderLink)}</ul>
            </nav>
            <a className="btn btn--primary btn--sm hdr__call" href={BIZ.tel}>
              <Phone aria-hidden="true" />
              <span className="hdr__callLabel">{BIZ.phone}</span>
              <span className="hdr__callShort">Call Now</span>
            </a>
          </div>
        </div>
      </div>
      <span className="hdr__hair" aria-hidden="true" />
    </header>
  )
}
