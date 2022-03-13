import React  from 'react';
import logo from '../../image/image 4 (Traced) (1).svg'
import {useState} from "react";
// import Register from "../register/Register";
// import RegisterCopy from "../register/RegisterCopy";
import BurgerMenu from "./../../conponents/BurgerMenu/BurgerMenu";
import {NavLink} from "react-router-dom";
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import { faXmark} from "@fortawesome/free-solid-svg-icons";
//
// import Register from "../Auth/Register/Register";
// import RegisterCopy from "../Auth/Register/RegisterCopy";
// import FormInput from "../Auth/Register/FormInput";
// import RegisterCode from "../Auth/Register/RegisterCode";
import HookForm from "../Auth/Person/HookForm";

const Header = () => {
    // const navigate = useNavigate()
    //  const [activeRegisterCopy,setActiveRegisterCopy] = useState(false)


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
                            <NavLink to={"/person"}>person</NavLink>
                            <NavLink to={"/about"}>О нас</NavLink>
                            <NavLink to={"contact"}>Контакты</NavLink>
                        </div>
                        <div className="header--content--auth">

                                <NavLink to='/register'>
                                    {/*<button onClick={() => setActiveRegisterCopy(true)} className="header--content--auth--btn1">Регистрация</button>*/}
                                </NavLink>

                            <NavLink to='/person'>
                                <button className="header--content--auth--btn2">Вход</button>
                            </NavLink>
                        </div>
                        <BurgerMenu/>
                    </div>

                </div>
            </div>
            {/*<HookForm active={activeRegisterCopy}  setActive={setActiveRegisterCopy}  />*/}
        </header>

    );
};

export default Header;