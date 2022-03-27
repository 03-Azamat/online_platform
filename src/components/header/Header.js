import React  from 'react';
import logo from '../../image/image 4 (Traced) (1).svg'
import {useState} from "react";
// import Register from "../register/Register";
// import RegisterCopy from "../register/RegisterCopy";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import {NavLink} from "react-router-dom";
import HookForm from "../Auth/Person/HookForm";
import SignIn from "../Auth/Register/SignIn";
import {QuizContext} from "../../data/Contexts";
import MainMenu from "../Test/function/MainMenu";
import Quiz from "../Test/function/Quiz";
import EndScreen from "../Test/function/EndScreen";
import MainTest from "../Test/MainTest";
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import { faXmark} from "@fortawesome/free-solid-svg-icons";
//
// import Register from "../Auth/Register/Register";
// import RegisterCopy from "../Auth/Register/RegisterCopy";
// import FormInput from "../Auth/Register/FormInput";
// import RegisterCode from "../Auth/Register/RegisterCode";

const Header = () => {
    const [activeForm,setActiveForm] = useState(false)
    const [signActive, setSignActive] = useState(false)
    const [testActive, setTestActive] = useState(false)

    return (
        <header>
            <div className="header">
                <div className="container">
                    <div className="header--content ">

                        <div className="header--content--logo">
                            <NavLink to={"/"}>
                                <img src={logo} alt=""/>
                            </NavLink>

                        </div>
                        <div className="header--content--items">
                            <NavzLink to={"/"}>Главная</NavzLink>
                            <NavLink to={"/courses"}>Курсы</NavLink>
                            <NavLink to={"/certificate"}>Проверка сертификатов</NavLink>
                            <NavLink to={"/person"}>person</NavLink>
                            <NavLink to={"/about"}>О нас</NavLink>
                            <NavLink to={"contact"}>Контакты</NavLink>
                            <NavLink to={"/MainMenu"}>
                                <button className="home--block--box--btn md-5" onClick={() => <MainTest/>}>Курсы</button>
                            </NavLink>
                        </div>
                        <div className="header--content--auth">
                            <button onClick={() => setActiveForm(true)} className="header--content--auth--btn1">Регистрация</button>
                            <button onClick = {() => setSignActive(true)} className="header--content--auth--btn2 mx-4">Вход</button>
                            {/*    <NavLink to='/register'>*/}
                            {/*        /!*<button onClick={() => setActiveRegisterCopy(true)} className="header--content--auth--btn1">Регистрация</button>*!/*/}
                            {/*    </NavLink>*/}

                            {/*<NavLink to='/person'>*/}
                            {/*    <button className="header--content--auth--btn2">Вход</button>*/}
                            {/*</NavLink>*/}
                        </div>
                        <BurgerMenu/>
                    </div>

                </div>
            </div>
            <HookForm active={activeForm}  setActive={setActiveForm}  />
            <SignIn active={signActive}  setActive={setSignActive}  />
        </header>

    );
};

export default Header;