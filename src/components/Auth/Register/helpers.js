import cookies from "js-cookie";
import {useEffect} from "react";
import axios from "axios";


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
    cookies.remove("access")
    cookies.remove("refresh")
    localStorage.removeItem("access")
    localStorage.removeItem("refresh")
    // localStorage.removeItem("userID")
}
export const dataId = (response) => {
    localStorage.setItem("dataID", JSON.stringify(response.data.id))
}

// export const userId = () => {
//     const checkUser = cookies.get("userId")
//    if (checkUser){
//        if (localStorage.getItem("userId")){
//            return JSON.parse(localStorage.getItem("userId"))
//        }
//        return false
//    }
// }
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
