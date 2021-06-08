import React from 'react';

import ThumbnailArticle from '../../article/thumbnail-article.component';

import './post-header.styles.scss'

const PostHeader = () => {
  return (
    <div className="post-header-container">
      <div className="post-header-grid-container post-header">
        <ThumbnailArticle />
        <ThumbnailArticle />
        <ThumbnailArticle />
      </div>
      <hr />
    </div>
  )
}

export default PostHeader;