import React from 'react';

import Art from '../art/art.component'

import './home-art-section.component.scss'

const HomeArtSection = () => {
  return (
    <div className="home-art">
      <h3>Art</h3>
      <div className="home-art__image-container">
        <Art />
        <div className="v1"></div>
        <Art />
      </div>
    </div>
  )
}

export default HomeArtSection;
