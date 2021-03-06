import React from 'react'

import Author from '../../header/author.component'
import Logo from '../../header/logo-section.component'
import FindMe from '../../header/find-me.component'
import NavBar from './navbar.component'

const Header = () => {
  return (
    <div>
      <div className="home-page-grid-container">
        <Author />
        <Logo />
        <FindMe />
      </div>
      <hr />
      <NavBar />
    </div>
  )
}

export default Header;