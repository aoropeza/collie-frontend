import React from 'react'
import { GlobalStyles } from './styles/GlobalStyles'
import { ListOfMovieIconsWithQuery } from './container/ListOfMovieIconsWithQuery'
import { ListOfMovieCard } from './components/ListOfMovieCard'
import { Logo } from './components/Logo'

export const App = () => (
  <div>
    <GlobalStyles />
    <Logo />
    <ListOfMovieIconsWithQuery date="2020-03-24" timeOfDay="12:00-17:59" />
    <ListOfMovieCard />
  </div>
)
