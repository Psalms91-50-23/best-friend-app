import axios from "axios"

export const getPlacesData = async ( type, ne, sw ) => {

    try {
        const { data: { data  }} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
          params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
          },
          headers: {
            'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
            'x-rapidapi-key': process.env.REACT_APP_RAPID_TRAVEL_API_KEY
          }
        });  
        return data;
    }catch(error) {
        console.log(error);
    }
}
//previous api key no longer works
// export const getWeatherData = async ( lng, lat ) => {
//   try{
//     const { data } = await axios.get('https://community-open-weather-map.p.rapidapi.com/find', {
//       params: { lon: lng, lat: lat },
//       headers: {
//         'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
//         'x-rapidapi-key': process.env.REACT_APP_RAPID_WEATHER_API_KEY
//       }
//     })
//     return data
//   }catch(error){
//     console.log(error);
//   }
// }

export const getWeatherData = async ( lng, lat ) => {

  try {
    const { data } = await axios.get('http://api.weatherstack.com/current', {
      params: {
        access_key: process.env.REACT_APP_WEATHERSTACK_API_KEY,
        query: `${lat},${lng}`,
      },
    });
    if (!data) {
      throw new Error('No data received from API');
    }
    return data;
  } catch (error) {
    const statusCode = error.response?.status;
    if (statusCode === 401) {
      console.error("Unauthorized: Invalid API key");
    } else if (statusCode === 429) {
      console.error("Too many requests: Rate limit exceeded");
    } else {
      console.error("Error fetching weather data:", error.message);
    }
    throw error;
  }
}
  // try {
  //   const { data } = await axios.get('http://api.weatherstack.com/current', {
  //     params: {
  //       access_key: process.env.REACT_APP_WEATHERSTACK_API_KEY, 
  //       query: `${lat},${lng}`, 
  //     }
  //   });
  //   return data;
  // } catch (error) {
  //   console.error("Error fetching weather data:", error);
  //   throw error;
  // }

