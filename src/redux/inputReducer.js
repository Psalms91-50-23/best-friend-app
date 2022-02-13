import { TYPE, RATING } from "../actions/inputActions"

const initialState = {
    searchType: "restaurants",
    rating: 0
}

const inputReducer =  ( state = initialState, action) => {
    switch(action.type){
        case TYPE:
            return {...state, searchType: action.searchType}
        case RATING:
            return {...state, rating: action.rating}
        default:
            return state
    }
}

export default inputReducer