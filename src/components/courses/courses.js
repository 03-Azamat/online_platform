import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCourses} from "../../redux/action/corsesAction";
import CoursesCard from "../card/coursesCard";
import Loader from "../../loader/loader";

const Courses = () => {
    const elem = useSelector(state => state.courses)
    const dispatch = useDispatch()
    console.log(elem , "elem")
    useEffect(() => {
        dispatch(getCourses())
    }, [])

    return (
        elem.length === 0 ? <Loader/> :
            <section id="courses">
                <div className='courses--block'>
                    <div className="container">
                        <h1 className="courses--block--title">Курсы</h1>
                    </div>
                </div>

                <div className="courses--box">

                    <div className="container">

                        <div className="courses--box--block">
                            {
                                elem.map(el => (
                                    <CoursesCard key={el.id} el={el}/>
                                ))
                            }
                        </div>
                    </div>

                </div>
            </section>
    );
};
export default Courses;