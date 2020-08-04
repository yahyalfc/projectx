import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Formik, Field, Form } from "formik";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { format, render, cancel, register } from "timeago.js";
import { Button } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Container } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import Input from "@material-ui/core/Input";
import { Grid } from "@material-ui/core";
import firebase from "../config/firebase";
import { Redirect } from "react-router-dom";

const storage = firebase.storage();
const shortid = require("shortid");

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    //float: "left",

    marginTop: "50px",
    marginLeft: "120px",
    //  marginRight: "120px",
    width: "320px",
  },
  rootTwo: {
    display: "flex",
    flexWrap: "wrap",
    //float: "right",

    marginTop: "80px",
    marginLeft: "120px",
    width: "320px",
  },

  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "25px",
  },
  label: {
    fontSize: "20px",
  },
  heading: {
    color: "grey",
  },
  textBox: {
    width: "320px",
  },
  gridContainer: {
    padding: "20px",
    width: "100%",
  },
  submitButton: {
    paddingLeft: "40px",
    marginLeft: "120px",
    width: "80%",
  },
  submit: {
    backgroundColor: "orange",
    color: "grey",
    "&:hover": {
      backgroundColor: "grey",
      color: "orange",
    },
  },
}));

function AddProduct(props) {
  const classes = useStyles();
  const db = firebase.firestore();

  const [didMount, setDidMount] = useState(false);

  const [redirect, setRedirect] = useState(false);

  //Image shiz //Handle Image Block
  const [image, setImage] = useState(null);

  useEffect(() => {
    setDidMount(true);
    return () => setDidMount(false);
  }, []);

  //Saving all the data we got from user
  const saveStuff = async (e) => {
    e.preventDefault();

    //Getting Data from input
    const {
      productCatagory,
      productName,
      price,
      description,
    } = e.currentTarget.elements;

    if (productName.value === "") {
      throw Error("fill the product name field");
    }

    //Calculating other data stuff
    const productID = shortid.generate();
    const userID = firebase.auth().currentUser.uid;

    //image is contained in our file variable

    //Saving data in firestore
    const productsRef = db.collection("products").doc(productID);

    productsRef
      .set({
        userID: userID,
        productCatagory: productCatagory.value,
        productCode: productID,
        productName: productName.value,
        imageLink: await uploadImage(),
        price: price.value,
        likes: [],
        description: description.value,
        time: new Date().getTime(),
      })
      .then(function () {
        console.log("Document successfully written!");
        setRedirect(true);
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });
  };

  const uploadImage = async () => {
    if (!image) {
      throw new Error("Add Image to add the product");
    }

    return new Promise((resolve, reject) => {
      const uploadTask = storage.ref(`images/${image.name}`).put(image);

      uploadTask.on(
        "state_changed",
        (snapshot) => {}, //for progress
        (error) => {
          reject(error);
        },
        () => {
          storage
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then((url) => {
              console.log(url);
              resolve(url);
            });
        }
      );
    });
  };

  const handleImage = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  if (!didMount) {
    return null;
  }

  if (redirect === true) {
    return <Redirect to="/profile" />;
  } else {
    return (
      <form
        className={classes.form}
        autoComplete="off"
        noValidate
        onSubmit={saveStuff}
      >
        <Grid container spacing={4} className={classes.gridContainer}>
          <Grid item md={6} sm={12} xs={12}>
            <div className={classes.root}>
              <h1 className={classes.heading}>Add Product</h1>
              <CssBaseline />

              <TextField
                autoFocus
                variant="standard"
                margin="normal"
                required={true}
                fullWidth
                id="productName"
                label="Product Name"
                name="productName" //this property is used to take value
                autoComplete="productName"
              />
              <TextField
                variant="standard"
                margin="normal"
                required={true}
                fullWidth
                label="Product Catagory"
                name="productCatagory" //this property is used to take value
              />
              <TextField
                variant="standard"
                margin="normal"
                required={true}
                fullWidth
                id="price"
                label="Price"
                name="price" //this property is used to take value
                autoComplete="price"
              />
              <TextField
                multiline={true}
                rows={3}
                variant="standard"
                margin="normal"
                required
                fullWidth
                id="description"
                label="Description"
                name="description"
                InputProps={{ classes: { input: classes.textBox } }}
                style={{ wordWrap: "break-word" }}
              />

              <br />
              <br />
            </div>
          </Grid>

          <Grid item md={6} sm={12} xs={12}>
            <div className={classes.rootTwo}>
              <h1 className={classes.heading}>Upload Your Image</h1>
              <input type="file" onChange={handleImage} />
            </div>
          </Grid>
        </Grid>

        {/*Separate Container*/}

        <Grid container spacing={2} className={classes.submitButton}>
          <Grid item md={6} sm={6} xs={6}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submit}
            >
              Add
            </Button>
          </Grid>
        </Grid>
      </form>
    );
  }
}
export default AddProduct;
