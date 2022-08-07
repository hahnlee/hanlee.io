import { navbarSection } from '@store/navbar'
import { styled } from '@styles/stitches'
import { useSetAtom } from 'jotai'
import InView from './InView'
import SponsoringSection from './SponsoringSection'

export default function BetterWorldSection() {
  const setSection = useSetAtom(navbarSection)

  return (
    <Root
      onInView={() => {
        setSection('world')
      }}
    >
      <SponsoringSection />
    </Root>
  )
}

const Root = styled(InView, {
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})
