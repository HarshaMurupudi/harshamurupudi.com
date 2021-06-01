import React from 'react'

import Author from '../../header/author.component'
import Logo from '../../header/logo-section.component'
import FindMe from '../../header/find-me.component'
import NavBar from './navbar.component'

import { FaAlignRight } from "react-icons/fa"

import './header.styles.scss'

const Header = () => {
  return (
    <div className="header">
      <div className="home-page-grid-container">
        <Author />
        <Logo />
        <div className="header__find-me-container">
          <FindMe />
          <div>
            <button type="button" className="toggle-btn">
              <FaAlignRight />
            </button>
          </div>
        </div>
      </div>
      <hr />
      <NavBar />
    </div>
  )
}

export default Header;