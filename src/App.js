// import './style/App.scss';
// import Header from "./components/header/Header";
// import Footer from "./components/footer/Footer";
// import {Routes, Route, useHistory, useParams} from "react-router-dom";
// import About from "./components/about/about";
// import Register from "./components/Auth/Register/Register";
//
// import Courses from "./components/courses/courses";
// import CoursesDetails from "./components/courses/coursesDetails";
// import CoursesLesson from "./components/courses/coursesLesson";
// import RegisterCode from "./components/Auth/Register/RegisterCode";
// import Person from "./components/Auth/Person/Person";
// // import Register from "./components/register/Register";
// // import RegisterCopy from "./components/register/RegisterCopy";
// import Home from "./components/home/home";
//
//
// import React from "react";
// import Main from "./Main";
// import MainMenu from "./components/Test/function/MainMenu";
//
//
// function App() {
//    return (
//         <>
//             <Header/>
//             <Routes>
//                 <Route path={"/"} element={<Home/>}/>
//                 <Route path={"/about"} element={<About/>}/>
//                 <Route path={"/courses"} element={<Courses/>}/>
//                 <Route path={"/coursesDetails/:id"} element={<CoursesDetails/>}/>
//                 <Route path={"/person"} element={<Person/>}/>
//                 <Route path={"/register-code"} element={<RegisterCode/>}/>
//                 <Route path={"/register-check"} element={<Register/>}/>
//                 <Route path={"/coursesDetails/coursesLesson/:lessonId"} element={<CoursesLesson/>}/>
//                 <Route path={"/about"} element={<About/>}/>
//                 <Route path={"/menu"} element={<MainMenu/>}/>
//                 <Route path={"/MainMenu"} element={
//                     <div className="Appp">
//                         <QuizContext.Provider value={{ gameState, setGameState, score, setScore, mistakes, setMistakes}}>
//                             {gameState === "menu" && <MainMenu/>}
//                             {gameState === "quiz" && <Quiz/>}
//                             {gameState === "endScreen" && <EndScreen/>}
//                         </QuizContext.Provider>
//
//                     </div>
//                 }/>
//                 <Route path={"/home"} element={<Home/>}/>
//             </Routes>
//
//             <Footer/>
//             <Main/>
//         </>
//     );
// }
//
// export default App;
