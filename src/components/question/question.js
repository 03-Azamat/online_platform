import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getTest} from "../../redux/action/corsesAction";

const Question = () => {

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
        <section id="question">
            <div className="container  flex justify-center align-middle">
                <div className="question--block" key={elem.testId}>
                    <div className="question--block--box">

                        {
                            elem.slice(0, 1).map(el => (
                                <div>
                                    <p className="question--block--box--title">{el.title}</p>
                                    {
                                        el?.flags?.map(item => (
                                            <button>{item.text}</button>
                                        ))
                                    }
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Question;