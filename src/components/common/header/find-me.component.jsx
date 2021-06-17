import React from 'react'

import SocialLinks from '../../social-icons-section/social-icons-section.component'

import './find-me.styles.scss'

const FindMe = () => {
  return (
    <div className="find-me-container">
      <div className="find-me-content">
        <p>Find me on</p>
        <div className="icon-container">
          <SocialLinks />
        </div>
        <hr />
        <p className="company-sentence">Tinkering at <span >Dr.Queen Bee</span></p>
      </div>
    </div>
  )
}



export default FindMe