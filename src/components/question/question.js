import React, { useEffect, useState, useRef } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    getCourses,
    getCoursesDetails,
    getTest,
    getTestResults,
    getUser,
} from "../../redux/action/corsesAction";
import axios from "axios";
import { toast } from "react-toastify";
import { useTimer } from "react-timer-hook";

const Question = () => {
    const { testId } = useParams();
    const { id } = useParams();
    const elem = useSelector((state) => state.question);
    const cour = useSelector((state) => state.coursesDetails);
    const userId = useSelector((state) => state.getUser);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [question, setQuestion] = useState();
    const [score, setScore] = useState(0);
    const intervalRef = useRef(null);
    const dispatch = useDispatch();
    const COURSE_ID = window.location.pathname.slice(-1);
    const timerQuiz = elem.timer;
    /* ********* TIMER ********** */
    const expiryTimestamp = new Date();
    expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + timerQuiz);
    const { seconds, minutes, hours, start } = useTimer({
        expiryTimestamp,
        autoStart: false,
        onExpire: () => {
            setShowScore(true);
        },
    });

    useEffect(() => {
        if (elem?.choicetest) {
            setQuestion(elem.choicetest[currentQuestion]?.question || null);
        }
    }, [elem.choicetest, currentQuestion]);

    useEffect(() => {
        dispatch(getTest(testId));
        dispatch(getCourses());
        dispatch(getCoursesDetails(id));
        dispatch(getUser());
        start();
    }, []);

    const handleAnswerButtonClick = (boo) => {
        if (boo === true) {
            setScore(score + 1);
        }
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < elem.choicetest.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    function result() {
        return Math.round(100 / elem?.choicetest.length) * score;
    }

    const onClickTest = () => {
        axios
            .post(
                `https://djangorestapp.herokuapp.com/scoreboard-Create-list/`,
                {
                    score: +result(),
                    point: +score,
                    fail: 1,
                    created_date: new Date(),
                    user: userId.id,
                    course: +COURSE_ID,
                    quiz_room: +elem.id,
                }
            )
            .then((data) => {
                result(data);
                toast.success("успешно");
            })
            .catch((e) => {
                console.log(e);
                toast.error("ERROR");
            });
    };
    return (
        <section className="bg-gray-300 flex align-middle justify-center w-full min-h-full pb-20 ">
            <div
                className="bg-white text-white w-full h-full my-12 rounded-md text-black pb-20 smExtraMedia: w-11/12  ssmMedia: w-11/12  smMedia:w-10/12  mdMedia:w-8/12  lgMedia:w-7/12  xlMedia:w-6/12  xxlMedia: w-5/12 "
                key={elem.id}
            >
                {showScore ? (
                    <div className="flex justify-center align-middle">
                        <div className="pt-16">
                            <p className="py-2">
                                {score}:Правильные ответы / из{" "}
                                {elem?.choicetest.length} вопрос
                            </p>
                            <div>
                                {
                                    <p className="test--content--texts__text">
                                        {result() >= 50
                                            ? `Тест пройден ${result()} %`
                                            : `Тест не пройден${result()} %`}{" "}
                                        <span
                                            style={{
                                                marginLeft: "20px",
                                                padding: "0 12px",
                                                background:
                                                    result() >= 50
                                                        ? "green"
                                                        : "red",
                                            }}
                                        ></span>
                                    </p>
                                }
                            </div>
                            <NavLink to={`/coursesDetails/${elem.id}`}>
                                <button
                                    onClick={() => onClickTest()}
                                    className=" bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded w-6/12 my-1 "
                                >
                                    Назад
                                </button>
                            </NavLink>
                        </div>
                    </div>
                ) : (
                    <div>
                        <div>
                            <div className="container mx-auto">
                                <div className="flex flex-row justify-between mt-10 smMedia: flex flex-col justify-center  mdMedia: flex mdMedia:flex-row mdMedia:justify-between lgMedia: flex lgMedia: flex-row lgMedia: justify-between xlMedia:flex xlMedia:justify-between xlMedia:flex-row">
                                    <span>
                                        {currentQuestion + 1} /{" "}
                                        {elem?.choicetest?.length}
                                    </span>
                                    <p className="font-normal text-sm  smMedia:font-extralight text-sm  mdMedia: text-md font-normal lgMedia: text-lg font-normal xlMedia:font-normal text-sm">
                                        Время{" "}
                                        {hours + ":" + minutes + ":" + seconds}
                                    </p>
                                </div>
                                <div className="my-8">
                                    <p className="text-center text-sm">
                                        Вопрос : № {currentQuestion + 1}
                                    </p>
                                    <p className="font-normal text-sm text-center font-bold">
                                        {elem.name}
                                    </p>
                                    <p className="text-center text-sm">
                                        {question?.title}
                                    </p>
                                    <p className="text-center text-sm text-light ">
                                        Ответы ( один вариант )
                                    </p>
                                </div>
                                {question?.flags.map((flag) => (
                                    <div className="flex align-middle justify-center">
                                        <button
                                            onClick={() =>
                                                handleAnswerButtonClick(
                                                    flag?.boo
                                                )
                                            }
                                            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded w-10/12 my-1"
                                        >
                                            {flag.text}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Question;
