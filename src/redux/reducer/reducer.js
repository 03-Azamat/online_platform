import {
    GET_ABOUT,
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
    questionDetails:{}
}

export const reducer = (state = initialState, action) => {
    // console.log("payload:", action.payload)
    switch (action.type) {
        case GET_SINGLE_COURSES:
            console.log(action.payload,"coursesDetails")
            return {...state, coursesDetails: action.payload}

        case GET_COURSES:
<<<<<<< HEAD
            // console.log(action.payload,"COURSES")
=======
<<<<<<< HEAD
            // console.log(action.payload, "COURSES")
=======
            console.log(action.payload,"COURSES")
>>>>>>> a411ed00da3073da8d2afb2d321b24216ea69465
>>>>>>> 0f746bd4c5402f4e3797c08f763e289f623df28e
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

        default :
            return state
    }

}
