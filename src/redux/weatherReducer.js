import { WEATHER } from "../actions/weatherActions"

const initialState = {
    weather: []
}

const weatherReducer = (state = initialState, action) => {
    switch(action.type){
        case WEATHER:
            return { ...state, weather: action.weather}
        default:
            return state
    }
}

export default weatherReducer