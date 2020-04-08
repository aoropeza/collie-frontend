import React from 'react'
import { MdHome, MdPerson } from 'react-icons/md'
import { Nav, Link } from './styles'

const SIZE = '32px'

export const NavBar = () => {
  return (
    <Nav>
      <Link to="/">
        <MdHome size={SIZE} />
      </Link>
      <Link to="/about">
        <MdPerson size={SIZE} />
      </Link>
    </Nav>
  )
}
