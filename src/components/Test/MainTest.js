import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCoursesDetails} from "../../redux/action/corsesAction";
import {useParams} from "react-router-dom";

const MainTest = () => {
    const id = useParams()
    const {coursesDetails: test} = useSelector(s => s)
    const dispatch = useDispatch()

    useEffect((id)=>{
        dispatch(getCoursesDetails(id))
    },[])

    return (
        <div>
            <div className="test">
                {
                    test.map(el=>(
                        <p dangerouslySetInnerHTML={{__html:el.title}}/>
                    ))
                }
            </div>
        </div>
    );
};

export default MainTest;