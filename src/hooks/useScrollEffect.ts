import { useEffect } from 'react'

type Callback = (scrollY: number) => void

export default function useScrollEffect(callback: Callback, deps: any[]) {
  useEffect(() => {
    callback(window.scrollY)

    const handleScroll = () => {
      callback(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [...deps])
}
