import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getTest} from "../../redux/action/corsesAction";
import axios from "axios";
import {toast} from "react-toastify";


const Question = () => {
    const {testId} = useParams()
    const elem = useSelector(state => state.question)
    const dispatch = useDispatch()

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false)
    const [score, setScore] = useState(0)

    const onClickTest = () =>{
        axios.post(`https://djangorestapp.herokuapp.com/scoreboard-Create-list/`, result())
            .then(data => {
                result(data)
                toast.success("успешно")
            })
            .catch((e) => {
                console.log(e)
                toast.error("ERROR")
            })
    }

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
        <section className="bg-gray-300 flex align-middle justify-center w-full min-h-full">
            <div className=" bg-white text-white w-6/12 h-3/6 my-12 rounded-md text-black" key={elem.id}>
                {
                    showScore ? (
                        <div>
                            <p>You scored {score} out {elem?.choicetest.length}</p>
                            <div>
                                {result() > 50 ? `Тест пройден : ${result()} %`
                                    :
                                    `Тест не пройден ${result()} %`}
                            </div>

                            <button onSubmit={onClickTest}>Назад</button>
                        </div>
                    ) : (
                        <div>
                            <span>{currentQuestion + 1}</span>/{elem?.choicetest?.length}
                            <div>
                                {
                                    elem?.choicetest?.map(el => (
                                        <div>
                                            <p className="font-normal text-sm text-center font-bold">Бизнес аналитик</p>
                                            <p className="text-center text-sm">Вопрос : № {currentQuestion + 1}</p>
                                            <p className="text-center text-sm">{el?.question?.title}</p>
                                            <p className="text-center text-sm text-light ">Ответы ( один вариант )</p>
                                            {
                                                el?.question?.flags.map((flag) => (
                                                    <div className="flex align-middle justify-center">
                                                        <button onClick={() => handleAnswerButtonClick(flag?.boo)}
                                                                className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded w-10/12 my-1">{flag.text}</button>
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