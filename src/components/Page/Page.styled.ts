import { createGlobalStyle } from 'styled-components'

import Color from '../../styles/colors'

export const GlobalStyle = createGlobalStyle`
  @import url("//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css");

  * {
    font-family: 'Spoqa Han Sans', 'Sans-serif';
    box-sizing: border-box;
  }

  html, body {
    padding: 0;
    margin: 0;
    color: ${Color.Gray8};
  }
`
