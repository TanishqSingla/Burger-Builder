import React from "react";

import classes from "./BuildControl.module.css";

interface buildControlProps {
  label: string;
  type?: string;
  add: () => void;
  remove: () => void;
  disabled?: boolean;
}

const buildControl: React.FC<buildControlProps> = (props) => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>{props.label}</div>
    <button
      className={classes.Less}
      onClick={props.remove}
      disabled={props.disabled}
    >
      Less
    </button>
    <button className={classes.More} onClick={props.add}>
      More
    </button>
  </div>
);

export default buildControl;
