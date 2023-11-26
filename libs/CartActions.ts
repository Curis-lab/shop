import { ActionTypes } from "./Types";

export const addToCard = (product: any, quantity: any) => ({
  type: ActionTypes.ADD_CART,
  payload: {
    product,
    quantity: quantity || 1,
  },
});

export const removeFromCard = (product: any) => ({
  type: ActionTypes.REMOVE_ITEM,
  payload: { product },
});
