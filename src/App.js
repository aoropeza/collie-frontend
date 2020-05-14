import React, { useState } from 'react'
import { Router } from '@reach/router'

import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { reset, themes } from 'react95'

import { GlobalStyles } from './styles/GlobalStyles'
import { SceneSearch } from './components/Scenes/Search'
import { SceneAbout } from './components/Scenes/About/index'
import { NavBar } from './components/UI/NavBar'

const ResetStyles = createGlobalStyle`
  ${reset}
`

export const App = () => {
  return (
    <>
      <ResetStyles />
      <ThemeProvider theme={themes.default}>
        <GlobalStyles />
        <NavBar>
          {({ dateSelected, timeSelected }) => {
            return (
              <Router>
                <SceneSearch
                  path="/"
                  dateSelected={dateSelected}
                  timeSelected={timeSelected}
                />
                <SceneAbout path="/about" />
              </Router>
            )
          }}
        </NavBar>
      </ThemeProvider>
    </>
  )
}
