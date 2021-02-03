import React from "react"
import Navbar from "./Navbar"

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
