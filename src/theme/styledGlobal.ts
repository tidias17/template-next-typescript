import { createGlobalStyle } from 'styled-components'
import { theme } from 'theme'

export const StyledGlobal = createGlobalStyle`
  a, a:hover, ul, li, p, span, h1, h2, h3, h4, h5, h6 {
    margin: 0
    padding: 0
    font-size: 16px
    font-weight: 400
    text-transform: none
    font-style: normal
    text-decoration: none
    line-height: 1.5
    font-family: ${theme.fontFamily.sourceSansPro}
  }
  * {
    box-sizing: border-box
  }
  html {
    scroll-behavior: smooth
  }
  body {
    font-size: 16px
    background-color: ${theme.colors.white}
    font-family: ${theme.fontFamily.sourceSansPro}
    margin: 0
    padding: 0
  }
  ul {
    list-style: none
  }
  a, a:hover {
    text-decoration: none
    color: ${theme.colors.black}
  }
`
