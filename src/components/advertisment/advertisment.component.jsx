import React from 'react'

import './advertisment.styles.scss'

const Advertisment = () => {
  return (
    <div className="advertisment-container">
      <div>
        <h5>Get healthy</h5>
        <h5>Raw Honey</h5>
      </div>
      <p>At Dr. Queen Bee we provide it raw & unprocessed</p>
      <div>
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