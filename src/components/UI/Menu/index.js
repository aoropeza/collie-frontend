import React, { useState } from 'react'
import { ListItem } from 'react95'
import { Link } from '@reach/router'

import { LogoIcon } from '../LogoIcon'
import { ButtonUI, ListUI } from './styles'

export const Menu = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      {open && (
        <ListUI
          horizontalAlign="left"
          verticalAlign="bottom"
          open={open}
          onClick={() => setOpen(false)}
        >
          <ListItem>
            <Link to="/"> Home </Link>
          </ListItem>
          <ListItem>
            <Link to="/about"> About </Link>
          </ListItem>
        </ListUI>
      )}
      <ButtonUI onClick={() => setOpen(!open)} active={open}>
        <LogoIcon />
        Start
      </ButtonUI>
    </>
  )
}
