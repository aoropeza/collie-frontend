import React from 'react'
import { LocationCard } from '../../UI/LocationCard'

export const ListOfLocationsDetail = ({ schedules }) => {
  return (
    <ul>
      {schedules.map(({ computedUnique, ...item }) => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <LocationCard key={computedUnique} {...item} />
      ))}
    </ul>
  )
}
