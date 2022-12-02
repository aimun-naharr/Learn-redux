import { ADD_TO_CART, REMOVE_ITEM } from "../actiontypes/productActions";

const initialState = {
        cart: [],
};
const productReducer = (state = initialState, action) => {
        const existingProduct=state.cart.find(product=>product.id === action.payload.id)
        
        switch (action.type) {
                case ADD_TO_CART:
                        if(existingProduct){
                                let newCart=state.cart.filter(product=>product.id !==existingProduct.id)
                                existingProduct.quantity=existingProduct.quantity+1

                                return {
                                        ...state,
                                        cart: [...newCart, existingProduct]
                                }
                        }
                                return {
                                        ...state,
                                        cart: [...state.cart, {...action.payload, quantity:1}],
                                };
                        
                case REMOVE_ITEM:
                        let newCart=[...state.cart]
                        if(existingProduct.quantity>1){
                                let newCart=state.cart.filter(product=>product.id !==existingProduct.id)
                                existingProduct.quantity=existingProduct.quantity-1

                                return {
                                        ...state,
                                        cart: [...newCart, existingProduct]
                                }
                        }
                        const index=state.cart.findIndex(product=>product.id ===action.payload.id)
                        if(index>= 0){
                                newCart.splice(index, 1)
                        }
                       return {
                        ...state,
                        cart: newCart
                       }
                default:
                        return state;
        }
};
export default productReducer;
