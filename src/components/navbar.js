import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
//import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import Heading from "./heading";

import { Link, Redirect } from "react-router-dom";

import firebase from "../config/firebase";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import { makeStyles } from "@material-ui/core";

const styles = (theme) => ({
  title: {
    flexGrow: 1,

    textDecoration: "none",
  },
  head: {
    flex: 1,
    color: "white",
  },
  barcolor: {
    background: "orange",
  },
  link: {
    textDecoration: "none",
  },
  mainButton: {
    color: "white",
  },
  button: {
    color: "grey",
  },
});

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: false,
    };
  }

  logoutUser = () => {
    firebase
      .auth()
      .signOut()
      .then(
        () => {
          console.log("SignOut successful");
        },
        (error) => {
          console.log(error);
        }
      );
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ login: true });
      } else {
        this.setState({ login: false });
      }
    });
  }
  render() {
    const { classes } = this.props;

    return (
      <AppBar position="static" className={classes.barcolor}>
        <Toolbar>
          <Typography type="title" color="inherit" className={classes.head}>
            Super Awesome Web App
          </Typography>
          <Link to="/about" className={classes.link}>
            <Button className={classes.button}>About</Button>
          </Link>
          <Link to="/profile" className={classes.link}>
            <Button className={classes.button}>Profile</Button>
          </Link>

          {this.state.login ? (
            <Link to="/" className={classes.link}>
              <Button className={classes.button} onClick={this.logoutUser}>
                Sign Out
              </Button>
            </Link>
          ) : (
            <Link to="/signin" className={classes.link}>
              <Button className={classes.button}>Sign in</Button>
            </Link>
          )}
        </Toolbar>
      </AppBar>
    );
  }
}
Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);

/*import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
//import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import Heading from "./heading";

import { Link, Redirect } from "react-router-dom";

import firebase from "../config/firebase";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import { makeStyles } from "@material-ui/core";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    // marginRight: theme.spacing(2),
    // color: "red",
  },
  title: {
    flexGrow: 1,
    color: "white",
    textDecoration: "none",
  },
  barcolor: {
    background: "orange",
  },
  link: {
    textDecoration: "none",
  },
  button: {
    color: "grey",
    pointerEvents: "none",
    flex: 1,
  },
  mainButton: {
    pointerEvents: "none",
    color: "white",
  },
});

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: false,
    };
  }

  logoutUser = () => {
    firebase
      .auth()
      .signOut()
      .then(
        () => {
          console.log("SignOut successful");
        },
        (error) => {
          console.log(error);
        }
      );
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ login: true });
      } else {
        this.setState({ login: false });
      }
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <AppBar position="static" className={classes.barcolor}>
        <Toolbar>
          <Typography type="title" color="inherit" style={{ flex: 1 }}>
            App
          </Typography>
          <Link to="/about" className={classes.link}>
            <Button className={classes.button}>About</Button>
          </Link>

          {this.state.login ? (
            <Link to="/" className={classes.link}>
              <Button className={classes.button} onClick={this.logoutUser}>
                Sign Out
              </Button>
            </Link>
          ) : (
            <Link to="/signin" className={classes.link}>
              <Button className={classes.button}>Sign in</Button>
            </Link>
          )}
        </Toolbar>
      </AppBar>
    );
  }
}
Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);
*/
