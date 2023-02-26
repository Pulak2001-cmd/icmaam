import React from 'react'
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

function Map({Lat, Lng, Name}) {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyAiOEixVl4_Xip7RnI-ZmDLT3cXgv3xoYA"
      })
      const center = {
        lat: Lat,
        lng: Lng,
      };
    
      const [map, setMap] = React.useState(null)
    
      const onLoad = React.useCallback(function callback(map) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
    
        setMap(map)
      }, [])
    
      const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
      }, [])
    
      return isLoaded ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
          >
            { /* Child components, such as markers, info windows, etc. */ }
            <>
            <Marker position={{lat: center.lat, lng: center.lng}} />
            <InfoWindow position={{lat: center.lat, lng: center.lng}}>
                <div>
                    <p className="fs-3">{Name}</p>
                </div>
            </InfoWindow>
            </>
          </GoogleMap>
      ) : <></>
}

export default Map