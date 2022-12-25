import { createAsyncThunk } from '@reduxjs/toolkit';
import {authorization, getUsers} from '../../api/services/user';
import {registration} from "../../api/services/user";
import {unAuthorize} from "../../api/services/user";

export const authorizationAction = createAsyncThunk('user/login', (params) => {
    return authorization(params);
});
export const registrationAction = createAsyncThunk('user/registration', (params) => {
    return registration(params);
});

export const unAuthorizeAction = createAsyncThunk('user/logout', () => {
    return unAuthorize();
});

export const getUsersAction = createAsyncThunk('user/get',()=>{
    return getUsers();
})