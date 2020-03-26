import React from 'react'
import { MovieCard } from '../MovieCard'

export const ListOfMovieCard = () => {
  return (
    <ul>
      {[1, 2, 3, 4, 5, 6, 7, 8].map(id => (
        <MovieCard key={id} />
      ))}
    </ul>
  )
}
