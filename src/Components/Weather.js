import React from "react";

const Weather = (props) => {
    return(
        <div className="weather-card">
            <div className="location">{props.location}</div>
            <div className="weather">{props.weather}</div>
            <div className="temperature">{props.temperature}°C</div>
            <img className="weather-icon" src={props.icon} alt="Weather Icon" />
        </div>
    )
}
export default Weather;