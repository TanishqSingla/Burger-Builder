import React from "react";

import classes from "./BuildControls.module.css";

const buildControls = (props) => (
  <div>
    <div>{props.label}</div>
    <button>Less</button>
    <button>More</button>
  </div>
);

export default buildControls;
