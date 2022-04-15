import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";
import {NavLink, useParams} from "react-router-dom";
import axios from "axios";
import {isAuth} from "../Auth/Register/helpers";


const Accordion = ({el}) => {
    const {lessonId} = useParams()
    const [active, setActive] = useState(false)
    console.log(lessonId, "lessonId")
    // const [paid, setPaid] = useState([])
    // const [ isBought , setIsBought ] = useState(false)



    // const showPaid = () => {
    //     try {
    //         axios(`https://djangorestapp.herokuapp.com/ApplicationToAdmin-Detail/${persons.id}/`)
    //             .then(({data}) => {
    //                 setPaid(data)
    //                 console.log(data)
    //             })
    //     } catch (e) {
    //         console.log(e)
    //     }
    // }
    // useEffect(() => {
    //     showPaid()
    // }, [])
    //
    return (
        <div className={`accordion ${active ? 'active' : ''}`} key={el.id}>
            <div className="accordion__title" onClick={() => setActive(!active)}>
                <p>{el.choicetopic?.topicmain?.name}</p>
                <div className="accordion__icon">
                    <FontAwesomeIcon icon={faAngleDown}/>
                </div>
            </div>
            <ol>
                {
                    isAuth()?<li>
                        {
                            <NavLink to={`/coursesDetails/coursesLesson/${el.lessonId}`}>
                                <p className="accordion__content"
                                   dangerouslySetInnerHTML={{__html: el.choicetopic?.topicmain?.text}}/>
                            </NavLink>
                        }
                    </li>:
                        <li>
                        {
                                <p className="accordion__content"
                                   dangerouslySetInnerHTML={{__html: el.choicetopic?.topicmain?.text}}/>
                        }
                    </li>
                }
            </ol>

        </div>
    );
};
export default Accordion;