import React, { useEffect, useState } from 'react';
// import { CssBaseLine, Grid } from "@material-ui/core"
import { getPlacesData } from './api';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';
// import PlaceDetails from './components/PlaceDetails/PlaceDetails';
import "./App.css"

const App = () => {

  const [ places, setPlaces ] = useState([])
  const [ bounds, setBounds ] = useState(null)
  const [ coordinates, setCoordinates ] = useState({})
  const [ childClicked, setChildClicked ] = useState(null);

  useEffect(() => {
    //built in browser geolocation api
    navigator.geolocation.getCurrentPosition( coordinates => {
      // console.log("coordindates ", coordinates);
      // const { coords } = coordinates
      const { latitude, longitude } = coordinates.coords
      // setCoordinates({ lat: latitude, lng: longitude })
      //below is wellington
      setCoordinates({ lat: -41.276825, lng: 174.777969 })
      
    })
  },[])

  useEffect(() => {

    // console.log("bounds ", bounds);
    if(bounds){
      const { ne, sw } = bounds
      getPlacesData(ne, sw)
      .then((data) => {
        // console.log("data in app.jsx ", data);
        setPlaces(data)
      })
    }

  },[bounds])

  useEffect(() => {

    setCoordinates(coordinates)
    // console.log("coordinates: ",coordinates);
  },[coordinates])

// console.log("places ", places);
  return (
    <div className='App'>
      <Header />
      <div className="home_container">
          <div className="list_container">
            <List places={places}/>
          </div>
          <div className="map_container">
            <Map 
              setChildClicked={setChildClicked}
              setBounds={setBounds} 
              coordinates={coordinates}
              setCoordinates={setCoordinates}
              places={places}
            />
          </div>
      </div>
    </div>
    )
};

export default App;
