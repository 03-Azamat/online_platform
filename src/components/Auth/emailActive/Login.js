import React from 'react';
import {useNavigate} from "react-router-dom"
import * as Yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {useForm} from "react-hook-form";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import axios from "axios";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {authenticate, isAuth} from "../Register/helpers";
import {publicApi} from "../HTTP/publicApi";
import {getUser} from "../../../redux/action/corsesAction";
import {useDispatch} from "react-redux";

const Login = () => {
    const navigate =  useNavigate()
    const validationSchema = Yup.object().shape({
        email:Yup.string()
            .required('Введите Email'),
        password: Yup.string()
            .required('Введите пароль')
            .min(4, 'Пароль должен быть не менее 8 символов'),
    });
    const dispatch = useDispatch()
    function refreshPage() {
        window.location.reload(false);
    }
    const formOptions = { resolver: yupResolver(validationSchema) };
    const { register, handleSubmit,
        formState: { errors, } } = useForm(formOptions);
      const onSubmit = data => {
          publicApi.post("/jwt/create", data)
            .then(response => {
                toast.success("Salam  " + data.email)
                authenticate(response,dispatch(getUser()))
                navigate("/person")
                refreshPage()
            }).catch((error) => {
            toast.error(error.response.data.detail)
        })
    };

    return (
        <>
            <ToastContainer/>
            <div className='signin1'>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className='signin1--forms1'
                >
                    <FontAwesomeIcon
                        className='signin1--forms1--btn' icon={faXmark}
                        style={{fontSize:'25px'}}
                        onClick={() => {
                            navigate("/")
                        }}
                    />
                    <h2>Вход</h2>
                    <input className='signin1--forms1--input1'  type="email" placeholder="Email" {...register("email", {required: true, pattern: /^\S+@\S+$/i})}/>
                    <div className="invalid-feedback">{errors.email?.message}</div>
                    <input className='signin1--forms1--input1' name="password"  placeholder="Пароль"  type="password" {...register('password')} />
                    <div className="invalid-feedback">{errors.password?.message}</div>
                    <button  type='submit' >Войти</button>
                </form>
            </div>
        </>
    );
};

export default Login;
