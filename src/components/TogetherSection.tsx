import { styled } from '@styles/stitches'
import { navbarSection } from '@store/navbar'
import { useSetAtom } from 'jotai'
import InView from './InView'

export default function TogetherSection() {
  const setSection = useSetAtom(navbarSection)

  return (
    <Root
      onInView={() => {
        setSection('together')
      }}
    >
      <Section>
        <Frame>
          <iframe
            src="https://www.youtube.com/embed/SVRiktFlWxI"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={true}
          />
        </Frame>
      </Section>
      <Section style={{ marginTop: 100 }}>
        <h1>연락처</h1>
        <Contract>
          <a href="https://github.com/hahnlee">GitHub</a>
          <a href="https://www.linkedin.com/in/hahnl/">LinkedIn</a>
          <a href="https://blog.hanlee.io">Blog</a>
          <a href="mailto:hanlee.dev@gmail.com">Mail</a>
        </Contract>
      </Section>
    </Root>
  )
}

const Root = styled(InView, {
  minHeight: '100vh',
  padding: '48px 24px',
})

const Section = styled('section', {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
})

const Frame = styled('div', {
  margin: '0 auto',
  overflow: 'hidden',
  borderRadius: 16,
  boxShadow: 'rgba(0, 0, 0, 0.15) 14px 20px 20px 6px',
  iframe: {
    width: '100%',
    aspectRatio: '16 / 9',
  },
})

const Contract = styled('div', {
  a: {
    fontSize: '1.25rem',
    color: '$grey800',
    textDecoration: 'none',
    '& + &': {
      marginLeft: 16
    }
  }
})