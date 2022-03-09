import { styled } from '@styles/stitches'
import { navbarSection } from '@store/navbar'
import { useSetAtom } from 'jotai'
import InView from './InView'
import SponsoringSection from './SponsoringSection'

export default function TogetherSection() {
  const setSection = useSetAtom(navbarSection)

  return (
    <Root
      onInView={() => {
        setSection('together')
      }}
    >
      <SponsoringSection />
      <Section>
        <Frame>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/SVRiktFlWxI"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={true}
          />
        </Frame>
      </Section>
    </Root>
  )
}

const Root = styled(InView, {
  minHeight: '100vh',
})

const Section = styled('section', {
  display: 'flex',
  justifyContent: 'center',
  padding: '48px 24px',
})

const Frame = styled('div', {
  width: 560,
  height: 315,
  margin: '0 auto',
  overflow: 'hidden',
  borderRadius: 16,
  boxShadow: 'rgba(0, 0, 0, 0.15) 14px 20px 20px 6px',
  iframe: {
    width: '100%',
  },
})
