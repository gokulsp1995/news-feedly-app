
import './App.css';
import React, { useEffect } from 'react';
import NewsSquare from './Components/NewsSquare';
import { newsContent } from "./newsContent"

function App() {

    const [newsData, setNewsData] = React.useState([{
       
      author
      : 
      "Pragya Swastik",
      content
      : 
      "Researchers have named a new group of butterflies with bright orange hindwings and dark eyespots 'Saurona' after the villain 'Sauron' from the 'Lord of the Rings'. Sauron was the evil lord of Mordor. 'The Eye of Sauron' from the Lord of the Rings was famously depicted on screen as a fiery orange eye peering over the landscape of Middle Earth.",
      date
      : 
      "07 May 2023,Sunday",
      id
      : 
      "f2a94fee2fa1429594885abafd45832a",
      imageUrl
      : 
      "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2023/05_may/7_sun/img_1683457674199_66.jpg?",
      readMoreUrl
      : 
      "https://www.nhm.ac.uk/discover/news/2023/may/new-group-butterflies-named-after-lord-of-the-rings-villain-sauron.html?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts ",
      time
      :   
      "05:47 pm",
      title
      : 
      "Rare butterflies named after 'Lord of the Rings' villain for how they look",
      url
      : 
      "https://www.inshorts.com/en/news/rare-butterflies-named-after-lord-of-the-rings-villain-for-how-they-lo"
}])
 
    // const {data: newsData} = newsContent;
  //   console.log("rendered")
  // React.useEffect(() => {
  //     fetch("https://inshorts.deta.dev/news?category=all")
  //     .then(response => response.json())
  //     .then(data => setNewsData(data))
  // }, [])

  useEffect(() => {
      const fetchNews = async() => {
        fetch("https://inshorts.deta.dev/news?category=science")
        .then( response => response.json())
        .then(data => setNewsData(data))
        .catch((error) => console.error('Error fetching news:', error));
        console.log(newsData)
        console.log(newsData.data[0])
        console.log(newsData.data.map(newsItem => newsItem.id))
      }
      fetchNews();
    
  }, []);

  return (
    <div className='App'>
      <div className="news-container">
        <div>Hi</div>
         
        {["hi","hello","welcome"].map((greeting, index) => {
            return <div>{greeting}</div> 
        })}
             { newsData.data.map({val => 
                  return <p>{val.author}<p/>
             }) }

      </div> 
    </div>
  );
}

export default App;




 {/* <NewsSquare 
            title="This is the sample"
            imageUrl="https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2023/05_may/2_tue/img_1683034121808_600.jpg?" 
            author= "Pragya Swastik"
            content= "Dermatologists at the Oregon Health & Science University, US, have detected the world's smallest skin cancer measuring 0.65 mm (0.0256 inches) in diameter. To identify this micro-skin cancer, they used a combination of Dermoscopy and Reflectance Confocal Microscopy. It is a micro-melanoma in-situ, a type of cancer that is found exclusively on the top layer of the skin."
            date= "02 May 2023,Tuesday"
            time="07:45 pm"
            readMoreUrl="https://news.ohsu.edu/2023/05/01/ohsu-dermatologists-detect-the-worlds-smallest-skin-cancer?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts "
            /> */}
  {/* {newsData.data.map((news) => ( */}
                {/* <NewsSquare   */}
                  {/* // key={news.id}
                  // title={news.title}
                  // imageUrl={news.imageUrl}
                  // author={news.author}
                  // content={news.content}
                  // time={news.time}
                  // date={news.date}
                  // readMoreUrl={news.readMoreUrl} */}
              {/* /> */}
          {/* ) */}
        {/* )} */}

          {/* {newsData.data.map((news) => (  */}
              {/* <NewsSquare  
                  key={news.id}
                  title={news.title}
                  imageUrl={news.imageUrl}
                  author={news.author}
                  content={news.content}
                  time={news.time}
                  date={news.date}
                  readMoreUrl={news.readMoreUrl}

              /> */}
            {/* )) */}
          {/* } */}
        {/* <p>{JSON.stringify(newsData,null,2)}</p> */}