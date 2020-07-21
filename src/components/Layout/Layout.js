import React from "react";

import classes from "./Layout.module.css";
import Toolbar from "./../Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer";

const layout = (props) => {
  return (
    <>
      <Toolbar />
      <SideDrawer />
      <main className={classes.Content}>{props.children}</main>
    </>
  );
};

export default layout;
