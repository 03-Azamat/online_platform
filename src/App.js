import './style/App.scss';
<<<<<<< HEAD
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import {Routes, Route, useHistory, useParams} from "react-router-dom";
import About from "./components/about/about";
import Register from "./components/Auth/Register/Register";

import Courses from "./components/courses/courses";
import CoursesDetails from "./components/courses/coursesDetails";
import CoursesLesson from "./components/courses/coursesLesson";
import RegisterCode from "./components/Auth/Register/RegisterCode";
import Person from "./components/Auth/Person/Person";
// import Register from "./components/register/Register";
// import RegisterCopy from "./components/register/RegisterCopy";
import Home from "./components/home/home";
import CoursesDetailsPaid from "./components/coursesPaid/coursesDetailsPaid";
import SignIn from "./components/Auth/Register/SignIn";
import Activate from "./components/account/activate";
import {useEffect} from "react";
import EmailActive from "./components/Auth/emailActive/EmailActive";
import Login from "./components/Auth/Person/Login";
import axios from "axios";

=======
import React from "react";
import Main from "./Main";
>>>>>>> a411ed00da3073da8d2afb2d321b24216ea69465


function App() {

<<<<<<< HEAD


  return (
      <>

          <Header/>
          {/*<HookForm/>*/}

          <Routes>
              <Route path={"/"} element={<Home/>}/>
              <Route path={"/about"} element={<About/>}/>
              {/*<Route path={"/register"} element={<RegisterCopy/>}/>*/}
              <Route path={"/courses"} element={<Courses/>}/>
              <Route path={"/coursesDetails/:id"} element={<CoursesDetails/>}/>
              <Route path={"/person"} element={<Person/>}/>
              <Route path={"/register-code"} element={<RegisterCode/>}/>
              <Route path={"/certificate"} element={<Courses/>}/>
              <Route path={"/contact"} element={<Courses/>}/>
              {/*<Route path={"//account/activate"} element={<Activate/>}/>*/}

              {/*<Route path={"//account/activate"} element={<Register/>}/>*/}
              {/*<Route path={"/login"} element={<SignIn/>}/>*/}
              <Route path={"/login"} element={<Login/>}/>

              {/*<Route path={"/coursesDetailsPaid/:id"} element={<CoursesDetailsPaid/>}/>*/}
              <Route path={"/coursesDetails/coursesLesson/:lessonId"} element={<CoursesLesson/>}/>
              <Route path={"/about"} element={<About/>}/>
              <Route path={"/*"} element={<EmailActive/>}/>
          </Routes>
          {/*<RegisterCopy/>*/}
          {/*<RegisterCode/>*/}
          {/*<Person/>*/}
          <Footer/>


      </>
  );
=======
    return (
        <>
<<<<<<< HEAD
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
=======
            <Main/>
>>>>>>> df3898523bc9e4c6301abb515c2376db3b1d7a9d
        </>
    );
>>>>>>> a411ed00da3073da8d2afb2d321b24216ea69465
}

export default App;
