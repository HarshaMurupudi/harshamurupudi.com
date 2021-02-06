import React from "react"
import Navbar from "./Navbar"

import '../../scss/styles.scss';

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <Navbar toggle={toggle} />
      <main>{children}</main>
    </>
  )
}

export default Layout
