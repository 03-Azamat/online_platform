import React, {useContext} from 'react';
import {QuizContext} from "../../../data/Contexts";
import data from '../../../data/state'
import '../../../style/EndScreeen/EndScreen.scss'
import {NavLink} from "react-router-dom";
import { Line, Circle } from 'rc-progress'
import {useSelector} from "react-redux";
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
               <h1 className="lipton"> Из провилных ответов:<Line percent="10" strokeWidth="4" strokeColor="#D3D3D3"/>{score} </h1>
               <h1 className="lipton"> Из непровилных ответов:<Line percent="10" strokeWidth="4" strokeColor="#D3D3D3" />{data.length}</h1>

               <NavLink to={"/Home"}>
                   {
                       score >= 10 ? <NavLink to={"/"}>
                           <button className="buuttons" onClick={restartQuiz}>
                               Вы не прошли тест
                           </button>
                       </NavLink>: <button className="buuttons" onClick={restartQuiz}>
                           Вы не прошли тест
                       </button>
                   }
               </NavLink>
           </div>
        </div>
    );
};

export default EndScreen;