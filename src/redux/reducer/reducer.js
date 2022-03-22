import {GET_ABOUT, GET_COURSES, GET_SINGLE_COURSES} from "../types/actionTypes";

const initialState = {
    courses: [],
    coursesDetails: {},
    aboutReducer:[]
}

export const reducer = (state = initialState, action) => {
    console.log("payload:", action.payload)
    switch (action.type) {
        case GET_SINGLE_COURSES:
            console.log(action.payload)
            return {...state, coursesDetails: action.payload}

        case GET_COURSES:
            console.log(action.payload)
            return {...state, courses: action.payload}

        case GET_ABOUT:
            console.log(action.payload)
            return {...state, aboutReducer: action.payload}
        default :
            return state
    }

}
