import {classesReducer} from "./reducers/classes";
import {configureStore, combineReducers} from "@reduxjs/toolkit";
import {loaderReducer} from "./reducers/loader";
import {purchaseReducer} from "./reducers/purchase";
import {userReducer} from "./reducers/user";

const reducer = combineReducers({
    classesReducer,
    loaderReducer,
    purchaseReducer,
    userReducer,
})

export const store = configureStore({
    reducer
})