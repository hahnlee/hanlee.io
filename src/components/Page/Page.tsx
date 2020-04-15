import React, { ReactNode, ReactElement } from 'react'
import { Helmet } from 'react-helmet'

import * as Styled from './Page.styled'

interface PageProps {
  children?: ReactNode
}

function Page({
  children,
}: PageProps): ReactElement {
  return (
    <>
      <Helmet>
        <title>Han Lee</title>
      </Helmet>
      <Styled.GlobalStyle />
      { children }
    </>
  )
}

export default Page
