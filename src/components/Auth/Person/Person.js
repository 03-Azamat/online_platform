import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen,faUser,faArrowRightLong} from "@fortawesome/free-solid-svg-icons";
import UpdatePosition from "../Updated/UpdatePosition";
import UpdateOrganization from "../Updated/UpdateOrganization";
import UpdateEmail from "../Updated/UpdateEmail";
import UpdatePassword from "../Updated/UpdatePassword";
import {useNavigate} from "react-router-dom";
import {dataAddID, deleteId, logout} from "../Register/helpers";
import {publicApi} from "../HTTP/publicApi";
import UpdatePhone from "../Updated/UpdatePhone";
import axios from "axios";
import UpdateName from "../Updated/UpdateName";
import AddPosition from "../Register/AddPosition";
import {useDispatch, useSelector} from "react-redux";
import {getPosition, getUser} from "../../../redux/action/corsesAction";
import {toast} from "react-toastify";

const Person = () => {
    const [index, setIndex] = useState(0)
    const [poModal, setPoModal] = useState(false)
    const [orModal, setOrModal] = useState(false)
    const [emailModal, setEmailModal] = useState(false)
    const [passwordModal, setPasswordModal] = useState(false)
    const [add, setAdd] = useState(false)
    const [phoneModal, setPhoneModal] = useState(false)
    const [nameModal, setNameAModal] = useState(false)
    const navigate = useNavigate()
    const persons = useSelector(state => state.getUser)
    const posOrgan = useSelector(state => state.getPosition)
    const dataID = JSON.parse(localStorage.getItem("dataID"));
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPosition())
        dispatch(getUser())
    },[])
    const deletePosition = () => {
            axios.delete(`https://djangorestapp.herokuapp.com/data-delete/${dataID}/`)
                .then(data => {
                    toast.success('Успешно удалили')
                }).catch(error => {
                    toast.error("error")
                console.log(error)
            })
    }

    return (
        <section id='person'>
            <div className='container'>
                <h1>Личный кабинет</h1>
                <div className="contentBtn">
                    <div className='btn'>
                        <FontAwesomeIcon icon={faUser} className='btn--user'/>
                        <h2>{persons.name}</h2>
                        <div className="btn--btns">
                            <form action=""
                            >
                               <button type='submit'>
                                   <label
                                       htmlFor="file-upload"
                                       className="btn--input"
                                   >
                                       Выберите фото
                                   </label>
                                   <input id="file-upload" type="file"  name="user"/></button>
                            </form>

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
                                    <div
                                        className='person--content--start--name  '>
                                        <p className='p-3'> {persons.name} </p>
                                        < FontAwesomeIcon
                                            onClick={() => setNameAModal(true)}
                                            icon={faPen} style={{color: "#01487E",cursor:"pointer"}}/>
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <label>Номер телефона</label>
                                    <div  className='person--content--start--number '>
                                        <p>{persons.phone_number}</p>
                                        < FontAwesomeIcon
                                            onClick={() => setPhoneModal(true)}
                                            icon={faPen} style={{color: "#01487E",cursor:"pointer"}}/>
                                    </div>
                                </div>

                            </div>

                            <div className="person--content--center">
                                <div className="flex flex-col">
                                    <label>Должность</label>
                                    <div className='person--content--center--position'>
                                        <p>{posOrgan.position}</p>
                                        {
                                            dataAddID()  ?
                                                < FontAwesomeIcon icon={faPen} style={{color: "#01487E",cursor:"pointer"}}
                                                                  onClick={() => setPoModal(true)}
                                                />
                                                : ''
                                        }
                                    </div>
                                </div>

                                <div className="flex flex-col">
                                    <label>Организация</label>
                                    <div className='person--content--center--organization'>
                                        <p>{posOrgan.organization} </p>
                                        {
                                            dataAddID() ?
                                                < FontAwesomeIcon
                                                    icon={faPen} style={{color: "#01487E",cursor:"pointer"}}
                                                    onClick={() => setOrModal(true)}/>
                                                : ''
                                        }
                                    </div>
                                </div>

                            </div>
                            {
                                dataAddID() ?
                                    <button
                                        className='btn--btns--tabRoute1'
                                        style={{margin:"30px 0 0 0 ",width:"100%"}}
                                        onClick={() =>
                                            {
                                                deleteId()
                                                deletePosition()
                                            }}
                                    >Удалить должность и организация</button>
                                    :
                                    <button
                                        className='btn--btns--tabRoute'
                                        style={{margin:"30px 0 0 0 ",width:"100%"}}
                                        onClick={() => setAdd(true)}
                                    >Добавить должность и организация</button>
                            }
                            <div className='person--content--end'>
                                <div className="flex flex-col">
                                    <label>Email</label>
                                    <div className='person--content--end--email'>
                                        <p className='flex items-center justify-start '>{persons.email}</p>
                                        < FontAwesomeIcon
                                            icon={faPen} style={{color: "#01487E",cursor:"pointer"}}
                                            onClick={() => setEmailModal(true)}/>
                                    </div>
                                </div>

                                <div className="flex flex-col ">
                                    <label>Пароль</label>
                                        <div className="person--content--end--password">
                                            <button className='person--content--end--password--button'
                                                onClick={() => setPasswordModal(true)}
                                            >
                                                Изменить пароль
                                            </button>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <UpdatePosition
                            poModal={poModal}
                            setPoModal={setPoModal}
                            posOrgan={posOrgan}
                            persons={persons}
                        />
                        <UpdateOrganization
                            orModal={orModal}
                            setOrModal={setOrModal}
                            posOrgan={posOrgan}
                            persons={persons}
                        />
                        <UpdateName
                            modal={nameModal}
                            setModal={setNameAModal}
                            persons={persons}
                        />
                        <UpdateEmail
                            persons={persons}
                            emailModal={emailModal}
                            setEmailModal={setEmailModal}
                        />
                        <UpdatePassword
                            passwordModal={passwordModal}
                            setPasswordModal={setPasswordModal}
                            persons={persons}
                        />
                        <UpdatePhone
                            phoneModal={phoneModal}
                            setPhoneModal={setPhoneModal}
                            persons={persons}
                        />
                        <AddPosition
                            add={add}
                            setAdd={setAdd}
                            persons={persons}
                        />
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

// const btn = () => {
//     let obj = {
//         name: name,
//         phone_number: phone,
//         email:emailUser,
//         id: persons.id,
//     }
//     let options = {
//         method: "PUT",
//         headers: {
//             "Content-Type": "application/json",
//             "Authorization": `Bearer ${access}` },
//         body: JSON.stringify(obj)
//     }
//
//     console.log(obj)
//
//     fetch("https://djangorestapp.herokuapp.com/users/me/", options)
//         .then(res => res.json())
//         .then(data => {
//             console.log(data)
//         })
// }







// const btn = async  () => {
//     let obj = {
//         name: name,
//         phone_number: phone,
//         id: persons.id,
//     }
//     let options = {
//         method: "PUT",
//         headers: {
//             "Content-Type": "application/json",
//             "Authorization": `Bearer ${access}` },
//         body: JSON.stringify(obj)
//     }
//
//     console.log(obj)
//
//    await  axios.put("https://djangorestapp.herokuapp.com/users/me/", options)
//
//         .then(({data}) => {
//             console.log(data, "data")
//
//         })
//         .then(() => {
//             setPhone(persons.phone_number)
//         })
// }