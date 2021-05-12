import React from 'react'

import './advertisment.styles.scss'

const Advertisment = () => {
  return (
    <div className="advertisment">
      <div className="advertisment__heading">
        <h3>Get healthy</h3>
        <h3>Raw Honey</h3>
      </div>
      <p>At Dr. Queen Bee we provide it raw & unprocessed</p>
      <div className="advertisment__footer">
        <div>
          <span>Img</span>
          <span>Img</span>
        </div>
        <button type="button">Shop Now</button>
      </div>
    </div>
  )
}

export default Advertisment;