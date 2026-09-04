import { Facebook, Instagram, Linkedin, Phone, MessageSquareText, MapPin, Mail } from 'lucide-react'
import { Stagger } from '../lib/motion.js'
import { BIZ, FOOTER_MISSION } from '../data.js'
import './footer.css'

const SERVICES = [
  'Residential Wiring',
  'Commercial Electrical',
  'Farm & Acreage Electrical',
  'Panel Upgrades',
  'Lighting Installation',
]
const QUICK = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#story' },
  { label: 'Services', href: '#services' },
  { label: 'Service Areas', href: '#coverage' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]
const SOCIAL = [
  { Icon: Facebook, label: 'Argee Electric on Facebook' },
  { Icon: Instagram, label: 'Argee Electric on Instagram' },
  { Icon: Linkedin, label: 'Argee Electric on LinkedIn' },
]

export default function Footer() {
  return (
    <footer className="ftr" id="site-footer">
      <div className="shell">
        <Stagger className="ftr__grid" itemClassName="ftr__col" technique="rise" step={110} start={0}>
          <div className="ftr__brandCol">
            <a className="ftr__mark" href="#top">
              <span className="ftr__markName">Argee</span>
              <span className="ftr__markRule" aria-hidden="true" />
              <span className="ftr__markSub">Electric</span>
            </a>
            <p className="ftr__mission">{FOOTER_MISSION}</p>
            <ul className="ftr__social list-reset">
              {SOCIAL.map(({ Icon, label }) => (
                <li key={label}>
                  <a href="#site-footer" aria-label={label}>
                    <Icon aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="ftr__h">Our Services</h2>
            <ul className="ftr__links list-reset">
              {SERVICES.map((s) => (
                <li key={s}>
                  <a className="tlink" href="#services">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="ftr__h">Quick Links</h3>
            <ul className="ftr__links list-reset">
              {QUICK.map((q) => (
                <li key={q.label}>
                  <a className="tlink" href={q.href}>{q.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="ftr__h">Get in Touch</h3>
            <ul className="ftr__contact list-reset">
              <li>
                <span className="ftr__contactLabel">{BIZ.name}</span>
              </li>
              <li>
                <MapPin aria-hidden="true" />
                <span>{BIZ.address}</span>
              </li>
              <li>
                <Phone aria-hidden="true" />
                <a className="tlink" href={BIZ.tel}>{BIZ.phone}</a>
              </li>
              <li>
                <Mail aria-hidden="true" />
                <a className="tlink" href={`mailto:${BIZ.email}`}>{BIZ.email}</a>
              </li>
            </ul>
            <a className="btn btn--onDark btn--sm ftr__text" href={BIZ.sms}>
              <MessageSquareText aria-hidden="true" />
              Text The Shop
            </a>
          </div>
        </Stagger>

        <div className="ftr__legal">
          <p>&copy; {new Date().getFullYear()} {BIZ.name}. All rights reserved.</p>
          <p className="ftr__demo">
            Demo concept site. Phone, email and address shown are placeholders.
          </p>
        </div>
      </div>
    </footer>
  )
}
