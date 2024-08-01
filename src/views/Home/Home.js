import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./Home.css"
import Articles from '../../components/Articles/Articles'

function Home() {
    const [news, setNews] =useState([])
    const [searchQuery, setSearchQuery] = useState("apple")

    //function
    const loadNews = async()=>{
        try{
        const response = await axios.get(`https://newsapi.org/v2/everything?q=${searchQuery}&from=2024-07-31&to=2024-07-31&sortBy=popularity&apiKey=${process.env.REACT_APP_API_KEY}`);
        setNews(response.data.articles)
        }
        catch(error){
            console.log(error)
        }
    }

    //Load the news
    useEffect(()=>{
        loadNews()
    },[])

    useEffect(()=>{
        loadNews()
    },[searchQuery])

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