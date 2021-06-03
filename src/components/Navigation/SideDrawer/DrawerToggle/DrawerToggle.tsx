import React from "react";

import classes from "./DrawerToggle.module.css";

const drawerToggle: React.FC<> = (props) => (
  <div onClick={props.clicked} className={classes.DrawerToggle}>
    ☰
  </div>
);

export default drawerToggle;
