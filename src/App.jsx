import React, { useEffect, useState } from 'react';
import { getPlacesData } from './api';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';
import { useSelector, useDispatch  } from 'react-redux';
import { set_Geolocation } from './actions/bestFriendActions';
// import PlaceDetails from './components/PlaceDetails/PlaceDetails';
import "./App.css"

const App = () => {

  const dispatch = useDispatch()
  const { peoplesRating, searchType } = useSelector(state => state.bestFriendApp)
  const [ places, setPlaces ] = useState([])
  const [ filteredPlaces, setFilteredPlaces ] = useState([])
  const [ bounds, setBounds ] = useState(null)
  const [ coordinates, setCoordinates ] = useState({})
  const [ childClicked, setChildClicked ] = useState(null)
  const [ isLoading, setIsLoading ] = useState(false)

  useEffect(() => {
    //built in browser geolocation api
    const options = {
      enableHighAccuracy: true,
      timeout: 7000,
    }

    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition( successCallBack, errorCallback, options )
    }else{
      alert("Geolocation is not supported by this browser. Need geolocation for application purposes")
    }
  },[])

  useEffect(() => {

    const filteredPlaces = places?.filter( place => place.rating > peoplesRating )
    setFilteredPlaces(filteredPlaces)

  },[peoplesRating])

  useEffect(() => {
    // console.log("bounds ", bounds);
    setIsLoading(true)
    // console.log("search type ", searchType)
    if(bounds){
      const { ne, sw } = bounds
      getPlacesData( searchType, ne, sw)
      .then((data) => {
        console.log({data})
        const coordPlaces = data.filter( place => {
          if(place?.latitude){
            return place
          }
        })
        setPlaces(coordPlaces)
        setIsLoading(false)
      })
    }
  },[bounds, coordinates, searchType])

  const successCallBack = (coordinates) => {
    // console.log({coordinates})
    //below code is wellington geoLocation
    // const geo = { lat: -41.276825, lng : 174.777969}
    const { latitude, longitude } = coordinates.coords
    setCoordinates({ lat: latitude, lng: longitude })
    dispatch(set_Geolocation(coordinates))
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

  return (
    <div className='App'>
      <Header />
      <div className="home_container">
          <div className="list_container">
            <List 
              places={ filteredPlaces.length? filteredPlaces : places }
              childClicked={childClicked}
              isLoading={isLoading}
            />
          </div>
          <div className="map_container">
            <Map 
              setChildClicked={setChildClicked}
              setBounds={setBounds} 
              coordinates={coordinates}
              setCoordinates={setCoordinates}
              places={ filteredPlaces.length? filteredPlaces : places }
            />
          </div>
      </div>
    </div>
    )
};

export default App;
