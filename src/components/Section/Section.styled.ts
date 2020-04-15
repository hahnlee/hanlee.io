import styled from 'styled-components'

import Color from '../../styles/colors'

interface SectionProps {
  backgroundColor: Color
}

export const Section = styled.section<SectionProps>`
  padding: 40px 20px;
  background-color: ${props => props.backgroundColor};
`

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

export const Title = styled.h1``
