import React from 'react'
import "./WeatherCard.css"

const WeatherCard = ({data}) => {
  return (
    <div className="weatherImg">
      <img  src={data.weather_icons.length && data.weather_icons[0]} alt="weather image" />
    </div>
  )
}

export default WeatherCard