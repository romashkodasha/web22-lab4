import {getApiRequest, postApiRequest} from './../index';

export const authorization = async (params)=> {
    return await postApiRequest(`/login/`, params);
};

export const registration = async (params)=> {
    return await postApiRequest(`/registration/`, params);
};

export const unAuthorize = async () => {
    return await postApiRequest(`/logout/`);
};

export const getUsers = async ()=>{
    return await getApiRequest(`/users/`);
}