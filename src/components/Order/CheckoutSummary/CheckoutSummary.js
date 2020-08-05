import React from "react";

import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";

import classes from "./CheckoutSummary.module.css";

const ChekcoutSummary = (props) => {
  return (
    <div className={}>
      <h1>We hope you like your order!</h1>
      <div style={{ width: "300px", height: "300px", margin: "auto" }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button btnType="Danger" clicked>
        CANCEL
      </Button>
      <Button btnType="Success" clicked>
        CONFIRM
      </Button>
    </div>
  );
};

export default ChekcoutSummary;
