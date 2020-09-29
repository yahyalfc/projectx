import React, { useState, useEffect } from "react";
import firebase from "../config/firebase";
import { Redirect, BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "../components/navbar";
import AddProduct from "./addproduct";

import SecondBar from "../components/secondBar";

function Profile(props) {
  const [uid, setUid] = useState("");

  const [didMount, setDidMount] = useState(false);

  const db = firebase.firestore();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        localStorage.setItem("user", JSON.stringify(user));

        console.log("user is signed in");
      } else {
        localStorage.removeItem("user");
        console.log("user is not signed in");
      }
    });

    setDidMount(true);

    return () => setDidMount(false);
  }, []);

  if (!didMount) {
    return null;
  }

  const userLocal = JSON.parse(localStorage.getItem("user"));

  return userLocal || firebase.auth().currentUser ? (
    <Switch>
      <Redirect exact from="/profile" to="/profile/myproducts" />
      <Route
        exact
        path="/profile/:page?"
        render={(props) => <SecondBar {...props} />}
      />
    </Switch>
  ) : (
    <Redirect to="/signin" />
  );

  if (firebase.auth().currentUser) {
  } else {
    return;
  }
}
export default Profile;
