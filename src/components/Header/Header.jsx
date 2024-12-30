import React, { useState, useEffect } from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { useDispatch, useSelector } from 'react-redux';
import { setCoordinates } from '../../actions/geolocationActions';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import "./Header.css"
import SearchIcon  from '@material-ui/icons/Search';
import ResponsiveIcon from '../ResponsiveIcon/ResponsiveIcon';

const Header = () => {

  const [ autoComplete, setAutoComplete ] = useState(null)
  const [userLocation, setUserLocation] = useState(null)
  const { user_coordinate} = useSelector(state => state.geolocationState)
  const dispatch = useDispatch()
  
  useEffect(() => {
    let initially = false;
    if(user_coordinate && !initially){
      setUserLocation(user_coordinate);
      initially = true;
    }
  }, [user_coordinate, setUserLocation])
  
  const onLoad = (autoC) => {
    setAutoComplete(autoC)
  }

  const onPlaceChanged = () => {
    const lat = autoComplete.getPlace().geometry.location.lat()
    const lng = autoComplete.getPlace().geometry.location.lng()
    dispatch(setCoordinates({ lat, lng }))
  }

  const setUserCoordinate = (userCoordinate) => {
    dispatch(setCoordinates(userCoordinate));
  };

  return (
      <div className="header_container">
        <div className="header_content">
           <h3>BestFriend App</h3>
          <div className="header_input">
            <div className="explore_title">
              <h5>Explore new places</h5>
            </div>
            <div className="user_location" onClick={() => setUserCoordinate(userLocation)}>
              <h5 className='user_gps'>User GPS</h5>
              <ResponsiveIcon />
              {/* <LocationOnOutlinedIcon className='icon-color'/> */}
            </div>
            <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged} >
              <div className="search_content">
                <SearchIcon className='searchIcon' fontSize="medium"/>
                <input type="text" placeholder='Search by Location...'/>
              </div>
            </Autocomplete>
          </div>
        </div>
      </div>
  )
};

export default Header;
 