import { PLACES,FILTERED_PLACES } from "../actions/placesActions"

const initialState = {
    places: [],
    filteredPlaces: []
}

const placesReducer =  ( state = initialState, action) => {
    switch(action.type){
        case PLACES:
            return {...state, places: action.places}
        case FILTERED_PLACES:
            return {...state, filteredPlaces: action.filteredPlaces}
        default:
            return state
    }
}

export default placesReducer