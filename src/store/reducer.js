import * as actionTypes from "./actions";

const initialState = { ingredients: null, totalPrice: 4 };

const reducer = (state = initialState, action) => {
  switch (action.Type) {
    case actionTypes.ADD_INGREDIENTS:
      return;
    case actionTypes.REMOVE_INGREDIENTS:
      return;
  }
  return state;
};

export default reducer;
