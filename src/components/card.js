import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Container } from "@material-ui/core";

import { format, render, cancel, register } from "timeago.js";
import PopUp from "../components/popup";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  imageHolder: {
    height: "auto",
    paddingTop: "56.25%", // 16:9
    position: "relative",
  },
  imageLink: {
    padding: "10px",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();

  const [pop, setPopup] = useState(false);

  const openPopUp = () => {
    setPopup(true);
    console.log(props.productName);
  };

  return !pop ? (
    <Card className={classes.root} onClick={openPopUp}>
      <CardHeader title={props.productName} subheader={props.productCatagory} />

      <CardMedia className={classes.imageHolder} image={props.imageLink} />
      <CardHeader subheader={format(props.time)} />

      <CardContent>
        <Typography variant="body1" color="textSecondary" component="p">
          Product Code:{props.productCode}
        </Typography>
        <br />
        <Typography variant="body2">{props.description}</Typography>
      </CardContent>
    </Card>
  ) : (
    <PopUp />
  );
}
