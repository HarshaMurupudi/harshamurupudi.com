import React from 'react'

import Author from '../../header/author.component'
import Logo from '../../header/logo-section.component'
import FindMe from '../../header/find-me.component'
import NavBar from './navbar.component'

import { FaAlignRight } from "react-icons/fa"


const Header = () => {
  return (
    <div>
      <div className="home-page-grid-container">
        <Author />
        <Logo />
        <div>
          <FindMe />
          <button type="button" className="toggle-btn">
            <FaAlignRight />
          </button>
        </div>
      </div>
      <hr />
      <NavBar />
    </div>
  )
}

export default Header;