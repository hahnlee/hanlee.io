import PendingIndicator from '@elements/PendingIndicator'
import withUniversalSuspense from '@hocs/withUniversalSuspense'
import { styled } from '@styles/stitches'
import { waitUntilFontLoad } from '@utils/font'

import AnimateText from './Main.AnimateText'

function Header() {
  waitUntilFontLoad('normal 80px Anton')

  return (
    <Container>
      <H1>
        <AnimateText order={0}>Coding</AnimateText>
        <br />
        <AnimateText order={1}>A Better World</AnimateText>
        <br />
        <AnimateText order={2}>Together</AnimateText>
      </H1>
    </Container>
  )
}

const Container = styled('section', {
  height: '100vh',
  padding: '24px',
})

const H1 = styled('h1', {
  position: 'sticky',
  top: 'calc(50vh - 145px)',
  margin: 0,
  fontSize: 80,
  lineHeight: 0.85,
})

// TODO: (@hahnlee) create loader
export default withUniversalSuspense(Header, {
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
