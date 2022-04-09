import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";
import {NavLink, useParams} from "react-router-dom";
import {isAuth} from "../Auth/Register/helpers";
import axios from "axios";

const AccordionDemo = ({el}) => {
    const lessonId = useParams()
    const [active,setActive] = useState(false)
    console.log(lessonId, "lessonId")
    const [paid,setPaid] = useState(false)

    useEffect((id)=>{
        axios.get(`https://djangorestapp.herokuapp.com/ApplicationToAdmin-CreateList/${id}/`)
            .then(({data})=> setPaid(data))
    })


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
export default AccordionDemo;