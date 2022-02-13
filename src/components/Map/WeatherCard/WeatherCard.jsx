import React from 'react'
import "./WeatherCard.css"

const WeatherCard = ({data}) => {
  return (
    <div className="weatherImg">
        <img  src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} alt="" />
    </div>
  )
}

export default WeatherCard