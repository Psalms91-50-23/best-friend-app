import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch  } from 'react-redux';
import { CircularProgress } from '@material-ui/core';
import PlaceDetails from '../PlaceDetails/PlaceDetails';
import { setType } from '../../actions/inputActions';
import { setFilteredPlaces, setPlaces } from '../../actions/placesActions';
import "./List.css"
//const List = ({ places, childClicked, isLoading }) => {
const List = ({ childClicked, isLoading }) => {

  const dispatch = useDispatch()
  // const listPlaceRefs = useRef(new Array())
  const { places, filteredPlaces } = useSelector(state => state.placesState) 
  // console.log({filteredPlaces});
  const { searchType, rating } = useSelector(state => state.inputState)
  // const [ _places, _setPlaces ] = useState([])
  // const [ _filteredPlaces, _setFilteredPlaces ] = useState([])
  const [ _type, _setType ] = useState(searchType)
  const [ _rating, _setRating ] = useState(rating)
  var placeRefs = useRef([])
  
  useEffect(() => {
    // console.log("rating in use effect ", _rating);
    if(_rating > 0){
      const filteredPlaces = places.filter(place => Number(place.rating) >= _rating )
      // console.log("filter places in list if ", filteredPlaces)
      // dispatch(setPlaces([]))
      dispatch(setFilteredPlaces(filteredPlaces))
      Array(filteredPlaces.length).fill().map((_, i) => {
        //create refs for map cards to scroll to side bar cards
        placeRefs.current.push(i)
        return null
      })
    }
    else{
      // console.log("filter places in list else ", places)
      dispatch(setFilteredPlaces([]))
      dispatch(setPlaces(places))
      Array(places.length).fill().map((_, i) => {
        //create refs for map cards to scroll to side bar cards
        placeRefs.current.push(i)
        return null
      })
    }
  },[_rating, places])

  useEffect(() => {
    dispatch(setType(_type))
  },[_type])

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
                value={_type}
                name="type"
                onChange={ e => _setType(e.target.value)}
              >
                <option value="restaurants">Restaurants</option>
                <option value="hotels">Hotels</option>
                <option value="attractions">Attractions</option>
              </select>
            </form>
            <form className="list_ratings">
              <label htmlFor="rating">Rating</label>
              <select
                value={Number(_rating)}
                name="rating"
                onChange={ e => _setRating(Number(e.target.value))}
              >
                <option value={0}>All</option>
                <option value={3}>Above 3.0</option>
                <option value={4}>Above 4.0</option>
                <option value={4.5}>Above 4.5</option>
              </select>
            </form>
          </div>
          <div className="list_place_container">
            { filteredPlaces?.length ? 
            filteredPlaces?.map((place,i) => {

                 return (
                 <PlaceDetails 
                    key={i} 
                    place={place} 
                    selected={Number(childClicked) === i}
                    refProp={placeRefs[i]}
                  />
                 )
            })
            :
              places?.map( (place ,i ) => {
                return (
                  <PlaceDetails 
                    key={i} 
                    place={place} 
                    selected={Number(childClicked) === i}
                    refProp={placeRefs[i]}
                  />
                  )
              })
            }
          </div>
        </> 
      )
    }
  </div>
  )
}

export default List
