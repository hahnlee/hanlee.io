import PendingIndicator from '@elements/PendingIndicator'
import withUniversalSuspense from '@hocs/withUniversalSuspense'
import { styled } from '@styles/stitches'
import { waitUntilFontLoad } from '@utils/font'

import AnimateHeading from './Main.AnimateHeading'
import MouseAnimation from './Main.MouseAnimation'

function Intro() {
  waitUntilFontLoad('normal 80px Anton')

  return (
    <Container>
      <AnimateHeading />
      <Bottom>
        <MouseAnimation />
      </Bottom>
    </Container>
  )
}

const Container = styled('section', {
  position: 'relative',
  height: '100vh',
  padding: '24px',
})

const Bottom = styled('div', {
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  display: 'flex',
  justifyContent: 'center',
  paddingBottom: 36,
})

// TODO: (@hahnlee) create loader
export default withUniversalSuspense(Intro, {
  fallback: (
    <PendingIndicator as={Container} loader={<div>Loading...</div>}>
      <h1>
        <span>Coding</span>
        <br />
        <span>A Better World</span>
        <br />
        <span>Together</span>
      </h1>
    </PendingIndicator>
  ),
})
