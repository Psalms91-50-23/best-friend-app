import React, { useState, useEffect } from 'react';
import GoogleMapReact from "google-map-react";
// import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
// import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from "@material-ui/lab";
// import { useMediaQuery } from '@material-ui/core';
// import useMediaQuery from '@mui/material/useMediaQuery';
import { setBounds, setCoordinates } from '../../actions/geolocationActions';
import mapStyles from './mapStyles';
import MapCard from './MapCard/MapCard';
import { useDispatch, useSelector } from 'react-redux';
import "./Map.css"

const Map = ({ setChildClicked }) => {

  const { bounds, coordinates } = useSelector( state => state.geolocationState )
  const { places, filteredPlaces } = useSelector( state => state.placesState )
  const { rating } = useSelector( state => state.inputState )
  const { weather } = useSelector( state => state.weatherState )
  const dispatch = useDispatch()
  const [ _places, _setPlaces ] = useState([])
  const [ _filteredPlaces, _setFilteredPlaces ] = useState([])
  // const [ _bounds, _setBounds ] = useState(bounds)
  const [ _coordinates, _setCoordinates ] = useState(coordinates)
 
  return (
  
  <div className="map">
    <GoogleMapReact 
      bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY}}
      // defaultCenter={coordinates}
      center={{lat: coordinates?.lat, lng: coordinates?.lng}}
      defaultZoom={14}
      margin={[ 50, 50, 50, 50 ]}
      options={{ disableDefaultUI: true, zoomControl: true, styles: mapStyles }}
      onChange={ e => {
        // console.log("e ",e);
        //want top right (ne) and bottom left (sw) of map bounds
        dispatch(setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw }))
        dispatch(setCoordinates({ lat: e.center.lat, lng: e.center.lng }))
      }
      }
      onChildClick={(child) => setChildClicked(child)}
      // onChildClick={(child) => setChildClicked(child)}
    >
    {filteredPlaces?.length ? 
      (
        filteredPlaces?.map((place, i) => <MapCard 
        key={i} 
        place={place} 
        lat={Number(place.latitude)} 
        lng={Number(place.longitude)}
      />
      ))
      :
      (
        places?.map((place, i) => <MapCard 
        key={i} 
        place={place} 
        lat={Number(place.latitude)} 
        lng={Number(place.longitude)}
      />
      ))
    } 
    </GoogleMapReact>
  </div>
  )
}

export default Map
