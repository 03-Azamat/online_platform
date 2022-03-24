import React from 'react';
import * as Yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {useForm} from "react-hook-form";

const UpdatePassword = ({passwordModal,setPasswordModal}) => {
    const validationSchema = Yup.object().shape({
        password1: Yup.string()
            .required('Введите пароль')
            .min(6, 'Старый пароль'),
        password: Yup.string()
            .required('Введите пароль')
            .min(6, 'Пароль должен быть не менее 4 символов'),
        confirmPassword: Yup.string()
            .required('Введите пароль')
            .oneOf([Yup.ref('password')], 'Пароли должны совпадать')
    });

    const formOptions = { resolver: yupResolver(validationSchema) };
    const { register,handleSubmit,handleChange,value,  formState: { errors,} } = useForm(formOptions);
    const onSubmit = data => {
        console.log(data)
    };
    return (
        <div  className={ passwordModal ? "modal active   " : "modal"}>
            <div  className={ passwordModal ? "modal--password active  " : "modal--password"}>
                <p className='modal--password--title' >Изменить пароль</p>

                <form className='modal--password--form'  onSubmit={handleSubmit(onSubmit)}>
                    <label className='modal--password--form--s-password'>Старый пароль</label>
                    <input  name="password"  placeholder="Пароль"  type="password" {...register('password1')} className={`form-control ${errors.password ? 'is-invalid' : ''}`} />
                    <div className="modal--password--form--error invalid-feedback">{errors.password1?.message}</div>

                    <label className='modal--password--form--new-password'>Новый пароль</label>
                    <input  name="password"  placeholder="Пароль"  type="password" {...register('password')} className={`form-control ${errors.password ? 'is-invalid' : ''}`} />
                    <div className="modal--password--form--error invalid-feedback">{errors.password?.message}</div>
                    <label className='modal--password--form--confirmPassword'>Потвердите новый пароль</label>
                    <input name="confirmPassword" type="password" placeholder="Подвердить пароль" {...register('confirmPassword')} className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`} />
                    <div className="modal--password--form--error invalid-feedback">{errors.confirmPassword?.message}</div>
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