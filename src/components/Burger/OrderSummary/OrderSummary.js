import React from "react";

import Button from "./../../UI/Button/Button";

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <>
      <h3>Your Order</h3>
      <p>Your preferred burger with following ingredients: </p>
      <ul>{ingredientSummary}</ul>
      <p>Continue Checkout?</p>
      <Button clicked={props.purchaseCancelled} btnType={`Danger`}>
        Cancel
      </Button>
      <Button btnType={`Success`} clicked={props.purchaseContinued}>
        Continue
      </Button>
    </>
  );
};

export default orderSummary;
