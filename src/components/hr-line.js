import React from "react";

const ColoredLine = ({ color }) => (
  <hr
    style={{
      color: color,
      backgroundColor: color,
      height: 0.1,
    }}
  />
);

export default ColoredLine;
