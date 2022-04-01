import React, {useEffect} from 'react';
import {NavLink, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getCoursesDetails} from "../../redux/action/corsesAction";
import Cour from "../../image/cour_logo.svg"
import {add , format } from "date-fns"
import MainTest from "../Test/MainTest";

import Accordion from "../accordion/accordion";
import Loader from "../../loader/loader";


const CoursesDetails = () => {
    // const [ isBought , setIsBought ] = useState(false)
    // const [fagData , setFaqData] = useSelector({})

    const {id} = useParams()
    console.log(id, "iddd")
    const {coursesDetails : course} = useSelector(s => s)
    // if(cour?.free) {
    //     setIsBought(false);
    //     dispatch(cour?.free)
    // }else{
    //     setIsBought(true);
    //     dispatch(cour?.bought)
    // }

    const dispatch = useDispatch()
    console.log(course, "courses")
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
        <section id="cour">

            <div className="container">
                {course ? (
                    <div key={course.id} className="cour--box">
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
                                <p dangerouslySetInnerHTML={{__html:course.text}}/>
                            </div>
                        </div>

                        <div className="cour--box--accordion">
                            <h1 className="cour--box--accordion--title">
                                Программа курса
                            </h1>

                            <div className="cour--box--accordion--block">
<<<<<<< HEAD
                                {/*<Accordion/>*/}
                            </div>
                            <NavLink to={"/MainMenu"}>
                                <button className="home--block--box--btn md-5" onClick={() => <MainTest/>}>Курсы</button>
                            </NavLink>


                                {
                                    course?.coursechoice?.map(el=>(
                                        <Accordion el={el} />
                                    ))
                                }
=======
                                <div>
                                    {
                                        course?.coursechoice?.map(el=>(
                                            <Accordion el={el} />
                                        ))
                                    }
                                </div>
                            </div>
>>>>>>> 5a386e82574e26e287275ad13a8a81227bff7535
                        </div>
                    </div>

                ): <Loader/>}
            </div>

        </section>
    );
};

export default CoursesDetails;