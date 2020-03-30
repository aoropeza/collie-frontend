import React from 'react'
import { GlobalStyles } from './styles/GlobalStyles'
import { ListOfMovieIcon } from './components/ListOfMovieIcon'
import { ListOfMovieCard } from './components/ListOfMovieCard'
import { Logo } from './components/Logo'

export const App = () => (
  <div>
    <GlobalStyles />
    <Logo />
    <ListOfMovieIcon date="2020-03-24" timeOfDay="12:00-17:59" />
    <ListOfMovieCard />
  </div>
)
