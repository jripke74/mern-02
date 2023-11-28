import React from "react";

import "./Map.css";

const Map = (props) => {
  return (
    <div className={`map ${props.className}`} style={props.style}>
      <p>{props.center.lat}</p>
      <p>{props.center.lng}</p>
    </div>
  );
};

export default Map;
