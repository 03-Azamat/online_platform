
import React from 'react';
import {useNavigate} from "react-router-dom";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useForm} from "react-hook-form";
import * as Yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";

const RegisterCode = () => {
    const navigate = useNavigate()
    const validationSchema = Yup.object().shape({
        // name: Yup.string()
        //     .required('Введите фамилия'),
        // MobileNumber: Yup.string()
        //     .required('Введите телефон'),
        // Email:Yup.string()
        //     .required('Введите Email'),
        password: Yup.string()
            .required('Введите пароль')
            .min(4, 'Пароль должен быть 4 символов'),
        // password: Yup.string()
        //     .required('Введите пароль')
        //     .min(4, 'Пароль должен быть 4 символов'),
        // // .oneOf([Yup.ref('password')], 'Пароль должен быть 4 символов')

    });
    const formOptions = { resolver: yupResolver(validationSchema) };
    const { register, handleSubmit, formState: { errors} } = useForm(formOptions);
    const onSubmit = data => {
        // setActive(false)
        navigate("/register-check")
        // alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
        return false;
    };
    console.log(errors);

    return (

            <div className="reg" >
                <form onSubmit={handleSubmit(onSubmit)} className='reg--code'>
                    <FontAwesomeIcon className='reg--code--btnx' icon={faXmark}
                                     style={{fontSize:'25px'}}
                                     onClick={() => {
                                         navigate("/")
                                     }}
                />
                    <h2>Регистрация</h2>

                    <p>Вам отправлено с кодом подтверждения регистрации
                        в электронные почте
                    </p>
                    <input type="password" name='password' placeholder="Код подтверждения" {...register("password",{required: true, maxLength: 4})} />
                    <div className="invalid-feedback">{errors.password?.message}</div>

                    <button type='submit'>Зарегистрироваться</button>
                </form>
            </div>

    );
};

export default RegisterCode;


