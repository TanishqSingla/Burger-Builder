import React from "react";

import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";

import classes from "./CheckoutSummary.module.css";

interface CheckoutSummaryProps {
  checkoutCancelled: () => void;
  checkoutConfirmed: () => void;
}

const CheckoutSummary: React.FC<CheckoutSummaryProps> = (props) => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>We hope you like your order!</h1>
      <div style={{ width: "100%", margin: "auto" }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button btnType="Danger" clicked={props.checkoutCancelled}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.checkoutConfirmed}>
        CONFIRM
      </Button>
    </div>
  );
};

export default CheckoutSummary;
