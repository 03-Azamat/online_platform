import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getTest} from "../../redux/action/corsesAction";


const Question = () => {
    const {testId} = useParams()
    const elem = useSelector(state => state.question)
    const dispatch = useDispatch()

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false)
    const [score, setScore] = useState(0)
    const handleAnswerButtonClick = (boo) => {
        if (boo === true) {
            setScore(score + 1)
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < elem.choicetest.length) {
            setCurrentQuestion(nextQuestion)
        } else {
            setShowScore(true)
        }
    }

    function result() {
        return  Math.round(100 / elem?.choicetest.length) * score
    }

    useEffect(() => {
        dispatch(getTest(testId))
    }, [])
    console.log(elem.choicetest, "111")
    return (
        <section className="flex align-middle justify-center w-full min-h-full">
            <div className="bg-gray-500 text-white w-7/12 h-56 h-full" key={elem.id}>
                {
                    showScore ? (
                        <div>
                            <p>You scored {score} out {elem?.choicetest.length}</p>
                            <div>
                                {result() > 50 ? `Тест пройден : ${result()} %`
                                    :
                                    `Тест не пройден ${result()} %`}
                            </div>
                        </div>
                    ) : (
                        <div>
                            <span>Вопрос № : {currentQuestion + 1}</span>/ Вопросы {elem?.choicetest?.length}
                            <div>
                                {
                                    elem?.choicetest?.question?.flags.map(el => (
                                        <div>
                                            <p>{el?.question?.title}</p>
                                            {
                                                el?.question?.flags.map((flag) => (
                                                    <div>
                                                        <button onClick={() => handleAnswerButtonClick(flag?.boo)}
                                                                className="bg-amber-400 mt-2  mx-2 border-amber-800 w-full">{flag.text}</button>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    )
                }
            </div>
        </section>
    );
};

export default Question;