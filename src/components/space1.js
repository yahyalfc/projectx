import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
    background: `url(${"https://firebasestorage.googleapis.com/v0/b/userlogin-a6101.appspot.com/o/images%2Fbackground1.jpg?alt=media&token=0e83a734-031a-40a1-a1b3-3f6f50266240"}) no-repeat`,
    backgroundSize: "cover",
    opacity: 0.9,
    height: "100px",
    backgroundBlendMode: "luminosity",
    height: "600px",
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
        <h5 className={classes.text}>Hi! Sign in to start</h5>
      </Paper>
    </div>
  );
}

export default Space1;
