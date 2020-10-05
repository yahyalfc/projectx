import React from "react";
import ReactDOM from "react-dom";

import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import Box from "@material-ui/core/Box";

import "../stylesheets/popup.css";
import { format, render, cancel, register } from "timeago.js";

import ColoredLine from "./hr-line";
import LikeButton from "./like";

const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: "yellow",
    padding: "15px",
  },
  wrapper: {
    display: "flex",
    minHeight: "700px",
  },
  imageContainer: {
    border: "1px solid orange",
    borderRadius: "5px",
    padding: "20px",
    overflow: "hidden",
    // backgroundColor: "blue",
    width: "70%",
    float: "left",
    maxHeight: "650px",
    objectFit: "cover",

    // flex: "left",
  },
  contentContainer: {
    maxHeight: "650px",

    // backgroundColor: "green",
    width: "30%",
    float: "right",
    padding: "20px",
  },
  textHeading: {
    textTransform: "capitalize",
    textAlign: "center",
    fontSize: "20px",
  },
  bigText: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "orange",
  },
  normalText: {
    fontSize: "15px",
  },
  image: {
    marginRight: "20px",
  },
  footer: {
    paddingLeft: "5px",
    marginTop: "-10px",
  },
  linebreak: {
    width: "50%",
  },
  pound: {
    fontSize: "19px",
  },
}));

function PopUp(props) {
  const classes = useStyles();

  console.log(props.value);
  return (
    <Box className={classes.root}>
      <div className={classes.wrapper}>
        <div className={classes.imageContainer}>
          <img className={classes.image} src={props.value.imageLink}></img>
        </div>

        <div className={classes.contentContainer}>
          <p className={classes.textHeading}> {props.value.productName}</p>
          <br />
          <p className={classes.normalText}>
            Product Code - {props.value.productCode}
          </p>
          <p className={classes.normalText}>
            Catagory - {props.value.productCatagory}
          </p>
          <p className={classes.normalText}>{format(props.value.time)}</p>
          <br />
          <p className={classes.bigText}>
            Price - {props.value.price}{" "}
            <span className={classes.pound}>&#163;</span>{" "}
          </p>
          <ColoredLine color="grey" />
          <LikeButton />
        </div>
      </div>
      <div className={classes.footer}>
        <p className={classes.normalText}>{props.value.description}</p>
      </div>
    </Box>
  );
}

export default PopUp;
