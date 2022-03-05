import { useEffect, useRef } from 'react'

type Callback = () => void

export function useTimeout(callback: Callback, ms: number) {
  const callbackRef = useRef(callback)

  useEffect(() => {
    callbackRef.current = callback
  })

  useEffect(() => {
    const id = setTimeout(() => {
      callbackRef.current()
    }, ms)

    return () => {
      clearTimeout(id)
    }
  }, [ms])
}
