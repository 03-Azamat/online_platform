import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";
import {NavLink, useParams} from "react-router-dom";
import {isAuth} from "../Auth/Register/helpers";
import axios from "axios";

const AccordionDemo = ({el}) => {
    const lessonId = useParams()
    const [active, setActive] = useState(false)

    return (
        <div className={`accordion ${active ? 'active' : ''}`}>
            <div className="accordion__title" onClick={() => setActive(!active)}>
                <p>{el.choicetopic?.topicmain?.name}</p>
                <div className="accordion__icon">
                    <FontAwesomeIcon icon={faAngleDown}/>
                </div>
            </div>

            <ol>
                <li>
                    <p className="accordion__content">{el.choicetopic?.topics?.name_work}</p>
                </li>
            </ol>

        </div>
    );
};
export default AccordionDemo;