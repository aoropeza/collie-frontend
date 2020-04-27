import { createGlobalStyle } from 'styled-components'

// Prettier doesn't work with createGlobalStyle (┛ಠДಠ)┛彡┻━┻
// https://github.com/styled-components/webstorm-styled-components/issues/61
export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }
        
  ul, li, h1, h2, h3, p, button {
    margin: 0;
  }

  ul {
    list-style: none;
  }
  
  button {
    background: transparent;
    border: 0;
    outline: 0;
  }

  body {
    background: teal;
    height: 100vh;
    margin: 0 auto;
    max-width: 95%;
    overscroll-behavior: none;
    width: 100%;
  }

  #app {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
    overflow-x: hidden;
    min-height: 100vh;
    padding-bottom: 10px;
  }
`
