import axios from "axios";
import {GET_ABOUT, GET_COURSES, GET_COURSES_LESSON, GET_COURSES_TEST, GET_SINGLE_COURSES} from "../types/actionTypes";

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



export const getLesson = (id) =>{
    return(dispatch) =>{
            axios(`https://djangorestapp.herokuapp.com/choicetopic-detail/${id}/`)
            .then(({data})=> dispatch({type:GET_COURSES_LESSON, payload:data}))
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
            .then(({data})=>dispatch({type:GET_COURSES_TEST, payload:data})).catch((error) => {
            console.log(error)
        })
    }
}
