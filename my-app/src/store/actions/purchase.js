import {createAsyncThunk} from "@reduxjs/toolkit";
import {deletePurchase, getPurchase, patchPurchase, postPurchase} from "../../api/services/purchase";

export const getPurchaseAction = createAsyncThunk('purchase/purchase',(params)=>{
    return getPurchase(params);
})

export const postPurchaseAction = createAsyncThunk('purchase/purchasepost',(params)=>{
    return postPurchase(params);
})

export const deletePurchaseAction = createAsyncThunk('purchase/purchasedelete',(id)=>{
    return deletePurchase(id);
})
export const patchPurchaseAction = createAsyncThunk('purchase/update', (params) => {
    return patchPurchase(params);
});