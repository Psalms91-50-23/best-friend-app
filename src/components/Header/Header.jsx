import React, { useState } from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { useDispatch } from 'react-redux';
import { setCoordinates } from '../../actions/geolocationActions';
import "./Header.css"
import SearchIcon  from '@material-ui/icons/Search';
import "./Header.css"

const Header = () => {

  const [ autoComplete, setAutoComplete ] = useState(null)
  const dispatch = useDispatch()

  const onLoad = (autoC) => {
    setAutoComplete(autoC)
  }

  const onPlaceChanged = () => {
    const lat = autoComplete.getPlace().geometry.location.lat()
    const lng = autoComplete.getPlace().geometry.location.lng()
    dispatch(setCoordinates({ lat, lng }))
  }
  
  return (
      <div className="header_container">
        <div className="header_content">
           <h3>BestFriend App</h3>
          <div className="header_input">
            <div className="explore_title">
              <h5>Explore new places</h5>
            </div>
            <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged} >
              <div className="search_content">
                <SearchIcon className='searchIcon' fontSize="small"/>
                <input type="text" placeholder='Search...'/>
              </div>
            </Autocomplete>
          </div>
        </div>
      </div>
  )
};

export default Header;
 