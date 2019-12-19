import React, { useState, useEffect } from 'react';
import Autocomplete from 'react-google-autocomplete';
import _ from 'lodash';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps';

const BaseGoogleMap = _.flowRight(
  withScriptjs,
  withGoogleMap
)(props => {
  const { center, marker, onDragEnd, onPlaceSelected, place } = props;
  return (
    <div>
      <GoogleMap defaultZoom={8} defaultCenter={center}>
        {marker && <Marker position={marker} draggable onDragEnd={onDragEnd} />}
      </GoogleMap>
      <input value={place} />
      <Autocomplete
        style={{ width: '90%' }}
        onPlaceSelected={onPlaceSelected}
        types={['(regions)']}
        componentRestrictions={{ country: 'th' }}
      />
    </div>
  );
});

const defaultMapProps = {
  googleMapURL: `https://maps.googleapis.com/maps/api/js?libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_API_KEY}`,
  loadingElement: <div style={{ height: `100%` }} />,
  containerElement: <div style={{ height: `400px` }} />,
  mapElement: <div style={{ height: `100%`, width: 800 }} />
};

const Map = props => {
  return (
    <div>
      <BaseGoogleMap {...defaultMapProps} {...props} />
    </div>
  );
};

export default props => {
  const [marker, setMarker] = useState();
  const [place, setPlace] = useState();
  const [center, setCenter] = useState({ lat: 13.7028021, lng: 100.4646249 });
  const handlePlaceChanged = place => {
    const { lat, lng } = place.geometry.location;
    const location = { lat: lat(), lng: lng() };
    setPlace(place.formatted_address);
    setMarker(location);
    setCenter(location);
  };
  const handleDragEnd = async e => {
    console.log(e.latLng);
    const resp = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${e.latLng.lat()},${e.latLng.lng()}&key=${
        process.env.REACT_APP_GOOGLE_API_KEY
      }`
    );
    const json = await resp.json();
    // setMarker(loc);
    if (json.results.length) setPlace(json.results[0].formatted_address);
  };
  return (
    <Map
      marker={marker || center}
      onDragEnd={handleDragEnd}
      center={center}
      place={place}
      onPlaceSelected={handlePlaceChanged}
    />
  );
};
