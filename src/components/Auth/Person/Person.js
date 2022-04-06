import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen} from "@fortawesome/free-solid-svg-icons";
import {faUser} from "@fortawesome/free-solid-svg-icons/faUser";
import {faKey} from "@fortawesome/free-solid-svg-icons/faKey";
import {faEye} from "@fortawesome/free-solid-svg-icons/faEye";
import {faEyeSlash} from "@fortawesome/free-solid-svg-icons/faEyeSlash";
import {faImage} from "@fortawesome/free-solid-svg-icons/faImage";
import UpdatePosition from "../Updated/UpdatePosition";
import UpdateOrganization from "../Updated/UpdateOrganization";
import UpdateEmail from "../Updated/UpdateEmail";
import UpdatePassword from "../Updated/UpdatePassword";
import axios from "axios";
import {faArrowRightLong} from "@fortawesome/free-solid-svg-icons/faArrowRightLong";
import {toast} from "react-toastify";
import {useNavigate, useParams} from "react-router-dom";
import * as PropTypes from "prop-types";
import PhoneNumber from "../Updated/PhoneNumber";
import {publicApi} from "../HTTP/publicApi";
import {logout} from "../Register/helpers";
import transformThemeValue from "tailwindcss/lib/util/transformThemeValue";

const Person = () => {
    const [index, setIndex] = useState(0)
    const [persons, setPersons] = useState({})
    const [poModal, setPoModal] = useState(false)
    const [orModal, setOrModal] = useState(false)
    const [emailModal, setEmailModal] = useState(false)
    const [passwordModal, setPasswordModal] = useState(false)
    const [phoneModal, setPhoneModal] = useState(false)
    const navigate = useNavigate()
    const access = JSON.parse(localStorage.getItem("access"));
    const refresh = JSON.parse(localStorage.getItem("refresh"));
    useEffect(() => {

        const user = publicApi.get("/users/me/", {
            headers: {
                "Authorization": `Bearer ${access}`
            }
        })
            .then(({data}) => {

                setPersons(data)
                console.log(data)
            })

            .catch(e => {
                console.log("er")
                errorFunct()
            })

    }, [])

    const errorFunct = () => {
        console.log("strt")
        let options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                refresh
            })
        }
        const url = "https://djangorestapp.herokuapp.com/jwt/refresh/";

        fetch(url, options)
            .then(res => res.json())
            .then(data => {
                console.log(data)

            })

    }

    //     axios(`https://djangorestapp.herokuapp.com/users/`, {
    //         headers: {
    //             authorization :"Bearer" + "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQ4MzcwNTE4LCJqdGkiOiI2ZGY3M2JjYmM1OGQ0Yjk0ODQ3MWM2ZTE1Y2Y4OTZkOSIsInVzZXJfaWQiOjF9.QM8c2rfQyXAsR3hgyY6DXMBTI51IdmrGQM5E7TgerL0"
    //         }
    //     })
    //         // axios(`http://localhost:8000/api/v1/users/`)
    //         .then(({data}) => {
    //             localStorage.setItem("user", JSON.stringify(data.user))
    //             console.log(data)
    //             setPersons(data)
    //         }).catch((error) => {
    //         // toast.error(error.response.data.email[0])
    //         console.log(error.response.data)
    //     })
    //     // console.log(persons)
    // }, [])

    return (
        <section id='person'>
            <div className='container'>
                <h1>Личный кабинет</h1>

                <div className="contentBtn ">
                    <div className='btn '>
                        <div className='btn--user'>
                            <FontAwesomeIcon icon={faUser}
                                             className='btn--user--iconUser'/>
                        </div>
                        <h2>{persons.name}</h2>
                        <div className="btn--btns">
                            <form action=""
                            >
                                <label
                                    htmlFor="file-upload"
                                    className="btn--btns--input"
                                >
                                    Выберите фото
                                </label>
                                <input id="file-upload" type="file" name="user"/>
                            </form>
                            <button className={`btn--btns--tabRoute ${index === 0 ? 'active' : null}`}
                                    onClick={() =>
                                        setIndex(0)
                                    }
                            >Персональные данные
                            </button>
                            <button className={`btn--btns--tabRoute ${index === 1 ? 'active' : null}`}
                                    onClick={() =>
                                        setIndex(1)
                                    }
                            >Мои курсы
                            </button>
                            <button
                                onClick={() => {
                                    logout()
                                    navigate('/')
                                }
                                }
                                className='btn--btns--tabRoute'
                            >Выйти
                            </button>
                        </div>
                    </div>

                    <div className="person" hidden={index !== 0}>
                        <h3>Персональные данные</h3>


                        <div className="contentBtn">

                            <div className='btn'>
                                <FontAwesomeIcon icon={faUser} className='btn--user'/>
                                <h2>Ороскул уулу Эрмат</h2>
                                {/*<h2>{persons[0].name}</h2>*/}
                                <div className="btn--btns">
                                    {/*<div className='btn--btns--tabRoute'> Выбрать фото</div>*/}
                                    <input type="file" className='btn--btns--tabRoute'/>

                                    <div className={`btn--btns--tabRoute ${index === 0 ? 'active' : null}`}
                                         onClick={() =>
                                             setIndex(0)
                                         }>Персональные данные
                                    </div>

                                    <div className={`btn--btns--tabRoute ${index === 1 ? 'active' : null}`}
                                         onClick={() =>
                                             setIndex(1)
                                         }>Мои курсы
                                    </div>
                                    <div className='btn--btns--tabRoute'>Выйти</div>
                                </div>
                            </div>

                            <div className="person" hidden={index !== 0}>
                                <h3 className="text-center">Персональные данные</h3>

                                <div className='person--content'>

                                    <div className='person--content--start'>

                                        <div className="flex flex-col">
                                            <label>ФИО</label>

                                            <button className='person--content--center--ul1'><p>{persons.name} </p>
                                            </button>

                                            <button className='person--content--start--name'>
                                                <p>

                                                </p>
                                            </button>
                                        </div>
                                        <div className="flex flex-col">
                                            <label>Номер телефона</label>
                                            <button className='person--content--start--number'>
                                                <p>+996 555 55 55 55</p>
                                                < FontAwesomeIcon
                                                    icon={faPen} style={{color: "#01487E"}}/>
                                            </button>
                                        </div>

                                    </div>

                                    <div className="person--content--center">
                                        <div className="flex flex-col">
                                            <label>Должность</label>
                                            <button className='person--content--center--position'>
                                                <p>
                                                    {/*{persons[0].age} {persons[0].name} {persons[0].name} {persons[0].name} {persons[0].car} {persons[0].createdAt}*/}
                                                </p>
                                                < FontAwesomeIcon icon={faPen} style={{color: "#01487E"}}
                                                                  onClick={() => setPoModal(true)}
                                                /></button>
                                        </div>
                                        <div>
                                            <label>Email</label>
                                            <button className='person--content--center--ul3'><p>{persons.email}</p>
                                                < FontAwesomeIcon
                                                    icon={faPen} style={{color: "#01487E"}}
                                                    onClick={() => setEmailModal(true)}/>
                                            </button>
                                        </div>
                                    </div>
                                    <div className='person--content--end'>
                                        <div>
                                            <label>Номер телефона</label>
                                            <button className='person--content--end--ul11'><p>{persons.phone_number}</p>
                                                < FontAwesomeIcon
                                                    onClick={() => setPhoneModal(true)}
                                                    icon={faPen} style={{color: "#01487E"}}/></button>
                                        </div>
                                        <div>
                                            <button>

                                            </button>
                                        </div>

                                        <div className="flex flex-col">

                                            <label>Организация</label>
                                            <button className='person--content--center--organization'><p/>
                                                < FontAwesomeIcon
                                                    icon={faPen} style={{color: "#01487E"}}
                                                    onClick={() => setOrModal(true)}/>
                                            </button>
                                        </div>

                                    </div>

                                    <div className='person--content--end'>
                                        <div className="flex flex-col">
                                            <label>Email</label>
                                            <button className='person--content--end--email'><p>{persons.data}</p>
                                                < FontAwesomeIcon
                                                    icon={faPen} style={{color: "#01487E"}}
                                                    onClick={() => setEmailModal(true)}/>
                                            </button>
                                        </div>

                                        <div className="flex flex-col">
                                            <label>Пароль</label>

                                            <button onClick={() => setPasswordModal(true)}
                                            >
                                                Изменить пароль
                                            </button>
                                        </div>
                                    </div>
                                </div>


                                <div className="flex flex-col">
                                    <input className='person--content--end--password'
                                           type="password" name='password' placeholder='password'
                                           style={{padding: "0 0 0 30px"}}/>
                                    <div className="person--content--end--password--icons">
                                        <FontAwesomeIcon icon={faKey}/>

                                        <span className="flex w-2/12 justify-between ml-auto">
                                                <FontAwesomeIcon icon={faEyeSlash} style={{
                                                    color: '#01487E',
                                                }}/>

                                            <FontAwesomeIcon icon={faPen} onClick={() => setPasswordModal(true)}
                                                             style={{
                                                                 color: '#01487E',
                                                             }}/>
                                        </span>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>

                    <UpdatePosition poModal={poModal} setPoModal={setPoModal}/>
                    <UpdateOrganization orModal={orModal} setOrModal={setOrModal}/>
                    <UpdateEmail emailModal={emailModal} setEmailModal={setEmailModal}/>
                    <UpdateEmail emailModal={emailModal} setEmailModal={setEmailModal}/>
                    <UpdatePassword passwordModal={passwordModal} setPasswordModal={setPasswordModal}/>
                    <PhoneNumber phoneModal={phoneModal} setPhoneModal={setPhoneModal}/>
                </div>
                <div className='my-courses' hidden={index !== 1}>
                    <h3>Мои курсы</h3>
                    <div>
                        <p className='my-courses--p1'>Пройден:</p>
                        <div className='my-courses--bank'><p className='my-courses--bank--p'>Банковский аналитик</p>
                            <FontAwesomeIcon className='my-courses--bank--icon' icon={faArrowRightLong}
                                // style={{width:'38px', color:'#01487E'}}
                                             onClick={() => {
                                                 // navigate("/")
                                             }}
                            /></div>
                    </div>
                    <div><p className='my-courses--p2'>На рассмотренииу администратора:</p>
                        <div className='my-courses--business'>
                            <p className='my-courses--business--p'>Бизнес аналитик</p>
                            <FontAwesomeIcon className='my-courses--business--icon' icon={faArrowRightLong}
                                             onClick={() => {
                                                 // navigate("/")
                                             }}
                            />
                        </div>
                    </div>
                    <div>
                        <p className='my-courses--pp'>Активен:</p>
                        <div className='my-courses--active'>
                            <p className='my-courses--active--pp'>Бизнес аналитик</p>
                            <FontAwesomeIcon className='my-courses--active--icon' icon={faArrowRightLong}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Person;


