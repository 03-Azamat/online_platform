import React, {useEffect, useState} from 'react';
import Cour from "../../image/cour_logo.svg";
import {useDispatch, useSelector} from "react-redux";
import {NavLink, useParams} from "react-router-dom";
import {getCoursesDetails} from "../../redux/action/corsesAction";
import Loader from "../../loader/loader";
import CoursesVideoLesson from "../coursesVideoLesson/coursesVideoLesson";


const CoursesLesson = () => {
    const {lessonId} = useParams()
    const {coursesDetails: elem} = useSelector(s => s)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCoursesDetails(lessonId))
    }, [])

    return (
        <section id="lesson">
            <div className="container">
                {
                    elem ? (
                        <div className="lesson--box">
                <span className="lesson--box--logo">
                        <img src={Cour} alt=""/>
                        <p>Курс</p>
                    </span>
                            <div className="lesson--box--head ">
                                <div className="lesson--box--head--titles">
                                    <h1 className="lesson--box--head--titles--title">{elem.title}</h1>
                                    <p className="lesson--box--head--titles--desc">
                                        “Образование — это умение правильно
                                        действовать в любых житейских ситуациях.“
                                    </p>
                                </div>
                            </div>

                            <div className="lesson--box--middle">
                                <h1 className="lesson--box--middle__title">Материалы</h1>
                                <div>
                                    {
                                        elem?.coursechoice?.map(el => (
                                            <div>
                                                <div>
                                                    <CoursesVideoLesson el={el} key={el.lessonId}/>
                                                </div>
                                                <div>
                                                    <p dangerouslySetInnerHTML={{__html:el.choicetopic?.topics?.name_work}}/>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="lesson--box--end">

                            </div>
                            <NavLink to={`/coursesDetails/${elem.lessonId}`}>
                                <button className="lesson--box--btn">Назад</button>
                            </NavLink>
                        </div>
                    ): <Loader/>
                }

            </div>
        </section>
    );
};

export default CoursesLesson;