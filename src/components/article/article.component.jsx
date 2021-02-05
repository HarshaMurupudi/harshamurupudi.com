import React from 'react';
import laundryImg from '../../assets/laundary.jpg';

import "./article.styles.scss"

const article = () => {
  return (
    <div className="article-container">
      <img src={laundryImg} />
      <div>
        <p>Eco-friendly ?</p>
        <p>
          <span>#art</span>
          <span>#design</span>
        </p>
        <p>Lorem Ipsum is simply
        dummy text of the
        printing and typesetting
        industry. Lorem Ipsum
has been the industry</p>
        <p>5 min read</p>
      </div>

    </div>
  )
};

export default article;