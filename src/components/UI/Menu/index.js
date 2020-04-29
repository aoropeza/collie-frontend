import React, { useState } from 'react'
import { Button, List, ListItem } from 'react95'
import { Link } from '@reach/router'
import { LogoIcon } from '../LogoIcon'
import { Container } from './styles'

export const Menu = () => {
  const [open, setOpen] = useState(false)

  return (
    <Container>
      {open && (
        <List
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
        </List>
      )}
      <Button
        onClick={() => setOpen(!open)}
        active={open}
        style={{ fontWeight: 'bold' }}
      >
        <LogoIcon style={{ marginLeft: -2, marginRight: 4 }} />
        Start
      </Button>
    </Container>
  )
}
