import axios from "axios";
import {api} from "../../http/http";

import {
    GET_ABOUT, GET_ACTIVE_CASE,
    GET_APPLICATION,
    GET_COURSES,
    GET_COURSES_TEST,
    GET_POSITION,
    GET_SINGLE_COURSES,
    GET_USER,
    GET_IMG,
} from "../types/actionTypes";

import {publicApi} from "../../components/Auth/HTTP/publicApi";
import {useEffect} from "react";
import {useSelector} from "react-redux";

const access = JSON.parse(localStorage.getItem("access"));
const dataID = JSON.parse(localStorage.getItem("dataID"));
const IdImg = JSON.parse(localStorage.getItem("imgId"));



export const getCourses = () =>{
    return(dispatch) =>{
        publicApi.get(`course-list/`)
            .then(({data})=> dispatch({type:GET_COURSES, payload:data}))
    }
}

export const getCoursesDetails = (id) =>{
    return(dispatch) =>{
        console.log("course action is on")
        publicApi.get(`course-detail/${id}/`)
            .then(({data})=>{
                console.log(data, "data-details-action")
                dispatch({type:GET_SINGLE_COURSES, payload:data})
            })
    }
}

export const getAbout = () =>{
    return (dispatch) =>{
        publicApi.get('about-createlist/')
           .then(({data})=> dispatch({type:GET_ABOUT , payload:data}))
    }
}

export const getTest = (id) =>{
    return(dispatch) =>{
        publicApi.get(`test-detailid/${id}/`)
            .then(({data})=>{
                console.log(data,"DATA")
                dispatch({type:GET_COURSES_TEST, payload:data})
            })
    }
}



export const getTestDetails = (id) =>{
    return(dispatch) =>{
        publicApi.get(`question-detailid/${id}/`)
            .then(({data})=> {
                dispatch({type: GET_COURSES_TEST, payload: data})
                console.log(data, "accard")
            })
    }
}



export const getUser = () => {
    return(dispatch) => {
        if (access){
            publicApi("users/me/", {
                headers: {
                    "Authorization": `Bearer ${access}`
                }
            }).then(({data}) => {
                dispatch({type:GET_USER,payload:data})
            })
        }
    }
}


export const getPosition = () => {
  return(dispatch) => {
          if (dataID){
              publicApi.get(`data-detailID/${dataID}/`, {
                  headers: {
                      "Authorization": `Bearer ${access}`
                  }
              }).then(({data}) => {
                      dispatch({type:GET_POSITION,payload:data})
                  })
          }
  }
}

export const getImg = () => {
    return (dispatch) => {
        axios.get(`https://djangorestapp.herokuapp.com/photo-list`)
            .then(({data}) => {
                const sss = data.filter(el => el.user === 7)
                const sts = sss[0]
                dispatch({type: GET_IMG, payload: sts})
            })
    }
}

   // return(dispatch) => {
   //     if (IdImg){
   //         publicApi.get(`photo-list/`)
   //             .then(({data}) => {
   //                 dispatch({type:GET_IMG,payload:data})
   //             })
   //     }
   // }
export const getApplication = () =>{
    return(dispatch) => {
        axios(`https://djangorestapp.herokuapp.com/ApplicationToAdmin-List/`)
            .then(({data})=>{
                dispatch({type:GET_APPLICATION, payload:data})
            })
    }
}

export const getMyCourse = () =>{
    return(dispatch) => {
        axios(`https://djangorestapp.herokuapp.com/scoreboard-Create-list/`)
            .then(({data})=>{dispatch({type:GET_ACTIVE_CASE, payload:data})
                console.log(data, "DDDDDD")
            })
    }
}

// export const deletePosition = () => {
//     return(dispatch) => {
//         axios.delete(`https://djangorestapp.herokuapp.com/data-delete/${dataID}/`)
//             .then(({data}) => {
//                 dispatch({type:DELETE_POSITION,payload:data})
//             } )
//     }
// }

