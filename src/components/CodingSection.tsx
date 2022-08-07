import { styled } from '@styles/stitches'
import { navbarSection } from '@store/navbar'
import { useSetAtom } from 'jotai'
import InView from './InView'
import Career from './Career'
import Tech from './Tech'

export default function CodingSection() {
  const setSection = useSetAtom(navbarSection)

  return (
    <Root
      onInView={() => {
        setSection('coding')
      }}
    >
      <Career />
      <Tech />
    </Root>
  )
}

const Root = styled(InView, {
  minHeight: '100vh',
  backgroundColor: '$grey900',
  zIndex: 1,
})
