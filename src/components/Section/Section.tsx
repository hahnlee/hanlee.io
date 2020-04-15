import React, { ReactNode, ReactElement } from 'react'

import Color from '../../styles/colors'
import * as Styled from './Section.styled'

interface SectionProps {
  title?: string
  children?: ReactNode
  backgroundColor?: Color
}

function Section({
  title,
  children,
  backgroundColor = Color.White,
}: SectionProps): ReactElement {
  return (
    <Styled.Section backgroundColor={backgroundColor}>
      <Styled.Content>
        { title && (<Styled.Title>{ title }</Styled.Title>) }
        { children }
      </Styled.Content>
    </Styled.Section>
  )
}

export default Section
