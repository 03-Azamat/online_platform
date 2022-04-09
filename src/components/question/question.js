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
                            elem?.choicetest?.map(el => (
                                <div>
                                    <p className="question--block--box--title">{el.name}</p>
                                    <p className="question--block--box--title">{el.text}</p>
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