import {createAsyncThunk} from "@reduxjs/toolkit";
import {deletePurchase, getPurchase, postPurchase} from "../../api/services/purchase";

export const getPurchaseAction = createAsyncThunk('purchase/purchase',()=>{
    return getPurchase();
})

export const postPurchaseAction = createAsyncThunk('purchase/purchasepost',(params)=>{
    return postPurchase(params);
})

export const deletePurchaseAction = createAsyncThunk('purchase/purchasedelete',(id)=>{
    return deletePurchase(id);
})