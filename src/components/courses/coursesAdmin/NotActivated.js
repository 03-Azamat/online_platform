import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getApplication} from "../../../redux/action/corsesAction";

const NotActivated = () => {

    const {getApp: act} = useSelector(s => s)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getApplication())
    },[])


    return (
        <div className="notAct">
            <div className="container">
                <div className="notAct--box">
                    {
                        act.map(el =>(
                            <div className="notAct--box__titles">
                                <p className="activeCourse--box__titles--title">{el.activation === false ? el.applicationcourse_name : ""}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default NotActivated;