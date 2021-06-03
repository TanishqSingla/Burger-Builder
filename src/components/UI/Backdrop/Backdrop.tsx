import React from "react";

import classes from "./Backdrop.module.css";

interface backdropProps {
  show: boolean;
  dropped: () => void;
}

const backdrop: React.FC<backdropProps> = (props) => {
  return props.show ? (
    <div className={classes.Backdrop} onClick={props.dropped} />
  ) : null;
};

export default backdrop;
