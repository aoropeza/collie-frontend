import React from 'react'
import { GlobalStyles } from './styles/GlobalStyles'
import { ListOfMovieIcon } from './components/ListOfMovieIcon'
import { ListOfMovieCard } from './components/ListOfMovieCard'
import { Logo } from './components/Logo'

export const App = () => (
  <div>
    <GlobalStyles />
    <Logo />
    <ListOfMovieIcon />
    <ListOfMovieCard />
  </div>
)
