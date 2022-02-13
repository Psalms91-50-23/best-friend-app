export const WEATHER = "WEATHER"

export function setWeatherData(weatherData){
    return {
        type: WEATHER,
        weatherData
    }
}