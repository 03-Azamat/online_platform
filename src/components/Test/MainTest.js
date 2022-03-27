// import React, {useState} from 'react';
// import {QuizContext} from "../../data/Contexts";
// import Quiz from "./function/Quiz";
// import EndScreen from "./function/EndScreen";
// import MainMenu from "./function/MainMenu";
//
// const MainTest = () => {
//     const [score, setScore] = useState(0)
//     const [gameState, setGameState] = useState("menu")
//     return (
//         <div>
//             <div className="Appp">
//                 <QuizContext.Provider value={{ gameState, setGameState, score, setScore}}>
//                     {gameState === "menu" && <MainMenu/>}
//                     {gameState === "quiz" && <Quiz/>}
//                     {gameState === "endScreen" && <EndScreen/>}
//                 </QuizContext.Provider>
//             </div>
//         </div>
//     );
// };
//
// export default MainTest;