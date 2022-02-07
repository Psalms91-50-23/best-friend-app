import React, { useState } from 'react';
import LocationOnIcon  from "@material-ui/icons/LocationOn"
import PhoneIcon  from "@material-ui/icons/Phone"
import Rating from "@material-ui/lab/Rating"
import "./PlaceDetails.css"

const PlaceDetails = ({ place }) => {
  // console.log("place ", place);
  const { distance, name, distance_string, website, address } = place
  const [ cuisine, setCuisine ] = useState([])
  const numberDistance = Number(distance).toFixed(2)
  var cuisineType = ""
  return (
  <div className="place_container">
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
      {place.address ?
        <h6>Address: {address}</h6>
        :
        <span>Address is not available</span>
      }
      {place.distance ? (
        <div className="general_cardLayout">
          <h6>Distance from your location:</h6>
          <span>{numberDistance} km</span>
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
                <span>{cuisineType}</span>
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
          <span>{award.display_name}</span>
        </div>)
      })
      }
      {place?.price && (
        <div className="general_cardLayout">
          <h6>Price range:</h6>
          <span>{place.price}</span>
        </div>
        )
      }
      {place?.phone && 
        (
          <div className="general_cardLayout">
            <span>
              <PhoneIcon fontSize='small'/>
            </span>
            <span>{place.phone}</span>
          </div>
        
        )
      }
      {place?.ranking && (
        <div className="general_cardLayout">
          <h6>Ranking</h6>
          <span>{place.ranking}</span>
        </div>
      )

      }
       <div className="place_links">
         {/* window.open(place.weburl, "_blank") will open a new tab */}
         {place?.web_url && (
          <button  className="place_buttonLink" onClick={() => window.open(place.web_url, "_blank")}>
            <span>Trip Advisor</span>
          </button>
          )
         }
         {place?.website && (
          <button className="place_buttonLink" onClick={() => window.open(place.website, "_blank")}>
            <span>{place.name}</span>
          </button>
          )
         }
      </div>
    </div>   
  </div>
  );
};

export default PlaceDetails;
