import React, {useContext, useState} from 'react';
import {QuizContext} from "../../../data/Contexts";
import '../../../style/Main-Menu/MainMenu.scss'
const MainMenu = () => {
    const {gameStated, setGameState} = useContext(QuizContext)

    return (
        <div className="Menu">
            <div className="buttons-1">
                <button className="btn-12" onClick={() => {
                    setGameState("quiz");
                }}>Start Quiz</button>
            </div>
        </div>
    );
};

export default MainMenu;