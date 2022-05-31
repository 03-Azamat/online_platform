import React from 'react';
import * as Yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {useForm} from "react-hook-form";
import axios from "axios";
import {toast} from "react-toastify";
import {publicApi} from "../HTTP/publicApi";

const UpdatePassword = ({passwordModal,setPasswordModal}) => {
    const access = JSON.parse(localStorage.getItem("access"));
    const validationSchema = Yup.object().shape({
        current_password: Yup.string()
            .required('Введите пароль')
            .min(6, 'Старый пароль'),
        password: Yup.string()
            .required('Введите пароль')
            .min(6, 'Пароль должен быть не менее 4 символов'),
        new_password: Yup.string()
            .required('Введите пароль')
            .oneOf([Yup.ref('password')], 'Пароли должны совпадать')
    });

    const formOptions = { resolver: yupResolver(validationSchema) };
    const { register,handleSubmit,handleChange,value,  formState: { errors,} } = useForm(formOptions);
    const onSubmit = data => {

        console.log(data)
        publicApi.post('users/set_password/',data,{
            headers: {
                "Authorization": `Bearer ${access}`
            }
        }).then(data => {
            console.log(data)
            setPasswordModal(false)
            toast.success("Успешно")
        }).catch((error) => {
           if (error.response.data.current_password){
               toast.error( "Старый пароль неправильный ")
           } else  if (error.response.data.new_password){
               toast.error(error.response.data.new_password[0])
           }
        })
    };
    return (
        <div  className={ passwordModal ? "modal active   " : "modal"}>
            <div  className={ passwordModal ? "modal--password active  " : "modal--password"}>
                <p className='modal--password--title' >Изменить пароль</p>

                <form className='modal--password--form'  onSubmit={handleSubmit(onSubmit)}>
                    <label className='modal--password--form--s-password'>Старый пароль</label>
                    <input  name="current_password"  placeholder="Пароль"  type="password" {...register('current_password')} className={`form-control ${errors.password ? 'is-invalid' : ''}`} />
                    <div className="modal--password--form--error invalid-feedback">{errors.current_password?.message}</div>

                    <label className='modal--password--form--new-password'>Новый пароль</label>
                    <input  name="password"  placeholder="Пароль"  type="password" {...register('password')} className={`form-control ${errors.password ? 'is-invalid' : ''}`} />
                    <div className="modal--password--form--error invalid-feedback">{errors.password?.message}</div>
                    <label className='modal--password--form--confirmPassword'>Потвердите новый пароль</label>
                    <input name="new_password" type="password" placeholder="Подвердить пароль" {...register('new_password')} className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`} />
                    <div className="modal--password--form--error invalid-feedback">{errors.new_password?.message}</div>
                    <div className='modal--password--form--btns'>
                        <button type='button' className='modal--password--form--btns--btn1 mx-2.5'
                                onClick={() => setPasswordModal(false)}
                        >отменить</button>
                        <button type='submit' className='modal--password--form--btns--btn2 mx-2.5'>Сохранить</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdatePassword;