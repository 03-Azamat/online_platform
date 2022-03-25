import React, {useContext} from 'react';
import {QuizContext} from "../../../data/Contexts";
import '../../../style/Main-Menu/MainMenu.scss'
import Quiz from "./Quiz";
import EndScreen from "./EndScreen";

const MainMenu = () => {

     const {gameState, setGameState} = useContext(QuizContext)

    return (
        <div className="Menu">
           <div className="buttons-1">



               <button className="btn" onClick={() => {
                 setGameState("quiz");
               }}>Start Quiz</button>
           </div>
        </div>
    );
};

export default MainMenu;