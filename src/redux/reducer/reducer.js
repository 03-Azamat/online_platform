import {
    GET_ABOUT, GET_ADMIN,
    GET_COURSES,
    GET_COURSES_TEST,
    GET_COURSES_TEST_DETAILS,
    GET_SINGLE_COURSES,
    GET_USER,
    GET_POSITION,
    GET_IMG,
    // DELETE_POSITION,
} from "../types/actionTypes";
import {publicApi} from "../../components/Auth/HTTP/publicApi";
import {getImg} from "../action/corsesAction";

const initialState = {
    courses: [],
    coursesDetails: {},
    aboutReducer:[],
    question:[],
    questionDetails:{},
    admin: [],
    getUser:{},
    getPosition:{},
    getImg:{},
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
        case GET_IMG:
            return {...state,getImg: action.payload}

        // case DELETE_POSITION:
        //     return {...state,deletePosition: action.payload}

        case GET_ADMIN:
            return {...state, admin :action.payload }


        default :
            return state
    }

}
