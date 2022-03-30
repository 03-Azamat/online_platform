import React, {useContext} from 'react';
import {QuizContext} from "../../../data/Contexts";
import data from '../../../data/state'
import '../../../style/EndScreeen/EndScreen.scss'
import {NavLink} from "react-router-dom";
import { Line, Circle } from 'rc-progress'
import axios from "axios";
const EndScreen = () => {
    const {score, setScore, setGameState, mistakes} = useContext(QuizContext)

    const restartQuiz = () => {
        setScore(0)
        setGameState("menu")
        axios.post("https://djangorestapp.herokuapp.com/test-update/", score,mistakes)
    }

    return (
        <div className="EndScreen">
            <div className="three">
                <h1 className="text">Тест завершён</h1>
                {
                    score >= 10 ? <p className="text"> Вы успешно прошли тест!</p>
                        :
                        <p className="text">
                            Извините, вы провалили тест
                    </p>
                }
                <div className="lipton">
                    <h1 className="liptonn">Правильные ответы :</h1>
                    <h2 className="LIPTON">{score}</h2>
                </div>
                  <div className="lipton-1">
                      <h1 className="liptonn-1"> Ошибки :</h1>
                      <h2 className="LIPTON-1">{mistakes}</h2>
                  </div>

                <NavLink to={"/person"}>
                    {
                        score >= 10 ? <NavLink to={"/person"}>
                            <button className="buuttons" onClick={restartQuiz}>
                                Завершить тест
                            </button>
                        </NavLink>
                            :
                            <button className="buuttons" onClick={restartQuiz}>
                                Завершить тест
                            </button>
                    }
                </NavLink>
            </div>
        </div>
    );
};

export default EndScreen;

// <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
//     <div className="md:flex">
//     </div>
// </div>