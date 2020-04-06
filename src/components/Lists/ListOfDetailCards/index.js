import React from 'react'
import { DetailCard } from '../../UI/DetailCard'

export const ListOfDetailCards = () => {
  return (
    <ul>
      {[1, 2, 3, 4, 5, 6, 7, 8].map(id => (
        <DetailCard key={id} />
      ))}
    </ul>
  )
}
