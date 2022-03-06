import useMounted from '@hooks/useMounted'
import { Suspense, SuspenseProps } from 'react'

/**
 * Suspense for universal javascript environments
 * 
 * @note It will be unnecessary in the React 18+ version
 */
export default function UniversalSuspense({
  fallback,
  children,
}: SuspenseProps) {
  const isMounted = useMounted()

  if (isMounted) {
    return <Suspense fallback={fallback}>{children}</Suspense>
  }

  return <>{fallback}</>
}
