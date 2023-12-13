import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Leaflet from "leaflet";
import * as ReactLeaflet from "react-leaflet";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

type Props = {
  points: [number, number][];
};

const MapComponent = ({ points }: Props) => {
  const position = points[0] ?? [51.505, -0.09];

  return (
    <div style={{ height: "100vh", width: "100wh" }}>
      <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{height: 350}}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {points.map((point, idx) => (
          <Marker key={idx} position={point}>
            <Popup>
              A point of interest
              <br /> Latitude: {point[0]} Longitude: {point[1]}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
