import React, {useEffect, useState} from 'react';
import {NavLink, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getTest} from "../../redux/action/corsesAction";
import QuestionCard from "./questionCard";
import questionCard from "./questionCard";

const Question = () => {
    const [score, setScore] = useState(0)
    const [optionChosen, setOptionChosen] = useState("")

    const {testId} = useParams()
    console.log(useParams())

    const elem = useSelector(state => state.question)
    const dispatch = useDispatch()

    console.log(testId, "TestID")
    console.log(elem, "testElem")

    useEffect(() => {
        dispatch(getTest(testId))
    }, [])

    return (
        <section className="flex align-middle justify-center w-full min-h-screen">
            <div className="bg-gray-500 text-white w-7/12 h-56" key={elem.idTest}>
                <div>{elem.name}</div>
                <div dangerouslySetInnerHTML={{__html:elem.text}}/>
                <div>{elem.timer}</div>
                {
                    elem?.choicetest?.slice(0,1).map(el =>(
                            <div>
                              <p>{el.question.title}</p>
                                {
                                    el.question.flags.map(e=>(
                                        <div>
                                            <button>{e.text}</button>
                                        </div>
                                    ))
                                }
                            </div>
                    ))
                }
            </div>
        </section>
    );
};

export default Question;