import React from 'react';
import GoogleMapReact from "google-map-react";
// import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from "@material-ui/lab";
// import { useMediaQuery } from '@material-ui/core';
// import useMediaQuery from '@mui/material/useMediaQuery';
import mapStyles from './mapStyles';
import "./Map.css"
import MapCard from './MapCards/MapCard';

const Map = ({ setCoordinates, setBounds, coordinates, places, setChildClicked }) => {
  // const matches = useMediaQuery('(min-width: 600px)')

  return (
  
  <div className="map">
    <GoogleMapReact 
      bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY}}
      // defaultCenter={coordinates}
      center={{lat: coordinates.lat, lng: coordinates.lng}}
      defaultZoom={14}
      margin={[ 50, 50, 50, 50 ]}
      // options={''}
      options={{ disableDefaultUI: true, zoomControl: true, styles: mapStyles }}
      onChange={ e => {
        // console.log("e ",e);
        //want top right (ne) and bottom left (sw) of map bounds
        setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw  })
        setCoordinates({ lat: e.center.lat, lng: e.center.lng })
      }
      }
      onChildClick={(child) => setChildClicked(child)}
    >
      { places.length && places.map((place, i) => {
      // console.log(`lat: ${place.latitude} lng: ${place.longitude}`);
      // const latitude = Number(place.latitude)
      // const longitude = Number(place.longitude)
      if(place?.latitude && place?.longitude){
        return (
          <MapCard key={i} place={place} lat={Number(place.latitude)} lng={Number(place.longitude)}/>
        )
      }

     
        // <div 
        //   // style={style}
        //   className={classes.markerContainer}
        //   // $hover={+false}
        //   lat={Number(place.latitude)}
        //   lng={Number(place.longitude)}
        //   key={i}
        // >
        //   { 
            /*!matches ?*/ 
        //     (
        //       <LocationOnOutlinedIcon color="primary" fontSize="large"/>
        //     )
        //     :
        //     (
        //       <div className={classes.paper}>
        //         {place.name ? ( 
        //           <span>{place.name}</span>
        //         )
        //         : 
        //         <span>Place name not given</span>
        //         }
        //         <img className={classes.pointer}  src={place.photo ? place.photo.images.large.url : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"} alt={place.name} />
        //       </div>
        //     )
        //   }
        // </div>
      
      // if(place.latitude){
        
      //   // console.log("lat ", typeof place.latitude);
        
      // }
    })
    }
    </GoogleMapReact>
  </div>
  );
};

export default Map;
