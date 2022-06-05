import {
    GET_ABOUT,
    GET_APPLICATION,
    GET_COURSES,
    GET_COURSES_TEST,
    GET_POSITION,
    GET_SINGLE_COURSES,
    GET_USER,
    GET_IMG,
    USER_ID,
    GET_TEST_RESULTS, GET_APPLICATION_TWO, GET_PROPS, GET_IMG_PAS,
} from "../types/actionTypes";

import {publicApi} from "../../components/Auth/HTTP/publicApi";

const access = JSON.parse(localStorage.getItem("access"));
const dataID = JSON.parse(localStorage.getItem("dataID"));

export const getCourses = () => {
    return (dispatch) => {
        publicApi.get(`course-list/`)
            .then(({data}) => dispatch({type: GET_COURSES, payload: data}))
    }
}

export const getCoursesDetails = (id) => {
    return (dispatch) => {
        publicApi.get(`course-detail/${id}`)
            .then(({data}) => {
                localStorage.setItem("coursesId", JSON.stringify(data.id))
                dispatch({type: GET_SINGLE_COURSES, payload: data})
              dispatch(getTest(data.test.id))
                console.log(data)
            })
    }
}

export const getAbout = () => {
    return (dispatch) => {
        publicApi.get('about-createlist/')
            .then(({data}) => {
                    dispatch({type: GET_ABOUT, payload: data})
                }
            )

    }
}

export const getTest =  (id) => {
    return (dispatch) => {
       publicApi.get(`test-detailid/${id}/`)
            .then(({data}) => {
                console.log(data, "DATA")
                dispatch({type: GET_COURSES_TEST, payload: data})
            })
    }
}

export const getProps = (id) => {
    return (dispatch) => {
        publicApi.get(`props-list/`)
            .then(({data}) => {
                dispatch({type: GET_PROPS, payload: data})
            })
    }
}

export const getUser = () => {
    return (dispatch) => {
        if (access) {
            publicApi("users/me/", {
                headers: {
                    "Authorization": `Bearer ${access}`
                }
            }).then(({data}) => {
                localStorage.setItem("userId", JSON.stringify(data.id))
                dispatch({type: GET_USER, payload: data})
            })
        }
    }
}

export const UserId = () => {
    return (dispatch) => {
        if (access) {
            publicApi("users/me/", {
                headers: {
                    "Authorization": `Bearer ${access}`
                }
            }).then(({data}) => {
                dispatch({type: USER_ID, payload: data.id})
            })
        }
    }
}

export const getPosition = () => {
    return (dispatch) => {
        publicApi.get('data-list/')
            .then(async ({data}) => {
                if (data) {
                    let ppp = await data.filter(el => el.user === userId)
                    let ts = await ppp[0]
                    return dispatch({type: GET_POSITION, payload: ts})
                } else {
                    return data
                }
            })
    }
}

const userId = JSON.parse(localStorage.getItem("userId"));
export const getImg = () => {
    return (dispatch) => {
        publicApi.get(`photo-list`)
            .then(({data}) => {
                if (data) {
                    const sss = data.filter(el => el.user === userId)
                    let result = sss[0]
                    return dispatch({type: GET_IMG, payload: result})
                }

            })
    }
}


export const getImgPas = () => {
    return (dispatch) => {
        publicApi.get(`/pasport-createlist/${userId}/`)
            .then(({data}) => {
                if (data) {
                    const sss = data.filter(el => el.user === userId)
                    let result = sss[0]
                    return dispatch({type: GET_IMG_PAS, payload: result})
                }

            })
    }
}

export const getApplication = () => {
    return (dispatch) => {
        publicApi.get(`ApplicationToAdmin-List/`)
            .then(({data}) => {
                if (data){
                    let app = data.filter(el => el.user === userId)
                    return dispatch({type: GET_APPLICATION, payload: app})
                }
            })
    }
}

const coursesId = JSON.parse(localStorage.getItem("coursesId"))
export const getMyCourse = () => {
    return (dispatch) => {
        publicApi(`ApplicationToAdmin-List/`)
            .then(({data}) => {
                if (data) {
                    let result = data.filter(el => el.user === userId)
                    let resultTwo = result[0]
                    return dispatch({type: GET_APPLICATION_TWO, payload: resultTwo})

                }
            })
    }
}

export const getTestResults = () => {
    return (dispatch) => {
        publicApi.get(`scoreboard-Create-list/`)
            .then(({data}) => {
                if (data){
                    const testRest = data.filter(el => el.user === userId)
                    dispatch({type: GET_TEST_RESULTS, payload: testRest})
                }
            })
    }
}




