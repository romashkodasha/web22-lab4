import {deleteApiRequest, getApiRequest, postApiRequest} from "../index";

export const PurchaseStatus =Object.freeze({
    BOOKED: 'BOOKED',
    PAID:'PAID',
    PASSED:'PASSED'
});
export const getPurchase = async (params)=>{
    return await getApiRequest('/purchase/', params )
}

export const postPurchase = async (params)=>{
    return await postApiRequest('/purchase/', params);
}

export const deletePurchase = async (id)=>{
    return await deleteApiRequest(`/purchase/${id}/` )
}



