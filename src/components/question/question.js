import React, {useEffect, useState} from "react";
import axios from "axios";
import {NavLink, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getCourses, getCoursesDetails, getTest, getTestResults, getUser,} from "../../redux/action/corsesAction";
import {toast} from "react-toastify";
import TimerQuiz from "./timerQuiz";


const Question = () => {
    const {testId} = useParams();
    const {question : elem} = useSelector(s => s)
    const userId = useSelector((state) => state.getUser);
    const course = useSelector(state => state.coursesDetails)
    const {getTestResult: resultTest} = useSelector(s => s);
    const [signTest, setSignTest] = useState(false)
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [question, setQuestion] = useState();
    const [score, setScore] = useState(0);
    const [scoreFail, setScoreFail] = useState(0);
    const dispatch = useDispatch();
    const timerQuiz = elem.timer;
    console.log(question , "question.img")



    /* ********* TIMER ********** */
    const time = new Date();
    time.setMinutes(time.getMinutes() + timerQuiz);


    useEffect(() => {
        if (elem?.choicetest) {
            setQuestion(elem.choicetest[currentQuestion]?.question || null);
        }
    }, [elem.choicetest, currentQuestion]);

    useEffect(() => {
        dispatch(getTest(testId));
        dispatch(getCourses());
        dispatch(getCoursesDetails(testId));
        dispatch(getUser());
    }, []);


    const handleAnswerButtonClick = (boo) => {
        if (boo === true) {
            setScore(score + 1);
        } else {
            setScoreFail(scoreFail + 1)
        }
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < elem.choicetest.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    function result() {
        return Math.round(100 / elem?.choicetest?.length) * score;
    }

    const onClickTest = () => {
        axios
            .post(
                `https://djangorestapp.herokuapp.com/scoreboard-Create-list/`,
                {
                    score: +result(),
                    point: +score,
                    fail: +scoreFail,
                    created_date: new Date(),
                    user: userId.id,
                    course: +testId,
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

    useEffect(() => {
        dispatch(getTestResults())

        resultTest.forEach(data => {
                if (data.course === course.id && data.user === userId.id) {
                    setSignTest(true)
                }
            }
        )
    }, [course])

    return (

        <section className="bg-gray-300 flex align-middle justify-center w-full min-h-full pb-20 ">
            <div
                className="bg-white text-white w-full h-full my-12 rounded-md text-black pb-20 smExtraMedia: w-11/12  ssmMedia: w-11/12  smMedia:w-10/12  mdMedia:w-8/12  lgMedia:w-7/12  xlMedia:w-6/12  xxlMedia: w-5/12 "
                key={elem.id}>
                {
                    signTest ?
                        <div className="">
                            <div className="flex justify-center w-full">
                                <p className="text-gray-900 text-2xl text-center">Эй халтурщик !!! ты уже сдал этот тест
                                    ,
                                    тупой что ли ?</p>
                            </div>
                        </div>
                        : <div>
                            {showScore ? (
                                <div className="flex justify-center align-middle">
                                    <div className="pt-16">
                                        <p className="py-2">
                                            {score}:Правильные ответы / из{" "}
                                            {elem?.choicetest?.length} вопрос
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
                                                    > </span>
                                                </p>
                                            }
                                        </div>
                                        <NavLink to={`/`}>
                                            <button
                                                onClick={() => onClickTest()}
                                                className=" bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded w-6/12 my-1 ">
                                                Назад
                                            </button>
                                        </NavLink>
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    <div>
                                        <div className="container mx-auto">
                                            <div
                                                className="flex flex-row justify-between mt-10 smMedia: flex flex-col justify-center  mdMedia: flex mdMedia:flex-row mdMedia:justify-between lgMedia: flex lgMedia: flex-row lgMedia: justify-between xlMedia:flex xlMedia:justify-between xlMedia:flex-row">
                                    <span>
                                        {currentQuestion + 1} /{" "}
                                        {elem?.choicetest?.length}
                                    </span>
                                                <div className="font-normal text-sm  smMedia:font-extralight text-sm  mdMedia: text-md font-normal lgMedia: text-lg font-normal xlMedia:font-normal text-sm">
                                                    {
                                                        <div>
                                                            <TimerQuiz expiryTimestamp={time}
                                                                       setShowScore={setShowScore}/>
                                                        </div>
                                                    }
                                                </div>
                                            </div>
                                            <div className="my-8">
                                                <p className="text-center text-sm">
                                                    Вопрос  № {currentQuestion + 1}
                                                </p>
                                                <p className="font-normal text-sm text-center font-bold">
                                                    {elem.name}
                                                </p>
                                                <div className="flex justify-center w-full h-60 py-6">
                                                    {
                                                        question?.img ? <img src={`https://res.cloudinary.com/dbqgk5dfn/${question?.img}`} alt="img"
                                                        className="object-cover"
                                                        /> : ""
                                                    }
                                                </div>
                                                <p className="text-center text-sm text-light ">
                                                    Ответы ( один вариант )
                                                </p>
                                            </div>
                                            {question?.flags.map((flag) => (
                                                <div className="flex align-middle justify-center" key={flag.id}>

                                                    <button
                                                        onClick={() =>
                                                            handleAnswerButtonClick(
                                                                flag?.boo
                                                            )
                                                        }
                                                        className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded w-10/12 my-1">
                                                        {flag.text}
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                }
            </div>
        </section>
    );
};

export default Question;
