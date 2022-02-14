import React, {  useRef } from 'react';
import PhoneIcon  from "@material-ui/icons/Phone"
import Rating from "@material-ui/lab/Rating"
import "./PlaceDetails.css"

const PlaceDetails = ({ place, selected, refProp }) => {
  //create internal ref state for each 
  const placeDetailRef = useRef(refProp) 
  var cuisineType = ""
  if(selected && placeDetailRef?.current){
    //below code is what it used to scroll into view the 
    //placeDetail cards
    placeDetailRef?.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  }
  
  return (
  <div className="place_container"  ref={placeDetailRef}>
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
      <div className="general_cardLayout" >
          <Rating 
            className="rating" 
            size="small" 
            value={Number(place.rating)} 
            readOnly
          />
          <p>out of {place.num_reviews} review</p>
        </div>
      {place.address ?
        <h6>Address: {place.address}</h6>
        :
        <span className="span">Address is not available</span>
      }
      {place.distance ? (
        <div className="general_cardLayout">
          <h6>Distance from your location:</h6>
          <span className="span">{Number(place.distance).toFixed(2)} km</span>
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
            else return null
             
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
          <button className="place_buttonLink2" onClick={() => window.open(place.website, "_blank")}>
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
