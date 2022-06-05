import {
    GET_ABOUT,
    GET_COURSES,
    GET_COURSES_TEST,
    GET_COURSES_TEST_DETAILS,
    GET_SINGLE_COURSES,
    GET_USER,
    GET_POSITION,
    GET_IMG,
    USER_ID,
    GET_POS,
    GET_TEST_RESULTS,
    GET_APPLICATION,
    GET_ACTIVE_CASE,
    GET_APPLICATION_TWO, GET_PROPS,
    GET_IMG_PAS,
} from "../types/actionTypes";
const initialState = {
    courses: [],
    coursesDetails: {},
    aboutReducer:[],
    question:{},
    questionDetails:{},
    admin: [],
    getUser:{},
    UserId: null,
    getPosition:{},
    getPos:{},
    getImg:{},
    getApp:[],
    getAppTwo:[],
    getCase:[],
    getTestResult:[],
    props:[],
    testResult: [],
    getImgPas:{},
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
            return {...state,getUser: action.payload, UserId:action.payload.id}
        case USER_ID:
            return {...state,UserId: action.payload}
        case GET_POSITION:
            return {...state,getPosition: action.payload}
        case GET_POS:
            return {...state,getPos: action.payload}
        case GET_IMG:
            return {...state,getImg: action.payload}
        case GET_IMG_PAS:
            return {...state,getImgPas: action.payload}
        case GET_TEST_RESULTS:
            return {...state,getTestResult: action.payload}
        case GET_APPLICATION:
            return {...state, getApp: action.payload}
        case GET_APPLICATION_TWO:
            return {...state, getAppTwo: action.payload}
        case GET_ACTIVE_CASE:
            return {...state, getCase: action.payload}
        case GET_PROPS:
            return {...state, props: action.payload}
        default :
            return state
    }
}