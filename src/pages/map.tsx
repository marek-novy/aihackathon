import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import Map from "../Map";
import {postToAIFirstPrompt} from "../aiClient";

const MapComponent = dynamic(() => import("../MapComponent"), { ssr: false });

const MapPage: React.FC = () => {
  const [response, setResponse] = useState(null);

  const handleClick = async () => {
    try {
      const aiResponse = await postToAIFirstPrompt(5, 2, "Paris");
      setResponse(aiResponse);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Get AI Response</button>
      {response && <div>{JSON.stringify(response)}</div>}

      <h1>Map Page</h1>
      <MapComponent points={[[51.505, -0.09]]} />
    </div>
  );
};

export default MapPage;
