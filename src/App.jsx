import React, { useEffect, useState } from 'react';
import { getPlacesData, getWeatherData } from './api';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';
import { useSelector, useDispatch  } from 'react-redux';
import {  setPlaces } from './actions/placesActions';
import { setCoordinates, setUserCoordinate } from './actions/geolocationActions';
import { setWeatherData } from './actions/weatherActions';
import "./App.css"

const App = () => {

  const dispatch = useDispatch()
  const {  searchType } = useSelector(state => state.inputState)
  const { bounds, coordinates } = useSelector(state => state.geolocationState)
  const [ childClicked, setChildClicked ] = useState(null)
  const [ isLoading, setIsLoading ] = useState(false)

  useEffect(() => {
    const options = {
      enableHighAccuracy: true,
    }

    const successCallBack = (coordinates) => {
      //below code is wellington geoLocation
      // const geo = { lat: -41.276825, lng : 174.777969}
      const { latitude, longitude } = coordinates.coords
      const coords = { lat: latitude, lng: longitude }
      dispatch(setCoordinates(coords))
      dispatch(setUserCoordinate(coords))
    }
  
    const errorCallback = (error) => {
  
     switch(error.code) {
      case error.PERMISSION_DENIED:
          alert("User denied the request for Geolocation. You can turn it on with the lock icon/information icon next(left-side) to the URL, need location for app to work!")
          break;
      case error.POSITION_UNAVAILABLE:
          alert( "Location information is unavailable.")
          break;
      case error.TIMEOUT:
          alert("The request to get user location timed out, please refresh webpage")
          break;
      case error.UNKNOWN_ERROR:
          alert("An unknown error occurred.")
          break;
      default:
          alert("error code: ",error.code)
      }
    }
    //built in browser geolocation api
      if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition( successCallBack, errorCallback, options )
      }else{
        alert("Geolocation is not supported by this browser. Need geolocation for application purposes")
      }
    
  },[dispatch])

useEffect(() => {
  if (!bounds?.sw || !bounds?.ne) return; // guard clause

  // set loading to true right before triggering the API (not instantly)
  const delayDebounce = setTimeout(() => {
    setIsLoading(true);

    const weatherPromise = getWeatherData(coordinates.lng, coordinates.lat)
      .then((data) => {
        if (!data) return;
        dispatch(setWeatherData(data));
      })
      .catch((err) => console.error("Weather API error:", err));

    const placesPromise = getPlacesData(searchType, bounds.ne, bounds.sw)
      .then((data) => {
        if (!data) return;
        const coordPlaces = data.filter((place) => place.latitude);
        dispatch(setPlaces(coordPlaces));
      })
      .catch((err) => console.error("Places API error:", err));

    Promise.allSettled([weatherPromise, placesPromise])
      .finally(() => setIsLoading(false));
  }, 1500); // 👈 wait 1.5 seconds after user stops moving the map

  // cleanup function: cancels previous timer if dependencies change quickly
  return () => clearTimeout(delayDebounce);

}, [bounds, searchType, coordinates, dispatch]);

  return (
    <div className='App'>
      <Header />
      <div className="home_container">
          <div className="list_container">
            <List 
              childClicked={childClicked}
              isLoading={isLoading}
            />
          </div>
          <div className="map_container">
            <Map 
              setChildClicked={setChildClicked}
            />
          </div>
      </div>
    </div>
    )
};

export default App;
