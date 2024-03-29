import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredients";
import { withRouter, RouteComponentProps } from "react-router-dom";

import classes from "./Burger.module.css";
import { ingredients } from "../../store/reducers/burgerBuilder";

interface burgerProps {
  ingredients: ingredients;
}

const Burger: React.FC<RouteComponentProps & burgerProps> = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map((igkey) => {
      return [...Array(props.ingredients[igkey])].map((_, index) => {
        return <BurgerIngredient key={igkey + index} type={igkey} />;
      });
    })
    .reduce((arr, e) => {
      return arr.concat(e);
    }, []);
  if (transformedIngredients.length === 0) {
    transformedIngredients.push(<p>Please add some ingredients</p>);
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type={`bread-top`} />
      {transformedIngredients}
      <BurgerIngredient type={`bread-bottom`} />
    </div>
  );
};

export default withRouter(Burger);
