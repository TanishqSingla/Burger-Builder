import React from "react";
import { NavLink, NavLinkProps } from "react-router-dom";

import classes from "./NavigationItem.module.css";

interface navigationItemProps {
  exact?: boolean;
  link: string;
}

const navigationItem: React.FC<navigationItemProps> = (props) => (
  <li className={classes.NavigationItem}>
    <NavLink
      exact={props.exact!}
      to={props.link}
      activeClassName={classes.active}
    >
      {props.children}
    </NavLink>
  </li>
);

export default navigationItem;
