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
// import Register from "./components/register/Register";
// import RegisterCopy from "./components/register/RegisterCopy";
import Home from "./components/home/home";
import CoursesDetailsPaid from "./components/coursesPaid/coursesDetailsPaid";
import SignIn from "./components/Auth/Register/SignIn";




function App() {

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
              <Route path={"//account/activate"} element={<Register/>}/>
              <Route path={"//account/activate"} element={<Register/>}/>
              <Route path={"/login"} element={<SignIn/>}/>

              {/*<Route path={"/coursesDetailsPaid/:id"} element={<CoursesDetailsPaid/>}/>*/}
              <Route path={"/coursesDetails/coursesLesson/:lessonId"} element={<CoursesLesson/>}/>
              <Route path={"/about"} element={<About/>}/>
              {/*<Route path={"/contact"} element={<Contact/>}/>*/}
          </Routes>
          {/*<RegisterCopy/>*/}
          {/*<RegisterCode/>*/}
          {/*<Person/>*/}
          <Footer/>

      </>
  );
}

export default App;
