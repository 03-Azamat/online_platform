import React, {useEffect} from 'react';
import Cour from "../../image/cour_logo.svg";
import {useDispatch, useSelector} from "react-redux";
import {getCoursesDetails} from "../../redux/action/corsesAction";
import {useParams} from "react-router-dom";

const CoursesLesson = () => {
    const {params} = useParams()
    const {coursesDetails: lesson} = useSelector(s => s)
    const dispatch = useDispatch()
    console.log(lesson, "lesson")
    console.log(params)

    useEffect(() => {
        dispatch(getCoursesDetails(params))
    }, [])

    return (
        <section id="lesson">
            <div className="container">
                <div className="lesson--box">
                <span className="lesson--box--logo">
                        <img src={Cour} alt=""/>
                        <p>Курс</p>
                    </span>
                    <div className="lesson--box--head " >
                        <div className="lesson--box--head--titles">
                            <h1 className="lesson--box--head--titles--title">Aza</h1>
                            <p className="lesson--box--head--titles--desc">
                                “Образование — это умение правильно
                                действовать в любых житейских ситуациях.“
                            </p>
                        </div>

                    </div>
                    <div className="lesson--box--middle">
                        <h1 className="lesson--box--middle__title">Материалы</h1>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CoursesLesson;