import React from "react";
const NewsSquare = (props) => {
    return (
        <div className="news-card">
            <div className="text-area">
                <h3 className="news-title">{props.title}</h3>  
                <p className="news-content">{props.content}</p>
            </div>
            <div className="news-image">
                <img src={props.imageUrl} alt={props.title} />
                
            </div>
            <div className="news-bottom">
                <div className="news-brand-time">
                    <p>{props.author}</p>
                    <p>{props.date}</p>
                    <p>{props.time}</p>
                </div>
                <div className="news-links">
                <a href={props.readMoreUrl} >Read more</a>
                </div>
            </div>
        </div>
    )
}
export default NewsSquare