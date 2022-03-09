import { useIsomorphicLayoutEffect } from 'framer-motion'
import { ReactNode, useEffect, useRef } from 'react'

interface Props {
  className?: string
  onInView: () => void
  children: ReactNode
}

export default function InView({ className, onInView, children }: Props) {
  const onInViewRef = useRef(onInView)

  useEffect(() => {
    onInViewRef.current = onInView
  }, [onInView])

  const ref = useRef<HTMLDivElement>()

  useIsomorphicLayoutEffect(() => {
    const element = ref.current

    if (element === undefined) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry.isIntersecting) {
          onInViewRef.current()
        }
      },
      {
        rootMargin: `0px 0px -${window.outerHeight - 200}px 0px`,
      }
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
