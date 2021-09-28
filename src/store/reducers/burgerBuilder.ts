import * as actionTypes from "../actions/actionTypes";
import { AnyAction } from "redux";

export interface BurgerBuilderState {
  ingredients: {
    salad: number,
    bacon: number,
    cheese: number,
    meat: number,
    [key: string]: number
  }
  totalPrice: number
}

const initialState: BurgerBuilderState = {
  ingredients: {
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0,
  },
  totalPrice: 4,
};

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  bacon: 0.7,
  meat: 1.3,
};

interface actionType {
  type?: 'ADD_INGREDIENTS' | 'REMOVE_INGREDIENTS';
  ingredientName?: typeof initialState.ingredients
}

const reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENTS:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] + 1,
        },
        //@ts-ignore
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
      };
    case actionTypes.REMOVE_INGREDIENTS:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] - 1,
        },
        //@ts-ignore
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
      };
    default:
      return state;
  }
};

export default reducer;
