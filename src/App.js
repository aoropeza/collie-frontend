import React from 'react'
import { Router } from '@reach/router'
import { GlobalStyles } from './styles/GlobalStyles'
import { SceneSearch } from './components/Scenes/Search'
import { SceneAbout } from './components/Scenes/About/index'
import { Logo } from './components/UI/Logo'

export const App = () => (
  <>
    <GlobalStyles />
    <Logo />
    <Router>
      <SceneSearch path="/" />
      <SceneAbout path="/about" />
    </Router>
  </>
)
