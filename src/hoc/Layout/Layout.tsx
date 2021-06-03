import React, { useState } from "react";

import classes from "./Layout.module.css";
import Toolbar from "../../components/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

// TODO add propType
const Layout: React.FC = (props) => {
  const [sideDrawer, setSideDrawer] = useState({ show: false });

  const sideDrawerCloseHandler = () => {
    setSideDrawer({ show: false });
  };

  const sideDrawerToggleHandler = () => {
    setSideDrawer((prevState) => ({ show: !prevState.show }));
  };

  return (
    <>
      <Toolbar drawerToggleClicked={sideDrawerToggleHandler} />
      <SideDrawer closed={sideDrawerCloseHandler} open={sideDrawer.show} />
      <main className={classes.Content}>{props.children}</main>
    </>
  );
};

export default Layout;
