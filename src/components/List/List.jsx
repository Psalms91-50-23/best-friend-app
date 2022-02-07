import React, { useState } from 'react';
import { CircularProgress } from '@material-ui/core';
import "./List.css"
import PlaceDetails from '../PlaceDetails/PlaceDetails';


const List = ({ places }) => {

  const [ type, setType ] = useState("restaurants")
  const [ rating, setRating ] = useState("")
  // console.log("places in list ", places);

  return (
  <div className='list'>
    <div className="list_title">
      <h4>Restaurants, Hotels & Attractions around you</h4>
    </div>
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
        return (
        // <div key={i} className="place_container">
          <PlaceDetails key={i} place={place}/>
        // </div>
        )
      })}
    </div>
  </div>
  );
};

export default List;
