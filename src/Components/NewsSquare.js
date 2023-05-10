import React from "react";
const NewsSquare = (props) => {
    return (
        <div className="news-card">
            <div className="news-and-image">
                <div className="text-area">
                    <h3 className="news-title">{props.title}</h3>  
                    <div className="news-image">
                        <img src={props.imageUrl} alt={props.title} />
                    </div>
                    <p className="news-content">{props.content}</p>
                </div>
                
            </div>
            <div className="news-bottom">
                <div className="news-brand-time">
                    <p className="news-author">{props.author}</p>
                    <p className="date-and-time">{props.date}</p>
                    <p className="date-and-time">{props.time}</p>
                </div>
                <div className="news-links">
                    <a href={props.readMoreUrl} >Read more...</a>
                </div>
            </div>
        </div>
    )
}
export default NewsSquare