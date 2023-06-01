import './App.css';
import React, { useEffect, useState } from 'react';
import NewsSquare from './Components/NewsSquare';
import { newsContent } from "./newsContent";
import Creator from './Components/Creator';

function App() {
  const [newsData, setNewsData] = useState({});
  const [searchNewsData, setSearchNewsData] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("all")

  // useEffect(() => {
  //   const fetchNews = async () => {
  //     try {
  //       const response = await fetch(`https://inshorts.deta.dev/news?category=${currentCategory}`);
  //       if (!response.ok) {
  //         throw new Error("Failed to fetch news");
  //       }
  //       const data = await response.json();
  //       setNewsData(data);
  //     } 
  //     catch (error) {
  //       console.error("Error fetching news:", error);
  //     }
  //   };
  //   fetchNews();
  // }, [currentCategory]); 

  useEffect(() => {
    const fetchNews = () => {
      fetch(`https://inshorts.deta.dev/news?category=${currentCategory}`)
        .then(response => response.json())
        .then(data => setNewsData(data))
        .catch(error => console.error("Error fetching news:", error));
    };
    fetchNews();
  }, [currentCategory]);

  const handleSearch = (event) => {
        event.preventDefault();
        const searchTerm = event.target.search.value
      const result =[]
      for( let i=0; i < newsData.data.length; i++) {
          // console.log(newsData.data[i].title, newsData.data[i].title.includes(searchNewsData))
          if (newsData.data[i].title.includes(searchTerm)){
              result.push(newsData.data[i])
          }
      }
      console.log("Result after filter",result);
      setSearchNewsData(result);
      console.log("This is the search state",searchNewsData)
  }
  const handleCategoryChange = (category) => {
      // console.log("Category worked")
      console.log("category",category)
      setCurrentCategory(category);
  }
    const categoryArray= ["All",
                          "National",
                          "Business",
                          "Sports",
                          "World",
                          "Politics",
                          "Technology",
                          "Startup",
                          "Entertainment",
                          "Miscellaneous",
                          "Science",
                          "Automobile"]
    return (
    <div className='App'> 
      <div className="search-container">
          <form onSubmit={handleSearch}>
            <input type="text" name="search" placeholder="Search news" />
            <button type="submit">Search</button>
          </form>
      </div>
      <h3>Top stories for you...</h3>
      <div className="top-section">
        {categoryArray.map((category) => (
          <button className='categoryButtons' key={category} onClick={()=>handleCategoryChange(category.toLowerCase())}>
              {category}
          </button>
          ))}
      </div>
      <div className="news-container">
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
      <Creator />
    </div>
  );
}
export default App;