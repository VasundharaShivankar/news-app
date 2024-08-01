import React from 'react'
import "./Articles.css"

function Articles({author, title, description, url, urlToImage, publishedAt, content}) {
  return (
      <div className="news-article-card">
          <img src={urlToImage} className='news-article-img'/>
          <h1 className='title-article'>{title}</h1>
          
          <div className='article-info'>
            <p className='author'>{author}</p>
            <p className='publishedAt'>{publishedAt}</p>
          </div>
      </div>
  )
}

export default Articles