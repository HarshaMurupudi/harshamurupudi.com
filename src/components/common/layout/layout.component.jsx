import React from "react"

import Header from '../header-section/header.component'
import PostHeader from '../post-header/post-header.component';
import Sidebar from '../sidebar/sidebar.component'

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
// <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

export default Layout
