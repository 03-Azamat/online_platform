import React from 'react';
import {NavLink} from "react-router-dom";
import {format} from "date-fns"

const CoursesCardPaid = ({el}) => {

    const calendarDate = format(new Date(), "dd")

    return (
        <div className="coursesCardPaid">
            <NavLink to={`/coursesDetailsPaid/${el.id}`}>
                <img src={el.img} alt=""/>
                <h1 className="coursesCardPaid--box--block--content--title">img</h1>
            </NavLink>
            <div className="coursesCardPaid--box">
                <h1 className="coursesCardPaid--box--title">{el.title}</h1>
                <p className="coursesCardPaid--box--date">{calendarDate} неделя</p>
                <button className="coursesCardPaid--box--price">{el.price}</button>
            </div>
        </div>
    );
};

export default CoursesCardPaid;