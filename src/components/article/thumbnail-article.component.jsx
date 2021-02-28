import React from 'react'

import laundryImg from '../../assets/laundary.jpg';

import './thumbnail-article.styles.scss'

const Thumbnail = () => {
  return (
    <div className="thumbnail-article-container">
      <img src={laundryImg} />
      <p>Lorem Ipsum is simply
        dummy text of the</p>
    </div>
  )
}

export default Thumbnail;