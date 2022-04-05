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
import {QuizContext} from "./data/Contexts";
import Quiz from "./components/Test/function/Quiz";
import EndScreen from "./components/Test/function/EndScreen";
import Question from "./components/question/question";
import Login from "./components/Auth/Person/Login";
import EmailActive from "./components/Auth/emailActive/EmailActive";



function Main() {


    return (
        <>
            <Header/>

            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/about"} element={<About/>}/>
                <Route path={"/courses"} element={<Courses/>}/>
                <Route path={"/coursesDetails/:id"} element={<CoursesDetails/>}/>
                <Route path={"/register-code"} element={<RegisterCode/>}/>
                <Route path={"/register-check"} element={<Register/>}/>
                <Route path={"/question/:testId"} element={<Question/>}/>
                <Route path={"/coursesDetails/coursesLesson/:lessonId"} element={<CoursesLesson/>}/>
                <Route path={"/about"} element={<About/>}/>
                <Route path={"/home"} element={<Home/>}/>
                <Route path={"/quiz/:idTest"} element={<Quiz/>}/>
                <Route path={"/person"} element={<Person/>}/>
                <Route path={"/*"} element={<EmailActive/>}/>
                <Route path={"/login"} element={<Login/>}/>

            </Routes>

            <Footer/>
        </>
    );
}

export default Main;