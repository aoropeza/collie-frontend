import React from 'react'
import { useShowOnScroll } from '../../../hooks/useShowOnScroll'
import { Movie } from '../../UI/Movie'
import { List, Item } from './styles'

export const ListOfMovies = ({ activeMovies = [] } = {}) => {
  const [showFixed] = useShowOnScroll(200)

  // TODO Make a better loading component
  const renderList = fixed => (
    <List fixed={fixed}>
      {activeMovies.map(movie => {
        const { cover, name } = movie
        return (
          <Item key={movie.id}>
            <Movie cover={cover} name={name} />
          </Item>
        )
      })}
    </List>
  )

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}
