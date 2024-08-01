import React from 'react'
import "./Articles.css"

function Articles({author, title, description, url, urlToImage, publishedAt, content}) {
  return (
      <div className="news-article-card">
          <img src={urlToImage} className='news-article-img'/>
          <h1 className='title-article'>{title}</h1>
          
          <div className='article-info'>
            <b><p className='author'>{author}</p></b>
            <p className='publishedAt'>{publishedAt}</p>
          </div>

          <p className='description'>{description}</p>
          <a href={url} target='blank' className='Readmore'>READ MORE</a>
      </div>
  )
}

export default Articles