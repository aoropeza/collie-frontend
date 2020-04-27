import React from 'react'
import { Router } from '@reach/router'

import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { reset, themes } from 'react95'

import { GlobalStyles } from './styles/GlobalStyles'
import { SceneSearch } from './components/Scenes/Search'
import { SceneAbout } from './components/Scenes/About/index'
import { Logo } from './components/UI/Logo'
import { NavBar } from './components/Sections/NavBar'

const ResetStyles = createGlobalStyle`
  ${reset}
`

export const App = () => (
  <>
    <ResetStyles />
    <ThemeProvider theme={themes.default}>
      <GlobalStyles />
      <Router>
        <SceneSearch path="/" />
        <SceneAbout path="/about" />
      </Router>
      <NavBar />
    </ThemeProvider>
  </>
)
