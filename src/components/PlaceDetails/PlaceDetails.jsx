import React, { useState, useRef } from 'react';
import LocationOnIcon  from "@material-ui/icons/LocationOn"
import PhoneIcon  from "@material-ui/icons/Phone"
import Rating from "@material-ui/lab/Rating"
import "./PlaceDetails.css"

const PlaceDetails = ({ place, selected, refProp, i, ref }) => {
  // console.log("place ", place);
  const { distance, name, distance_string, website, address } = place
  const numberDistance = Number(distance).toFixed(2)
  const placeDetailRef = useRef(refProp) //create internal ref state for each placeDetails component
  // console.log("refProp ",refProp[i]);
  // console.log("refProp ",refProp);
  
  var cuisineType = ""
  // if(refProp){
  //   // console.log("refprop inside place details ", refProp);
  // }
  if(selected && placeDetailRef?.current){
    console.log({selected})
    // console.log({refProp});
    placeDetailRef?.current?.scrollIntoView({behavior: "smooth", block: "start"})
    console.log({placeDetailRef});
  }
  console.log({placeDetailRef});
  
  return (
  <div className="place_container" >
    <div className="place_details">
      {place.photo ?
        <img className="img_size" src={place.photo.images.large.url} alt={place.name} />
        :
        <h6>No image provided</h6>
      }
      {place.name ? 
        <h5>{place.name}</h5>
        :
        <h6>Place name not registered</h6>
      }
      <div className="general_cardLayout" ref={placeDetailRef}>
          <Rating className="rating" size="small" value={Number(place.rating)} readOnly/>
          <p>out of {place.num_reviews} review</p>
        </div>
      {place.address ?
        <h6>Address: {address}</h6>
        :
        <span className="span">Address is not available</span>
      }
      {place.distance ? (
        <div className="general_cardLayout">
          <h6>Distance from your location:</h6>
          <span className="span">{numberDistance} km</span>
        </div>
      )
        :
        <span>Distance not available</span>
      }
      {place.cuisine? (
        place.cuisine.map((foodType, index) => {

            if(index < place.cuisine.length-1){
              cuisineType += foodType.name+", "
            }else{
              cuisineType += foodType.name
            }
            
            if(index === place.cuisine.length-1){
              return (
                <div className="general_cardLayout" key={index}>
                  <h6>Cuisine Type:</h6>
                  <span className="span">{cuisineType}</span>
                </div>
              )
            } 
          })
        )
        :
        <span>Cuisine type not given</span>
      }
      {place?.awards?.map((award,index) => {
         return (
         <div className="general_cardLayout" key={index}>
          <img className="award_img" src={award.images.small} alt={award.display_name} />
          <span className="span">{award.display_name}</span>
        </div>)
      })
      }
      {place?.price && (
        <div className="general_cardLayout">
          <h6>Price range:</h6>
          <span className="span">{place.price}</span>
        </div>
        )
      }
      {place?.phone && 
        (
          <div className="general_cardLayout">
            <span className="span">
              <PhoneIcon fontSize='small'/>
            </span>
            <span className="span">{place.phone}</span>
          </div>
        
        )
      }
      {place?.ranking && (
        <div className="general_cardLayout">
          <h6>Ranking</h6>
          <span className="span">{place.ranking}</span>
        </div>
      )

      }
       <div className="place_links">
         {/* window.open(place.weburl, "_blank") will open a new tab */}
         {place?.web_url && (
          <button  className="place_buttonLink" onClick={() => window.open(place.web_url, "_blank")}>
            <span className="span">Trip Advisor</span>
          </button>
          )
         }
         {place?.website && (
          <button className="place_buttonLink" onClick={() => window.open(place.website, "_blank")}>
            <span className="span">{place.name}</span>
          </button>
          )
         }
      </div>
    </div>   
  </div>
  );
};

export default PlaceDetails;
