import { combineReducers } from "redux";
import geolocationReducer from "./geolocationReducer";
import placesReducer from "./placesReducer";
import inputReducer from "./inputReducer";
import weatherReducer from "./weatherReducer";

export default combineReducers({
    geolocationState: geolocationReducer,
    inputState: inputReducer,
    placesState: placesReducer,
    weatherState: weatherReducer
})