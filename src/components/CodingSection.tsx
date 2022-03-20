import { styled } from '@styles/stitches'
import { navbarSection } from '@store/navbar'
import { useSetAtom } from 'jotai'
import InView from './InView'

export default function CodingSection() {
  const setSection = useSetAtom(navbarSection)

  return (
    <Root
      onInView={() => {
        setSection('coding')
      }}
    >
      <section>
      </section>
    </Root>
  )
}

const Root = styled(InView, {
  minHeight: '100vh',
  backgroundColor: '$grey900',
})
