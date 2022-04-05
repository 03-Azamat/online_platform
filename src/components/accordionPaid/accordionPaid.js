import React, {useState} from 'react';
import {NavLink, useParams} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";

const AccordionPaid = ({el}) => {

    const lessonId = useParams()
    const [active,setActive] = useState(false)
    console.log(lessonId, "lessonId")

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
                    <p className="accordion__content" dangerouslySetInnerHTML={{__html:el.choicetopic?.topicmain?.text}} />
                </li>
            </ol>

        </div>
    );
};

export default AccordionPaid;