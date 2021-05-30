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
      <div className="home-page-grid-container">
        <div></div>
        <div className="menu-items-contianer">
          {Object.values(menuList).map(menuItem => (
            <p key={menuItem.name}>{menuItem.name}</p>
          ))}
        </div>
        <div>
        </div>
      </div>
    </div>
  )
}

export default NavBar