import React from "react"
import NavBar from '../common/navbar.component'

import '../../scss/styles.scss';

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <NavBar />
      <main>{children}</main>
    </>
  )
}

export default Layout
