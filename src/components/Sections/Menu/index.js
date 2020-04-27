import React, { useState } from 'react'
import { Button, List, ListItem } from 'react95'
import { Link } from '@reach/router'

import { LogoIcon } from '../../UI/LogoIcon'

export const Menu = () => {
  const [open, setOpen] = useState(false)

  function handleClick() {
    setOpen(!open)
  }

  function handleClose() {
    setOpen(false)
  }

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      {open && (
        <List open={open} onClick={handleClose}>
          <ListItem>
            <Link to="/"> Home </Link>
          </ListItem>
          <ListItem>
            <Link to="/about"> About </Link>
          </ListItem>
        </List>
      )}
      <Button
        onClick={handleClick}
        active={open}
        style={{ fontWeight: 'bold' }}
      >
        <LogoIcon style={{ marginLeft: -2, marginRight: 4 }} />
        Start
      </Button>
    </div>
  )
}
