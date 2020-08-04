import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
    background: `url(${"https://firebasestorage.googleapis.com/v0/b/userlogin-a6101.appspot.com/o/images%2Fbackground2.jpg?alt=media&token=fb029644-5dd9-4e98-b4b3-3d6742d92ca0"}) no-repeat`,
    backgroundSize: "cover",
    opacity: 0.9,
    height: "100px",
    backgroundBlendMode: "luminosity",
    height: "300px",
    borderRadius: "0px",
  },
  text: {
    padding: "40px",
    color: "orange",
    fontSize: "28px",
    textAlign: "center",
  },
  divBox: {
    marginTop: "-46px",
  },
}));

function Space1() {
  const classes = useStyles();

  return (
    <div className={classes.divBox}>
      <Paper className={classes.root} width={1}>
        <h5 className={classes.text}>Firangi is a fucktard.</h5>
      </Paper>
    </div>
  );
}

export default Space1;
