import React from 'react'
import { GlobalStyles } from './styles/GlobalStyles'
import { SceneSearch } from './components/Scenes/Search'
import { Logo } from './components/UI/Logo'

export const App = () => (
  <>
    <GlobalStyles />
    <Logo />
    <SceneSearch />
  </>
)
