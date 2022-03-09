import { styled } from '@stitches/react'
import { navbarSection } from '@store/navbar'
import { useSetAtom } from 'jotai'
import InView from './InView'

export default function BetterWorldSection() {
  const setSection = useSetAtom(navbarSection)

  return (
    <InView
      onInView={() => {
        setSection('world')
      }}
    >
      <Section></Section>
    </InView>
  )
}

const Section = styled('section', {
  height: '100vh',
  padding: '0 24px',
})
