import React from "react"

import '../../scss/styles.scss';

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <main>{children}</main>
    </>
  )
}

export default Layout
