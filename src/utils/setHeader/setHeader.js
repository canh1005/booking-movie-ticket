import api from "../../API/api";

export const setHeader=(token)=>{
    if (token) {
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`
    }else{
        delete api.defaults.headers.common['Authorization'];
    }

}