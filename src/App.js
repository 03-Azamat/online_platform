import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import {Routes,Route} from "react-router-dom";
import About from "./components/about/about";
import Register from "./components/Auth/Register/Register";
import RegisterCopy from "./components/Auth/Register/RegisterCopy";
import Courses from "./components/courses/courses";
import RegisterCode from "./components/Auth/Register/RegisterCode";
import Person from "./components/Auth/Person/Person";
import './style/App.scss';
// import Register from "./components/register/Register";
// import RegisterCopy from "./components/register/RegisterCopy";
import CoursesDetails from "./components/CoursesDetails/coursesDetails";
import Home from "./components/home/home";



function App() {

  return (
      <>
          <Header/>
          {/*<HookForm/>*/}

          <Routes>
              <Route path={"/"} element={<Home/>}/>
              <Route path={"/about"} element={<About/>}/>

              {/*<Route path={"/register"} element={<RegisterCopy/>}/>*/}
              <Route path={"/register"} element={<RegisterCopy/>}/>
              <Route path={"/courses"} element={<Courses/>}/>
              <Route path={"/person"} element={<Person/>}/>
              <Route path={"/register-code"} element={<RegisterCode/>}/>
              <Route path={"/register-check"} element={<Register/>}/>
              <Route path={"/courses/coursesDetails/:id"} element={<CoursesDetails/>}/>

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
