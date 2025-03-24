import 'leaflet/dist/leaflet.css';
import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

const Map = () => {
  const position = [43.4074020, 6.0622326];
  const zoom = 14;
  return (
    <div id="map" style={{ height: '400px', width: '100%' }} >
      <MapContainer center={position} zoom={zoom} scrollWheelZoom={false} style={{ height: '85%', width: '100%' }} className="rounded-[25px] my-[15px]">
        <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/attributions">Carto</a>'/>
      </MapContainer>
    </div>
  );
};

export default Map