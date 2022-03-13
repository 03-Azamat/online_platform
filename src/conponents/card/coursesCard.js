import React from 'react';
import {NavLink} from "react-router-dom";

const CoursesCard = ({el}) => {
    return (

            <div className="coursesCard--box--block--content">
                <NavLink to={`/courses/coursesDetails/${el.id}`}>
                    <img src={el.image} alt=""/>
                    <h1 className="coursesCard--box--block--content--title">{el.subtitle_ru}</h1>
                </NavLink>
                <div className="coursesCard--box--block--content--cnp">
                    <h1 className="coursesCard--box--block--content--cnp--title">{el.created}</h1>
                    <h1 className="coursesCard--box--block--content--cnp--date">
                        {el.mentor}</h1>
                    <button className="coursesCard--box--block--content--cnp--price">1.2000</button>
                </div>
            </div>
    );
};

export default CoursesCard;