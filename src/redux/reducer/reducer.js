import {
    GET_ABOUT,
    GET_COURSES,
    GET_COURSES_TEST,
    GET_COURSES_TEST_DETAILS,
    GET_SINGLE_COURSES,
    GET_USER,
    GET_POSITION,
    // DELETE_POSITION,
} from "../types/actionTypes";
import {publicApi} from "../../components/Auth/HTTP/publicApi";

const initialState = {
    courses: [],
    coursesDetails: {},
    aboutReducer:[],
    question:[],
    questionDetails:{},
    getUser:{},
    getPosition:{},
    // deletePosition:{}
}

export const reducer = (state = initialState, action) => {
    console.log("payload:", action.payload)
    switch (action.type) {
        case GET_SINGLE_COURSES:
            console.log(action.payload,"coursesDetails")
            return {...state, coursesDetails: action.payload}

        case GET_COURSES:
            // console.log(action.payload,"COURSES")
            return {...state, courses: action.payload}

        case GET_ABOUT:
            console.log(action.payload,"about")
            return {...state, aboutReducer: action.payload}

        case GET_COURSES_TEST:
            console.log(action.payload ,"TEST")
            return {...state, question: action.payload}

        case GET_COURSES_TEST_DETAILS:
            console.log(action.payload , "question")
            return {...state, questionDetails: action.payload}
        case GET_USER:
            return {...state,getUser: action.payload}
        case GET_POSITION:
            return {...state,getPosition: action.payload}
        // case DELETE_POSITION:
        //     return {...state,deletePosition: action.payload}

        default :
            return state
    }

}
