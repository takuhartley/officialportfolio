import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  /* Normalize CSS starts */

  /* Set default margin and padding to 0 for all elements */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Root element normalization */
  html {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    font-family: sans-serif; /* Default font-family */
  }

  body {
    margin: 0;
    font-family: 'Inter var', sans-serif; /* Change this to your desired font */
    background-color: #151515;
    color: #a0a0a0;
  }

  main {
    display: block;
  }

  /* Links */
  a {
    background-color: transparent;
    text-decoration: none;
    color: inherit;
  }

  /* Text-level semantics */
  b, strong {
    font-weight: bolder;
  }

  /* Grouping content */
  small {
    font-size: 80%;
  }

  /* Embedded content */
  img {
    border-style: none;
    max-width: 100%;
    height: auto;
  }

  /* Forms */
  button, input, optgroup, select, textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
  }

  button, input {
    overflow: visible;
  }

  button, select {
    text-transform: none;
  }

  /* Accessibility */
  [hidden] {
    display: none;
  }

  /* Normalize CSS ends */

  /* Additional global styling can be added below this line */
`

export default GlobalStyles
