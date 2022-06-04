import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen, faUser, faArrowRightLong, faTrash} from "@fortawesome/free-solid-svg-icons";
import UpdatePosition from "../Updated/UpdatePosition";
import UpdateOrganization from "../Updated/UpdateOrganization";
import UpdatePassword from "../Updated/UpdatePassword";
import {NavLink, useNavigate} from "react-router-dom";
import {dataAddID, deleteId, imgId, logout} from "../Register/helpers";
import UpdatePhone from "../Updated/UpdatePhone";
import UpdateName from "../Updated/UpdateName";
import AddPosition from "../Register/AddPosition";
import {useDispatch, useSelector} from "react-redux";
import {
    getActivatedCourseNames,
    getApplication,
    getCourses,
    getCoursesDetails,
    getImg,
    getMyCourse,
    getPosition,
    getTestResults,
    getUser,
} from "../../../redux/action/corsesAction";
import {toast} from "react-toastify";
import {useForm} from "react-hook-form";
import UpdatePhoto from "../Updated/UpdatePhoto";
import {publicApi} from "../HTTP/publicApi";
import TestResult from "../../question/testResult";

const Person = () => {
    const {getApp: act} = useSelector(s => s)
    const {getUser: user} = useSelector(s => s)
    const {courses: cour} = useSelector(s => s)
    const {getTestResult: testRes} = useSelector(s => s)

    const [personActive, setPersonActive] = useState(false)
    const [index, setIndex] = useState(0);
    const [poModal, setPoModal] = useState(false);
    const [orModal, setOrModal] = useState(false);
    const [passwordModal, setPasswordModal] = useState(false);
    const [testActive, setTestActive] = useState(false)
    const [add, setAdd] = useState(false);
    const [phoneModal, setPhoneModal] = useState(false);
    const [nameModal, setNameAModal] = useState(false);
    const navigate = useNavigate();
    const persons = useSelector(state => state.getUser);
    const posOrgan = useSelector(state => state.getPosition);
    const profileImg = useSelector(state => state.getImg);
    const [createImg, setCreateImg] = useState({preview: "", raw: ""});
    const dispatch = useDispatch();
    const {activatedCourses: actApp} = useSelector(s => s)

    function refreshPage() {
        window.location.reload();
    }

    useEffect(() => {
        act.map(el => {
            console.log(0, el)
            return dispatch(getActivatedCourseNames(el.applicationcourse))
        })

    }, [act, cour])


    useEffect(async () => {
        dispatch(getUser())
        dispatch(getApplication())
        dispatch(getCourses())
        dispatch(getCoursesDetails())
        dispatch(getPosition())
        dispatch(getImg())
        dispatch(getTestResults())
        await dispatch(getPosition())
        await dispatch(getImg())
    }, []);

    const {register, handleSubmit, watch, formState: {errors}} = useForm();
    const blobToBase64 = (blob) => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    })
    const onSubmit = data => {
        console.log(data)
        const formData = new FormData()
        formData.append("user", persons.id)
        formData.append("img", data.img[0])
        publicApi.post(`photo-create/`, formData)
            .then(data => {
                refreshPage()
                setCreateImg(data)
                imgId(data)
                toast.success("успешно")
            })
            .catch((e) => {
                toast.error("error")
            })
    };

    function deletePosition() {
        if (posOrgan.id) {
            publicApi.delete(`data-delete/${posOrgan.id}/`)
                .then(data => {
                    refreshPage()
                    toast.success('Успешно удалили')
                }).catch(error => {
                toast.error("error")
                console.log(error)
            })
        }

    };


    return (
        <section id='person'>
            <div className='container'>
                <h1>Личный кабинет</h1>
                <div className="contentBtn">
                    <div className='btn'>
                        <div className="w-full flex justify-center align-middle">
                            <div className="btn--user">
                                {
                                    profileImg ?
                                        <img src={`https://res.cloudinary.com/dbqgk5dfn/${profileImg.img}`} className="btn--user--photo" alt=""/>
                                        :
                                        <FontAwesomeIcon icon={faUser} className='btn--user--icon'/>
                                }
                            </div>
                        </div>
                        <h2 className="w-full flex justify-center text-center">{persons.name}</h2>
                        <div className="btn--btns">
                            {
                                profileImg ?
                                    <UpdatePhoto/>
                                    :
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <label className="btn--btns--innn2 ">
                                            <span className="sm:w-full">Выбрать фото</span>
                                            <input
                                                className={`btn--btns--innn2---in1 ${createImg.length === 0 ? "btn--btns--innn2---in2" : "btn--btns--innn2---in1"}`}
                                                {...register("img")} id="file-upload" type="file" onChange={(e) => {
                                                blobToBase64(e.target.files[0]).then((data) => {
                                                    setCreateImg(data)
                                                })
                                            }}/>
                                        </label>
                                        {
                                            createImg.length > 0 ?
                                                <button
                                                    className="btn--btns--btnSubmit"
                                                    type='submit'
                                                >Profile</button>
                                                : ""
                                        }
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
                            <div className='btn--btns--tabRoute'
                                 onClick={() => {
                                     logout()
                                     navigate('/')
                                 }}
                            >Выйти из аккаунт
                            </div>
                        </div>
                    </div>
                    <div className="person" hidden={index !== 0}>
                        <h3 className="text-center">Персональные данные</h3>
                        <div className='person--content'>
                            <div className='person--content--start'>
                                <div className="flex flex-col">
                                    <label>ФИО</label>
                                    <div className='person--content--start--name  '>

                                        <p className='p-3'> {persons.name} </p>
                                        < FontAwesomeIcon
                                            onClick={() => setNameAModal(true)}
                                            icon={faPen} style={{color: "#01487E", cursor: "pointer"}}/>
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <label>Номер телефона</label>
                                    <div className='person--content--start--number '>
                                        <p>{persons.phone_number}</p>
                                        < FontAwesomeIcon
                                            onClick={() => setPhoneModal(true)}
                                            icon={faPen} style={{color: "#01487E", cursor: "pointer"}}/>
                                    </div>
                                </div>
                            </div>
                            <div className="person--content--center">
                                <div className="flex flex-col">
                                    <label>Должность</label>
                                    <div className='person--content--center--position'>
                                        {
                                            posOrgan ?
                                                <p>{posOrgan.position}</p>
                                                : ""
                                        }
                                        {
                                            posOrgan ?
                                                <div
                                                    className="flex align-top h-full"
                                                >
                                                    < FontAwesomeIcon
                                                        icon={faPen}
                                                        style={{color: "#01487E", cursor: "pointer"}}
                                                        onClick={() => setPoModal(true)}
                                                    />
                                                </div>
                                                : ''
                                        }
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <label>Организация</label>
                                    <div className='person--content--center--organization'>
                                        {
                                            posOrgan ? <p>{posOrgan.organization}</p>
                                                : " "
                                        }
                                        {
                                            posOrgan ?
                                                <div
                                                    className="flex align-top h-full">
                                                    <FontAwesomeIcon
                                                        icon={faPen}
                                                        style={{color: "#01487E", cursor: "pointer"}}
                                                        onClick={() => setOrModal(true)}
                                                    />
                                                </div>
                                                : ''
                                        }
                                    </div>
                                </div>
                            </div>
                            {
                                posOrgan ?
                                    <button
                                        className='btn--btns--tabRoute1'
                                        style={{margin: "30px 0 0 0 ", width: "100%"}}
                                        onClick={() => {
                                            deletePosition()
                                            deleteId()
                                        }}
                                    >Удалить должность и организацию</button>
                                    :
                                    <button
                                        className='btn--btns--tabRoute'
                                        style={{margin: "30px 0 0 0 ", width: "100%"}}
                                        onClick={() => setAdd(true)}
                                    >Добавить должность и организацию</button>


                            }
                            <div className='person--content--end'>
                                <div className="flex flex-col">
                                    <label>Email</label>
                                    <div className='person--content--end--email'>
                                        <p className='flex items-center justify-start '>{persons.email}</p>
                                    </div>
                                </div>
                                <div className="flex flex-col ">
                                    <label>Пароль</label>
                                    <div className="person--content--end--password">
                                        <button className='person--content--end--password--button'
                                                onClick={() => setPasswordModal(true)}
                                        >Изменить пароль
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                        {
                            posOrgan ?
                                <>
                                    <UpdatePosition
                                        poModal={poModal}
                                        setPoModal={setPoModal}
                                    />
                                    <UpdateOrganization
                                        orModal={orModal}
                                        setOrModal={setOrModal}
                                    />
                                </>
                                : ""
                        }
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
                            <p className='my-courses--p1'>
                                {
                                    // testRes.map(data =>(
                                    //     <div>
                                    //         {/*{*/}
                                    //         {/*    data.user === act.user ? data.score : data.score*/}
                                    //         {/*}*/}
                                    //     </div>
                                    //     )
                                    // )
                                }</p>
                            <div className='my-courses--bank'>
                                <NavLink to={"/person/question-result"}>
                                    <p className='my-courses--bank--p'>Результат теста</p>
                                </NavLink>
                                <FontAwesomeIcon className='my-courses--bank--icon' icon={faArrowRightLong}/>
                            </div>
                        </div>


                        {
                            <div><p className='my-courses--p2'>На рассмотренииу администратора:</p>
                                <div className='my-courses--business'>
                                    <NavLink to={"/person/notActivated"}>
                                        <p className='my-courses--business--p'>Курсы на рассмотренииу администратора</p>
                                    </NavLink>
                                    <FontAwesomeIcon className='my-courses--business--icon' icon={faArrowRightLong}/>
                                </div>
                            </div>
                        }
                        {
                            <div>
                                <div className='my-courses--pp'>
                                </div>
                                <div className='my-courses--active'>
                                    <NavLink to={"/person/activeCourses"}>
                                        <p className='my-courses--active--pp'>Активированные курсы</p>
                                    </NavLink>
                                    <FontAwesomeIcon className='my-courses--active--icon' icon={faArrowRightLong}/>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Person;
