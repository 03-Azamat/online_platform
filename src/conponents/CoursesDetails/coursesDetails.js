import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getCoursesDetails} from "../../redux/action/corsesAction";
import Cour from "./../../image/cour_logo.svg"

const CoursesDetails = () => {
    const {id} = useParams()
    const {coursesDetails: cour} = useSelector(s => s)
    const dispatch = useDispatch()
    console.log(cour, "cour")
    console.log(id)
    useEffect(() => {
        dispatch(getCoursesDetails(id))
    }, [])

    return (
        <section id="cour">

            <div className="container">

                <div className="cour--box">
                    <span className="cour--box--logo">
                        <img src={Cour} alt=""/>
                        <p>Курс</p>
                    </span>
                    <div className="cour--box--head ">
                        <div className="cour--box--head--titles">
                            <h1 className="cour--box--head--titles--title">{cour.title_ru}</h1>
                            <p className="cour--box--head--titles--desc">“Образование — это умение правильно
                                действовать в любых житейских ситуациях.“
                            </p>
                            <button className="cour--box--head--titles--btn">Оставить заявку</button>
                        </div>

                        <div className="cour--box--head--dates">
                            <div className="cour--box--head--dates--start">
                                <p className="cour--box--head--dates--start--title"> Дата начала курса</p>
                                <p className="cour--box--head--dates--start--desc">{cour.schedule_ru}</p>
                            </div>
                            <div className="cour--box--head--dates--end">
                                <p className="cour--box--head--dates--end--title"> Дата завершения курса</p>
                                <p className="cour--box--head--dates--end--desc">{cour.schedule_ru}</p>
                            </div>
                        </div>
                    </div>

                    <div className="cour--box__middle">
                        <h1 className="cour--box__middle__title">О курсе</h1>

                        <div className="cour--box__middle__desc">
                            <p>
                                {cour.overview_ru}
                            </p>
                        </div>
                    </div>

                    <div className="cour--box--accordion">
                        <h1 className="cour--box--accordion--title">
                            Программа курса
                        </h1>
                        <div className="cour--box--accordion--block">

                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default CoursesDetails;