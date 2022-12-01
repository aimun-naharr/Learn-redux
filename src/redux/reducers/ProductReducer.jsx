import { ADD_TO_CART, REMOVE_ITEM } from "../actiontypes/productActions";

const initialState = {
        cart: [],
};
const productReducer = (state = initialState, action) => {
        switch (action.type) {
                case ADD_TO_CART:
                        return {
                                ...state,
                                cart: [...state.cart, action.payload],
                        };
                case REMOVE_ITEM:
                        let newCart=[...state.cart]
                        const index=state.cart.findIndex(product=>product.name ===action.payload)
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
