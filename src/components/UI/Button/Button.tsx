import React from "react";

import classes from "./Button.module.css";

interface buttonProps {
  clicked?: () => void;
  btnType: string;
  disabled?: boolean;
}

const button: React.FC<buttonProps> = (props) => (
  <button
    disabled={props.disabled}
    className={[classes.Button, classes[props.btnType]].join(" ")}
    onClick={props.clicked}
  >
    {props.children}
  </button>
);

export default button;
