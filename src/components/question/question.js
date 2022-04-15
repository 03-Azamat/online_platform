import React, {useContext, useEffect, useRef, useState} from 'react';
import {NavLink, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getTest} from "../../redux/action/corsesAction";
import QuestionCard from "./questionCard";
import questionCard from "./questionCard";
import {QuizContext} from "../../data/Contexts";
import data from "../../data/state";

const Question = () => {
    const {score, setScore, setGameState,setMistakes,mistakes} = useContext(QuizContext)
    const [currQuestion, setCurrQuestion] = useState(0)
    const [optionChosen, setOptionChosen] = useState("")
    const intervalRef = useRef(null)
    const [timer, setTimer] = useState('00:00:00');

    const {testId} = useParams()
    console.log(useParams())

    const elem = useSelector(state => state.question)
    const dispatch = useDispatch()

    console.log(testId, "TestID")
    console.log(elem, "testElem")

    useEffect(() => {
        dispatch(getTest(testId))
    }, [])

    function  getTimeRemaining(endtime){
        const total = Date.parse(endtime) - Date.parse(new Date());
        const seconds = Math.floor((total/1000) % 60);
        const minutes = Math.floor((total/1000/60) % 60);
        const hours = Math.floor((total/1000*60*60)%24);
        const days = Math.floor(total/(1000*60* 60 *24));
        return{
            total, days, seconds, minutes, hours,
        };
    }
    function startTimer (deadline){
        let {total, days, seconds, minutes, hours, } = getTimeRemaining(deadline);
        if (total >= 0){
            setTimer(
                (hours > 9 ?hours : '0'+hours) + ':' +
                (minutes > 9 ? minutes: '0'+minutes)+ ':'+
                (seconds > 9 ? seconds : '0'+seconds)
            )
        }else {
            clearInterval(intervalRef.current)
        }
    }


    function clearTimer (insaider){
        setTimer('00:01:50');
        if(intervalRef.current)clearInterval(intervalRef.current);
        const id = setInterval(() => {
            startTimer(insaider);
        },1000)
        intervalRef.current = id;
    }

    function getDeadlineTime(){
        let deadline = new Date();
        deadline.setSeconds(deadline.getSeconds()+109  )
        return deadline;
    }

    useEffect(() => {
        clearTimer(getDeadlineTime());
        return () => {if (intervalRef.current) clearInterval(intervalRef.current)}
    },[])

    function onClickResetBtn () {
        if (intervalRef.current) clearInterval(intervalRef.current);
        clearTimer(getDeadlineTime());
    }

    const nextQuestion = () => {
        console.log(optionChosen)
        clearTimer(getDeadlineTime())

        if(data[currQuestion].answer === optionChosen){
            console.log(optionChosen,"correct")

            setScore(score + 1)
            console.log(score)
        } else {
            console.log(mistakes, "mistakes")
            setMistakes(mistakes + 1)
        }
        setCurrQuestion(currQuestion + 1)
    };
    const finishQuiz = () => {
        if(data[currQuestion].answer === optionChosen){
            setScore(score - 0);
        }
        setGameState("endScreen")
    }

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