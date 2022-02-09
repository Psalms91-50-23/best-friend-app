import React, { useState, useEffect, createRef, useRef } from 'react';
import { CircularProgress } from '@material-ui/core';
import "./List.css"
import PlaceDetails from '../PlaceDetails/PlaceDetails';


const List = ({ places, childClicked, isLoading }) => {

  const [ type, setType ] = useState("restaurants")
  const [ rating, setRating ] = useState("")
  // const [ elementRef, setElementRef ] = useState([])
  var placeRef = useRef(new Array())
  // console.log("places in list ", places);
  console.log("childclicked ", childClicked); 
  useEffect(() => {
    Array(places?.length).fill().map((_,i) => placeRef.current.push(i))
  },[places])

  // console.log("ref length ", elementRef.length);
  // console.log({elementRef});

  return (
  <div className="list">
    <div className="list_title">
      <h4>Restaurants, Hotels & Attractions around you</h4>
    </div>
    {
      isLoading ? (
      <div className="loading">
          <CircularProgress size="5rem"/>
      </div>)
      :
      (
        <>
          <div className="list_forms">
            <form className="list_type">
              <label htmlFor="type">Type</label>
              <select
                value={type}
                name="type"
                onChange={ e => setType(e.target.value)}
              >
                <option value="restaurants">Restaurants</option>
                <option value="hotels">Hotels</option>
                <option value="attractions">Attractions</option>
              </select>
            </form>
            <form className="list_ratings">
              <label htmlFor="rating">Rating</label>
              <select
                value={rating}
                name="rating"
                onChange={ e => setRating(e.target.value)}
              >
                <option value={0}>All</option>
                <option value={3}>Above 3.0</option>
                <option value={4}>Above 4.0</option>
                <option value={4.5}>Above 4.5</option>
              </select>
            </form>
          </div>
          <div className="list_place_container">
            {places?.map((place,i) => {

              //if latitude exists, so will longitude, just checking for lat, as some do no have lat/lng
              //i didnt place card on map so the map for businesses
        
                if(i === placeRef.length-1){
                  console.log({placeRef});
                }
                 return (
                 <PlaceDetails 
                    key={i} 
                    place={place} 
                    selected={Number(childClicked) === i}
                    refProp={placeRef[i]}
                  />
                 )

            })}
          </div>
        </> 
      )
    }
  </div>
  );
};

export default List;
