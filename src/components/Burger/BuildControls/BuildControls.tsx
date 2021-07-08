import React from "react";
import BuildControl from "./BuildControl/BuildControl";

import classes from "./BuildControls.module.css";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

// TODO use correct types
interface buildControlsProps {
  price: number;
  ingredientAdded: any;
  ingredientRemoved: any;
  purchasable: boolean;
  ordered: () => void;
  disabled: any;
}

const buildControls: React.FC<buildControlsProps> = (props) => (
  <div className={classes.BuildControls}>
    <p>
      Current Price: $<strong>{props.price.toFixed(2)}</strong>
    </p>
    {controls.map((ctrl) => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        add={() => props.ingredientAdded(ctrl.type)}
        remove={() => props.ingredientRemoved(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
      />
    ))}
    <button
      className={classes.OrderButton}
      disabled={!props.purchasable}
      onClick={props.ordered}
    >
      Confirm Order
    </button>
  </div>
);

export default buildControls;
