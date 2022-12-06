import { SEARCH_KEYWORD, TOGGLE_BRAND, TOGGLE_STOCK } from "../actiontypes/productActions";

const initialState = {
        filters: {
                brand: [],
                stock: false,
        },
        keywords: "",
};

export const filterReducer = (state = initialState, action) => {
        switch (action.type) {
        case SEARCH_KEYWORD:
                return {
                        ...state, 
                        keywords: action.payload
                }
                case TOGGLE_BRAND:
                       if(!state.filters.brand.includes(action.payload)){
                        return {
                           ...state,
                           filters: {
                                   ...state.filters,
                                   brand: [...state.filters.brand, action.payload],
                           },
                   };
                       }else{
                       return{
                        ...state,
                        filters: {
                                ...state.filters,
                                brand: state.filters.brand.filter(brand=>brand !== action.payload)
                        }
                       }
                       }
                    
                       case TOGGLE_STOCK:
                        return{
                                ...state,
                                filters: {
                                        ...state.filters, stock: !state.filters.stock
                                }
                        }
                default:
                        return state;
        }
};
