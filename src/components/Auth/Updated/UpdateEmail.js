import React from 'react';
import * as Yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {useForm} from "react-hook-form";
import axios from "axios";

const UpdateEmail = ({emailModal,setEmailModal}) => {
    const validationSchema = Yup.object().shape({
        email:Yup.string()
            .required('Введите Email'),
    });

    const formOptions = { resolver: yupResolver(validationSchema) };
    const { register,handleSubmit,handleChange,value,  formState: { errors,} } = useForm(formOptions);
    const onSubmit = data => {
        console.log(data)
    };
    return (
        <div  className={ emailModal ? "modal active   " : "modal"}>
            <div  className={ emailModal ? "modal--email active  " : "modal--email"}>
                <p className='modal--email--title' >Изменение email</p>
                <label>Введите e-mail *</label>
                <form className='modal--email--form'  onSubmit={handleSubmit(onSubmit)}>
                    <input  type="email" placeholder="Email" {...register("email", {required: true, pattern: /^\S+@\S+$/i})}/>
                    <div className="modal--email--form--error invalid-feedback">{errors.email?.message}</div>
                    <div className='modal--email--form--btns'>
                        <button type='button' className='modal--email--form--btns--btn1 mx-2.5'
                                onClick={() => setEmailModal(false)}
                        >отменить</button>
                        <button type='submit' className='modal--email--form--btns--btn2 mx-2.5'>Сохранить</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateEmail;