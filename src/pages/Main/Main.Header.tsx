import { styled } from '@styles/stitches.config'

import AnimateText from './Main.AnimateText'

export default function Header() {
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

const Container = styled('header', {
  padding: '24px 0',
})

const H1 = styled('h1', {
  margin: 0,
  fontSize: 80,
  lineHeight: 0.85,
})
