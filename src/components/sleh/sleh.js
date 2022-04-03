import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCoursesDetails, getTest} from "../../redux/action/corsesAction";
import {useParams} from "react-router-dom";
import SlehDetails from "./slehDetails";

const Sleh = () => {
    const {testId} = useParams()
    console.log(useParams())
    const {coursesDetail : elem} = useSelector(s => s)
    const testElem = useSelector(state => state.question)
    const dispatch = useDispatch()
    console.log(testId, "idTest")
    console.log(testElem, "testElem")

    useEffect(()=>{
        dispatch(getTest(testId))
        dispatch(getCoursesDetails(testId))
    },[])



    return (
        <div className="test">
            <div className="container">
                            <div key={testElem.testId} className="test-rectangle">
                                <div className="test-rectangle-1"/>
                                <div className="test-text-1">
                                    <p>15</p>
                                    <p className="test-text">Бизнес аналитик</p>
                                    <p>1/20</p>
                                </div>
                                {
                                    testElem.map(el=>(
                                        <div className="text-sm">
                                            <p>{el.title}</p>
                                            {
                                                el.flags?.map(item=>(
                                                    <div>
                                                        <p className="ml-10 bg-gray-800 text-white">{item.text}</p>
                                                        <p>{item.test}</p>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="buttons">
                                <button className="test-but">предыдущий</button>
                                <button className="test-but-1">Следуший</button>
                            </div>


            </div>
        </div>
    );
};

export default Sleh;