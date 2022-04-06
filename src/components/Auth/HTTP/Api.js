import axios from "axios";
import {API} from "./publicApi";


const privateApi = axios.create({
    baseURL:API
})
export  const loginLogin = privateApi.interceptors.request.use((config) => {
     config.headers.Authorization = `Bearer${localStorage.getItem("access")}`
     return config
 })

privateApi.interceptors.response.use((config) =>{
    return config
}, async (err) => {
     const originalRequest = err.config
    if (err.status === 401 && err.config  && err.config._isRetry){
        originalRequest._isRetry = true
        try{
            const response = await axios.post("/jwt/refresh/",{
                refresh: localStorage.getItem("refresh")
            })
            localStorage.setItem("access",response.data.access)
            return privateApi.request(originalRequest)
        }catch (e){
            return Promise.reject(e)
        }
    } else {
        return Promise.reject(err)
    }
})
