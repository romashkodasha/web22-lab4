import {createAsyncThunk} from "@reduxjs/toolkit";
import {
    getClassById,
    getClassByName,
    getClasses,
    getClassesPriceRange, patchClassById,
    postClass
} from "../../api/services/classes";

export const getClassesAction = createAsyncThunk('classes/classes', (params)=>{
    return getClasses(params);
})

export const getClassByIdAction = createAsyncThunk('classes/classId', (id)=>{
    return getClassById(id);
})

export const  getClassByNameAction = createAsyncThunk('classes/className', (name)=>{
    return getClassByName(name);
})

export const getClassesPriceRangeAction = createAsyncThunk('classes/price-range', () =>{
    return getClassesPriceRange();
})

export const postClassAction = createAsyncThunk('classes/postclass', (params)=>{
    return postClass(params)
})

export const editClassAction = createAsyncThunk('classes/patchclass', (params)=>{
    return patchClassById(params);
})