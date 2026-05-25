import { useEffect, useRef } from 'react'

export const useScrollReveal = (options = {}) => {
  const ref = useRef(null)
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    duration = 0.6,
  } = options

  useEffect(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100', 'translate-y-0')
        entry.target.classList.remove('opacity-0', 'translate-y-8')
      }
    }, {
      threshold,
      rootMargin,
    })

    observer.observe(ref.current)

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [threshold, rootMargin])

  return ref
}
