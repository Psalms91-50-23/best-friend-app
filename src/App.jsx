import React, { useEffect, useState } from 'react';
import { getPlacesData, getWeatherData } from './api';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';
import { useSelector, useDispatch  } from 'react-redux';
import { setFilteredPlaces, setPlaces, emptyPlaces, emptyAllPlaces } from './actions/placesActions';
import { setCoordinates } from './actions/geolocationActions';
import { setWeather } from './actions/weatherActions';
// import PlaceDetails from './components/PlaceDetails/PlaceDetails';
import "./App.css"

const App = () => {

  const dispatch = useDispatch()
  const { rating, searchType } = useSelector(state => state.inputState)
  const { places, filteredPlaces } = useSelector(state => state.placesState)
  const { bounds, coordinates } = useSelector(state => state.geolocationState)
  const [ _places, _setPlaces ] = useState(places)
  const [ _filteredPlaces, _setFilteredPlaces ] = useState(filteredPlaces)
  const [ _bounds, _setBounds ] = useState(bounds)
  const [ _coordinates, _setCoordinates ] = useState(coordinates)
  const [ childClicked, setChildClicked ] = useState(null)
  const [ isLoading, setIsLoading ] = useState(false)
  const [ _rating, _setRating ] = useState(rating)

  useEffect(() => {
    //built in browser geolocation api
    const options = {
      enableHighAccuracy: true,
    }

    const successCallBack = (coordinates) => {
      // console.log({coordinates})
      //below code is wellington geoLocation
      // const geo = { lat: -41.276825, lng : 174.777969}
      const { latitude, longitude } = coordinates.coords
      const coords = { lat: latitude, lng: longitude }
      // _setCoordinates(coords)
      dispatch(setCoordinates(coords))
    }
  
    const errorCallback = (error) => {
  
     switch(error.code) {
      case error.PERMISSION_DENIED:
          alert("User denied the request for Geolocation. You can turn it off with the lock icon/information icon next(left-side) to the URL")
          break;
      case error.POSITION_UNAVAILABLE:
          alert( "Location information is unavailable.")
          break;
      case error.TIMEOUT:
          alert("The request to get user location timed out.")
          break;
      case error.UNKNOWN_ERROR:
          alert("An unknown error occurred.")
          break;
      default:
          alert("error code: ",error.code)
      }
    }

      if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition( successCallBack, errorCallback, options )
      }else{
        alert("Geolocation is not supported by this browser. Need geolocation for application purposes")
      }
    
  },[dispatch])

  useEffect(() => {
    setIsLoading(true)
    // dispatch(emptyAllPlaces())
    if(bounds?.sw && bounds?.ne) {
      // _setBounds(bounds)
      // getWeatherData(coordinates.lng, coordinates.lat)
      // .then((data) => {
      //   dispatch(setWeather(data))
      // })

      getPlacesData( searchType, bounds.ne, bounds.sw )
      .then((data) => {
        // console.log("data in app ", data)
        const coordPlaces = data.filter( place => place.latitude )
        // console.log("coordPlaces in app ",coordPlaces)
        dispatch(setPlaces(coordPlaces))
        // _setPlaces(coordPlaces)
        setIsLoading(false)
      })
    }
      
  },[bounds, searchType, dispatch])

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
