import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Divider, AppBar } from "@material-ui/core";

import AddProduct from "../pages/addproduct";
import GridX from "./gridx";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  bar: {
    color: "orange",
    backgroundColor: "grey",
  },
  tab: {},
}));

const HorizantalTabs = (props) => {
  const { match, history } = props;
  const { params } = match;
  const { page } = params;

  const [didMount, setDidMount] = useState(false);

  const tabNametoIndex = {
    0: "myproducts",
    1: "allproducts",
    2: "addnew",
  };

  const indextoTabName = {
    myproducts: 0,
    allproducts: 1,
    addnew: 2,
  };

  useEffect(() => {
    setDidMount(true);

    return () => setDidMount(false);
  }, []);

  const classes = useStyles();
  const [value, setValue] = useState(indextoTabName[page]);

  const handleChange = (event, newValue) => {
    //console.log(newValue);
    history.push(`/profile/${tabNametoIndex[newValue]}`);
    setValue(newValue);
  };

  if (!didMount) {
    return null;
  }

  return (
    <>
      <AppBar position="static" className={classes.bar}>
        <Tabs
          orientation="horizontal"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className={classes.tabs}
        >
          <Tab className={classes.tab} label="My Products" />
          <Tab className={classes.tab} label="All Products" />
          <Tab className={classes.tab} label="Add Product" />
        </Tabs>
      </AppBar>
      {value === 0 && <GridX me={true} />}
      {value === 1 && <GridX me={false} />}
      {value === 2 && <AddProduct />}
    </>
  );
};

export default HorizantalTabs;
