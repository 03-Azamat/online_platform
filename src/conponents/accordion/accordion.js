import React, { useState} from 'react';
import {NavLink} from "react-router-dom";


const Accordion = (props) => {

    const [active , setActive] = useState('')

    return (
        <div className="accordion__section">
            <button className="accordion">
                <p className="accordion__title">{props.title}</p>
            </button>
            <div className="accordion__content">
                <div className="accordion__text" dangerouslySetInnerHTML={{ __html:props.content}}/>
            </div>
        </div>
    );
};

export default Accordion;