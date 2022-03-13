import {GET_COURSES, GET_SINGLE_COURSES} from "../types/actionTypes";

const initialState = {
    courses: [],
    coursesDetails: {}
}


export const reducer = (state = initialState, action) => {
    console.log("payload:", action.payload)
    switch (action.type) {
        case GET_SINGLE_COURSES:
            console.log(action.payload)
            return {...state, coursesDetails: action.payload}

        case GET_COURSES:
            return {...state, courses: action.payload}

        default :
            return state
    }

}
