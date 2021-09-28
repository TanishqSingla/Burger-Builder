import React from "react";
import { ingredients } from "../../../store/reducers/burgerBuilder";

import Button from "../../UI/Button/Button";

interface OrderSummaryProps {
  purchaseContinued: () => void;
  purchaseCancelled: () => void;
  ingredients: ingredients;
  price: string;
}

class OrderSummary extends React.Component<OrderSummaryProps> {
  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(
      (igKey) => {
        return (
          <li key={igKey}>
            <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
            {this.props.ingredients[igKey]}
          </li>
        );
      }
    );
    return (
      <>
        <h3>Your Order</h3>
        <p>Your preferred burger with following ingredients: </p>
        <ul>{ingredientSummary}</ul>
        <p>Total Price: ${this.props.price}</p>
        <p>Continue Checkout?</p>
        <Button clicked={this.props.purchaseCancelled} btnType={`Danger`}>
          Cancel
        </Button>
        <Button btnType={`Success`} clicked={this.props.purchaseContinued}>
          Continue
        </Button>
      </>
    );
  }
}

export default OrderSummary;
