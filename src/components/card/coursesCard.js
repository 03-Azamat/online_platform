import React from 'react';
import {NavLink} from "react-router-dom";
import {format} from "date-fns"

const CoursesCard = ({el}) => {
    const calendarDate = format(new Date(), "dd")

    return (
            <div className="coursesCard" key={el.id}>
                <NavLink to={`/coursesDetails/${el.id}`}
                         className="">
                    <img src={el.img} alt="" className="rounded-t-md w-full max-h-60"/>
                <div className="coursesCard--box">
                    <h1 className="coursesCard--box--title">{el.title}</h1>
                    <div className="flex justify-between">
                        <p className="coursesCard--box--date"  dangerouslySetInnerHTML={{__html:el.time_work }}/>
                        <span className="font-light text-sm w-[50%] ">: длителность курса</span>
                    </div>
                    <button className="coursesCard--box--price">{el.price}</button>
                </div>
                </NavLink>
            </div>

    );
};

export default CoursesCard;