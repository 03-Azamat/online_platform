import React, {useEffect, useState} from 'react';
import {NavLink, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getAdmin, getCoursesDetails} from "../../redux/action/corsesAction";
import Cour from "../../image/cour_logo.svg"
import {add , format } from "date-fns"
import Accordion from "../accordion/accordion";
import Loader from "../../loader/loader";
import {isAuth} from "../Auth/Register/helpers";


const CoursesDetails = () => {
    const [ isBought , setIsBought ] = useState(false)
    const {id} = useParams()

    const dispatch = useDispatch()
    console.log(id, "iddd")
    const {coursesDetails : course} = useSelector(s => s)
    // if(course?.free) {
    //     setIsBought(false);
    //     dispatch(getAdmin(course?.free))
    // }else{
    //     setIsBought(true);
    //     dispatch(getAdmin(course?.bought))
    // }

    console.log(course?.id , "courses")
    console.log(id)

    useEffect(() => {
        dispatch(getCoursesDetails(id))
    }, [])


    //////date-fns//////
    const date = new Date()
    const calendarDateFormat = 'dd/MM/yy'
    const currentDate = format(date, calendarDateFormat)
    const in7DaysCalendarDate = format( add(date , {days:7}) , calendarDateFormat)

    return (
        <section id="cour"  key={course?.id}>

            <div className="container">
                {course ? (
                    <div className="cour--box">
                    <span className="cour--box--logo">
                        <img src={Cour} alt=""/>
                        <p>Курс</p>
                    </span>
                        <div className="cour--box--head ">

                            <div className="cour--box--head--titles">
                                <h1 className="cour--box--head--titles--title">{course.title}</h1>
                                <p className="cour--box--head--titles--desc">
                                    “Образование — это умение правильно
                                    действовать в любых житейских ситуациях.“
                                </p>
                                {
                                    isAuth() ?
                                        "" :
                                        <button className="cour--box--head--titles--btn">Оставить заявку</button>

                                }
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
                                <p dangerouslySetInnerHTML={{__html:course.text}}/>
                            </div>
                        </div>

                        <div className="cour--box--accordion">
                            <h1 className="cour--box--accordion--title">
                                Программа курса
                            </h1>

                            <div className="cour--box--accordion--block">
                            </div>
                                {
                                    course?.coursechoice?.map(el=>(
                                        <Accordion el={el} key={el.id}/>
                                    ))
                                }
                            </div>

                        <div className="cour--box--test">
                            <h1 className="cour--box--test--title">Внимание! </h1>
                            <p className="cour--box--test--desc">
                                После изучения материалов курса Вы должны будете пройти тестирование.
                                На прохождение теста Вам будет предоставлена одна попытка!
                            </p>

                            <NavLink to={`/question/${course.id}`}>
                                <div>
                                    <button className="cour--box--test--btn">Тест</button>
                                </div>
                            </NavLink>


                        </div>
                    </div>

                ): <Loader/>}

            </div>

        </section>
    );
};

export default CoursesDetails;