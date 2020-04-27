import React, { useState } from 'react'
import { DatePicker, Select } from 'react95'
import moment from 'moment'
import { ListOfMovies } from '../../Lists/ListOfMovies'

const items = [
  { value: '1:00-11:59', label: '🌈 Mañana(8:00-11:59)' },
  { value: '12:00-17:59', label: '🌞 Tarde(12:00-17:59)' },
  { value: '18:00-24:00', label: '🌛 Noche(18:00-24:00)' }
]

export const Filters = ({ children }) => {
  const [movieSelected, setMovieSelected] = useState('')
  const [dateSelected, setDateSelected] = useState(
    moment().format('YYYY-MM-DD')
  )
  const [timeSelected, setTimeSelected] = useState(items[0].value)
  return (
    <>
      <ListOfMovies updateKey={setMovieSelected} />
      <DatePicker
        onAccept={date => setDateSelected(moment(date).format('YYYY-MM-DD'))}
        onCancel={() => console.log('cancel')}
      />
      <Select
        items={items}
        onChange={value => setTimeSelected(value)}
        width={230}
      />
      {children({ movieSelected, dateSelected, timeSelected })}
    </>
  )
}
