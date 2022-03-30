import { GET_ABOUT , GET_COURSES , GET_COURSES_LESSON , GET_SINGLE_COURSES } from "../types/actionTypes";

const initialState = {
    courses: [],
    coursesDetails: {},
    lessonDetails:[],
    aboutReducer:[]
}

export const reducer = (state = initialState, action) => {
    // console.log("payload:", action.payload)
    switch (action.type) {
        case GET_SINGLE_COURSES:
            console.log(action.payload, "coursesDetails")
            return {...state, coursesDetails: action.payload}

        case GET_COURSES:
            // console.log(action.payload, "COURSES")
            return {...state, courses: action.payload}

        case GET_COURSES_LESSON:
            console.log(action.payload , "lesson")
            return {...state, lessonDetails: action.payload}

        case GET_ABOUT:
            console.log(action.payload, "about")
            return {...state, aboutReducer: action.payload}

        default :
            return state
    }

}
