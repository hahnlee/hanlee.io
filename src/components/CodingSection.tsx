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
      <Section>
        <H1>
          ❤️ <span>TypeScript / Rust / React / Suspense for data fetching</span>
        </H1>
      </Section>
    </Root>
  )
}

const Root = styled(InView, {
  minHeight: '100vh',
})

const Section = styled('section', {
  padding: '0 24px',
})

const H1 = styled('h1', {
  position: 'sticky',
  top: 100,
  backgroundColor: 'white',
})
