import React, {useEffect, useState} from 'react';
import {NavLink, useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getApplication, getCoursesDetails, getTestResults} from "../../redux/action/corsesAction";
import Cour from "../../image/cour_logo.svg"
import {add, format} from "date-fns"
import Accordion from "../accordion/accordion";
import Loader from "../../loader/loader";
import {isAuth} from "../Auth/Register/helpers";
import AccordionDemo from "../accordion/accordionDemo";
import {publicApi} from "../Auth/HTTP/publicApi";
import {toast} from "react-toastify";
import SignIn from "../Auth/Person/SignIn";

const CoursesDetails = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const course = useSelector(state => state.coursesDetails)
    const user = useSelector(state => state.getUser)
    const app = useSelector(state => state.getApp)
    const {getTestResult: resultTest} = useSelector(s => s);
    const [paid, setPaid] = useState(false)
    const [signTest, setSighTest] = useState(true)
    const [signActive, setSignActive] = useState(false);
    const [activeCour,setActiveCour] = useState(false)
    console.log(resultTest, "TTTTTTTTTTTTT")

    useEffect(() => {
        dispatch(getCoursesDetails(id))
        dispatch(getApplication())
        dispatch(getTestResults());
    }, [])


    function refreshPage() {
        window.location.reload();
    }

    //////date-fns//////
    const date = new Date()
    const calendarDateFormat = 'dd/MM/yy'
    const currentDate = format(date, calendarDateFormat)
    const in7DaysCalendarDate = format(add(date, {days: 7}), calendarDateFormat)

    const post = () => {
        publicApi.post('ApplicationToAdmin-Create/', {
            activation: false,
            created_date: "2022-05-11T13:25:54.645Z",
            user: user.id,
            applicationcourse: course.id
        })
            .then(data => {
                refreshPage()
                toast.success('EEEEEEEE')
            }).catch(error => {
            console.log(error)
        })
    }
    useEffect(() => {
        app.forEach(data => {
                if (data.applicationcourse === course.id && data.user === user.id && data.activation) {
                    console.log(data.applicationcourse, "app_id")
                    setPaid(true)
                }

            }
        )
        app.forEach(data => {
                if (data.applicationcourse === course.id && data.user === user.id) {
                    console.log(data.applicationcourse, "app_id")
                    setActiveCour(true)
                }
            }
        )

        resultTest.forEach(data =>{
            if (data.course === course.id && data.user === user.id ){
                setSighTest(false)
            }
        })

    }, [app, course])

    console.log("activeCour",activeCour)
    return (
        <section id="cour" key={course?.id}>
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
                                    isAuth() ? <div>
                                            {
                                                activeCour? <div>
                                                        {
                                                          paid ? "" : <button className="cour--box--head--titles--btn"
                                                          >Курс на расмотрение администратора</button>
                                                        }
                                                </div> : <button className="cour--box--head--titles--btn"
                                                                    onClick={() => post()}
                                                >Купить курс</button>
                                            }
                                        </div>
                                        : <button className="cour--box--head--titles--btn"
                                                  onClick={() => setSignActive(true)}
                                        >Оставить заявку</button>
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
                                <p dangerouslySetInnerHTML={{__html: course.text}}/>
                            </div>
                        </div>

                        <div className="cour--box--accordion">
                            <h1 className="cour--box--accordion--title">
                                Программа курса
                            </h1>
                            <div className="cour--box--accordion--block">
                            </div>
                            <div>
                                {
                                    paid ?
                                        <div>
                                            keldi
                                            {
                                                course?.coursechoice?.map(el => (
                                                    <Accordion el={el} key={el.id}/>
                                                ))
                                            }
                                        </div> :
                                        <div>
                                            kelgen jok
                                            {
                                                course?.coursechoice?.map(el => (
                                                    <AccordionDemo el={el} key={el.id}/>
                                                ))
                                            }
                                        </div>
                                }
                            </div>
                        </div>
                        {
                            isAuth() ? <div>
                                {
                                    paid ? <div className="cour--box--test">
                                        <h1 className="cour--box--test--title">Внимание! </h1>
                                        <p className="cour--box--test--desc">
                                            После изучения материалов курса Вы должны будете пройти тестирование.
                                            На прохождение теста Вам будет предоставлена одна попытка!
                                        </p>
                                        <div>
                                            {
                                            signTest ? <NavLink to={`/question/${course.id}`}>
                                                    <button
                                                        className="cour--box--test--btn">Тест
                                                    </button>
                                                </NavLink> :
                                                <button className="cour--box--test--btn">Кире албайсын болду</button>
                                            }
                                        </div>
                                    </div> : ""
                                }
                            </div> : ""
                        }
                    </div>
                ) : <Loader/>}

            </div>
            <SignIn signActive={signActive} setSignActive={setSignActive}/>
        </section>
    );
};

export default CoursesDetails;