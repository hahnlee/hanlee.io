import { useCallback, useEffect, useRef, useState } from 'react'

type ValueSetter<T> = T | (() => T)

export default function useLazyState<T>(initial: ValueSetter<T>) {
  const [value, setValue] = useState(initial)
  const valueRef = useRef(value)

  useEffect(() => {
    valueRef.current = value
  }, [value])

  const setValueLazy = useCallback((newValue: ValueSetter<T>) => {
    if (typeof newValue === 'function') {
      setValue(newValue)
      return
    }

    if (valueRef.current !== newValue) {
      setValue(newValue)
    }
  }, [])

  return [value, setValueLazy] as const
}
