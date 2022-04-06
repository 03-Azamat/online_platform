import React, {useEffect} from 'react';
import logo from '../../image/image 4 (Traced) (1).svg'
import {useState} from "react";
// import Register from "../register/Register";
// import RegisterCopy from "../register/RegisterCopy";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import {Link, NavLink, useNavigate} from "react-router-dom";
import HookForm from "../Auth/Person/HookForm";
import SignIn from "../Auth/Register/SignIn";
import EmailActive from "../Auth/emailActive/EmailActive";
import {isAuth} from "../Auth/Register/helpers";
import axios from "axios";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons/faUser";
import {publicApi} from "../Auth/HTTP/publicApi";

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
// import {Quiz} from "../Test/function/Quiz";
// import EndScreen from "../Test/function/EndScreen";

const Header = () => {
    const [activeForm, setActiveForm] = useState(false)
    const [signActive, setSignActive] = useState(false)
    const [persons, setPersons] = useState({})
    const navigate = useNavigate();
    const link = window.location.href.split("/").pop();
    const access = JSON.parse(localStorage.getItem("access"));
    useEffect(() => {
        const  user = publicApi.get("users/me/", {
            headers: {
                "Authorization": `Bearer ${access}`
            }
        })
            .then(({data}) => setPersons(data))

    }, [])
    const [testActive, setTestActive] = useState(false)
    // const [score, setScore] = useState(0)
    // const [gameState, setGameState] = useState("menu")

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
                            <NavLink to={"/"}>Главная</NavLink>
                            <NavLink to={"/courses"}>Курсы</NavLink>
                            <NavLink to={"/certificate"}>Проверка сертификатов</NavLink>
                            <NavLink to={"/person"}>Person</NavLink>
                            <NavLink to={"/about"}>О нас</NavLink>
                            <NavLink to={"/contact"}>Контакты</NavLink>

                        </div>
                        <div className="header--content--auth flex items-center ">
                            {
                                isAuth() ?
                                   <>{
                                    link === "person" ?
                                        <button
                                            className="header--content--auth--btn2 mx-4"
                                            onClick={() => {
                                        navigate("/")
                                        }}
                                            >Выйти </button> :
                                        <>
                                           <NavLink to="/person">
                                               <div>
                                                   <FontAwesomeIcon
                                                       className="mx-2"
                                                       icon={faUser}
                                                       style={{color:"#01487E",
                                                           fontStyle:"32px",
                                                           padding:"5px",
                                                           background:"white",
                                                           borderRadius:"50%"}}
                                                   />
                                               </div>
                                           </NavLink>
                                            <NavLink to="/person">
                                                <h1
                                                    style={{color: "#FFFFFF",
                                                        fontSize:"20px",
                                                        cursor:"pointer"
                                                    }}
                                                >{persons.name}</h1>
                                            </NavLink>
                                        </>
                                   }

                                   </>
                                    :
                                    <>
                                        <button onClick={() => setActiveForm(true)}
                                                className="header--content--auth--btn1">Регистрация
                                        </button>
                                        <button
                                            onClick={() => {
                                                setSignActive(true)
                                            }}
                                            className="header--content--auth--btn2 mx-4">Вход
                                        </button>
                                    </>
                            }

                        </div>
                        <BurgerMenu/>
                    </div>

                </div>
            </div>
            <HookForm active={activeForm} setActive={setActiveForm}/>
            <SignIn signActive={signActive} setSignActive={setSignActive}/>
        </header>

    );
};

export default Header;