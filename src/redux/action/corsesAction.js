import axios from "axios";
import {GET_ABOUT, GET_ADMIN, GET_COURSES, GET_COURSES_TEST, GET_SINGLE_COURSES, GET_USER} from "../types/actionTypes";

const access = JSON.parse(localStorage.getItem("access"));

export const getCourses = () =>{
    return(dispatch) =>{
        axios(`https://djangorestapp.herokuapp.com/course-list/`)
            .then(({data})=> dispatch({type:GET_COURSES, payload:data}))
    }
}

export const getCoursesDetails = (id) =>{
    return(dispatch) =>{
        console.log("course action is on")
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
                console.log(data)
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

export const getAdmin = (id) =>{
    return(dispatch) =>{
        axios(`https://djangorestapp.herokuapp.com/ApplicationToAdmin-UpdateDelete/${id}/`)
            .then(({data})=> {
                dispatch({type:GET_ADMIN, payload:data})
            })
    }
}

export const getUser = () => {

    return(dispatch) => {
        axios("https://djangorestapp.herokuapp.com/users/me/", {
            headers: {
                "Authorization": `Bearer ${access}`
            }
        }).then(({data}) => {
            dispatch({type:GET_USER,payload:data})
        })
    }
}


