import React, { useState } from 'react';
import GoogleMapReact from "google-map-react";
// import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from "@material-ui/lab";
// import { useMediaQuery } from '@material-ui/core';
// import useMediaQuery from '@mui/material/useMediaQuery';
import mapStyles from './mapStyles';
import "./Map.css"
import MapCard from './MapCard/MapCard';
import UserLocation from './UserLocation/UserLocation';

const Map = ({ setCoordinates, setBounds, coordinates, places, setChildClicked }) => {
  // const matches = useMediaQuery('(min-width: 600px)')
  // const [ childClicked, setChildClick ] = useState(null)

  return (
  
  <div className="map">
    <GoogleMapReact 
      bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY}}
      // defaultCenter={coordinates}
      center={{lat: coordinates.lat, lng: coordinates.lng}}
      defaultZoom={14}
      margin={[ 50, 50, 50, 50 ]}
      options={{ disableDefaultUI: true, zoomControl: true, styles: mapStyles }}
      onChange={ e => {
        // console.log("e ",e);
        //want top right (ne) and bottom left (sw) of map bounds
        setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw })
        setCoordinates({ lat: e.center.lat, lng: e.center.lng })
      }
      }
      onChildClick={(child) => setChildClicked(child)}
      // onChildClick={(child) => setChildClicked(child)}
    >
      {/* <UserLocation /> */}
      { places.length && places.map((place, i) => {
    
      if(place?.latitude){
        // must be a react component it returns not plain html element, or you will get errors the code below
        return (
          <MapCard 
            key={i} 
            place={place} 
            lat={Number(place.latitude)} 
            lng={Number(place.longitude)}
          />
        )
      }

    })
    }
    </GoogleMapReact>
  </div>
  )
}

export default Map
