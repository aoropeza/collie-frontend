import React from 'react'
import { Toolbar, TextField } from 'react95'
import { Menu } from '../Menu'
import { Nav } from './styles'

export const NavBar = () => {
  return (
    <Nav>
      <Toolbar style={{ justifyContent: 'space-between' }}>
        <Menu />
        <TextField
          placeholder="Search..."
          width={150}
          style={{ marginLeft: 4 }}
        />
      </Toolbar>
    </Nav>
  )
}
