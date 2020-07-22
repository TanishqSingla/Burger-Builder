import React, { useState } from "react";

import classes from "./Layout.module.css";
import Toolbar from "./../Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

function Layout(props) {
  const [sideDrawer, setSideDrawer] = useState({ show: false });

  const sideDrawerCloseHandler = () => {
    setSideDrawer({ show: false });
  };

  const sideDrawerToggleHandler = () => {
    setSideDrawer({ show: !sideDrawer.show });
  };

  return (
    <>
      <Toolbar />
      <SideDrawer closed={sideDrawerCloseHandler} open={sideDrawer.show} />
      <main className={classes.Content}>{props.children}</main>
    </>
  );
}

export default Layout;
