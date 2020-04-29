import React, { useState } from 'react'
import { QueryActiveMovies } from '../../../queries/QueryActiveMovies'
import { Movie } from '../../UI/Movie'
import { List, Item, Container } from './styles'

const renderProp = ({ children, movieSelected, setMovieSelected }) => ({
  loading,
  error,
  data: { activeMovies = [] } = {}
}) => (
  // TODO Make a better loading component
  <>
    <Container>
      {loading && <p>Loading...</p>}
      {error && <p>Error!!!</p>}
      {!loading && !error && (
        <List>
          {activeMovies.map(movie => {
            const { cover, name } = movie
            return (
              <Item key={movie.id} onClick={() => setMovieSelected(name)}>
                <Movie cover={cover} name={name} />
              </Item>
            )
          })}
        </List>
      )}
    </Container>
    {children({ movieSelected })}
  </>
)

export const ListOfMovies = ({ children }) => {
  const [movieSelected, setMovieSelected] = useState(undefined)
  return (
    <>
      <QueryActiveMovies date="2020-03-24" timeOfDay="12:00-17:59">
        {renderProp({ children, movieSelected, setMovieSelected })}
      </QueryActiveMovies>
    </>
  )
}
