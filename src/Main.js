import React, {useState} from 'react';
import Header from "./components/header/Header";
import {Route, Routes} from "react-router-dom";
import Home from "./components/home/home";
import About from "./components/about/about";
import Courses from "./components/courses/courses";
import CoursesDetails from "./components/courses/coursesDetails";
import Person from "./components/Auth/Person/Person";
import CoursesLesson from "./components/courses/coursesLesson";
import Footer from "./components/footer/Footer";
import Quiz from "./components/Test/function/Quiz";
import Question from "./components/question/question";
import Login from "./components/Auth/emailActive/Login";
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
                <Route path={"/question/:testId"} element={<Question/>}/>
                <Route path={"/question/questionDetail/:idTest"} element={<Question/>}/>
                <Route path={"/coursesDetails/coursesLesson/:lessonId"} element={<CoursesLesson/>}/>
                <Route path={"/about"} element={<About/>}/>
                <Route path={"/person"} element={<Person/>}/>
                <Route path={"/home"} element={<Home/>}/>
                {/*<Route path={"/quiz/:idTest"} element={<Quiz/>}/>*/}
                <Route path={"/person"} element={<Person/>}/>
                <Route path={"account/activate/*"} element={<EmailActive/>}/>
                <Route path={"/login"} element={<Login/>}/>
            </Routes>

            <Footer/>
        </>
    );
}

export default Main;