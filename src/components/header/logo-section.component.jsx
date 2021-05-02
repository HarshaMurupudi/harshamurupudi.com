import React from 'react'

import theGeneralistImg from '../../assets/the-generalist.png'

import './logo-section.styles.scss'

const Logo = () => {
  return (
    <div className="logo-container">
      <img src={theGeneralistImg} />
      <p>Monday December 28 2020</p>
    </div>
  )
}

export default Logo