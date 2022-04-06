import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCourses} from "../../redux/action/corsesAction";
import CoursesCard from "../card/coursesCard";
import {NavLink} from "react-router-dom";

const Home = () => {

    const home = useSelector(state => state.courses)
    const dispatch = useDispatch()

    console.log(home)

    useEffect(() => {
        dispatch(getCourses())
    },[])

    return (
        <div>
            <section id="home">
                <div className='home--block'>
                    <div className="container">
                        <div className="home--block--box">
                            <h1 className="home--block--box--title">Образовательная платформа</h1>
                            <p className="home--block--box--desc">
                                Образование — это умение правильно
                                действовать в любых житейских ситуациях.
                            </p>
                            <NavLink to={"/courses"}>
                                <button className="home--block--box--btn">Курсы</button>
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className="home--box">
                    <div className="container">
                        <div className="home--box--block">
                            {
                                home.map(el => (
                                    <NavLink to={"/courses"}>
                                            <CoursesCard el={el} key={el.id}/>
                                    </NavLink>
                                ))
                            }
                        </div>
                    </div>

                </div>

            </section>
        </div>
    );
};

export default Home;