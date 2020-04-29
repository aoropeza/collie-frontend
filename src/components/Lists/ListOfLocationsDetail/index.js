import React from 'react'
import { LocationCard } from '../../UI/LocationCard'
import { QuerySchedulesBy } from '../../../queries/QuerySchedulesBy'

const renderProp = ({
  loading,
  error,
  data: { infoSchedulesByMovie = [] } = {}
}) => {
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!!!</p>

  return (
    <ul>
      {infoSchedulesByMovie.map(({ computedUnique, ...item }) => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <LocationCard key={computedUnique} {...item} />
      ))}
    </ul>
  )
}

export const ListOfLocationsDetail = ({
  movieName,
  date,
  timeOfDay,
  latitude,
  longitude
}) => {
  return (
    <QuerySchedulesBy
      movieName={movieName}
      date={date}
      timeOfDay={timeOfDay}
      latitude={latitude}
      longitude={longitude}
    >
      {renderProp}
    </QuerySchedulesBy>
  )
}
