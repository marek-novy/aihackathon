import dynamic from "next/dynamic";
import React from "react";
import Map from "../Map";

const MapComponent = dynamic(() => import("../MapComponent"), { ssr: false });

const MapPage: React.FC = () => {
  return (
    <div>
      <h1>Map Page</h1>
      <MapComponent points={[[51.505, -0.09]]} />
    </div>
  );
};

export default MapPage;
