import React, { useState, useEffect } from 'react'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import { useSelector, useDispatch  } from 'react-redux';
import "./UserLocation.css"

const UserLocation = () => {

    // const dispatch = useDispatch()
    const { geolocation } = useSelector( state => state.bestFriendApp )
    const [ useGeolocation, setUserGeoLocation ] = useState({ lat: "", lng: "" })

    useEffect(() => {
        if(geolocation) setUserGeoLocation({ lat: geolocation.lat, lng: geolocation.lng })

    },[geolocation])

  return (
      <div className="geolocation_container">
        <div className="i_am_here" lat={useGeolocation.lat} lng={useGeolocation.lng} >
            <h4>You are Here!</h4>
        <LocationOnOutlinedIcon color="primary" fontSize="large" />
    </div>
      </div>
  )
}

export default UserLocation