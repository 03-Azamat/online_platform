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

const UpdatePhone = ({phoneModal,setPhoneModal,persons, handleChangeUser}) => {
    const access = JSON.parse(localStorage.getItem("access"));



    const [phone, setPhone] = useState(persons.phone_number)

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
                toast.success("Успешно " +data.phone_number)
                console.log(data)
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
                            onClick={() => {
                                setPhoneModal(false)
                            }}
                            className='modal--email--form--btns--btn2 mx-2.5'
                    >Сохранить</button>
                </div>
                </form>
        </div>
    );
};

export default UpdatePhone;