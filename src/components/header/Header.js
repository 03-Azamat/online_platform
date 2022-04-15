import React, {useEffect} from 'react';
import logo from '../../image/image 4 (Traced) (1).svg'
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import {NavLink, useNavigate} from "react-router-dom";
import HookForm from "../Auth/Register/HookForm";
import SignIn from "../Auth/Person/SignIn";
import {isAuth} from "../Auth/Register/helpers";
import {publicApi} from "../Auth/HTTP/publicApi";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {useDispatch, useSelector} from "react-redux";
import {getUser} from "../../redux/action/corsesAction";
import axios from "axios";


const Header = () => {
    const [activeForm,setActiveForm] = useState(false);
    const [signActive, setSignActive] = useState(false);
    const navigate = useNavigate();
    const link = window.location.href.split("/").pop();
   const persons = useSelector(state => state.getUser);
    const [createImg, setCreateImg] = useState([])
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUser())
    },[])
    const IdImg = JSON.parse(localStorage.getItem("imgId"));
    useEffect(() => {
        if (IdImg){
            axios.get(`https://djangorestapp.herokuapp.com/photo-detail/${IdImg}`)
                .then(({data}) => {
                    setCreateImg(data)
                })
        }
    },[])

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
                            {/*<NavLink to={"/person"}>Person</NavLink>*/}
                            <NavLink to={"/about"}>О нас</NavLink>
                            <NavLink to={"/contact"}>Контакты</NavLink>

                        </div>
                        <div className="header--content--auth  ">
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
                                            <div className='flex items-center'>
                                                <NavLink to="/person">
                                                    <div
                                                        className='mx-2'
                                                        style={{
                                                        width:"40px",
                                                        height:"40px",
                                                        // padding:"5px",
                                                        borderRadius:"50%"}}>
                                                        {
                                                            IdImg ?
                                                                <img src={createImg.img}
                                                                     className=''
                                                                     style={{
                                                                         width:"40px",
                                                                         height:"40px",
                                                                         borderRadius:"50%"}}
                                                                     alt=""/>
                                                                :
                                                                <FontAwesomeIcon
                                                                    className="mx-2"
                                                                    icon={faUser}
                                                                    style={{color:"#01487E",
                                                                        fontStyle:"32px",
                                                                        padding:"5px",
                                                                        background:"white",
                                                                        borderRadius:"50%"}}
                                                                />
                                                        }
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
                                            </div>
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
            <HookForm active={activeForm}  setActive={setActiveForm}  />
            <SignIn signActive={signActive}  setSignActive={setSignActive}  />
        </header>

    );
};

export default Header;