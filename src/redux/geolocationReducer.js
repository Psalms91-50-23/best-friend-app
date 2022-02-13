import { COORDINATES, BOUNDS } from "../actions/geolocationActions"

const initialState = {
    bounds: null,
    coordinates: {},
    geolocation: null
}

const geolocationReducer = ( state = initialState, action ) => {
    switch(action.type){
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