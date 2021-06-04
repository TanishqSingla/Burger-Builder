import { number } from "prop-types";

export type ingredientName = 'salad' | 'bacon' | 'cheese' | 'meat';

export type actionType = "ADD_INGREDIENTS" | "REMOVE_INGREDIENTS"
export interface actions { 
    type: actionType,
    ingredientName: ingredientName
}

export interface ingredients {
    salad: number;
    bacon: number;
    meat: number;
    cheese: number;
}

export interface orderData {
    country: string;
    deliveryMethod: string;
    email: string;
    name: string;
    street: number;
    zip: number
}

export interface orderSchema {
    ingreidents: ingredients;
    orderData: orderData;
    price: number
}