
import './App.css';
import React from 'react';
import NewsSquare from './Components/NewsSquare';

function App() {

    const [newsData, setNewsData] = React.useState({})

    console.log("rendered")
  React.useEffect(() => {
      fetch("https://inshorts.deta.dev/news?category=all")
      .then(response => response.json())
      .then(data => setNewsData(data))
  }, [])

  return (
    <div className="App">
      <NewsSquare 
          title="This is the sample"
          imageUrl="https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2023/05_may/2_tue/img_1683034121808_600.jpg?" 
          author= "Pragya Swastik"
          content= "Dermatologists at the Oregon Health & Science University, US, have detected the world's smallest skin cancer measuring 0.65 mm (0.0256 inches) in diameter. To identify this micro-skin cancer, they used a combination of Dermoscopy and Reflectance Confocal Microscopy. It is a micro-melanoma in-situ, a type of cancer that is found exclusively on the top layer of the skin."
          date= "02 May 2023,Tuesday"
          time="07:45 pm"
          readMoreUrl="https://news.ohsu.edu/2023/05/01/ohsu-dermatologists-detect-the-worlds-smallest-skin-cancer?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts "
          />
      <p>{JSON.stringify(newsData,null,2)}</p>
    </div> 
  );
}

export default App;
