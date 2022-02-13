// import { TYPE, RATING, GEOLOCATION, FILTERED, PLACE_REFS } from "../actions/bestFriendActions"
import { GEOLOCATION, COORDINATES, BOUNDS } from "../actions/geolocationActions"

// const initialState = {
//     peoplesRating: "",
//     searchType: "",
//     geolocation: { lat: "", lng: "" },
//     filteredPlaces: null,
//     placeRefs: null
// }

// const geolocationReducer = ( state = initialState, action ) => {
//     switch(action.type){
//         case TYPE:
//             console.log({action})
//             return {...state, searchType: action.searchType}
//         case RATING:
//             console.log({action})
//             return {...state, peoplesRating: action.rating}
//         case GEOLOCATION:
//             console.log("geolocation action ", action.geolocation)
//             const { geolocation } = action
//             return {...state, geolocation}
//         // case FILTERED:
//         //     return {...state, filteredPlaces: action.filter}
//         case PLACE_REFS:
//             const { placeRefs } = action
//             return {...state, placeRefs}

//         default:
//             return state
//     }
// }

const initialState = {
    bounds: null,
    coordinates: {},
    geolocation: null
}

const geolocationReducer = ( state = initialState, action ) => {
    switch(action.type){
        case GEOLOCATION:
            const { geolocation } = action
            return { ...state, geolocation }
        case BOUNDS:
            const { bounds } = action
            return { ...state, bounds }
        case COORDINATES:
            const { coordinates } = action
            return { ...state, coordinates }
        default:
            return state
    }
}

export default geolocationReducer