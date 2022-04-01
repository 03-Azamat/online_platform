import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCourses} from "../../redux/action/corsesAction";
import CoursesCard from "../card/coursesCard";
import Loader from "../../loader/loader";


const Courses = () => {

    const coursesTwo = useSelector(state => state.courses)

    console.log(coursesTwo, "coursesTwo")
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCourses())
    },[])

    return (
        coursesTwo.length === 0 ? <Loader/> :
        <section id="courses">
            <div className='courses--block'>0
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