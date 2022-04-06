import React, {useState} from "react";
import { useForm } from 'react-hook-form';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {toast, ToastContainer,} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import {data} from "autoprefixer";
import {number} from "yup";
import {injectStyle} from "react-toastify/dist/inject-style";

export default function HookForm({active, setActive}) {
    const navigate =useNavigate()
    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required('Введите фамилия'),
        phone_number: Yup.string()
            .required('Введите телефон')
            .min(8, 'Введите телефон'),
        email:Yup.string()
            .required('Введите Email'),
        password: Yup.string()
            .required('Введите пароль')
            .min(8, 'Пароль должен быть не менее 8 символов'),
        confirmPassword: Yup.string()
            .required('Введите пароль')
            .oneOf([Yup.ref('password')], 'Пароли должны совпадать')

    });
    const formOptions = { resolver: yupResolver(validationSchema) };
    const { register,handleSubmit, formState: { errors,} } = useForm(formOptions);
    const onSubmit = data => {

        axios.post("https://djangorestapp.herokuapp.com/users/", data)
            .then(response => {
                toast.success("Вам отправлено ссылка в электронные почте")

                // localStorage.setItem("user", JSON.stringify(data.user))
                console.log(response ,"response")
            }).catch((error) => {
                if (error.response.data.password){
                    toast.error(error.response.data.password[0])
                } else if (error.response.data.phone_number && error.response.data.email ){
                    toast.error(error.response.data.phone_number[0] ) &&  toast.error(error.response.data.email[0])
                } else if (error.response.data.phone_number){
                    toast.error(error.response.data.phone_number[0] )
                } else if (error.response.data.email){
                    toast.error(error.response.data.email[0])
                }
            })
    };


    return (
        <section className={ active ? "forms active  " : "forms"}>
            <div className={ active ? "forms--inputs active  " : "forms--inputs"}  >
                <ToastContainer
                    autoClose={10000}
                    hideProgressBar={false}
                />
                <form onSubmit={handleSubmit(onSubmit)}  className='forms--inputs--hook' >
                    <FontAwesomeIcon className='forms--inputs--hook--btnx' icon={faXmark}
                                     style={{fontSize:'25px'}}
                                     onClick={() => {
                                         setActive(false)
                                         // navigate("/")
                                     }}
                    />
                    <h2>Регистрация</h2>
                    <input  type="text" placeholder="ФИО"  {...register("name")} className={`form-control ${errors.password ? 'is-invalid' : ''}`}/>
                    <div className="invalid-feedback">{errors.name?.message}</div>
                    <input  type="tel" placeholder="+996 555 555 555" {...register("phone_number")} className={`form-control ${errors.password ? 'is-invalid' : ''}`}/>
                    <div className="invalid-feedback">{errors.phone_number?.message}</div>
                    <input  type="email" placeholder="Email" {...register("email", {required: true, pattern: /^\S+@\S+$/i})}/>
                    <div className="invalid-feedback">{errors.email?.message}</div>
                    {/*<input type="text" placeholder="Должность" {...register("position", {required: true, maxLength: 100})} />*/}
                    {/*<input  type="text" placeholder="Организация" {...register("organization", {required: true, maxLength: 100})} />*/}
                    <input  name="password"  placeholder="Пароль"  type="password" {...register('password')} className={`form-control ${errors.password ? 'is-invalid' : ''}`} />
                    <div className="invalid-feedback">{errors.password?.message}</div>
                    <input name="confirmPassword" type="password" placeholder="Подвердить пароль" {...register('confirmPassword')} className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`} />
                    <div className="invalid-feedback">{errors.confirmPassword?.message}</div>
                    <button type="submit"
                    > Зарегистрироваться</button>
                </form>
            </div>

        </section>
    );
}

// const token = axios.post("https://djangorestapp.herokuapp.com/jwt/create/", data)
//     .then(response => {
//         console.log(response)
//         console.log(Cookies.set("token",data.token))
//     })



