import React from 'react'

import './subscribe.styles.scss'

const Subscribe = () => {
  return (
    <div className="subscribe">
      <h6>
        Don't wanna miss ?
    </h6>
      <p>Get an email update for every new edition</p>
      <div>
        <input type="text" />
        <input type="text" />
      </div>
      <button>Subscribe</button>
    </div>
  )
}

export default Subscribe;