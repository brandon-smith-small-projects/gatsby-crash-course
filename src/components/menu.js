import React from 'react'
import Link from 'gatsby-link'

const Menu = () => (
  <div style={{
    background: '#f4f4f4f',
    paddingTop: '10px'
  }}>
    <ul style={{
      display: 'flex',
      justifyContent: 'space-evenly',
      listStyle: 'none'
    }}>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/services">Services</Link>
      </li>
      <li>
        <Link to="#">Blog</Link>
      </li>
    </ul>
  </div>
)

export default Menu