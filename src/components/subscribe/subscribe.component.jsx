import React from 'react'

import CustomButton from '../custom-button/custom-button.component'

import './subscribe.styles.scss'

const Subscribe = () => {
  return (
    <div className="subscribe">
      <h3>
        Don't wanna miss ?
      </h3>
      <h4>Get an email update for every new edition</h4>
      <div className="subscribe__input-fields">
        <div className="order-1 d-inline col-12 col-md-8 floating-form">
          <input className="floating-input" type="text" placeholder=" " id="email" name="email" aria-describedby="email" />
          <span class="highlight"></span>
          <label htmlFor="email">Name</label>
        </div>
        <div className="order-1 d-inline col-12 col-md-8 floating-form">
          <input className="floating-input" type="text" placeholder=" " id="email" name="email" aria-describedby="email" />
          <span class="highlight"></span>
          <label htmlFor="email">Email</label>
        </div>

      </div>
      <div className="subscribe__submit-btn">
        <CustomButton>Subscribe</CustomButton>
      </div>
    </div>

  )
}

export default Subscribe;