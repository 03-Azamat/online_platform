import axios from "axios";
export const API =  "https://djangorestapp.herokuapp.com/"

export const publicApi =  axios.create({
    baseURL:API
})
