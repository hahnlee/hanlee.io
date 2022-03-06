import { useTimeout } from '@hooks/useTimeout'
import { CSSProperties, ElementType, ReactNode, useState } from 'react'

interface Props {
  as?: ElementType<{ style?: CSSProperties }>
  loader: ReactNode
  children?: ReactNode
  threshold?: number
}

/**
 * Hide a loader component until threshold times to avoid distracting people with an unnecessary loader
 */
export default function PendingIndicator({
  as: Component = 'div',
  loader,
  threshold = 300,
  children = null,
}: Props) {
  const [delayed, setDelayed] = useState(false)

  useTimeout(() => {
    setDelayed(true)
  }, threshold)

  if (delayed) {
    return <>{loader}</>
  }

  return <Component style={{ opacity: 0 }}>{children}</Component>
}
