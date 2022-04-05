import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen} from "@fortawesome/free-solid-svg-icons";
import {faUser} from "@fortawesome/free-solid-svg-icons/faUser";
import {faKey} from "@fortawesome/free-solid-svg-icons/faKey";
import {faEyeSlash} from "@fortawesome/free-solid-svg-icons/faEyeSlash";
import UpdatePosition from "../Updated/UpdatePosition";
import UpdateOrganization from "../Updated/UpdateOrganization";
import UpdateEmail from "../Updated/UpdateEmail";
import UpdatePassword from "../Updated/UpdatePassword";
import axios from "axios";
import {faArrowRightLong} from "@fortawesome/free-solid-svg-icons/faArrowRightLong";
import {toast} from "react-toastify";
import {useNavigate, useParams} from "react-router-dom";
import {logout} from "../Register/helpers";
import {publicApi} from "../HTTP/publicApi";

const Person = () => {
    const {id} = useParams()
    const [index, setIndex] = useState(0)
    const [persons, setPersons] = useState({})
    const [poModal, setPoModal] = useState(false)
    const [orModal, setOrModal] = useState(false)
    const [emailModal, setEmailModal] = useState(false)
    const [passwordModal, setPasswordModal] = useState(false)
    const navigate = useNavigate()
    const access = JSON.parse(localStorage.getItem("access"));
    const refresh = JSON.parse(localStorage.getItem("refresh"));
    useEffect(() => {
        const  user = publicApi.get("users/me/", {
            headers: {
                "Authorization": `Bearer ${access}`
            }
        })
            .then(({data}) => setPersons(data))

    }, [])
    console.log("persons",persons)
    // useEffect(() => {
    //     axios(`https://djangorestapp.herokuapp.com/users/me`, {
    //         headers: {
    //             authorization :`Bearer${access}`
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
    //     console.log("persons",persons)
    // }, [])

    return (
        <section id='person'>
            <div className='container'>
                <h1>Личный кабинет</h1>

                <div className="contentBtn">

                    <div className='btn'>
                        <FontAwesomeIcon icon={faUser} className='btn--user'/>
                        <h2>{persons.name}</h2>
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
                            <div
                                onClick={() => {
                                    logout()
                                    navigate('/')
                                }
                                }
                                className='btn--btns--tabRoute'
                            >Выйти</div>
                        </div>
                    </div>

                    <div className="person" hidden={index !== 0}>
                        <h3 className="text-center">Персональные данные</h3>
                        <div className='person--content'>

                            <div className='person--content--start'>

                                <div className="flex flex-col">
                                    <label>ФИО</label>
                                    <button
                                        className='person--content--start--name '>
                                        <p className='p-3'> {persons.name}</p>
                                    </button>
                                </div>
                                <div className="flex flex-col">
                                    <label>Номер телефона</label>
                                    <button className='person--content--start--number'>
                                        <p>{persons.phone_number}</p>
                                        < FontAwesomeIcon
                                            icon={faPen} style={{color: "#01487E"}}/>
                                    </button>
                                </div>

                            </div>

                            <div className="person--content--center">
                                <div className="flex flex-col">
                                    <label>Должность</label>
                                    <button className='person--content--center--position'>
                                        <p></p>
                                        < FontAwesomeIcon icon={faPen} style={{color: "#01487E"}}
                                                          onClick={() => setPoModal(true)}

                                        />
                                    </button>
                                </div>

                                <div className="flex flex-col">
                                    <label>Организация</label>
                                    <button className='person--content--center--organization'>
                                        <p></p>
                                        < FontAwesomeIcon
                                            icon={faPen} style={{color: "#01487E"}}
                                            onClick={() => setOrModal(true)}/>
                                    </button>
                                </div>

                            </div>

                            <div className='person--content--end'>
                                <div className="flex flex-col">
                                    <label>Email</label>
                                    <button className='person--content--end--email'>
                                        <p className='flex items-center justify-start '>{persons.email}</p>
                                        < FontAwesomeIcon
                                            icon={faPen} style={{color: "#01487E"}}
                                            onClick={() => setEmailModal(true)}/>
                                    </button>
                                </div>

                                <div className="flex flex-col">
                                        <div className="person--content--end--password--icons">
                                            <label>Пароль</label>
                                            <button onClick={() => setPasswordModal(true)}
                                            >
                                                Изменить пароль
                                            </button>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <UpdatePosition poModal={poModal} setPoModal={setPoModal}/>
                        <UpdateOrganization orModal={orModal} setOrModal={setOrModal}/>
                        <UpdateEmail emailModal={emailModal} setEmailModal={setEmailModal}/>
                        <UpdateEmail emailModal={emailModal} setEmailModal={setEmailModal}/>
                        <UpdatePassword passwordModal={passwordModal} setPasswordModal={setPasswordModal}/>

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
            </div>

        </section>
    );
};

export default Person;


// <div className="person">
//     <div className='person--content'>
//         {/*<div className= 'person--content--start'>*/}
//         {/*    <FontAwesomeIcon icon={faUser} className= 'person--content--start--user' />*/}
//         {/*    <h2>Ороскул уулу Эрмат</h2>*/}
//         {/*    /!*<BtnGroup className="person--content--start--btns"  />*!/*/}
//
//         {/*    <div className="person--content--start--btns">*/}
//         {/*        <button>Выбрать фото</button>*/}
//
//         {/*        <button>Персональные данные</button>*/}
//         {/*        <button >Мои курсы</button>*/}
//         {/*        <button >Выйти</button>*/}
//
//         {/*    </div>*/}
//         {/*</div>*/}
//         <div className='person--content--center'>
//             <div>
//                 <label >ФИО</label>
//                 <button className='person--content--center--ul1'><p>Oroskul uulu Ermat</p>< FontAwesomeIcon icon={faPen} style={{color:"#01487E"}}/></button>
//             </div>
//             <div>
//                 <label >Должность</label>
//                 <button  className='person--content--center--ul2'>{<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut dolorem doloremque maxime molestiae perferendis perspiciatis quae repellat! Введите текст</p>}< FontAwesomeIcon icon={faPen} style={{color:"#01487E"}}/></button>
//             </div>
//
//             <div>
//                 <label >Email</label>
//                 <button className='person--content--center--ul3'><p>ermat@gmail.com</p>< FontAwesomeIcon icon={faPen} style={{color:"#01487E"}}/></button>
//             </div>
//
//         </div>
//         <div className='person--content--end'>
//             <div>
//                 <label >Номер телефона</label>
//                 <button className='person--content--end--ul11'><p>+996 555 55 55 55</p>< FontAwesomeIcon icon={faPen} style={{color:"#01487E"}}/></button>
//             </div>
//
//             <div>
//                 <label >Организация</label>
//                 <button className='person--content--end--ul12'><p>Введите текст </p>< FontAwesomeIcon icon={faPen} style={{color:"#01487E"}}/></button>
//             </div>
//
//             <div className='person--content--end--pass'>
//                 <label>Пароль</label>
//                 <i><FontAwesomeIcon icon={faKey}/></i>
//                 <input type="password" name='password' placeholder='password' style={{padding:"0 0 0 30px"}}/>
//                 <span ><FontAwesomeIcon icon={faPen} style={{position:'absolute',color:'#01487E',margin:"-38px 0 10px 330px"}}/></span>
//                 <span ><FontAwesomeIcon icon={faEye} style={{position:'absolute',color:'#01487E',margin:"-38px 0 10px 320px",display:"none"}}/></span>
//                 <span ><FontAwesomeIcon icon={faEyeSlash} style={{position:'absolute',color:'#01487E',margin:"-38px 0 10px 300px"}}/></span>
//             </div>
//         </div>
//     </div>
//     <div className='person--photo' style={{padding:"100px 0 60px 0"}}>
//         <div className='person--photo--pas1' style={{margin:"0 45px 0 0"}}>
//             <h2>Фотография паспорта</h2>
//             <span><FontAwesomeIcon icon={faImage}/> <text>Выбрать файл</text></span>
//         </div>
//         <div className='person--photo--pas2'>
//             <h2>Фотография с паспортом в руках</h2>
//             <span><FontAwesomeIcon icon={faImage}/> <text>Выбрать файл</text></span>
//
//         </div>
//     </div>
// </div>