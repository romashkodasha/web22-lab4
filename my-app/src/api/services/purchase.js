import {deleteApiRequest, getApiRequest, patchApiRequest, postApiRequest} from "../index";

export const PurchaseStatus =Object.freeze({
    BOOKED: 'BOOKED',
    PAID:'PAID',
    PASSED:'PASSED'
});
export const getPurchase = async (params)=>{
    return await getApiRequest('/purchase/', {
        params:{
            user_id:params?.user_id,
            status: params?.status
        }
    })
}

export const postPurchase = async (params)=>{
    return await postApiRequest('/purchase/', params);
}

export const deletePurchase = async (id)=>{
    return await deleteApiRequest(`/purchase/${id}/` )
}

export const patchPurchase = async (params) => {
    const { id, ...other_params } = params;
    return await patchApiRequest(`/purchase/${id}/`, other_params);
};

