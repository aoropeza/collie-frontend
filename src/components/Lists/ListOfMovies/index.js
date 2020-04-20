import React from 'react'
import { QueryActiveMovies } from '../../../queries/QueryActiveMovies'
import { useShowOnScroll } from '../../../hooks/useShowOnScroll'
import { Movie } from '../../UI/Movie'
import { List, Item } from './styles'

const renderListOfMovies = updateKeyHandler => ({
  loading,
  error,
  data: { activeMovies = [] } = {}
}) => {
  const [showFixed] = useShowOnScroll(200)

  // TODO Make a better loading component
  const renderList = fixed => (
    <List fixed={fixed}>
      {activeMovies.map(movie => {
        const { cover, name } = movie
        return (
          <Item key={movie.id} onClick={() => updateKeyHandler(name)}>
            <Movie cover={cover} name={name} />
          </Item>
        )
      })}
    </List>
  )

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!!!</p>
  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}

export const ListOfMovies = ({ updateKey }) => (
  <>
    <QueryActiveMovies date="2020-03-24" timeOfDay="12:00-17:59">
      {renderListOfMovies(updateKey)}
    </QueryActiveMovies>
  </>
)
