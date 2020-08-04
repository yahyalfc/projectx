import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  text: {
    color: "grey",
    fontSize: "28px",
  },
  divBox: {
    padding: "40px",
  },
}));

function About() {
  const classes = useStyles();

  return (
    <div className="App" className={classes.divBox}>
      <h5 className={classes.text}>
        A product catalogue. Sign in, add your products, also view products of
        other users. Implementation done on reactjs, material ui and firebase.
      </h5>
    </div>
  );
}

export default About;
