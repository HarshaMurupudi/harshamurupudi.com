import React from 'react'

import UserImg from '../../assets/user.svg'

import './author.styles.scss'

const Author = () => {
  return (
    <div className="author-container">
      <img src={UserImg} />
      <div className="author-info">
        <p>Harsha Murupudi</p>
        <p>
          MAKER
      <span className="dot"></span>
      WRITER
      <span className="dot"></span>
      THINKER
      </p>
        <hr />
        <p>Vijayawada, India</p>
      </div>
    </div>
  )
}

export default Author