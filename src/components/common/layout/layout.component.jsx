import React from "react"

import Header from '../header-section/header.component'
import PostHeader from '../post-header/post-header.component';

import '../../../scss/styles.scss';
import './layout.styles.scss'

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className="layout-container">
      <Header />
      <hr className="layout-container__divider" />
      <PostHeader />
      <main>{children}</main>
    </div>
  )
}

export default Layout
