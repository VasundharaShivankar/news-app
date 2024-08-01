import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./Home.css"
import Articles from '../../components/Articles/Articles'

function Home() {
    const [news, setNews] =useState([])

    //function
    const loadNews = async()=>{
        const response = await axios.get(`https://newsapi.org/v2/everything?q=apple&from=2024-07-31&to=2024-07-31&sortBy=popularity&apiKey=d3d19232f0644803b4b26a3ff2f3953a`)
        setNews(response.data.articles)
    }

    //Load the news
    useEffect(()=>{
        loadNews()
    },[])



  return (
    <div>
        <h1>News App</h1>
        <input 
            type="text" 
            className='search'
            value={searchQuery}
            onChange={(e)=>{
                setSearchQuery(e.target.value)
            }}/>


        <div className='news-container'>
        {
            news.map((newsArticle, index)=>{
                const{author, title, description, url, urlToImage, publishedAt, content} = newsArticle
                return (
                    <Articles
                        key={index} 
                        author={author}
                        title={title}
                        description={description}
                        url={url}
                        urlToImage={urlToImage}
                        publishedAt={publishedAt}
                        content={content}
                        />
                )
            })
        }
        </div>
    </div>
  )
}

export default Home