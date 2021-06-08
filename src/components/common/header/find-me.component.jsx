import React from 'react'

import twitterIcon from '../../../assets/social-media-icons/twitter.svg'
import pinterestIcon from '../../../assets/social-media-icons/pinterest.svg'
import instagramIcon from '../../../assets/social-media-icons/instagram.svg'
import githubIcon from '../../../assets/social-media-icons/github.svg'
import dribbleIcon from '../../../assets/social-media-icons/dribble.svg'

import './find-me.styles.scss'

const FindMe = () => {
  return (
    <div className="find-me-container">
      <div className="find-me-content">
        <p>Find me on</p>
        <div className="icon-container">
          <img src={twitterIcon} />
          <img src={pinterestIcon} />
          <img src={instagramIcon} />
          <img src={githubIcon} />
          <img src={dribbleIcon} />
        </div>
        <hr />
        <p className="company-sentence">Tinkering at <span >Dr.Queen Bee</span></p>
      </div>
    </div>
  )
}

export default FindMe