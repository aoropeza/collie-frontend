import React from 'react'
import { useShowOnScroll } from '../../hooks/useShowOnScroll'
import { MovieIcon } from '../MovieIcon/index'
import { List, Item } from './styles'

export const ListOfMovieIcon = ({ loading, activeMovies = [] } = {}) => {
  const [showFixed] = useShowOnScroll(200)

  // TODO Make a better loading component
  const renderList = fixed => (
    <List fixed={fixed}>
      {loading ? (
        <Item key="loading">
          <MovieIcon />
        </Item>
      ) : (
        activeMovies.map(movie => {
          const { cover, name } = movie
          return (
            <Item key={movie.id}>
              <MovieIcon cover={cover} name={name} />
            </Item>
          )
        })
      )}
    </List>
  )

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}
