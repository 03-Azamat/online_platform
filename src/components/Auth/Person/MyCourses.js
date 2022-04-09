import React from 'react';
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRightLong} from "@fortawesome/free-solid-svg-icons/faArrowRightLong";

const MyCourses = () => {
    return (
        <div>
            <div>
                <p>Пройден:</p>
                <div>
                    <p>Банковский аналитик </p>
                    <FontAwesomeIcon className='forms--inputs--hook--btnx' icon={faArrowRightLong}
                                     style={{fontSize:'25px'}}
                                     onClick={() => {
                                         // navigate("/")
                                     }}
                    />
                </div>
            </div>
        </div>
    );
};

export default MyCourses;