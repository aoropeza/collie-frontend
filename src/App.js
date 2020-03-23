import React from 'react'
import ReactDom from 'react-dom'
import { GlobalStyles } from './GlobalStyles'
import { ListOfMovies } from './components/ListOfMovies'

export const App = () =>
  ReactDom.render(
    <div>
      <GlobalStyles />
      <ListOfMovies />
    </div>,
    document.getElementById('app')
  )
