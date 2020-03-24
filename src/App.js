import React from 'react'
import ReactDom from 'react-dom'
import { GlobalStyles } from './styles/GlobalStyles'
import { ListOfMovieIcon } from './components/ListOfMovieIcon'
import { ListOfMovieCard } from './components/ListOfMovieCard'
import { Logo } from './components/Logo'

export const App = () =>
  ReactDom.render(
    <div>
      <GlobalStyles />
      <Logo />
      <ListOfMovieIcon />
      <ListOfMovieCard />
    </div>,
    document.getElementById('app')
  )
