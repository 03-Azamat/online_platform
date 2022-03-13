import axios from "axios";
import {GET_ACCORDION_COURSES, GET_COURSES, GET_SINGLE_COURSES} from "../types/actionTypes";

export const getCourses = () =>{
    return(dispatch) =>{
        axios('https://margulan.herokuapp.com/ru/api/v2/course-list/')
            .then(({data})=>{
                console.log(data, "courses")
                dispatch({type:GET_COURSES, payload:data })
            })
    }
}


export const getCoursesDetails = (id) =>{
    return(dispatch) =>{
        axios(`https://margulan.herokuapp.com/ru/api/v2/course-detail/${id}`)
            .then(({data})=>{
                console.log(data, "courDetails")
                dispatch({type:GET_SINGLE_COURSES, payload:data})
                // dispatch({type:GET_ACCORDION_COURSES , payload:data})
            })
    }
}



