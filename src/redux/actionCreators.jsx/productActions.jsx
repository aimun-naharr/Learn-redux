import { ADD_TO_CART, REMOVE_ITEM, TOGGLE_BRAND, TOGGLE_STOCK } from "../actiontypes/productActions";

export const addToCart = (product) => {
        return {
                type: ADD_TO_CART,
                payload: product,
        };
};

export const removeItem = (product) => {
        return {
                type: REMOVE_ITEM,
                payload: product,
        };
};

// for filters

export const toggleBrand = (brand) => {
        return {
                type: TOGGLE_BRAND,
                payload: brand,
        };
};

export const toggleStock = () => {
        return { type: TOGGLE_STOCK };
};
