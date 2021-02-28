import React from "react"
import Header from '../common/header/header.component'

import '../../scss/styles.scss';

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}

export default Layout
