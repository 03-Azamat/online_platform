import React from 'react';
import {NavLink} from "react-router-dom";
import {format} from "date-fns"

const CoursesCard = ({el}) => {

    const calendarDate = format(new Date(), "dd")

    return (
            <div className="coursesCard--box--block--content">
                <NavLink to={`/coursesDetails/${el.id}`}>
                    <img src={el.img} alt=""/>
                    <h1 className="coursesCard--box--block--content--title">img</h1>
                </NavLink>
                <div className="coursesCard--box--block--content--cnp">
                    <h1 className="coursesCard--box--block--content--cnp--title">{el.title}</h1>
                    <p className="coursesCard--box--block--content--cnp--date">{calendarDate} неделя</p>
                    <button className="coursesCard--box--block--content--cnp--price">{el.price}</button>
                </div>
            </div>
    );
};

export default CoursesCard;