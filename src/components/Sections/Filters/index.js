import React, { useState } from 'react'
import { ListOfMovies } from '../../Lists/ListOfMovies'

export const Filters = ({ children }) => {
  const [movieSelected, setMovieSelected] = useState('nada')
  return (
    <>
      <ListOfMovies updateKey={setMovieSelected} />
      {children({ movieSelected })}
    </>
  )
}
