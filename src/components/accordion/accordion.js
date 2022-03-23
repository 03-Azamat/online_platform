import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from "react-router-dom";


const Accordion = ({cour}) => {
    const [active,setActive] = useState(false)


    return (
        <div className={`accordion ${active ? 'active' : ''}`}>
            <div className="accordion__title" onClick={()=> setActive(!active)} >
                <p>{cour.name_work}</p>
                <div className="accordion__icon">
                    <FontAwesomeIcon icon={faAngleDown} />
                </div>
            </div>

            <ol>
                <li>
                    <NavLink to={`/coursesDetails/coursesLesson/${cour.id}`}>
                        <p className="accordion__content" dangerouslySetInnerHTML={{__html: cour.name_topic}} />
                    </NavLink>
                </li>
            </ol>

        </div>
    );
};
export default Accordion;