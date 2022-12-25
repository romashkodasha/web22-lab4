import { createSlice} from '@reduxjs/toolkit';
import {
    editClassAction,
    getClassByIdAction,
    getClassByNameAction,
    getClassesAction,
    getClassesPriceRangeAction, postClassAction
} from '../actions/classes';


const initialState = {
    getClassesStatus: 'initial',
    getClassByIdStatus: 'initial',
    getClassesPriceRangeStatus: 'initial',
    postClassStatus: 'initial',
    deleteClassStatus: 'initial',
    classes: [],
    classesPriceRange: {},
    error: null,
};

const classesSlice = createSlice({
    name: 'classes',
    initialState,
    reducers: {
        reset: () => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(getClassesAction.pending, (state) => {
                state.getClassesStatus = 'fetching';
                state.error = null;
            })
            .addCase(getClassesAction.fulfilled, (state, { payload }) => {
                state.getClassesStatus = 'fetched';
                state.classes = payload;
                state.error = null;
            })
            .addCase(getClassesAction.rejected, (state, { error }) => {
                state.getClassesStatus = 'error';
                state.error = error;
            });
        builder
            .addCase(getClassByIdAction.pending, (state) => {
                state.getClassByIdStatus = 'fetching';
                state.error = null;
            })
            .addCase(getClassByIdAction.fulfilled, (state, { payload }) => {
                state.getClassByIdStatus = 'fetched';
                state.classes = payload;
                state.error = null;
            })
            .addCase(getClassByIdAction.rejected, (state, { error }) => {
                state.getClassByIdStatus = 'error';
                state.error = error;
            });
        builder
            .addCase(getClassByNameAction.pending, (state) => {
                state.getClassByNameStatus = 'fetching';
                state.error = null;
            })
            .addCase(getClassByNameAction.fulfilled, (state, { payload }) => {
                state.getClassByNameStatus = 'fetched';
                state.classes = payload;
                state.error = null;
            })
            .addCase(getClassByNameAction.rejected, (state, { error }) => {
                state.getClassByNameStatus = 'error';
                state.error = error;
            });
        builder
            .addCase(getClassesPriceRangeAction.pending, (state) => {
                state.getClassesPriceRangeStatus = 'fetching';
                state.error = null;
            })
            .addCase(getClassesPriceRangeAction.fulfilled, (state, { payload }) => {
                state.getClassesPriceRangeStatus = 'fetched';
                state.classesPriceRange = payload;
                state.error = null;
            })
            .addCase(getClassesPriceRangeAction.rejected, (state, { error }) => {
                state.getClassesPriceRangeStatus = 'error';
                state.error = error;
            });
        builder
            .addCase(postClassAction.pending, (state) => {
                state.postClassStatus = 'fetching';
                state.error = null;
            })
            .addCase(postClassAction.fulfilled, (state, { payload }) => {
                state.postClassStatus = 'fetched';
                state.classes = payload;
                state.error = null;
            })
            .addCase(postClassAction.rejected, (state, { error }) => {
                state.postClassStatus = 'error';
                state.error = error;
            });
        builder
            .addCase(editClassAction.pending, (state) => {
                state.editClassStatus = 'fetching';
                state.error = null;
            })
            .addCase(editClassAction.fulfilled, (state, { payload }) => {
                state.editClassStatus = 'fetched';
                state.classes = payload;
                state.error = null;
            })
            .addCase(editClassAction.rejected, (state, { error }) => {
                state.editClassStatus = 'error';
                state.error = error;
            });

    },
});

export const resetClassesState = classesSlice.actions.reset;
export const classesReducer = classesSlice.reducer;
