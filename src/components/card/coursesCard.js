import React from 'react';
import {NavLink} from "react-router-dom";
import {format} from "date-fns"

const CoursesCard = ({el}) => {
    const calendarDate = format(new Date(), "dd")

    return (
            <div className="coursesCard" key={el.id}>
                <NavLink to={`/coursesDetails/${el.id}`}>
                    <img src={el.img} alt="" className="rounded-t-md"/>
                    <p className="mt-9">img</p>
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