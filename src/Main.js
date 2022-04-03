import React, {useState} from 'react';
import Header from "./components/header/Header";
import {Route, Routes} from "react-router-dom";
import Home from "./components/home/home";
import About from "./components/about/about";
import Courses from "./components/courses/courses";
import CoursesDetails from "./components/courses/coursesDetails";
import Person from "./components/Auth/Person/Person";
import RegisterCode from "./components/Auth/Register/RegisterCode";
import Register from "./components/Auth/Register/Register";
import CoursesLesson from "./components/courses/coursesLesson";
import MainMenu from "./components/Test/function/MainMenu";
import Footer from "./components/footer/Footer";
import Sleh from "./components/sleh/sleh";


function Main() {

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
                {/*<Route path={"/contact"} element={<Contact/>}/>*/}
                <Route path={"/sleh/:testId"} element={<Sleh/>}/>
                <Route path={"/home"} element={<Home/>}/>
                <div className="Appp">
                    <QuizContext.Provider value={{ gameState, setGameState, score, setScore, mistakes, setMistakes}}>
                        {gameState === "menu" && <MainMenu/>}
                        {gameState === "quiz" && <Quiz/>}
                        {gameState === "endScreen" && <EndScreen/>}
                    </QuizContext.Provider>
                </div>
            </Routes>

            <Footer/>
        </>
    );
}

export default Main;