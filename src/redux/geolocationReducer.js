import { TYPE, RATING, GEOLOCATION, FILTERED } from "../actions/bestFriendActions"


const initialState = {
    peoplesRating: "",
    searchType: "",
    geolocation: { lat: "", lng: "" },
    filteredPlaces: null  
}

const geolocationReducer = ( state = initialState, action ) => {
    switch(action.type){
        case TYPE:
            console.log({action})
            return {...state, searchType: action.searchType}
        case RATING:
            console.log({action})
            return {...state, peoplesRating: action.rating}
        case GEOLOCATION:
            console.log("geolocation action ", action.geolocation)
            const { longitude, latitude } = action.geolocation.coords
            return {...state, geolocation: { lat: latitude, lng: longitude} }
        // case FILTERED:
        //     return {...state, filteredPlaces: action.filter}
        default:
            return state
    }
}

export default geolocationReducer