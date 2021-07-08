import React from "react";

import classes from "./Order.module.css";
import { ingredients } from "../../types/types";

interface OrderProps {
  key: string;
  price: string | number;
  ingredients: ingredients;
}

const Order: React.FC<OrderProps> = (props) => {
  const ingredients: Array<{ name: string; amount: number | string }> = [];

  for (let ingredientName in props.ingredients) {
    ingredients.push({
      name: ingredientName,
      amount: props.ingredients[ingredientName],
    });
  }

  const ingredientOutput = ingredients.map((ig) => {
    return (
      <span
        style={{
          textTransform: "capitalize",
          display: "inline-block",
          margin: "0 8px",
          border: "solid 1px #ccc",
          padding: "5px",
        }}
      >
        {ig.name} ({ig.amount})
      </span>
    );
  });
  return (
    <div className={classes.Order}>
      <p>Ingredients: {ingredientOutput}</p>
      <p>
        Price:{" "}
        <strong>
          USD {Number.parseFloat(props.price as string).toFixed(2)}
        </strong>
      </p>
    </div>
  );
};

export default Order;
