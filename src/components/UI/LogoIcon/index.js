import React from 'react'
import logoIMG from '../../../images/logo.png'

export const LogoIcon = () => (
  <span
    className="LogoIcon"
    style={{
      display: 'inline-block',
      height: '22px',
      marginLeft: -2,
      marginRight: 4
    }}
  >
    <img
      src={logoIMG}
      alt="react95 logo"
      style={{ height: '100%', width: 'auto' }}
    />
  </span>
)
