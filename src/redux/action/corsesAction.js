import axios from "axios";
import {GET_ABOUT, GET_COURSES, GET_COURSES_TEST, GET_SINGLE_COURSES} from "../types/actionTypes";

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
        axios(`https://djangorestapp.herokuapp.com/question-list/${id}/`)
            .then(({data})=>dispatch({type:GET_COURSES_TEST, payload:data}))
            .catch((error) => {
            console.log(error)
        })
    }
}

export const getTestDetails = (id) =>{
    return(dispatch) =>{
        axios(`https://djangorestapp.herokuapp.com/question-detaild/${id}/`)
            .then(({data})=>dispatch({type:GET_COURSES_TEST, payload:data}))
            .catch((error) => {
            console.log(error)
        })
    }
}
