import React from "react";
const NewsSquare = (props) => {
    return (
        <div>
            <div className="text-area">
                <h3 className="news-title">{props.title}</h3>  
                <p className="news-paragraph">{props.paragraph}</p>
            </div>
            <div className="news-image">
                <img src={props.image} alt={props.title} />
            </div>
            <div className="news-bottom">
                <div className="news-brand-time">
                    <p>{props.brand}</p>
                    <p>{props.time}</p>
                </div>
                <div className="news-links">
                <a href={props.url} >Read more</a>
                </div>
            </div>
        </div>
    )
}
export default NewsSquare