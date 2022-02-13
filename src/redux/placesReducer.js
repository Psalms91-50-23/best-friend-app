import { PLACES,FILTERED_PLACES, EMPTY_PLACES, EMPTY_ALL,RERENDER } from "../actions/placesActions"

const initialState = {
    places: [],
    filteredPlaces: [],
    reRender: false
}

const placesReducer =  ( state = initialState, action) => {
    switch(action.type){
        case PLACES:
            return {...state, places: action.places}
        case FILTERED_PLACES:
            return {...state, filteredPlaces: action.filteredPlaces}
        // case EMPTY_PLACES:
        //     return {...state, places:[] }
        case RERENDER:
            console.log("re render action ", action)
            return {...state, reRender: action.render }
        case EMPTY_ALL:
            return {...state, places: [], filteredPlaces: []}
        default:
            return state
    }
}

export default placesReducer