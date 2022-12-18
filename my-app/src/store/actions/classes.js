import {createAsyncThunk} from "@reduxjs/toolkit";
import {getClassById, getClassByName, getClasses, getClassesPriceRange} from "../../api/services/classes";

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
