import {deleteApiRequest, getApiRequest, postApiRequest} from "../index";

export const getPurchase = async ()=>{
    return await getApiRequest('/purchase/' )
}

export const postPurchase = async (params)=>{
    return await postApiRequest('/purchase/', params);
}

export const deletePurchase = async (id)=>{
    return await deleteApiRequest(`/purchase/${id}/` )
}



