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
import {useParams} from "react-router-dom";
import * as PropTypes from "prop-types";
import PhoneNumber from "../Updated/PhoneNumber";

const Person = () => {
    const {id} = useParams()
    const [index, setIndex] = useState(0)
    const [persons, setPersons] = useState({})
    const [poModal, setPoModal] = useState(false)
    const [orModal, setOrModal] = useState(false)
    const [emailModal, setEmailModal] = useState(false)
    const [passwordModal, setPasswordModal] = useState(false)
    const [phoneModal, setPhoneModal] = useState(false)
    useEffect(() => {
        // axios(`http://localhost:8000/api/v1/users/`)
        axios(`https://djangorestapp.herokuapp.com/users/`)
            .then(({data}) => {
                localStorage.setItem("user", JSON.stringify(data.token ))
                // localStorage.setItem("token", JSON.stringify(response.data.access))
                // console.log(data)
                setPersons(data)
            } ).catch((error) => {
            console.log(error.response.data)
        })
    },[])
    return (
        <section id='person'>
            <div className='container'>
                <h1>Личный кабинет</h1>
                <div className="contentBtn ">
                    <div className='btn '>
                        <FontAwesomeIcon icon={faUser} className='btn--user'/>
                        <h2>Ороскул уулу Эрмат</h2>
                        <div className="btn--btns">
                            <label
                                htmlFor="file-upload"
                                className="btn--btns--input"
                            >
                                 Выберите фото
                            </label>
                            <input id="file-upload" type="file"/>
                            <div className={`btn--btns--tabRoute ${index === 0 ? 'active' : null}`}
                                 onClick={() =>
                                     setIndex(0)
                                 }
                            >Персональные данные
                            </div>
                            <div className={`btn--btns--tabRoute ${index === 1 ? 'active' : null}`}
                                 onClick={() =>
                                     setIndex(1)
                                 }
                            >Мои курсы
                            </div>
                            <div className='btn--btns--tabRoute'>Выйти</div>
                        </div>
                    </div>
                    <div className="person  " hidden={index !== 0}>
                        <h3>Персональные данные</h3>
                        <div className='person--content'>
                            <div className='person--content--center mx-5'>
                                <div>
                                    <label>ФИО</label>
                                    <button className='person--content--center--ul1'><p>wertyujhewrh </p>
                                    </button>
                                </div>
                                <div>
                                    <label>Должность</label>
                                    <button className='person--content--center--ul2'>
                                        <p>
                                            {/*{persons[0].age} {persons[0].name} {persons[0].name} {persons[0].name} {persons[0].car} {persons[0].createdAt}*/}
                                        </p>
                                        < FontAwesomeIcon icon={faPen} style={{color: "#01487E"}}
                                                          onClick={() => setPoModal(true)}
                                        /></button>
                                </div>
                                <div>
                                    <label>Email</label>
                                    <button className='person--content--center--ul3'><p>{persons.data}</p>
                                        < FontAwesomeIcon
                                            icon={faPen} style={{color: "#01487E"}}
                                            onClick={() => setEmailModal(true)}/>
                                    </button>
                                </div>
                            </div>
                            <div className='person--content--end'>
                                <div>
                                    <label>Номер телефона</label>
                                    <button className='person--content--end--ul11'><p>+996 555 55 55 55</p>
                                        < FontAwesomeIcon
                                            onClick={() => setPhoneModal(true)}
                                            icon={faPen} style={{color: "#01487E"}}/></button>
                                </div>
                                <div>
                                    <label>Организация</label>
                                    <button className='person--content--end--ul12'><p/>
                                        < FontAwesomeIcon
                                            icon={faPen} style={{color: "#01487E"}}
                                            onClick={() => setOrModal(true)}/>
                                    </button>
                                </div>

                                <div className='person--content--end--pass'>
                                    <label>Пароль</label>
                                    <i><FontAwesomeIcon icon={faKey}/></i>
                                    <input type="password" name='password' placeholder='password'
                                           style={{padding: "0 0 0 30px"}}/>
                                    <span><FontAwesomeIcon icon={faPen}
                                                           onClick={() => setPasswordModal(true)}
                                                           style={{
                                                               position: 'absolute',
                                                               color: '#01487E',
                                                               margin: "-38px 0 10px 330px"
                                                           }}/></span>
                                    <span><FontAwesomeIcon icon={faEye} style={{
                                        position: 'absolute',
                                        color: '#01487E',
                                        margin: "-38px 0 10px 320px",
                                        display: "none"
                                    }}/></span>
                                    <span><FontAwesomeIcon icon={faEyeSlash} style={{
                                        position: 'absolute',
                                        color: '#01487E',
                                        margin: "-38px 0 10px 300px"
                                    }}/></span>
                                </div>
                            </div>
                        </div>
                        {/*<div className='person--photo' style={{padding: "100px 0 60px 0"}}>*/}
                        {/*    <div className='person--photo--pas1' style={{margin: "0 45px 0 0"}}>*/}
                        {/*        <h2>Фотография паспорта</h2>*/}
                        {/*        <span><FontAwesomeIcon icon={faImage}/> <text>Выбрать файл</text></span>*/}
                        {/*    </div>*/}
                        {/*    <div className='person--photo--pas2'>*/}
                        {/*        <h2>Фотография с паспортом в руках</h2>*/}
                        {/*        <span><FontAwesomeIcon icon={faImage}/> <text>Выбрать файл</text></span>*/}

                        {/*    </div>*/}
                        {/*</div>*/}
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
                        <div ><p className='my-courses--p2'>На рассмотренииу администратора:</p>
                            <div className='my-courses--business'>
                                <p className='my-courses--business--p'>Бизнес аналитик</p>
                                <FontAwesomeIcon className='my-courses--business--icon' icon={faArrowRightLong}
                                                 onClick={() => {
                                                     // navigate("/")
                                                 }}
                                />
                            </div>
                        </div>
                        <div  >
                            <p className='my-courses--pp'>Активен:</p>
                            <div className = 'my-courses--active'>
                                <p className = 'my-courses--active--pp'>Бизнес аналитик</p>
                                <FontAwesomeIcon className =  'my-courses--active--icon' icon={faArrowRightLong}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Person;
