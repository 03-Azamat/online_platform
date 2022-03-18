import React from 'react';
import {NavLink} from "react-router-dom";
import {format} from "date-fns"

const CoursesCard = ({el}) => {

    const calendarDate = format(new Date(), "dd")

    return (
            <div className="coursesCard">
                <NavLink to={`/coursesDetails/${el.id}`}>
                    <img src={el.img} alt=""/>
                    <h1 className="coursesCard--box--block--content--title">img</h1>
                </NavLink>
                <div className="coursesCard--box">
                    <h1 className="coursesCard--box--title">{el.title}</h1>
                    <p className="coursesCard--box--date">{calendarDate} неделя</p>
                    <button className="coursesCard--box--price">{el.price}</button>
                </div>
            </div>
    );
};

export default CoursesCard;