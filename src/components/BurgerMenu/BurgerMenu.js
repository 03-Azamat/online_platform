import React, {useState} from 'react';
import {NavLink} from "react-router-dom";

const BurgerMenu = () => {
    const [NavOpen, setNavOpen] = useState(false);

    return (
        <div>
            <nav>
                <section className="MOBILE-MENU flex lg:hidden absolute">
                    <div
                        className="HAMBURGER-ICON space-y-2"
                        onClick={() => setNavOpen((prev) => !prev)}
                    >
                        <span className="block h-0.5 w-8 animate-pulse bg-white"/>
                        <span className="block h-0.5 w-8 animate-pulse bg-white"/>
                        <span className="block h-0.5 w-8 animate-pulse bg-white"/>
                    </div>

                    <div className={NavOpen ? "showMenuNav" : "hideMenuNav"}>
                        <div
                            className="absolute top-0 right-0 px-8 py-8"
                            onClick={() => setNavOpen(false)}
                        >
                            <svg
                                className="h-8 w-8 text-gray-600"
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

                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "column"
                        }}>

                            <NavLink to={"/"}
                                     className="text-white text-2xl p-3"
                                     onClick={() => setNavOpen(false)}>
                                Главная
                            </NavLink>

                            <NavLink to={"/courses"}
                                     className="text-white text-2xl p-3"
                                     onClick={() => setNavOpen(false)}>
                                Курсы
                            </NavLink>

                            <NavLink to={"/certificate"}
                                     className="text-white text-2xl p-3"
                                     onClick={() => setNavOpen(false)}>
                                Проверка сертификатов
                            </NavLink>

                            <NavLink to={"/about"}
                                     className="text-white text-2xl p-3"
                                     onClick={() => setNavOpen(false)}
                            >
                                О нас
                            </NavLink>

                            <NavLink to={"/contact"}
                                     className="text-white text-2xl p-3"
                                     onClick={() => setNavOpen(false)}
                            >
                                Контакты
                            </NavLink>
                        </div>
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
        height: 90vh;
        background: #01487E;
        z-index: 10;
      }
    `}</style>
        </div>
    );
};

export default BurgerMenu;