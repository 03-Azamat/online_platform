import cookies from "js-cookie";
import {publicApi} from "../HTTP/publicApi";
import {toast} from "react-toastify";
import {useState} from "react";
const dataID = JSON.parse(localStorage.getItem("dataID"));



export const authenticate = (response) => {
    cookies.set("access", response.data.access, {expiresIn: "3d"})
    cookies.set("refresh", response.data.refresh, {expiresIn: "3d"})
    localStorage.setItem("access", JSON.stringify(response.data.access))
    localStorage.setItem("refresh", JSON.stringify(response.data.refresh))

}

export  const isAuth = () => {
    const checkToken = cookies.get("access")
    if (checkToken){
        if (localStorage.getItem("access")){
            return JSON.parse(localStorage.getItem("access"))
        } else {
            return false
        }
    }
}

export const logout = () => {
    window.scroll(0,0)
    cookies.remove("access")
    cookies.remove("refresh")
    localStorage.removeItem("access")
    localStorage.removeItem("refresh")
    localStorage.removeItem("userId")
}
export const dataId = (response) => {
    localStorage.setItem("dataID", JSON.stringify(response.data.id))
}

export const imgId = (response) => {
    localStorage.setItem("imgId", JSON.stringify(response.data.id))
    cookies.set("cookiesImgID", response.data.id)

}


export const deleteId =() => {
    localStorage.removeItem("dataID")
}
 export const dataAddID = () => {
     const checkUser = localStorage.getItem("dataID")
    if (checkUser){
        if (localStorage.getItem("dataID")){
           return JSON.parse(localStorage.getItem("dataID"))
        }
        return false
    }
 }

function refreshPage() {
    window.location.reload(false);
}


