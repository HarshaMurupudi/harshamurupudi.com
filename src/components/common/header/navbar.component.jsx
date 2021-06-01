import React from 'react'
import { Link } from "gatsby"

import './navbar.styles.scss'

const NavBar = () => {
  const menuList = {
    blog: {
      name: "Blog"
    },
    projects: {
      name: "Projects"
    },
    illustrations: {
      name: "Illustrations"
    },
    about: {
      name: "About"
    }
  }
  return (
    <div className="navigation-container">
      <div className="menu-items-contianer">
        {Object.values(menuList).map(menuItem => (
          <p key={menuItem.name}>{menuItem.name}</p>
        ))}
      </div>
    </div>
  )
}

export default NavBar