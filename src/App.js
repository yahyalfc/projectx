//packages
import React, { useState } from "react";
import { Switch, BrowserRouter, Route, Link } from "react-router-dom";

import "./App.css";

import CssBaseline from "@material-ui/core/CssBaseline";

// elements
import Button from "@material-ui/core/Button";
import NavBar from "./components/navbar";
//components
import Main from "./pages/main";
import About from "./pages/about";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import Profile from "./pages/profile";

import AddProduct from "./pages/addproduct";

function App() {
  return (
    <BrowserRouter>
      <div>
        <CssBaseline />
        <NavBar />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/about" component={About} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
