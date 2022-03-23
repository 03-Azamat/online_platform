import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getCoursesDetails, getCoursesLesson} from "../../redux/action/corsesAction";
import Cour from "../../image/cour_logo.svg"
import Accordion from "../accordion/accordion";
import {add , format } from "date-fns"

const CoursesDetails = () => {
    const {id} = useParams()

    const {coursesDetails: cour} = useSelector(s => s)
    const lesson = useSelector(state => state.lessonDetails)

    const dispatch = useDispatch()

    console.log(cour, "courses")
    console.log(id)
    console.log(lesson, "les")


    useEffect(() => {
        dispatch(getCoursesDetails(id))
        dispatch(getCoursesLesson(id))
    }, [])


    //////date-fns//////
    const date = new Date()
    const calendarDateFormat = 'dd/MM/yy'
    const currentDate = format(date, calendarDateFormat)
    const in7DaysCalendarDate = format( add(date , {days:7}) , calendarDateFormat)


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
                            <h1 className="cour--box--head--titles--title">{cour.title}</h1>
                            <p className="cour--box--head--titles--desc">
                                “Образование — это умение правильно
                                действовать в любых житейских ситуациях.“
                            </p>
                            <button className="cour--box--head--titles--btn">Оставить заявку</button>
                        </div>


                        <div className="cour--box--head--dates">

                            <div className="cour--box--head--dates--start">
                                <p className="cour--box--head--dates--start--title"> Дата начала курса</p>
                                <p className="cour--box--head--dates--start--desc">{currentDate}</p>
                            </div>

                            <div className="cour--box--head--dates--end">
                                <p className="cour--box--head--dates--end--title"> Дата завершения курса</p>
                                <p className="cour--box--head--dates--end--desc">{in7DaysCalendarDate}</p>
                            </div>

                        </div>
                    </div>

                    <div className="cour--box__middle">
                        <h1 className="cour--box__middle__title">О курсе</h1>

                        <div className="cour--box__middle__desc">
                            <p dangerouslySetInnerHTML={{__html:cour.text}}/>
                        </div>
                    </div>

                    <div className="cour--box--accordion">
                        <h1 className="cour--box--accordion--title">
                            Программа курса
                        </h1>

                        <div className="cour--box--accordion--block">
                            <Accordion el={cour}/>

                        </div>

                    </div>
                </div>
            </div>

        </section>
    );
};

export default CoursesDetails;