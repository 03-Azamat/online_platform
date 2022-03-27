import React, {useEffect, useState} from 'react';
import Cour from "../../image/cour_logo.svg";
import {useDispatch, useSelector} from "react-redux";
import {getLesson} from "../../redux/action/corsesAction";
import {NavLink, useParams} from "react-router-dom";

const CoursesLesson = () => {
    const lessonId = useParams()
    console.log(lessonId)
    const lesson = useSelector(state => state.lessonDetails)
    const {coursesDetails: elem} = useSelector(s => s)
    const dispatch = useDispatch()
    console.log(lesson, "lesson")
    console.log(elem)
    const [active, setActive] = useState(null)

    useEffect(() => {
        dispatch(getLesson(lessonId))
    }, [])
    return (
        <section id="lesson">
            <div className="container">
                <div className="lesson--box">
                <span className="lesson--box--logo">
                        <img src={Cour} alt=""/>
                        <p>Курс</p>
                    </span>
                    <div className="lesson--box--head ">
                        <div className="lesson--box--head--titles">
                            <h1 className="lesson--box--head--titles--title">aaza</h1>
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
                                lesson?.topics?.videos?.map(el => (
                                    <div>
                                        <div>
                                            <h1>{el.topik}retyuio</h1>
                                                <iframe width="1280" height="720"
                                                        src={el.url}
                                                        title="YouTube video player" frameBorder="0"
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                        allowFullScreen/>
                                                </div>

                                            <div>

                                        </div>

                                    </div>

                                ))

                            }
                        </div>
                    </div>
                    <div className="lesson--box--end">

                    </div>
                    <NavLink to="/coursesDetailsPaid/:id">
                        <button className="lesson--box--btn">Назад</button>
                    </NavLink>
                </div>
            </div>
        </section>
    );
};

export default CoursesLesson;