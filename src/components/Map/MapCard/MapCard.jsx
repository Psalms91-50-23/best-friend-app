import React, { useEffect, useState } from 'react';
import "./MapCard.css"
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import { useMediaQuery } from '@material-ui/core';
import Rating from "@material-ui/lab/Rating";
const MapCard = ({ place }) => {

  const matches = useMediaQuery('(min-width: 600px)')

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
                <img 
                  className="img"  
                  // if no photo give it a default image
                  src={place.photo ? place.photo.images.large.url : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"} 
                  alt={place.name} 
                />
                <Rating size="small" value={Number(place.rating)} readOnly/>
              </div>
            )
          }
        </div>
    </div>
  )
};

export default MapCard;
