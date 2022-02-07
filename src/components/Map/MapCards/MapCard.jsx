import React, { useEffect, useState } from 'react';
import "./MapCard.css"
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import { useMediaQuery } from '@material-ui/core';

const MapCard = ({ place, lat, lng }) => {

    const matches = useMediaQuery('(min-width: 600px)')
    // console.log("lat type of ", typeof place.latitude)
    const [ coords, setCoords ] = useState({
      lat,
      lng
    })

    useEffect(() => {

      if(coords.latitude){
        console.log("changes in lat ", coords.latitude);
        setCoords({lat: coords.latitude, lng: coords.longitude})
      }

    },[coords])

    // const { lat, lng } = coords
  return (
    <div className='mapCard_container'>
      <div className="marker_container">
          { 
            !matches ? 
            (
              <LocationOnOutlinedIcon color="primary" fontSize="large"/>
            )
            :
            (
              <div className="desktop">
                {place.name ? ( 
                  <span>{place.name}</span>
                )
                : 
                <span>Place name not given</span>
                }
                <img className="img"  src={place.photo ? place.photo.images.large.url : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"} alt={place.name} />
              </div>
            )
          }
        </div>
    </div>
  )
};

export default MapCard;
