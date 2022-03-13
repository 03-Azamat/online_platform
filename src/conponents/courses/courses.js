import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCourses} from "../../redux/action/corsesAction";
import CoursesCard from "../card/coursesCard";



const Courses = () => {

    const coursesTwo = useSelector(state => state.courses)
    const dispatch = useDispatch()

    console.log(coursesTwo)

    useEffect(() => {
        dispatch(getCourses())
    })

    return (
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
                          coursesTwo.map(el => (
                              <CoursesCard el={el} key={el.id}/>
                          ))
                      }
                  </div>
                </div>

            </div>
        </section>
    );
};
export default Courses;