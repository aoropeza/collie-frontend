import React from 'react'
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
          {({
            dateSelected,
            timeSelected,
            latitudeSelected,
            longitudeSelected
          }) => {
            return (
              <Router>
                <SceneSearch
                  path="/"
                  dateSelected={dateSelected}
                  timeSelected={timeSelected}
                  latitudeSelected={latitudeSelected}
                  longitudeSelected={longitudeSelected}
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
