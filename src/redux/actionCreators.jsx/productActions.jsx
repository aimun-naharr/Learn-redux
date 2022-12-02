import { ADD_TO_CART, REMOVE_ITEM } from "../actiontypes/productActions"

export const addToCart =(product)=>{
   return{
      type: ADD_TO_CART,
      payload: product
   }
}

export const removeItem=(product)=>{
   return{
      type: REMOVE_ITEM,
      payload: product
   }
}