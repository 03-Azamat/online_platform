import {
    GET_ABOUT, GET_ADMIN,
    GET_COURSES,
    GET_COURSES_TEST,
    GET_COURSES_TEST_DETAILS,
    GET_SINGLE_COURSES
} from "../types/actionTypes";

const initialState = {
    courses: [],
    coursesDetails: {},
    aboutReducer:[],
    question:[],
    questionDetails:{},
    admin: null
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

        case GET_ADMIN:
            return {...state, admin :action.payload }


        default :
            return state
    }

}
