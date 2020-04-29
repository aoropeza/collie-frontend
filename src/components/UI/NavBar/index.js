import React, { useState } from 'react'
import { Toolbar, Button, Select } from 'react95'
import moment from 'moment'
import { Menu } from '../Menu'
import { Ul, AppBarUI, DatePickerUI } from './styles'

const items = [
  { value: '1:00-11:59', label: '🌈 Mañana' },
  { value: '12:00-17:59', label: '🌞 Tarde' },
  { value: '18:00-24:00', label: '🌛 Noche' }
]

export const NavBar = ({ children }) => {
  const [shouldBeDatePickerOpen, setShouldBeDatePickerOpen] = useState(false)
  const [date, setDate] = useState(moment())
  const [timeSelected, setTimeSelected] = useState(items[0].value)

  return (
    <>
      <AppBarUI>
        <Toolbar style={{ justifyContent: 'space-between' }}>
          <Menu />
          <Ul>
            <li>
              <Select
                items={items}
                onChange={value => setTimeSelected(value)}
                width={135}
              />
            </li>
            <li>
              <Button
                onClick={() =>
                  setShouldBeDatePickerOpen(!shouldBeDatePickerOpen)
                }
              >
                {date.format('DD-MM-YYYY')}
              </Button>
            </li>
          </Ul>
        </Toolbar>
      </AppBarUI>
      {shouldBeDatePickerOpen && (
        <DatePickerUI
          onAccept={value => {
            setDate(moment(value))
            setShouldBeDatePickerOpen(false)
          }}
          onCancel={() => setShouldBeDatePickerOpen(false)}
        />
      )}
      {children({ dateSelected: date.format('YYYY-MM-DD'), timeSelected })}
    </>
  )
}
