import UniversalSuspense from '@elements/UniversalSuspense'
import { ComponentType, SuspenseProps } from 'react'

export default function withUniversalSuspense<P>(
  Component: ComponentType<P>,
  { fallback }: SuspenseProps
) {
  function WithUniversalSuspense(props: P) {
    return (
      <UniversalSuspense fallback={fallback}>
        <Component {...props} />
      </UniversalSuspense>
    )
  }

  return WithUniversalSuspense
}
