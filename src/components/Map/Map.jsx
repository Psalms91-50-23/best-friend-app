import React from 'react';
import GoogleMapReact from "google-map-react";
import { setBounds, setCoordinates } from '../../actions/geolocationActions';
import mapStyles from './mapStyles';
import MapCard from './MapCard/MapCard';
import WeatherCard from './WeatherCard/WeatherCard';
import { useDispatch, useSelector } from 'react-redux';
import "./Map.css"

const Map = ({ setChildClicked }) => {

  const { coordinates } = useSelector( state => state.geolocationState )
  const { places, filteredPlaces } = useSelector( state => state.placesState )
  const { weatherData } = useSelector( state => state.weatherState )
  const dispatch = useDispatch()

  return (
  
  <div className="map">
    <GoogleMapReact 
      bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY}}
      // defaultCenter={coordinates} 
      //dont use default as it warns you that you cannot change it
      center={{lat: coordinates?.lat, lng: coordinates?.lng}}
      defaultZoom={14}
      margin={[ 50, 50, 50, 50 ]}
      options={{ disableDefaultUI: true, zoomControl: true, styles: mapStyles }}
      onChange={ e => {
        //want top right (ne) and bottom left (sw) of map bounds
        dispatch(setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw }))
        dispatch(setCoordinates({ lat: e.center.lat, lng: e.center.lng }))
      }
      }
      onChildClick={(child) => {
        setChildClicked(child)}}
    >
    {filteredPlaces?.length ? 
      (
        filteredPlaces?.map((place, i) => (
        <MapCard 
          key={i} 
          place={place} 
          lat={Number(place.latitude)} 
          lng={Number(place.longitude)}
        />
         )
      ))
      :
      (
        places?.map((place, i) => (
        <MapCard 
          key={i} 
          place={place} 
          lat={Number(place.latitude)} 
          lng={Number(place.longitude)}
        />)
      ))
    }
    {weatherData.location && ( 
      <WeatherCard 
        key={weatherData.location.lon} 
        data={weatherData.current} 
        lng={weatherData.location.lon} 
        lat={weatherData.location.lat}
      />
      )
    }
    </GoogleMapReact>
  </div>
  )
}

export default Map
