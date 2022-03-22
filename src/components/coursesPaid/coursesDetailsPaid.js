import React, {useEffect} from 'react';
import Cour from "../../image/cour_logo.svg";
import Accordion from "../accordion/accordion";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getCoursesDetails} from "../../redux/action/corsesAction";
import {add, format} from "date-fns";

const CoursesDetailsPaid = () => {

    const {paid} = useParams()
    const {coursesDetails: cour} = useSelector(s => s)
    console.log(cour)
    const dispatch = useDispatch()
    console.log(cour, "cour")
    console.log(paid)
    useEffect(() => {
        dispatch(getCoursesDetails(paid))
    }, [])

    //////date//////
    const date = new Date()
    const calendarDateFormat = 'dd/MM/yy'
    const currentDate = format(date, calendarDateFormat)
    const in7DaysCalendarDate = format( add(date , {days:7}) , calendarDateFormat)

    return (
        <div>
            <section id="courPaid">
                <div className="container">
                    <div className="courPaid--box">

                    <span className="courPaid--box--logo">
                        <img src={Cour} alt=""/>
                        <p>Курс</p>
                    </span>
                        <div className="courPaid--box--head ">
                            <div className="courPaid--box--head--titles">
                                <h1 className="courPaid--box--head--titles--title">{cour.title}</h1>
                                <p className="courPaid--box--head--titles--desc">
                                    “Образование — это умение правильно
                                    действовать в любых житейских ситуациях.“
                                </p>
                            </div>


                            <div className="courPaid--box--head--dates">

                                <div className="courPaid--box--head--dates--start">
                                    <p className="courPaid--box--head--dates--start--title"> Дата начала курса</p>
                                    <p className="courPaid--box--head--dates--start--desc">{currentDate}</p>
                                </div>

                                <div className="courPaid--box--head--dates--end">
                                    <p className="courPaid--box--head--dates--end--title"> Дата завершения курса</p>
                                    <p className="courPaid--box--head--dates--end--desc">{in7DaysCalendarDate}</p>
                                </div>

                            </div>
                        </div>

                        <div className="courPaid--box__middle">
                            <h1 className="courPaid--box__middle__title">О курсе</h1>

                            <div className="courPaid--box__middle__desc">
                                <p dangerouslySetInnerHTML={{__html:cour.text}}/>
                            </div>
                        </div>

                        <div className="courPaid--box--accordion">
                            <h1 className="courPaid--box--accordion--title">
                                Программа курса
                            </h1>
                            <div className="courPaid--box--accordion--block">

                                <Accordion title={"aza"}
                                           descOne={"JBGCCDFVGBHNJMNFDCRFVTGYHNJM"}
                                           descTwo={"JBGCCDFVGBHNJMNFDCRFVTGYHNJM"}
                                           descTree={"JBGCCDFVGBHNJMNFDCRFVTGYHNJM"}
                                />

                                <Accordion title={cour.title}
                                           descOne={cour.text}
                                           descTwo={cour.text}
                                           descTree={cour.text}
                                />

                                <Accordion title={cour.title}
                                           descOne={cour.text}
                                           descTwo={cour.text}
                                           descTree={cour.text}
                                />
                            </div>
                        </div>

                        <button className="courPaid--box--btn">Пройти тест</button>

                    </div>

                </div>

            </section>
        </div>
    );
};

export default CoursesDetailsPaid;