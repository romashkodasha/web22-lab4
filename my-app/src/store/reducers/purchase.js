import {createSlice} from "@reduxjs/toolkit";
import {
    getPurchaseAction,
    postPurchaseAction,
    deletePurchaseAction, patchPurchaseAction
} from "../actions/purchase";


const initialState = {
    getPurchaseStatus: 'initial',
    postPurchaseStatus: 'initial',
    deletePurchaseStatus: 'initial',
    updatePurchaseStatus: 'initial',
    purchase: [],
    error: null,
};
const purchaseSlice = createSlice({
    name: 'purchase',
    initialState,
    reducers: {
        reset: () => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(getPurchaseAction.pending, (state) => {
                state.getPurchaseStatus = 'fetching';
                state.error = null;
            })
            .addCase(getPurchaseAction.fulfilled, (state, { payload }) => {
                state.getPurchaseStatus = 'fetched';
                state.purchase = payload;
                state.error = null;
            })
            .addCase(getPurchaseAction.rejected, (state, { error }) => {
                state.getPurchaseStatus = 'error';
                state.error = error;
            });
        builder
            .addCase(postPurchaseAction.pending, (state) => {
                state.postPurchaseStatus = 'fetching';
                state.error = null;
            })
            .addCase(postPurchaseAction.fulfilled, (state, { payload }) => {
                state.postPurchaseStatus= 'fetched';
                state.purchase = payload;
                state.error = null;
            })
            .addCase(postPurchaseAction.rejected, (state, { error }) => {
                state.postPurchaseStatus = 'error';
                state.error = error;
            });
        builder
            .addCase(deletePurchaseAction.pending, (state) => {
                state.deletePurchaseStatus = 'fetching';
                state.error = null;
            })
            .addCase(deletePurchaseAction.fulfilled, (state, { payload }) => {
                state.deletePurchaseStatus = 'fetched';
                state.error = null;
            })
            .addCase(deletePurchaseAction.rejected, (state, { error }) => {
                state.deletePurchaseStatus = 'error';
                state.error = error;
            });
        builder
            .addCase(patchPurchaseAction.pending, (state) => {
                state.updatePurchaseStatus = 'FETCHING';
                state.error = null;
            })
            .addCase(patchPurchaseAction.fulfilled, (state, { payload }) => {
                state.updatePurchaseStatus = 'FETCHED';
                state.purchase = state.purchase.filter((purchase) => purchase.id !== payload.id);
                state.error = null;
            })
            .addCase(patchPurchaseAction.rejected, (state, { error }) => {
                state.updatePurchaseStatus = 'ERROR';
                state.error = error;
            });
    },
});

export const resetPurchaseState = purchaseSlice.actions.reset;
export const purchaseReducer = purchaseSlice.reducer;
