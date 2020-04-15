import styled from 'styled-components'

import Color from '../../styles/colors'

export const Wrapper = styled.div`
  display: flex;
`

export const ItemGroup = styled.div`
  display: flex;
  flex-direction: column;
`

export const Item = styled.div`
  padding: 8px 16px 8px 0;
  color: ${Color.Gray7};
  font-weight: 400;
  font-size: 16;
  cursor: pointer;
`

interface TitleProps {
  active: boolean
}

export const Title = styled.h1<TitleProps>`
  margin: 0;
  padding-left: 8px;
  font-size: 20px;
  font-weight: 500;
  border-left: 4px solid ${props => props.active ? Color.Gray7 : Color.White};
`

export const Content = styled.div`
  flex: 1;
`
