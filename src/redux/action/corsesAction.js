import axios from "axios";

import {
    GET_ABOUT, GET_ACTIVE_CASE,
    GET_APPLICATION,
    GET_COURSES,
    GET_COURSES_TEST,
    GET_POSITION,
    GET_SINGLE_COURSES,
    GET_USER,
} from "../types/actionTypes";


const access = JSON.parse(localStorage.getItem("access"));
const dataID = JSON.parse(localStorage.getItem("dataID"));

export const getCourses = () =>{
    return(dispatch) =>{
        axios(`https://djangorestapp.herokuapp.com/course-list/`)
            .then(({data})=> dispatch({type:GET_COURSES, payload:data}))
    }
}

export const getCoursesDetails = (id) =>{
    return(dispatch) =>{
        axios(`https://djangorestapp.herokuapp.com/course-detail/${id}/`)
            .then(({data})=>{
                console.log(data, "data-details-action")
                dispatch({type:GET_SINGLE_COURSES, payload:data})
            })
    }
}

export const getAbout = () =>{
    return (dispatch) =>{
        axios('https://djangorestapp.herokuapp.com/about-createlist/')
           .then(({data})=> dispatch({type:GET_ABOUT , payload:data}))
    }
}

export const getTest = (id) =>{
    return(dispatch) =>{
        axios(`https://djangorestapp.herokuapp.com/test-detailid/${id}/`)
            .then(({data})=>{
                console.log(data,"DATA")
                dispatch({type:GET_COURSES_TEST, payload:data})
            })
    }
}



export const getTestDetails = (id) =>{
    return(dispatch) =>{
        axios(`https://djangorestapp.herokuapp.com/question-detailid/${id}/`)
            .then(({data})=> {
                dispatch({type: GET_COURSES_TEST, payload: data})
                console.log(data, "accard")
            })
    }
}

export const getUser = () => {
    return(dispatch) => {
        if (access){
            axios("https://djangorestapp.herokuapp.com/users/me/", {
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
              axios(`https://djangorestapp.herokuapp.com/data-detailID/${dataID}/`, {
                  headers: {
                      "Authorization": `Bearer ${access}`
                  }
              })
                  .then(({data}) => {
                      dispatch({type:GET_POSITION,payload:data})
                  })
          }
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

