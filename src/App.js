import './style/App.scss';
import React from "react";
import Main from "./Main";


function App() {

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
}

export default App;
