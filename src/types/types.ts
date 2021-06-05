export type ingredientName = "salad" | "bacon" | "cheese" | "meat";

export type actionType = "ADD_INGREDIENTS" | "REMOVE_INGREDIENTS";
export interface actions {
  type: actionType;
  ingredientName: ingredientName;
}


export interface ingredients {
  salad: number;
  bacon: number;
  meat: number;
  cheese: number;
  [key: string]: number;
}

export interface storeProps {
  ings: ingredients;
}

export interface orderData {
  country: string;
  deliveryMethod: string;
  email: string;
  name: string;
  street: number;
  zip: number;
}

export interface orderDB {
  id: string;
  ingreidents: ingredients;
  orderData: orderData;
  price: number;
}

export interface orderFormElement {
  name: {
    elementType: string;
    elementConfig: {
      type: string;
      placeholder: string;
    };
    value: string;
    validation: {
      required: boolean;
    };
    valid: boolean;
  };

  [key: string]: string | number | object | boolean
}
