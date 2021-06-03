import * as actionTypes from "./actionTypes";
import {ingredientName} from '../../types/types'

export const addIngredient = (name: ingredientName) => {
  return {
    type: actionTypes.ADD_INGREDIENTS,
    ingredientName: name,
  };
};

export const removeIngredient = (name: ingredientName) => {
  return {
    type: actionTypes.REMOVE_INGREDIENTS,
    ingredientName: name,
  };
};
