import React from "react";
import classes from "./Layout.module.css";

import Toolbar from "./../Toolbar/Toolbar";
const layout = (props) => {
  return (
    <>
      <Toolbar />
      <div>sidedrawer, Backdrop</div>
      <main className={classes.Content}>{props.children}</main>
    </>
  );
};

export default layout;
