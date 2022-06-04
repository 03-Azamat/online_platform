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
import Question from "./components/question/question";
import Login from "./components/Auth/emailActive/Login";
import EmailActive from "./components/Auth/emailActive/EmailActive";
import Contact from "./components/contact/contact";
import ActiveCourse from "./components/courses/coursesAdmin/activeCourse";
import NotActivated from "./components/courses/coursesAdmin/NotActivated";
import TestResult from "./components/question/testResult";



function Main() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/about"} element={<About/>}/>
                <Route path={"/courses"} element={<Courses/>}/>
                <Route path={"/contact"} element={<Contact/>}/>
                <Route path={"/coursesDetails/:id"} element={<CoursesDetails/>}/>
                <Route path={"/question/:testId"} element={<Question/>}/>
                <Route path={"/question/questionDetail/:idTest"} element={<Question/>}/>
                <Route path={"/person/question-result"} element={<TestResult/>}/>
                <Route path={"/coursesDetails/coursesLesson/:lessonId"} element={<CoursesLesson/>}/>
                <Route path={"/about"} element={<About/>}/>
                <Route path={"/person"} element={<Person/>}/>
                <Route path={"/home"} element={<Home/>}/>
                <Route path={"/person"} element={<Person/>}/>
                <Route path={"/person/activeCourses"} element={<ActiveCourse/>}/>
                <Route path={"/person/notActivated"} element={<NotActivated/>}/>
                <Route path={"/account/activate/*"} element={<EmailActive/>}/>
                <Route path={"/login"} element={<Login/>}/>
            </Routes>
            <Footer/>
        </>
    );
}

export default Main;