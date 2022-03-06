import { createContext, ReactNode, useContext } from 'react'

import { Sponsoring } from '@models/Sponsoring'

const SponsoringContext = createContext<Sponsoring[] | null>(null)

interface Props {
  value: Sponsoring[]
  children: ReactNode
}

export function SponsoringProvider({ value, children }: Props) {
  return (
    <SponsoringContext.Provider value={value}>
      {children}
    </SponsoringContext.Provider>
  )
}

export function useSponsoring() {
  const sponsoring = useContext(SponsoringContext)

  if (sponsoring === null) {
    throw new Error('Please use in the SponsoringProvider')
  }

  return sponsoring
}
