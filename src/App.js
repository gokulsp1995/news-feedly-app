import './App.css';
import React, { useEffect, useState } from 'react';
import NewsSquare from './Components/NewsSquare';
import { newsContent } from "./newsContent";

function App() {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("https://inshorts.deta.dev/news?category=science");

        if (!response.ok) {
          throw new Error("Failed to fetch news");
        }

        const data = await response.json();
        setNewsData(data);

        console.log(data);
        console.log(data[0]);
        console.log(data.map(newsItem => newsItem.id));
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []); 
    console.log(newsData)
  return (
    
    <div className='App'> 
      console.log(newsData)
      <div className="news-container">
        <div>Hi</div>
        {["hi", "hello", "welcome"].map((greeting, index) => {
          return <div key={index}>{greeting}</div>;
        })}
        {/* {newsData.map((val) => {
          return <p key={val.id}>{val.author}</p>;
        })} */}
        
        {newsData.data && Array.isArray(newsData.data) && newsData.data.length > 0 ? (
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
        ) )
      
      ) : (
        <h1>No news available</h1>
      )
    }
      </div>
    </div>
  );
}

export default App;

// import './App.css';
// import React, { useEffect , useState} from 'react';
// import NewsSquare from './Components/NewsSquare';
// import { newsContent } from "./newsContent"

// function App() {

//     const [newsData, setNewsData] = React.useState([]);
 
//     // const {data: newsData} = newsContent;
//   //   console.log("rendered")
//   // React.useEffect(() => {
//   //     fetch("https://inshorts.deta.dev/news?category=all")
//   //     .then(response => response.json())
//   //     .then(data => setNewsData(data))
//   // }, [])

//   useEffect(() => {
//       const fetchNews = async() => {
//         try{
//           const response = await fetch("https://inshorts.deta.dev/news?category=science")

//           if(!response.ok) {
//               throw new Error("Failed to fetch news")
//           }
//           const data = await response.json();
//           setNewsData(data)

//           // .then( response => response.json())
//           // .then(data => setNewsData(data))
//           // .catch((error) => console.error('Error fetching news:', error));
//           console.log(data)
//           console.log(data[0])
//           console.log(data.map(newsItem => newsItem.id))
//       } 
//         catch(error) {
//             console.error("Error fetching news:", error)
//         }
//       };
//       fetchNews();
    
//   }, []);

//   return (
//     <div className='App'>
//       <div className="news-container">
//         <div>Hi</div>
         
//         {["hi","hello","welcome"].map((greeting, index) => {
//             return <div>{greeting}</div> 
//         })}
//              { newsData.map((val) => {
//                   return <p key={val.id}>{val.author}</p>
//              }) }

//       </div> 
//     </div>
//   );
// }

// export default App;




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