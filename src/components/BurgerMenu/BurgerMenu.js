import React, {useEffect, useState} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import {isAuth} from "../Auth/Register/helpers";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {useDispatch, useSelector} from "react-redux";
import {getImg, getUser} from "../../redux/action/corsesAction";
import HookForm from "../Auth/Register/HookForm";
import SignIn from "../Auth/Person/SignIn";

const BurgerMenu = () => {
    const [activeForm, setActiveForm] = useState(false);
    const [signActive, setSignActive] = useState(false);
    const [NavOpen, setNavOpen] = useState(false);

    const navigate = useNavigate();
    const link = window.location.href.split("/").pop();
    const persons = useSelector(state => state.getUser);
    const profileImg = useSelector(state => state.getImg);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUser())
        dispatch(getImg())
    }, [])

    return (
        <div className="flex items-center justify-between border-b border-gray-400 py-8">
            <nav>
                <section className="MOBILE-MENU flex lgMedia:hidden">
                    <div
                        className="HAMBURGER-ICON space-y-2"
                        onClick={() => setNavOpen((prev) => !prev)}
                    >
                        <span className="block h-0.5 w-8 animate-pulse bg-gray-200"/>
                        <span className="block h-0.5 w-8 animate-pulse bg-gray-200"/>
                        <span className="block h-0.5 w-8 animate-pulse bg-gray-200"/>
                    </div>

                    <div className={NavOpen ? "showMenuNav" : "hideMenuNav"}>
                        <div
                            className="absolute top-0 right-0 px-8 py-8"
                            onClick={() => setNavOpen(false)}
                        >
                            <svg
                                className="h-8 w-8 text-gray-200"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="18" y1="6" x2="6" y2="18"/>
                                <line x1="6" y1="6" x2="18" y2="18"/>
                            </svg>
                        </div>
                        <ul className="flex flex-col items-center justify-between min-h-[50vh]">
                            <li className="border-b border-gray-400 my-8 uppercase text-white">
                                <NavLink to="/">Главная</NavLink>
                            </li>

                            <li className="border-b border-gray-400 my-8 uppercase text-white">
                                <NavLink to="/courses">Курсы</NavLink>
                            </li>

                            <li className="border-b border-gray-400 my-8 uppercase text-white">
                                <NavLink to="/about">О нас</NavLink>
                            </li>

                            <li className="border-b border-gray-400 my-8 uppercase text-white">
                                <NavLink to="/contact">Контакт</NavLink>
                            </li>

                            <li className="border-b border-gray-400 my-8 uppercase text-white">
                                <NavLink to="/person">Личный кабинет</NavLink>
                            </li>

                            <li className="border-b border-gray-400 my-8 uppercase text-white">
                                <div>
                                    {
                                        isAuth() ?
                                            <>{
                                                link === "person" || link === "person#loaded" ?
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
                                                                    width: "40px",
                                                                    height: "40px",
                                                                    // padding:"5px",
                                                                    borderRadius: "50%"
                                                                }}>
                                                                {
                                                                    profileImg ?
                                                                        <img src={profileImg.img}
                                                                             className=''
                                                                             style={{
                                                                                 width: "40px",
                                                                                 height: "40px",
                                                                                 borderRadius: "50%",
                                                                                 background: "fixed"
                                                                             }}
                                                                             alt=""/>
                                                                        :
                                                                        <FontAwesomeIcon
                                                                            className="mx-2"
                                                                            icon={faUser}
                                                                            style={{
                                                                                color: "#01487E",
                                                                                fontStyle: "32px",
                                                                                padding: "5px",
                                                                                background: "white",
                                                                                borderRadius: "50%"
                                                                            }}
                                                                        />
                                                                }
                                                            </div>
                                                        </NavLink>
                                                        <NavLink to="/person">
                                                            <h1
                                                                style={{
                                                                    color: "#FFFFFF",
                                                                    fontSize: "20px",
                                                                    cursor: "pointer"
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
                            </li>


                        </ul>
                    </div>
                </section>
            </nav>
            <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: #01487E;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
            <HookForm active={activeForm} setActive={setActiveForm}/>
            <SignIn signActive={signActive} setSignActive={setSignActive}/>
        </div>
    );
};

export default BurgerMenu;