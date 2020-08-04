import React, { useState, useEffect, useRef } from "react";
import Card from "../components/card";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import firebase from "../config/firebase";

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    padding: "20px",
    width: "100%",
  },
}));

function GridX(props) {
  const classes = useStyles();

  // Here's how we'll keep track of our component's mounted state
  const [didMount, setDidMount] = useState(false);

  const [whodis, setPage] = useState(props.me); //me: true || false
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log(users);
    console.log(products);
  }, [users, products]);

  //This is to get data from db of firestore
  useEffect(() => {
    (async () => {
      try {
        //Getting users from db
        const snapshot = await firebase
          .firestore()
          .collectionGroup("users")
          .get();

        setUsers(snapshot.docs.map((doc) => doc.data()));

        //Getting products from db
        const snapshot_ = await firebase
          .firestore()
          .collectionGroup("products")
          .get();

        setProducts(snapshot_.docs.map((doc) => doc.data()));
      } catch (error) {
        console.log(error);
      }
    })();

    setDidMount(true);

    return () => setDidMount(false);
  }, []);

  if (!didMount) {
    return null;
  }

  if (!whodis) {
    return (
      <Grid container spacing={4} className={classes.gridContainer}>
        {products.map((product) => (
          <Grid item md={4} sm={6} xs={12} key={product.productCode}>
            <Card {...product} />
          </Grid>
        ))}
      </Grid>
    );
  } else {
    return (
      <Grid container spacing={4} className={classes.gridContainer}>
        {products.map((product, index) => {
          if (product.userID == firebase.auth().currentUser.uid) {
            return (
              <Grid item md={4} sm={6} xs={12} key={product.productCode}>
                <Card {...product} />
              </Grid>
            );
          }
        })}
      </Grid>
    );
  }
}

export default GridX;

//Here we will display my products
//We will get data here and set the grid

//for each card we will send them the appropriate data
