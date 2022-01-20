import { Marker, Popup, useMapEvents } from 'react-leaflet';
import { useState } from 'react';

import L from 'leaflet';

export function LocationMarker() {
  var myIcon = L.icon({
    iconUrl: 'https://image.shutterstock.com/image-vector/map-marker-icon-primitive-set-260nw-320656982.jpg',
    iconSize: [25,41],
    iconAnchor: [12.5,41],
    popupAnchor: [0,-41]
  })
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });



  return position === null ? null : (
    <Marker icon={myIcon}  position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}
