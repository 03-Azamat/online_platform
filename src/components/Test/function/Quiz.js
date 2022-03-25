import React, {useState, useContext} from "react";
import {QuizContext} from "../../../data/Contexts";
import state from '../../../data/data'
import data from '../../../data/state'
import '../../../style/Quiz/Quiz.scss'
const Quiz = () => {
    const {score, setScore, setGameState} = useContext(QuizContext)
    const [currQuestion, setCurrQuestion] = useState(0)
    const [optionChosen, setOptionChosen] = useState("")
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
                                <div>
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
                                               <input type="radio"/>
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