import React, {useState, useContext, useRef} from "react";
import {QuizContext} from "../../../data/Contexts";
import state from '../../../data/data'
import data from '../../../data/state'
import '../../../style/Quiz/Quiz.scss'
import {useSelector} from "react-redux";
const Quiz = () => {

    const {score, setScore, setGameState} = useContext(QuizContext)
    const [currQuestion, setCurrQuestion] = useState(0)
    const [optionChosen, setOptionChosen] = useState("")
    const intervalRef = useRef(null)






    const [timer, setTimer] = useState('00:00:00');
    function  getTimeRemaining(endtime){
        const total = Date.parse(endtime) - Date.parse(new Date());
        const  seconds = Math.floor((total/1000) % 60);
        const minutes = Math.floor((total/1000/60) % 60);
        const hours = Math.floor((total/1000*60*60)%24);
        const days = Math.floor((total/1000*60*60*24));
        return{
            total, days, seconds, minutes, hours,
        }
    }
    function startTimer (deadline){
        let{total, days, seconds, minutes, hours,} = getTimeRemaining(deadline);
        if (total>=0){
            setTimer(
                (hours > 9 ?hours : '0'+hours) + ':' +
                (minutes > 9 ? minutes: '0'+minutes)+ ':'+
                (seconds > 9 ? seconds : '0'+seconds)
            )
        }
    }
















    const nextQuestion = () => {
        if(data[currQuestion].answer === optionChosen){
            setScore (score + 1);
        }
        setCurrQuestion(currQuestion + 1)
    };
    const finishQuiz = () => {
        if(data[currQuestion].answer === optionChosen){
            setScore (score - 1);
        }
        setGameState("endScreen")
    }
    return (
            <div className="test">
                <div className="container">
                    <div className="test-rectangle">
                        <div className="test-rectangle-1"/>
                        {
                            state.map(el => (
                                <div key={el.id}>
                                    <p className="test-text">{el.mark}</p>
                                </div>
                            ))
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
                                               <button onClick={ () => setOptionChosen("A")} className="button mx-1">{data[currQuestion].optionA}</button>
                                               <button onClick={ () => setOptionChosen("B")} className="button">{data[currQuestion].optionD}</button>
                                               <button onClick={ () => setOptionChosen("C")} className="button mx-1">{data[currQuestion].optionB}</button>
                                               <button onClick={ () => setOptionChosen("D")} className="button ">{data[currQuestion].optionC}</button>
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
};

export default Quiz;