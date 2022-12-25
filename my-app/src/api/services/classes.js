import {getApiRequest, postApiRequest, patchApiRequest} from "../index";

export const getClasses = async (params)=>{
    return await getApiRequest('/classes/',{
        params:{
            minPrice:params?.minPrice,
            maxPrice:params?.maxPrice
        }
    })
}

export const getClassById = async (id) =>{
    return await getApiRequest(`/classes/${id}/`)
}

export const getClassByName = async (name) =>{
    return await getApiRequest(`/classes?search=${name}/`)
}

export const getClassesPriceRange = async (params)=>{
    return await getApiRequest('/classes/price_range/',{
        params:{
            //TODO
        }
    })
}

export const postClass = async (params)=>{
    return await postApiRequest('/classes/', params);
}

export const patchClassById = async (params)=>{
    const {id, ...param}=params;
    return await patchApiRequest(`/classes/${id}/`, param);
}