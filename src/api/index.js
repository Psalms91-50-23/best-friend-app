import axios from "axios"
// Cookies.set('http://localhost:3000', 'true')
// axios.defaults.withCredentials = true
// const URL = "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary"

export const getPlacesData = async ( type, ne, sw ) => {

  console.log({type})
    try {
        // const response = await axios.get(URL, options)
        // console.log("respose in index ",response);
        const { data: { data  }} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
          params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
            // limit: '30',
          },
          headers: {
            'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
            'x-rapidapi-key': process.env.REACT_APP_RAPID_TRAVEL_API_KEY
            // 'Set-Cookie': Cookies
            // withCredentials: true
          }
        
        });
        
        return data;
    }catch(error) {
        console.log(error);
    }

}