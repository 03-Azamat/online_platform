import {
    GET_ABOUT, GET_ADMIN,
    GET_COURSES,
    GET_COURSES_TEST,
    GET_COURSES_TEST_DETAILS,
    GET_SINGLE_COURSES,
    GET_USER,
    GET_POSITION, GET_APPLICATION,
    // DELETE_POSITION,
} from "../types/actionTypes";
import {publicApi} from "../../components/Auth/HTTP/publicApi";

const initialState = {
    courses: [],
    coursesDetails: {},
    aboutReducer:[],
    question:{},
    questionDetails:{},
    admin: [],
    getUser:{},
    getPosition:{},
    getApp:[],
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SINGLE_COURSES:
            return {...state, coursesDetails: action.payload}

        case GET_COURSES:
            return {...state, courses: action.payload}

        case GET_ABOUT:
            return {...state, aboutReducer: action.payload}

        case GET_COURSES_TEST:
            return {...state, question: action.payload}

        case GET_COURSES_TEST_DETAILS:
            return {...state, questionDetails: action.payload}

        case GET_USER:
            return {...state,getUser: action.payload}

        case GET_POSITION:
            return {...state,getPosition: action.payload}

        case GET_APPLICATION:
            return {...state, getApp: action.payload}

        default :
            return state
    }

}
