import './App.css';
import React, { useEffect, useState } from 'react';
import NewsSquare from './Components/NewsSquare';
import { newsContent } from "./newsContent";
import Creator from './Components/Creator';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Weather from './Components/Weather';

    function App() {
          const [newsData, setNewsData] = useState({});
          const [searchNewsData, setSearchNewsData] = useState([]);
          const [currentCategory, setCurrentCategory] = useState("all");
          const [visibleNewsCount, setVisibleNewsCount] = useState(4);
          const [showAllNews, setShowAllNews] = useState(false);
          const [weatherData, setWeatherData] = useState({});

      // CORS issue : probable solution :- adding a header
      useEffect(() => {
        const fetchNews = async () => {
        // fetch(`https://inshorts.deta.dev/news?category=${currentCategory}`)
        // const result = await fetch("https://inshorts.me/news/all?offset=0&limit=10", {
          const result = await fetch(`https://inshorts.me/news/topics/${currentCategory}`, {
          headers: {
            "Content-Type": "application/json"
          }
        });
      if(result.ok){
          const resultJson = await result.json();
          console.log(resultJson);
          setNewsData(resultJson);
      }
      else {
        throw new Error("API was not fetched due to error")
      }
      };
      fetchNews();
      }, [currentCategory]);

      useEffect(() => {
          const fetchWeatherData = async () => {
          try {
            const apiUrl = `https://api.weatherapi.com/v1/current.json?key=87939cc6b3bb41f4ba6172820231307&q=London&aqi=no`;

            const response = await fetch(apiUrl);
            if (!response.ok) {
              throw new Error('Failed to fetch weather data');
            }
            const data = await response.json();
            setWeatherData(data);
          } catch (error) {
            console.error('Error fetching weather data:', error);
          }
        };
        fetchWeatherData();
        }, []);

      const handleSearch = (event) => {
        event.preventDefault();
        const searchTerm = event.target.search.value.toLowerCase(); // Convert search term to lowercase for case-insensitive search
      if(searchTerm.trim() === "") {
        setSearchNewsData([]);
      }
      else {
        const filteredNews = newsData?.data?.articles.filter((news) => {
          return news.title.toLowerCase().includes(searchTerm)
        })
        setSearchNewsData(filteredNews);
      }
      console.log("This is the search state",searchNewsData)
      console.log(event.target.search.value.toLowerCase())
      }
      const handleCategoryChange = (category) => {
          console.log("category",category)
          setCurrentCategory(category);
      }
      const handleShowMoreButton = () => {
        console.log("Showing");
        setShowAllNews(!showAllNews)
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
      
      <div className='header-weather-top'>
        
      <div className='header-and-weather'>
        
        <Header handleSearch={handleSearch} />
          <div className='weather-para'>
            {/* Conditional rendering for Weather component */}
            {weatherData.location && weatherData.current ? (
            <Weather
              location={weatherData.location.name}
              region={weatherData.location.region}
              weather={weatherData.current.condition.text}
              temperature={weatherData.current.temp_c}
              icon={`https:${weatherData.current.condition.icon}`}
              localtime={weatherData.location.localtime}
            />
        ) : (
          <p>Loading weather data...</p>
        )}
        </div>
      </div>
      <div className='header-and-categories'>
        <h3 className='header-stories'>Top stories for you</h3>

        <div className="top-section">
          {categoryArray.map((category) => (
            <button className='categoryButtons' key={category} onClick={()=>handleCategoryChange(category.toLowerCase())}>
                {category}
            </button>
            ))}
        </div>
        </div>
      </div>
      {/* <div className="news-container"> */}
        {/* {searchNewsData && Array.isArray(searchNewsData) && searchNewsData.length > 0 ? ( */}
        {/* Main code to be tested */}
          {/* {searchNewsData.length > 0 ? (
              searchNewsData.map((news) =>(
                <NewsSquare 
                    key={news.hashId}
                    title={news.title}
                    subtitle={news.subtitle}
                    imageUrl={news.imageUrl}
                    sourceName={news.sourceName} 
                    author={news.authorName} 
                    content={news.content}
                    date={news.date}
                    time={news.time}
                    readMoreUrl={news.sourceUrl}
                />
              ))
        ):(
      //  {newsData?.data?.articles && Array.isArray(newsData?.data?.articles) && newsData?.data?.articles.length > 0 ? (
            showAllNews ? (
              newsData.data.articles.map((news) => (
                  <NewsSquare 
                    key={news.hashId}
                    title={news.title}
                    subtitle={news.subtitle}
                    imageUrl={news.imageUrl}
                    sourceName={news.sourceName} 
                    author={news.authorName} 
                    content={news.content}
                    date={news.date}
                    time={news.time}
                    readMoreUrl={news.sourceUrl}
                />
            ))
         ) : (
          newsData.data.articles.slice(0, visibleNewsCount).map((news) =>(
            <NewsSquare 
              key={news.hashId}
              title={news.title}
              subtitle={news.subtitle}
              imageUrl={news.imageUrl}
              sourceName={news.sourceName} 
              author={news.authorName} 
              content={news.content}
              date={news.date}
              time={news.time}
              readMoreUrl={news.sourceUrl}
            />
          ))
        ) : (
          <>
              <img src='my-loader-image.svg' width="450px"/>
              <h2>Please wait while the webpage loads...</h2>
          </>
          ) */}
      {/* Main code - to be tested */}
  <div className="news-container">
  {newsData?.data?.articles ? (
    searchNewsData.length > 0 ? (
      searchNewsData.map((news) => (
        <NewsSquare 
          key={news.hashId}
          title={news.title}
          subtitle={news.subtitle}
          imageUrl={news.imageUrl}
          sourceName={news.sourceName} 
          author={news.authorName} 
          content={news.content}
          date={news.date}
          time={news.time}
          readMoreUrl={news.sourceUrl}
        />
      ))
    ) : (
      showAllNews ? (
        newsData.data.articles.map((news) => (
          <NewsSquare 
            key={news.hashId}
            title={news.title}
            subtitle={news.subtitle}
            imageUrl={news.imageUrl}
            sourceName={news.sourceName} 
            author={news.authorName} 
            content={news.content}
            date={news.date}
            time={news.time}
            readMoreUrl={news.sourceUrl}
          />
        ))
      ) : (
        newsData.data.articles.slice(0, visibleNewsCount).map((news) => (
          <NewsSquare 
            key={news.hashId}
            title={news.title}
            subtitle={news.subtitle}
            imageUrl={news.imageUrl}
            sourceName={news.sourceName} 
            author={news.authorName} 
            content={news.content}
            date={news.date}
            time={news.time}
            readMoreUrl={news.sourceUrl}
          />
        ))
      )
    )
  ) : (
    // Placeholder content while newsData is loading
    <div>
      <img className='loader-header' src='my-loader-image.svg' width="450px"/>
      <h2 className='loader-header'>Please wait while the webpage loads...</h2>
    </div>
  )}
</div>
{/* 

      
    </div> */}
      <button onClick={handleShowMoreButton} className='showMoreButton'>{showAllNews ? "Show less news" : "Show more news"}</button>
    <div className='creator-box'>
      <Creator />
      </div>
      <Footer />

    </div>
  )
}
export default App;