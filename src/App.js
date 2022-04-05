import './style/App.scss';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import {Routes,Route} from "react-router-dom";
import About from "./components/about/about";
import Register from "./components/Auth/Register/Register";

import Courses from "./components/courses/courses";
import CoursesDetails from "./components/courses/coursesDetails";
import CoursesLesson from "./components/courses/coursesLesson";
import RegisterCode from "./components/Auth/Register/RegisterCode";
import Person from "./components/Auth/Person/Person";
import Home from "./components/home/home";
import React, {useState} from "react";
import Quiz from "./components/Test/function/Quiz";
import MainMenu from "./components/Test/function/MainMenu";
import EndScreen from "./components/Test/function/EndScreen";
import {QuizContext} from "./data/Contexts";
import Sleh from "./components/sleh/sleh";


function App() {
    const [score, setScore] = useState(0)
    const [gameState, setGameState] = useState("menu")
    const [mistakes, setMistakes] = useState(0)
    return (
        <>
            <Header/>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/about"} element={<About/>}/>
                <Route path={"/courses"} element={<Courses/>}/>
                <Route path={"/coursesDetails/:id"} element={<CoursesDetails/>}/>
                <Route path={"/person"} element={<Person/>}/>
                <Route path={"/register-code"} element={<RegisterCode/>}/>
                <Route path={"/register-check"} element={<Register/>}/>
                <Route path={"/coursesDetails/coursesLesson/:lessonId"} element={<CoursesLesson/>}/>
                <Route path={"/about"} element={<About/>}/>
                <Route path={"/menu"} element={<MainMenu/>}/>
                <Route path={"/MainMenu"} element={
                    <div className="Appp">
                        <QuizContext.Provider value={{ gameState, setGameState, score, setScore, mistakes, setMistakes}}>
                            {gameState === "menu" && <MainMenu/>}
                            {gameState === "quiz" && <Quiz/>}
                            {gameState === "endScreen" && <EndScreen/>}
                        </QuizContext.Provider>

                    </div>
                }/>
                <Route path={"/home"} element={<Home/>}/>
            </Routes>

            <Footer/>
        </>
    );
}

export default App;
