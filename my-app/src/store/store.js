import {classesReducer} from "./reducers/classes";
import {configureStore, combineReducers} from "@reduxjs/toolkit";
import {loaderReducer} from "./reducers/loader";
import {purchaseReducer} from "./reducers/purchase";
import {authReducer} from "./reducers/auth";
import {userReducer} from "./reducers/user";

const reducer = combineReducers({
    classesReducer,
    loaderReducer,
    purchaseReducer,
    authReducer,
    userReducer,
})

export const store = configureStore({
    reducer
})