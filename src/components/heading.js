import React from "react";
import Typography from "@material-ui/core/Typography";

function Heading(props) {
  return (
    <Typography type={props.type} color={props.color} style={props.style}>
      {props.text}
    </Typography>
  );
}

export default Heading;
