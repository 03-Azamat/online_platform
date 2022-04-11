import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";
import {NavLink, useParams} from "react-router-dom";


const Accordion = ({el}) => {
    const lessonId = useParams()
    const [active,setActive] = useState(false)
    console.log(lessonId, "lessonId")
    console.log(el.phone_number)
    return (
        <div className={`accordion ${active ? 'active' : ''}`}>
            <div className="accordion__title" onClick={()=> setActive(!active)} >
                <p>{el.choicetopic?.topicmain?.name}</p>
                <div className="accordion__icon">
                    <FontAwesomeIcon icon={faAngleDown} />
                </div>
            </div>

            <ol>
                <li>
                    <NavLink to={`/coursesDetails/coursesLesson/${el.lessonId}`}>
                        <p className="accordion__content" dangerouslySetInnerHTML={{__html:el.choicetopic?.topicmain?.text}} />
                    </NavLink>
                </li>
            </ol>

        </div>
    );
};
export default Accordion;