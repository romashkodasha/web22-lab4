import axios from "axios";
export const api = axios.create({
        baseURL: 'http://127.0.0.1:8000/',
        withCredentials: true,});

export const getApiRequest = (link,body) =>
    api.get(link,body)
        .then((res)=>res.data)
        .catch((err) => {console.log(err);
        })

export const postApiRequest = (link,body) =>
    api.post(link,body)
        .then((res)=>res.data)
        .catch((err) => {console.log(err);
        })

export const deleteApiRequest = (link,body) =>
    api.delete(link,body)
        .then((res)=>res.data)
        .catch((err) => {console.log(err);
        })
