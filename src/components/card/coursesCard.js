import React from 'react';
import {NavLink} from "react-router-dom";

const CoursesCard = ({el}) => {
    return (
            <div className="coursesCard" key={el.id}>
                <NavLink to={`/coursesDetails/${el.id}`}>
                    <img src={`https://res.cloudinary.com/dbqgk5dfn/${el.img}`} alt="img" className="w-full h-52 rounded-t-md "/>
                <div className="coursesCard--box">
                    <h1 className="coursesCard--box--title">{el.title}</h1>
                    <div className="flex align-middle">
                        <span className="font-light text-sm">длителность курса : </span>
                        <p className="coursesCard--box--date ml-2"  dangerouslySetInnerHTML={{__html:el.time_work }}/>
                        <span className="font-light text-sm"> дней</span>
                    </div>
                    <button className="coursesCard--box--price">{el.price}</button>
                </div>
                </NavLink>
            </div>
    );
};
 
export default CoursesCard;