export const WEATHER = "WEATHER"

export function setWeather(weather){
    return {
        type: WEATHER,
        weather
    }
}