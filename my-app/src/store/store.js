import {classesReducer} from "./reducers/classes";
import {configureStore, combineReducers} from "@reduxjs/toolkit";
import {loaderReducer} from "./reducers/loader";
import {purchaseReducer} from "./reducers/purchase";
import {authReducer} from "./reducers/auth";

const reducer = combineReducers({
    classesReducer,
    loaderReducer,
    purchaseReducer,
    authReducer,
})

export const store = configureStore({
    reducer
})