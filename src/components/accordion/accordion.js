import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from "react-router-dom";
import {isAuth} from "../Auth/Register/helpers";


const Accordion = ({el}) => {
    const [active, setActive] = useState(false)

    return (
        <div className={`accordion ${active ? 'active' : ''}`} key={el.id}>
            <div className="accordion__title" onClick={() => setActive(!active)}>
                <p>{el.choicetopic?.topics.name_work}</p>
                <div className="accordion__icon">
                    <FontAwesomeIcon icon={faAngleDown}/>
                </div>
            </div>
            <ol>
                {
                    isAuth()
                        ? <li>
                            {
                                <div className="accordion__content">
                                    {
                                        <NavLink to={`/coursesDetails/coursesLesson/${el.lessonId}`}>
                                            <p className="accordion__content">{el.choicetopic?.topics?.videos.map(el => el.title)}</p>
                                            <p className="accordion__content">{el.choicetopic?.topics?.files.map(el => el.title)}</p>
                                        </NavLink>
                                    }
                                </div>
                            }
                        </li> :
                        <li>
                            {
                                <p className="accordion__content">{el.choicetopic?.topics?.name_work}</p>
                            }
                        </li>
                }
            </ol>
        </div>
    );
};
export default Accordion;