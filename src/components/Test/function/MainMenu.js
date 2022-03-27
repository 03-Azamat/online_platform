import React, {useContext, useState} from 'react';
import {QuizContext} from "../../../data/Contexts";
import '../../../style/Main-Menu/MainMenu.scss'
import Quiz from "./Quiz";
import EndScreen from "./EndScreen";

const MainMenu = () => {

     const {gameState, setGameState} = useContext(QuizContext)
    const [score, setScore] = useState(0)
    const [gameStated, setGameStated] = useState("menu")
    return (
        <div className="Menu">
           <div className="buttons-1">

               <button className="btn" onClick={() => {
                 setGameState("quiz");
               }}>Start Quiz</button>
           </div>
            <div>
                <QuizContext.Provider value={{ gameState,
                    setGameState,
                    score,
                    setScore}}>0
                    {gameStated === "menu" && <MainMenu/>}
                    {gameStated === "quiz" && <Quiz/>}
                    {gameStated === "endScreen" && <EndScreen/>}
                </QuizContext.Provider>
            </div>
        </div>
    );
};

export default MainMenu;