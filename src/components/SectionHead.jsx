import { Reveal } from '../lib/motion.js'

/* Clip Reveal for section heads.
   The kit's `technique="clip"` puts `clip-path: inset(0 0 100% 0)` on the very
   element its own IntersectionObserver is watching, which zeroes the
   intersection ratio and deadlocks the trigger — the head never appears. So the
   observed wrapper carries a plain fade and the clip runs on its children,
   which motion.css already supports through its `[data-in='true'] [data-reveal]`
   descendant rest-state rule. Same technique, working trigger. */
export default function SectionHead({
  eyebrow,
  title,
  id,
  lede,
  className = '',
  titleClassName = '',
  ledeClassName = '',
  children,
}) {
  return (
    <Reveal technique="fade" className={`shead ${className}`}>
      {eyebrow && (
        <p className="eyebrow eyebrow--muted" data-reveal="clip">
          {eyebrow}
        </p>
      )}
      <h2
        className={`s-head__title ${titleClassName}`}
        id={id}
        data-reveal="clip"
        style={{ '--reveal-delay': '120ms' }}
      >
        {title}
      </h2>
      {lede && (
        <p
          className={`s-head__lede ${ledeClassName}`}
          data-reveal="rise"
          style={{ '--reveal-delay': '300ms' }}
        >
          {lede}
        </p>
      )}
      {children}
    </Reveal>
  )
}
