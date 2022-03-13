import Header from "./conponents/header/Header";
import Footer from "./conponents/footer/Footer";
import {Routes,Route} from "react-router-dom";
import About from "./conponents/about/about";
import Register from "./conponents/Auth/Register/Register";
import RegisterCopy from "./conponents/Auth/Register/RegisterCopy";
import Courses from "./conponents/courses/courses";
import RegisterCode from "./conponents/Auth/Register/RegisterCode";
import Person from "./conponents/Auth/Person/Person";
import './style/App.scss';
// import Register from "./conponents/register/Register";
// import RegisterCopy from "./conponents/register/RegisterCopy";
import CoursesDetails from "./conponents/CoursesDetails/coursesDetails";
import Home from "./conponents/home/home";



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
