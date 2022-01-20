import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { LocationMarker } from './LocationMarker'





const Map = () => {
  return (
    <MapContainer center={[12.9716, 77.5946]} zoom={13} scrollWheelZoom={true} style={{height: '100vh', width: "100%"}}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker />
    </MapContainer>
  )
}

export default Map