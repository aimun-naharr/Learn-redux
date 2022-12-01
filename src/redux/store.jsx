import { createStore } from "redux"
import productReducer from "./reducers/ProductReducer"
import { composeWithDevTools } from "@redux-devtools/extension"

export const store=createStore(productReducer, composeWithDevTools())