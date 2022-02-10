import { combineReducers } from "redux";
import geolocationReducer from "./geolocationReducer";

export default combineReducers({
  
    bestFriendApp: geolocationReducer,

})