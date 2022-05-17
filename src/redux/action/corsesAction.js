import axios from "axios";

import {
    GET_ABOUT, GET_ACTIVE_CASE,
    GET_APPLICATION,
    GET_COURSES,
    GET_COURSES_TEST,
    GET_POSITION,
    GET_SINGLE_COURSES,
    GET_USER,
    GET_IMG,
    USER_ID,
    GET_TEST_RESULTS, GET_APPLICATION_TWO,
} from "../types/actionTypes";

import {publicApi} from "../../components/Auth/HTTP/publicApi";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import person from "../../components/Auth/Person/Person";

const access = JSON.parse(localStorage.getItem("access"));
const dataID = JSON.parse(localStorage.getItem("dataID"));

// const result = useSelector(state => state.getUser)


export const getCourses = () =>{
    return(dispatch) =>{
        publicApi.get(`course-list/`)
            .then(({data})=> dispatch({type:GET_COURSES, payload:data}))
    }
}

export const getCoursesDetails = (id) =>{
    return(dispatch) =>{
        axios(`https://djangorestapp.herokuapp.com/course-detail/${id}/`)
            .then(({data})=>{
                localStorage.setItem("coursesId" , JSON.stringify(data.id))
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
                    localStorage.setItem("userId", JSON.stringify(data.id))
                    dispatch({type:GET_USER,payload:data})
            })
        }
    }
}
export const UserId = () => {
    return(dispatch) => {
        if (access){
            publicApi("users/me/", {
                headers: {
                    "Authorization": `Bearer ${access}`
                }
            }).then(({data}) => {
                dispatch({type:USER_ID,payload:data.id})
            })
        }
    }
}

export const getPosition = () => {
    return(dispatch) => {
           axios.get('https://djangorestapp.herokuapp.com/data-list/')
            .then( async ({data}) => {
                    if (data){
                        let ppp = await data.filter(el => el.user === userId )
                        let  ts = await ppp[0]
                        return  dispatch({type:GET_POSITION,payload:ts})
                    } else {
                        return data
                    }
            })
    }
}


const userId = JSON.parse(localStorage.getItem("userId"));
export const getImg = () => {
    return (dispatch) => {
               axios.get(`https://djangorestapp.herokuapp.com/photo-list`)
                   .then(({data}) => {
                       if (data){
                           const  sss =  data.filter(el => el.user === userId)
                           let result =  sss[0]
                           return dispatch({type: GET_IMG, payload: result})
                       }

           })
    }
}
export const getApplication = () =>{
    return(dispatch) => {
        axios(`https://djangorestapp.herokuapp.com/ApplicationToAdmin-List/`)
            .then(({data})=>{
                    dispatch({type:GET_APPLICATION, payload:data})
            })
    }
}

const coursesId = JSON.parse(localStorage.getItem("coursesId"))
export const getMyCourse = () =>{
    return(dispatch) => {
        axios(`https://djangorestapp.herokuapp.com/ApplicationToAdmin-List/`)
            .then(({data})=>{
                if (data){
                   let result = data.filter(el => el.user === userId)
                    let resultTwo = result[0]
                    return dispatch({type:GET_APPLICATION_TWO, payload:resultTwo})

                }
            })
    }
}

export const getTestResults = () =>{
    return(dispatch) => {
        axios(`https://djangorestapp.herokuapp.com/scoreboard-Create-list/`)
            .then(({data})=>{
                dispatch({type:GET_TEST_RESULTS, payload:data})

            })
    }
}

// export const getTestResults = () =>{
//     return(dispatch) => {
//         axios(`https://djangorestapp.herokuapp.com/scoreboard-Create-list/`)
//             .then(({data})=>{
//                 if (data){
//                     const rs = data.filter(el => el.user === userId)
//                     const testResult = rs[0]
//                     dispatch({type:GET_TEST_RESULTS, payload:testResult})
//                 }
//                 console.log("GET_TEST_RESULTS")
//             })
//     }
// }





