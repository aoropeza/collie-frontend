import styled from 'styled-components'
import { DatePicker, AppBar, Button } from 'react95'

export const AppBarUI = styled(AppBar)`
  min-height: 50px;
  justify-content: space-around;
  z-index: 1000;
`

export const Ul = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
`

export const DatePickerUI = styled(DatePicker)`
  position: fixed;
  right: 0;
  top: 40px;
  z-index: 1000;
`
export const ButtonUI = styled(Button)`
  margin-left: 10px;
`

export const ImgUI = styled.img`
  margin-left: -2px;
  margin-right: 5px;
  width: 20px;
`
