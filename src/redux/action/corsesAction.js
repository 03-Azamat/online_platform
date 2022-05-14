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
    GET_POS,
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
    console.log("ididid",id)
    return(dispatch) =>{
        console.log("course action is on")
        publicApi.get(`course-detail/${id}/`)
        axios(`https://djangorestapp.herokuapp.com/course-detail/${id}/`)
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


// const persons = useSelector(state => state.getUser);
// const UserId = persons.id
// const [id ,setId] = useState({})

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


//
// export const getPosition = () => {
//   return(dispatch) => {
//           if (dataID){
//               publicApi.get(`data-detailID/${dataID}/`)
//                   .then(({data}) => {
//                       dispatch({type:GET_POSITION,payload:data})
//                   })
//           }
//   }
// }


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
                console.log(data.user, "user_app")
                    dispatch({type:GET_APPLICATION, payload:data})
            })
    }
}

export const getMyCourse = () =>{
    return(dispatch) => {
        axios(`https://djangorestapp.herokuapp.com/scoreboard-Create-list/`)
            .then(({data})=>{
                    dispatch({type:GET_ACTIVE_CASE, payload:data})

                console.log(data, "DDDDDD")
            })
    }
}


