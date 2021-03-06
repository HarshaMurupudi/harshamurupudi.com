import React from 'react'

import CustomButton from '../custom-button/custom-button.component'

import multiFloralHoneyImg from '../../assets/multi-floral-honey-trans.png'

import './advertisement.styles.scss'

const advertisement = () => {
  return (
    <div className="advertisement">
      <div className="advertisement__heading">
        <h3>Get healthy</h3>
        <h3>Raw Honey</h3>
      </div>
      <p>At Dr. Queen Bee we provide it raw & unprocessed</p>
      <div className="advertisement__footer">
        <div className="advertisement__footer__img-container">
          <img src={multiFloralHoneyImg} />
          <img src={multiFloralHoneyImg} />
        </div>
        <div>
          <CustomButton type="button">Shop Now</CustomButton>
        </div>
      </div>
    </div>
  )
}

export default advertisement;