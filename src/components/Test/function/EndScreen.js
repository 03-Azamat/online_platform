import React, {useContext} from 'react';
import {QuizContext} from "../../../data/Contexts";
import data from '../../../data/state'
import '../../../style/EndScreeen/EndScreen.scss'
import {NavLink} from "react-router-dom";
const EndScreen = () => {
    const {score, setScore, setGameState} = useContext(QuizContext)

    const restartQuiz = () => {
        setScore(0)
        setGameState("menu")
    }

    return (
        <div className="EndScreen">
           <div className="three">
               <h1 className="text">Тест завершён</h1>
               <h1 className="lipton">{score} / {data.length}</h1>
               <NavLink to={"/Home"}>
                   <button className="buuttons" onClick={restartQuiz}>
                       Перезапустить Тест
                   </button>
               </NavLink>

           </div>
        </div>
    );
};

export default EndScreen;