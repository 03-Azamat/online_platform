import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getApplication} from "../../../redux/action/corsesAction";

const ActiveCourse = () => {
    const {getApp: act} = useSelector(s => s)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getApplication())
    },[])
    return (
        <div className="activeCourse">
            <div className="container">
                <div className="activeCourse--box">
                        {
                            act.map((el , idx) =>(
                                <div className="activeCourse--box__titles" key={el.id}>
                                    <p className="activeCourse--box__titles--title">{+idx === el.length ? idx : ""}{el.activation === true ? el.applicationcourse_name : ""}</p>
                                </div>
                            ))
                        }
                </div>
            </div>
        </div>
    );
};

export default ActiveCourse;