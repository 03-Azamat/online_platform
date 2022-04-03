import React, {useState, useContext, useRef, useEffect} from "react";
import {QuizContext} from "../../../data/Contexts";
import state from '../../../data/data'
import data from '../../../data/state'
import '../../../style/Quiz/Quiz.scss'
import {useSelector} from "react-redux";



const Quiz = () => {
    const testElem = useSelector(state => state.test)
    const {score, setScore, setGameState,setMistakes,mistakes} = useContext(QuizContext)
    const [currQuestion, setCurrQuestion] = useState(0)
    const [optionChosen, setOptionChosen] = useState("")
    const intervalRef = useRef(null)

    


    const [timer, setTimer] = useState('00:00:00');
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
        <div className="test">
            <div className="container">
                <div className="test-rectangle">
                    <div className="test-rectangle-1"/>
                    <h1 className="test-colum">
                        {timer}
                    </h1>
                    <div>

                    </div>
                    {
                        state.map(el => (
                            <div>
                                <p className="test-text">{el.mark}</p>
                            </div>))
                    }
                    {
                        state.slice(0,1).map(el => (
                            <div>
                                <div key={el.id}>
                                    <h1 className="numb-1">{el.numb}</h1>
                                    <h1 className="numb-1">{el.answer}</h1>
                                    <h1 className="numb">{el.question}</h1>
                                    <div className="promo">
                                        <h1 className="replica">
                                            {
                                                data[currQuestion].prompt
                                            }
                                        </h1>
                                    </div>
                                    <div className="options">
                                        <button type="button" onClick={ () => setOptionChosen("A")}
                                                className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">
                                            {data[currQuestion].optionA}</button>
                                        <button type="button" onClick={ () => setOptionChosen("B")}
                                                className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">
                                            {data[currQuestion].optionD}</button>
                                        <button type="button" onClick={ () => setOptionChosen("C")}
                                                className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">
                                            {data[currQuestion].optionB}</button>
                                        <button type="button" onClick={ () => setOptionChosen("D")}
                                                className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">
                                            {data[currQuestion].optionC}</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="buttons">
                    { currQuestion === data.length - 1 ?(
                        <button onClick={finishQuiz}>
                            Перейти на результаты
                        </button>
                    ) : (
                        <button onClick={nextQuestion} className="test-but-1">Следуший</button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Quiz;