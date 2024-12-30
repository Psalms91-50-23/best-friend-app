import { COORDINATES, BOUNDS, USER_COORDINATE } from "../actions/geolocationActions"

const initialState = {
    bounds: null,
    coordinates: {},
    geolocation: null,
    user_coordinate: null
}

const geolocationReducer = ( state = initialState, action ) => {
    switch(action.type){
        case BOUNDS:
            const { bounds } = action;
            return { ...state, bounds };
        case COORDINATES:
            const { coordinates } = action;
            return { ...state, coordinates };
        case USER_COORDINATE: 
            const { user_coordinate } = action;
            return { ...state, user_coordinate };
        default:
            return state;
    }
}

export default geolocationReducer