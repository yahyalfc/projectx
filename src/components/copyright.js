import React from "react";
import Typography from "@material-ui/core/Typography";

function Copyright(props) {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      {props.text} {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default Copyright;
