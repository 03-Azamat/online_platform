import React, {useEffect, useState, useRef} from "react";
import {NavLink, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getCourses, getCoursesDetails, getTest, getTestResults, getUser,} from "../../redux/action/corsesAction";
import axios from "axios";
import {toast} from "react-toastify";




const Question = () => {
    const {testId} = useParams();
    const {id} = useParams();
    const elem = useSelector((state) => state.question);
    const userId = useSelector((state) => state.getUser);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [question, setQuestion] = useState();
    const [score, setScore] = useState(0);
    const intervalRef = useRef(null);
    const dispatch = useDispatch();
    const COURSE_ID = window.location.pathname.slice(-1);
    const timerQuiz = elem.timer

    /* ********* TIMER ********** */

    const [time, setTime] = useState("00:00:00");
    function getTimeRemaining(endtime) {
        const total = Date.parse(endtime) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor(((total / 1000) * 60 * 60) % 24);
        const days = Math.floor((total / 1000) * 60 * 60 * 24);
        return {total, days, seconds, minutes, hours,};}

    function startTimer(deadline) {
        let { total, days, seconds, minutes, hours } =
            getTimeRemaining(deadline);
        if (total >= 0) {
            setTime(
                (hours > elem.timer ? hours : "0" + hours) +
                ":" +
                (minutes > elem.timer ? minutes : "0" + minutes) +
                ":" +
                (seconds > elem.timer ? seconds : "0" + seconds)
            );
        } else {
            clearInterval(intervalRef.current);
        }
    }

    function clearTimer(endtime) {
        setTime(elem.timer);
        if (intervalRef.current) clearInterval(intervalRef.current);
        const id = setInterval(() => {
            startTimer(endtime);
        }, 1000);
        intervalRef.current = id;
    }

    function getDeadlineTime(timerQuiz) {
        console.log(timerQuiz, "GGGGGG")
        let deadline = new Date();
        deadline.setSeconds(deadline.getSeconds() + 50);
        return deadline;
    }
    useEffect(() => {
        clearTimer(getDeadlineTime());
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, []);

    function onClickResetBtn() {
        if (intervalRef.current) clearInterval(intervalRef.current);
        clearTimer(getDeadlineTime());
    }


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
                    created_date:new Date(),
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
        <section className="bg-gray-300 flex align-middle justify-center w-full min-h-full">
            <div
                className=" bg-white text-white w-6/12 h-full my-12 rounded-md text-black"
                key={elem.id}>
                {showScore ? (
                    <div>
                        <p>
                            You scored {score} out {elem?.choicetest.length}
                        </p>
                        <div>
                            {
                                result() > 50
                                ? `Тест пройден : ${result()} %`
                                : `Тест не пройден ${result()} %`}
                        </div>
                        <div>
                            {score}:Правильные ответы / из{" "}
                            {elem?.choicetest.length} вопрос
                        </div>
                        <NavLink to={`/coursesDetails/${elem.id}`}>
                            <div onClick={() => onClickTest()}>Назад</div>
                        </NavLink>
                    </div>
                ) : (
                    <div>
                        <div>
                            <div className="container mx-auto">
                                <div className="flex justify-between mt-10">
                                    <span>
                                        {currentQuestion + 1} /{" "}
                                        {elem?.choicetest?.length}
                                    </span>
                                    <p>{time}:Время</p>
                                </div>
                                <p className="text-center text-sm">
                                    Вопрос : № {currentQuestion + 1}
                                </p>
                                <p className="font-normal text-sm text-center font-bold">
                                    Бизнес аналитик
                                </p>
                                <p className="text-center text-sm">
                                    {question?.title}
                                </p>
                                <p className="text-center text-sm text-light ">
                                    Ответы ( один вариант )
                                </p>
                                {
                                    question?.flags.map((flag) => (
                                    <div className="flex align-middle justify-center">
                                        <button
                                            onClick={() => handleAnswerButtonClick(flag?.boo)}
                                            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded w-10/12 my-1">
                                            {flag.text}
                                        </button>
                                    </div>
                                ))}
                                <div>
                                    {question?.length === 2 ? (
                                        <button className="bg-gray-400 text-white py-2 px-4 rounded">
                                            Назад
                                        </button>
                                    ) : (
                                        <div className="w-full flex justify-between">
                                            <button
                                                className="bg-gray-400 text-white py-2 px-4 rounded"
                                                onClick={() => {
                                                    setCurrentQuestion(
                                                        (prev) => {
                                                            if (prev > 0) {
                                                                return prev - 1;
                                                            }
                                                            return 0;
                                                        }
                                                    );
                                                }}>
                                                Назад
                                            </button>
                                            <button
                                                onClick={() =>
                                                    handleAnswerButtonClick(question.flags?.boo)}
                                                className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
                                                <button
                                                    className="bg-transparent"
                                                    onClick={onClickResetBtn}>
                                                    Следующий
                                                </button>
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Question;
