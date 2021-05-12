import React from 'react';

import Article from '../article/article.component'

import './home-article-section.styles.scss'

const HomeArticleSection = () => {
  return (
    <div className="home-article-section">
      <h3>Articles</h3>
      <div>
        <Article />
        <Article />
      </div>
    </div>
  )
}

export default HomeArticleSection;
