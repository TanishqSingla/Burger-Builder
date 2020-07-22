import React from "react";

import Logo from "./../Logo/Logo";
import NavigationItems from "./../Navigation/NavigationItems/NavigationItems";
import DrawerToggle from "../Navigation/SideDrawer/DrawerToggle/DrawerToggle";
import classes from "./Toolbar.module.css";

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <DrawerToggle />
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav className={classes.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
