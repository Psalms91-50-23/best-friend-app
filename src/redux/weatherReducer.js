import { WEATHER } from "../actions/weatherActions"

const initialState = {
    weatherData: []
}

const weatherReducer = (state = initialState, action) => {
    switch(action.type){
        case WEATHER:
            return { ...state, weatherData: action.weatherData}
        default:
            return state
    }
}

export default weatherReducer