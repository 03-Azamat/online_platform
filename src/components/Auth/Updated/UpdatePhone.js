import React, {useEffect, useState} from 'react';
import * as Yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {useForm} from "react-hook-form";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import axios from "axios";
import {toast} from "react-toastify";
import {publicApi} from "../HTTP/publicApi";
import {useDispatch} from "react-redux";
import {getUser} from "../../../redux/action/corsesAction";

const UpdatePhone = ({phoneModal,setPhoneModal,persons, handleChangeUser}) => {
    const access = JSON.parse(localStorage.getItem("access"));
    const [phone, setPhone] = useState('')
    const dispatch = useDispatch()
    const btn = (e) => {
        e.preventDefault()
        let obj = {
            name: persons.name,
            id: persons.id,
            phone_number: phone,
        }
        let options = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${access}` },
            body: JSON.stringify(obj)
        }

        console.log(obj)
        fetch("https://djangorestapp.herokuapp.com/users/me/", options)
            .then(res => res.json())
            .then(data => {
                if (data.phone_number[0] === 'Введен некорректный номер телефона.'){
                    toast.error('Введен некорректный номер телефона.')
                } else if (data.phone_number.length === 0){
                    toast.error("Это поле не может быть пустым.")}
                else {
                    dispatch(getUser())
                    setPhoneModal(false)
                    toast.success("Успешно ")
                }
            }).catch(error => {
                toast.error("error")
        })
    }
    return (
        <div
             className={ phoneModal ? "phone active  " : "phone"}
        >
            <form
                className={ phoneModal ? "phone--content active  " : "phone--content"}
                onSubmit={btn}
            >
                   <div className='phone--content--hed'>
                       <p className='phone--content--hed--title'>Изменение номера
                           телефона</p>
                       <FontAwesomeIcon className='phone--content--hed--x' icon={faXmark}
                                        style={{fontSize:'25px'}}
                                        onClick={() => {
                                            setPhoneModal(false)
                                            // navigate("/")
                                        }}
                       />
                   </div>

                    <label className='phone--content--text'>Укажите новый номер*</label>
                <div className='phone--content--phone'>
                    <input
                        onChange={e => setPhone(e.target.value)}
                        type="tel"
                        name="phone_number"
                        defaultValue={persons.phone_number}
                    />
                </div>
                <div className='modal--email--form--btns'>
                    <button type='button' className='modal--email--form--btns--btn1 mx-2.5'
                            onClick={() => setPhoneModal(false)}
                    >отменить</button>
                    <button
                            className='modal--email--form--btns--btn2 mx-2.5'
                    >Сохранить</button>
                </div>
                </form>
        </div>
    );
};

export default UpdatePhone;