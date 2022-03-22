import axios from "axios";
import {GET_ABOUT, GET_COURSES, GET_SINGLE_COURSES} from "../types/actionTypes";

export const getCourses = () =>{
    return(dispatch) =>{
        axios(`https://djangorestapp.herokuapp.com/course-list/`)
            .then(({data})=> dispatch({type:GET_COURSES, payload:data}))
    }
}

export const getCoursesDetails = (id) =>{
    return(dispatch) =>{
        axios(`https://djangorestapp.herokuapp.com/course-detail/${id}/`)
            .then(({data})=> dispatch({type:GET_SINGLE_COURSES, payload:data}))
    }
}


export const getAbout = () =>{
    return (dispatch) =>{
        axios(`https://djangorestapp.herokuapp.com/about-createlist/`)
            .then(({data})=> dispatch({type:GET_ABOUT , payload:data}))
    }
}
