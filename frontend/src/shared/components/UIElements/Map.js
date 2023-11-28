import React from "react";

import "./Map.css";

const Map = (props) => {
  const lat = props.center.lat;
  const lng = props.center.lng;
  
  return (
    <div className={`map ${props.className}`} style={props.style}>
      <p>{lat}</p>
      <p>{lng}</p>
    </div>
  );
};

export default Map;
