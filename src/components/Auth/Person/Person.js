import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen, faUser, faArrowRightLong, faTrash} from "@fortawesome/free-solid-svg-icons";
import UpdatePosition from "../Updated/UpdatePosition";
import UpdateOrganization from "../Updated/UpdateOrganization";
import UpdateEmail from "../Updated/UpdateEmail";
import UpdatePassword from "../Updated/UpdatePassword";
import {useNavigate} from "react-router-dom";
import {dataAddID, deleteId, imgId, logout} from "../Register/helpers";
import {publicApi} from "../HTTP/publicApi";
import UpdatePhone from "../Updated/UpdatePhone";
import axios from "axios";
import UpdateName from "../Updated/UpdateName";
import AddPosition from "../Register/AddPosition";
import {useDispatch, useSelector} from "react-redux";
import {getPosition, getUser} from "../../../redux/action/corsesAction";
import {toast} from "react-toastify";
import {GET_POSITION, GET_USER} from "../../../redux/types/actionTypes";
import {useForm} from "react-hook-form";
import UpdatePhoto from "../Updated/UpdatePhoto";

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
    const access = JSON.parse(localStorage.getItem("access"));
    const dispatch = useDispatch()
    // const [persons, setPersons] = useState({})

    // useEffect(() => {
    //     if (access){
    //         axios(`https://djangorestapp.herokuapp.com/users/me/`, {
    //             headers: {
    //                 "Authorization": `Bearer ${access}`
    //             }
    //         }).then(({data}) => {
    //             dispatch({type:GET_USER,payload:data})
    //         })
    //     }
    // },[])

    // useEffect(() => {
    //     return(dispatch) => {
    //         if (dataID){
    //             axios(`https://djangorestapp.herokuapp.com/data-detailID/${dataID}/`, {
    //                 headers: {
    //                     "Authorization": `Bearer ${access}`
    //                 }
    //             })
    //                 .then(({data}) => {
    //                     dispatch({type:GET_POSITION,payload:data})
    //                 })
    //         }
    //     }
    // },[])



    useEffect(() => {
        dispatch(getPosition())
        dispatch(getUser())
    },[dispatch])
    const deletePosition = () => {
       if (dataID){
           axios.delete(`https://djangorestapp.herokuapp.com/data-delete/${dataID}/`)
               .then(data => {
                   toast.success('Успешно удалили')
               }).catch(error => {
               toast.error("error")
               console.log(error)
           })
       }

    }

    const blobToBase64 = (blob) => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    })


    // const createPhoto = () => {
    //     axios.post(`https://djangorestapp.herokuapp.com/photo-create/`, {
    //         user:persons.id
    //     })
    //         .then(data => {
    //             console.log(data)
    //         })
    // }


    const [newImg, setNewImg] = useState([])
    const [createImg, setCreateImg] = useState([])
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        // data.preventDefault(false)
        console.log(data)
        const formData = new FormData()
        formData.append("user", persons.id)
        formData.append("img", data.img[0])
        axios.post(`https://djangorestapp.herokuapp.com/photo-create/`, formData)
            .then(data => {
                toast.success("успешно")
                imgId(data)
            })
            .catch((e) => {
                console.log(e)
            })
    };
    const IdImg = JSON.parse(localStorage.getItem("imgId"));
    useEffect(() => {
        if (IdImg){
            axios.get(`https://djangorestapp.herokuapp.com/photo-detail/${IdImg}`)
                .then(({data}) => {
                    setCreateImg(data)
                })
        }
    },[])




    return (
        <section id='person'>
            <div className='container'>
                <h1>Личный кабинет</h1>
                <div className="contentBtn">
                    <div className='btn'>
                        <div className="btn--user">
                            {
                                IdImg   ?
                                    <img className="btn--user--photo" src={createImg.img} alt=""/>
                                    :
                                    <FontAwesomeIcon icon={faUser} className='btn--user--icon'/>
                            }
                        </div>
                        <h2>{persons.name}</h2>
                        <div className="btn--btns">
                            {
                                IdImg ?
                                    <UpdatePhoto/>
                                    :
                                    <form
                                        onSubmit={handleSubmit(onSubmit)}
                                    >
                                                <label className ="btn--btns--innn2 ">
                                                    <span>Выбрать фото</span>
                                                    <input
                                                        className={`btn--btns--innn2---in1 ${createImg.length === 0 ? "btn--btns--innn2---in2" : "btn--btns--innn2---in1" }`}
                                                        {...register("img")} id="file-upload" type="file" onChange={(e) => {
                                                        blobToBase64(e.target.files[0]).then((data) => {
                                                            setCreateImg(data)
                                                        })
                                                    }}/>
                                                </label>
                                        {
                                            createImg.length > 0 ?
                                                <button
                                                    onSubmit={handleSubmit(onSubmit)}
                                                    className="btn--btns--btnSubmit"
                                                    type='submit'
                                                >Profile</button>
                                               : ""

                                        }
                                        {/*<label className ="btn--btns--innn3">*/}
                                        {/*    <span>Фото</span>*/}
                                        {/*    <input {...register("img")} id="file-upload" type="file" onChange={(e) => {*/}
                                        {/*        blobToBase64(e.target.files[0]).then((data) => {*/}
                                        {/*            setImg(data)*/}
                                        {/*        })*/}
                                        {/*    }}/>*/}
                                        {/*</label>*/}

                                    </form>
                            }
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
                                    >Добавить должность и организацию</button>
                            }
                            <div className='person--content--end'>
                                <div className="flex flex-col">
                                    <label>Email</label>
                                    <div className='person--content--end--email'>
                                        <p className='flex items-center justify-start '>{persons.email}</p>
                                        {/*< FontAwesomeIcon*/}
                                        {/*    icon={faPen} style={{color: "#01487E",cursor:"pointer"}}*/}
                                        {/*    onClick={() => setEmailModal(true)}/>*/}
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