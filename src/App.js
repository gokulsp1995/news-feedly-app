import './App.css';
import React, { useEffect, useState } from 'react';
import NewsSquare from './Components/NewsSquare';
import { newsContent } from "./newsContent";

function App() {
  const [newsData, setNewsData] = useState({});
  const [searchNewsData, setSearchNewsData] = useState([]);
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("https://inshorts.deta.dev/news?category=science");
        if (!response.ok) {
          throw new Error("Failed to fetch news");
        }
        const data = await response.json();
        setNewsData(data);
      } 
      catch (error) {
        console.error("Error fetching news:", error);
      }
    };
    fetchNews();
  }, []); 
    // console.log(newsData)

  const handleSearch = (event) => {
        event.preventDefault();
        // console.log(event);
        // console.log(event.target)
        // console.log(event.target.search)
        // console.log(event.target.search.value)
        const searchTerm = event.target.search.value
      const result =[]
      for( let i=0; i < newsData.data.length; i++) {
          // console.log(newsData.data[i].title, newsData.data[i].title.includes(searchNewsData))
          if (newsData.data[i].title.includes(searchTerm)){
              result.push(newsData.data[i])
            // setNewsData(result)
          }
      }
      console.log("Result after filter",result);
      setSearchNewsData(result);
      console.log("This is the search state",searchNewsData)
  }
  return (
    <div className='App'> 
    <div className="search-container">
        <form onSubmit={handleSearch}>
          <input type="text" name="search" placeholder="Search news" />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="news-container">
        <div>Hi Man</div>
        {["hiiii", "hello", "welcome"].map((greeting, index) => {
          return <div
           >{greeting}</div>;
        })}
        {/* {newsData.map((val) => {
          return <p key={val.id}>{val.author}</p>;
        })} */}
        {searchNewsData && Array.isArray(searchNewsData) && searchNewsData.length > 0 ? (
          searchNewsData.map((news) =>(
            <NewsSquare 
              key={news.id}
              title={news.title}
              imageUrl={news.imageUrl}
              author={news.author} 
              content={news.content}
              date={news.date}
              time={news.time}
              readMoreUrl={news.readMoreUrl}
            />
        ))
        ):

        newsData.data && Array.isArray(newsData.data) && newsData.data.length > 0 ? (
          newsData.data.map((news) =>(
            <NewsSquare 
              key={news.id}
              title={news.title}
              imageUrl={news.imageUrl}
              author={news.author} 
              content={news.content}
              date={news.date}
              time={news.time}
              readMoreUrl={news.readMoreUrl}
            />
        ))
      ) : (
        <>
          <img src='my-loader-image.svg' width="450px"/>
          <h2>Please wait while the webpage loads...</h2>
       </>
      )
    }
      </div>
    </div>
  );
}

export default App;