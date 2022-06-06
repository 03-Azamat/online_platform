import React, {useEffect, useState} from 'react';
import {publicApi} from "../HTTP/publicApi";
import {toast} from "react-toastify";
import {useDispatch, useSelector} from "react-redux";
import {getImgPas, getPosition, getUser} from "../../../redux/action/corsesAction";
import {dataId, imgId} from "../Register/helpers";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import * as Yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import {useForm} from "react-hook-form";
import {position} from "tailwindcss/lib/util/dataTypes";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const UpdateImgPassword = ({imgPassModal,setImgPassModal}) => {
    const [createImg, setCreateImg] = useState({preview: "", raw: ""});
    const [createImg2, setCreateImg2] = useState({preview: "", raw: ""});
    const navigate = useNavigate()
    const persons = useSelector(state => state.getUser)
    const ImgPassword = useSelector(state => state.getImgPas);
    const dispatch = useDispatch()
    function refreshPage() {
        window.location.reload(false);
    }
    useEffect(() => {
        dispatch(getUser())
        dispatch(getImgPas())
    }, [])
    const {register, handleSubmit, watch, formState: {errors}} = useForm();
    const blobToBase64 = (blob) => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    })
    const blobToBase63 = (blob) => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    })
    const onSubmit = data => {
        console.log(data)
        const formData = new FormData()
        formData.append("user", persons.id)
        // formData.append("user", 10)
        formData.append("pasport_1", data.pasport_1[0])
        formData.append("pasport_2", data.pasport_2[0])
        publicApi.put(`/pasport-updatedelete/${ImgPassword.id}/`, formData)
            .then(data => {
                refreshPage()
                console.log(data, "logdata")
                setCreateImg(data)
                imgId(data)
                toast.success("успешно")
            })
            .catch(error => {

                toast.error(error.response.data.user[0])
            })
    };



    return (
        <div className={imgPassModal ? "pas active   " : "pas"}>
            <div className={imgPassModal ? "pas--position active  " : "pas--position"}>
                <div className='flex justify-between'
                     style={{padding: "15px 15px 0  25px"}}
                >
                    <p className='pas--position--title'>Добавить</p>
                    <FontAwesomeIcon
                        icon={faXmark}
                        onClick={() => {
                            setImgPassModal(false)
                        }}
                        style={{
                            fontSize: '25px',
                            color: "#01487E",
                            display: "flex",
                            justifyContent: "end"
                        }}
                    />
                </div>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className='pas--position--form'
                >
                    <label className="btn--btns--innn2 ">
                        {
                            createImg.length > 0 ?
                                <>
                                    <span className="sm:w-full">Выбрали фото</span>
                                    <input
                                        className={`opacity-0 flex items-center absolute pas--btns--innn2---in1`}
                                        {...register("pasport_1")} id="file-upload" type="file" onChange={(e) => {
                                        blobToBase64(e.target.files[0]).then((data) => {
                                            setCreateImg(data)
                                        })
                                    }}/></>
                                :
                                <>
                                    <span className="sm:w-full">Фото паспорта</span>
                                    <input
                                        className={`opacity-0 flex items-center absolute pas--btns--innn2---in1`}
                                        {...register("pasport_1")} id="file-upload" type="file" onChange={(e) => {
                                        blobToBase64(e.target.files[0]).then((data) => {
                                            setCreateImg(data)
                                        })
                                    }}/></>
                        }
                    </label>
                    <label className="btn--btns--innn2 ">
                        {
                            createImg2.length > 0 ?
                                <>
                                    <span className="sm:w-full">Выбрали фото</span>
                                    <input
                                        className={`opacity-0 flex items-center absolute pas--btns--innn2---in1`}
                                        {...register("pasport_2")} id="file-upload" type="file" onChange={(e) => {
                                        blobToBase63(e.target.files[0]).then((data) => {
                                            setCreateImg2(data)
                                        })
                                    }}/></>
                                :
                                <>
                                    <span className="sm:w-full p-2">Фото с паспортом в руках</span>
                                    <input
                                        className={`opacity-0 flex items-center absolute pas--btns--innn2---in1`}
                                        {...register("pasport_2")} id="file-upload" type="file" onChange={(e) => {
                                        blobToBase63(e.target.files[0]).then((data) => {
                                            setCreateImg2(data)
                                        })
                                    }}/></>
                        }
                    </label>
                    <div className='pas--position--form--btns'>
                        <button
                            type='button'
                            className='pas--position--form--btns--btn1 mx-2.5'
                            onClick={() => setImgPassModal(false)}
                        >отменить</button>
                        {
                            createImg.length > 0 && createImg2.length > 0 ?
                                <button
                                    onClick={() => navigate("/person")}
                                    className='add--position--form--btns--btn2 mx-2.5'
                                    type="submit"
                                >Сохранить</button>
                                : ""
                        }
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateImgPassword;