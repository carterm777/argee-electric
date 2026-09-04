import { useInView } from '../lib/motion.js'

/* Site-specific technique #1 — Frame Draw.
   A hairline frame that draws top -> right -> bottom -> left around a
   photograph, starting after the photograph's own entrance has completed.
   From references/animation-and-motion-richness.md, "Bordered Frame Draw".
   Reduced motion is handled by motion.css (useInView returns true instantly
   and the transitions collapse), so the frame simply renders in place. */
export default function Framed({
  src,
  alt,
  className = '',
  style,
  imgClassName = '',
  loading = 'lazy',
  fetchPriority,
  width = 2000,
  height = 1125,
  sizes,
  children,
  ...rest
}) {
  const [ref, inView] = useInView({ threshold: 0.22, rootMargin: '0px 0px -10% 0px' })
  return (
    <figure
      ref={ref}
      data-in={inView ? 'true' : 'false'}
      className={`fdraw ${className}`}
      style={style}
      {...rest}
    >
      <img
        className={`fdraw__img ${imgClassName}`}
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        decoding="async"
        sizes={sizes}
        {...(fetchPriority ? { fetchpriority: fetchPriority } : {})}
      />
      <span className="fdraw__frame" aria-hidden="true">
        <i /><i /><i /><i />
      </span>
      {children}
    </figure>
  )
}
