import React from "react";
import classes from "./Layout.module.css";

const layout = (props) => {
  return (
    <>
      <div>toolbar, sidedrawer, Backdrop</div>
      <main className={classes.Content}>{props.children}</main>
    </>
  );
};

export default layout;