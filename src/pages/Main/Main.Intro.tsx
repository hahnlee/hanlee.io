import PendingIndicator from '@elements/PendingIndicator'
import withUniversalSuspense from '@hocs/withUniversalSuspense'
import { styled } from '@styles/stitches'
import { waitUntilFontLoad } from '@utils/font'

import AnimateHeading from './Main.AnimateHeading'

function Intro() {
  waitUntilFontLoad('normal 80px Anton')

  return (
    <Container>
      <AnimateHeading />
    </Container>
  )
}

const Container = styled('section', {
  height: '100vh',
  padding: '24px',
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
