import React from 'react';
import {useNavigate} from "react-router-dom"
import * as Yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {useForm} from "react-hook-form";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import axios from "axios";
import {toast} from "react-toastify";

const SignIn = ({active,setActive}) => {
    const navigate =  useNavigate()
    const validationSchema = Yup.object().shape({
        email:Yup.string()
            .required('Введите Email'),
        password: Yup.string()
            .required('Введите пароль')
            .min(4, 'Пароль должен быть не менее 8 символов'),
        // confirmPassword: Yup.string()
        //     .required('Введите пароль')
        //     .oneOf([Yup.ref('password')], 'Пароли должны совпадать')
        // password: Yup.string()
        //     .required('Введите пароль')
        //     .oneOf([Yup.ref('password')], 'Пароли должны совпадать')

    });
    const formOptions = { resolver: yupResolver(validationSchema) };
    const { register, handleSubmit,setError, formState: { errors,  isDirty, isValid , } } = useForm(formOptions);
    const onSubmit = data => {
        axios.post("https://djangorestapp.herokuapp.com/jwt/create/", data)
            .then(response => {
                toast.success("Salam " +data.user.name)
                console.log(response)
            }).catch((error) => {
            console.log(error)
                console.log(data)
        })
    };


    return (
        <div
             className={ active ? "signin active  " : "signin"}
        >
            <form onSubmit={handleSubmit(onSubmit)} className={ active ? "signin--forms active  " : "signin--forms"}>
                <FontAwesomeIcon className='signin--forms--btn' icon={faXmark}
                                 style={{fontSize:'25px'}}
                                 onClick={() => {
                                     setActive(false)
                                 }}
                />
                <h2>Вход</h2>
                <input className='signin--forms--input1'  type="email" placeholder="Email" {...register("email", {required: true, pattern: /^\S+@\S+$/i})}/>
                <div className="invalid-feedback">{errors.email?.message}</div>
                {/*<input  type="Email" name='email' placeholder='Электронная почта' className='signin--forms--input1' />*/}
                <input className='signin--forms--input1' name="password"  placeholder="Пароль"  type="password" {...register('password')} />
                <div className="invalid-feedback">{errors.password?.message}</div>
                {/*<input type="password" name='password' placeholder='Пароль' className='signin--forms--input1' />*/}
                <button  type='submit' >Войти</button>
            </form>
        </div>
    );
};

export default SignIn;
