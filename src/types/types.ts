export type ingredientName = 'salad' | 'bacon' | 'cheese' | 'meat';

export type actionType = "ADD_INGREDIENTS" | "REMOVE_INGREDIENTS"
export interface actions { 
    type: actionType,
    ingredientName: ingredientName
}
