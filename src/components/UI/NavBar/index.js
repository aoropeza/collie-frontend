import React, { useState } from 'react'
import { Button, Select, TextField } from 'react95'
import moment from 'moment'
import Script from 'react-load-script'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

import { Menu } from '../Menu'
import { Ul, AppBarUI, ToolbarUI, DatePickerUI } from './styles'

const items = [
  { value: '1:00-11:59', label: '🌈 Mañana' },
  { value: '12:00-17:59', label: '🌞 Tarde' },
  { value: '18:00-24:00', label: '🌛 Noche' }
]
const urlGoogleAPI =
  'https://maps.googleapis.com/maps/api/js?key=AIzaSyCSAGYzsMbV99CeWJLGnFQ9GP7roleir4Y&libraries=places'

export const NavBar = ({ children }) => {
  const [shouldBeDatePickerOpen, setShouldBeDatePickerOpen] = useState(false)

  const [dateSelected, setDateSelected] = useState(moment())
  const [timeSelected, setTimeSelected] = useState(items[0].value)
  const [latitudeSelected, setLatitudeSelected] = useState(19.4499759)
  const [longitudeSelected, setLongitudeSelected] = useState(-99.0704167)

  let autocomplete

  const spacingStyle = makeStyles(theme => ({
    root: {
      [theme.breakpoints.down('xs')]: {
        paddingBottom: theme.spacing(1),
        justifyContent: 'space-between'
      },
      [theme.breakpoints.up('sm')]: {
        paddingBottom: theme.spacing(0),
        justifyContent: 'normal'
      }
    }
  }))

  const handlePlaceSelect = () => {
    const addressObject = autocomplete.getPlace()

    setLatitudeSelected(addressObject.geometry.location.lat())
    setLongitudeSelected(addressObject.geometry.location.lng())
  }

  const handleScriptLoad = () => {
    const options = {
      types: ['address'],
      componentRestrictions: { country: 'mx' }
    }

    // eslint-disable-next-line no-undef
    autocomplete = new google.maps.places.Autocomplete(
      document.getElementById('autocomplete'),
      options
    )

    autocomplete.setFields(['geometry', 'formatted_address'])
    autocomplete.addListener('place_changed', handlePlaceSelect)
  }

  return (
    <>
      <Script url={urlGoogleAPI} onLoad={handleScriptLoad} />
      <AppBarUI>
        <ToolbarUI>
          <Grid container alignItems="center">
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <Ul className={spacingStyle().root}>
                <li>
                  <Menu />
                </li>
                <li>
                  <TextField id="autocomplete" width={250} />
                </li>
              </Ul>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <Ul style={{ float: 'right' }}>
                <li>
                  <Select
                    items={items}
                    onChange={value => setTimeSelected(value)}
                    width={135}
                  />
                </li>
                <li>
                  <Button
                    onClick={() => {
                      return setShouldBeDatePickerOpen(!shouldBeDatePickerOpen)
                    }}
                  >
                    {dateSelected.format('DD-MM-YYYY')}
                  </Button>
                </li>
              </Ul>
            </Grid>
          </Grid>
        </ToolbarUI>
      </AppBarUI>
      {shouldBeDatePickerOpen && (
        <DatePickerUI
          date={dateSelected.toDate()}
          onAccept={value => {
            setDateSelected(moment(value))
            setShouldBeDatePickerOpen(false)
          }}
          onCancel={() => setShouldBeDatePickerOpen(false)}
        />
      )}
      {children({
        dateSelected: dateSelected.format('YYYY-MM-DD'),
        timeSelected,
        latitudeSelected,
        longitudeSelected
      })}
    </>
  )
}
