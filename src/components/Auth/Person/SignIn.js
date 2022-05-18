import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom"
import * as Yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {useForm} from "react-hook-form";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {authenticate, isAuth} from "../Register/helpers";
import {publicApi} from "../HTTP/publicApi";
import {useDispatch} from "react-redux";
import {getPosition, getUser} from "../../../redux/action/corsesAction";

const SignIn = ({signActive,setSignActive}) => {
    const navigate =  useNavigate()
    const validationSchema = Yup.object().shape({
        email:Yup.string()
            .required('Введите Email'),
        password: Yup.string()
            .required('Введите пароль')
            .min(4, 'Пароль должен быть не менее 8 символов'),
    });
    useEffect(() => {
        dispatch(getPosition())
        dispatch(getUser())
    },[])
    function refreshPage() {
        window.location.reload(false);
    }
    const dispatch = useDispatch()
    const formOptions = { resolver: yupResolver(validationSchema) };
    const { register, handleSubmit,
        formState: { errors, } } = useForm(formOptions);
    const onSubmit = data => {
        publicApi.post("/jwt/create", data)
            .then(response => {
                toast.success("Salam  " +data.email)
                authenticate(response,dispatch(getUser()))
                navigate("/person")
                refreshPage()
                setSignActive(false)
            }).catch((error) => {
                toast.error(error.response.data.detail)
        })
    };


    return (
       <div className="z-20">
           <ToastContainer/>
           <div className={ signActive ? "signin active  " : "signin"}>
               <form
                   onSubmit={handleSubmit(onSubmit)}
                   className={ signActive ? "signin--forms active  " : "signin--forms"}
               >
                   <FontAwesomeIcon
                       className='signin--forms--btn' icon={faXmark}
                       style={{fontSize:'25px'}}
                       onClick={() => {
                           setSignActive(false)
                           }}
                   />
                   <h2>Вход</h2>
                   <input className='signin--forms--input1'  type="email" placeholder="Email" {...register("email", {required: true, pattern: /^\S+@\S+$/i})}/>
                   <div className="invalid-feedback">{errors.email?.message}</div>
                   {/*<input  type="Email" name='email' placeholder='Электронная почта' className='signin--forms--input1' />*/}
                   <input className='signin--forms--input1' name="password"  placeholder="Пароль"  type="password" {...register('password')} />
                   <div className="invalid-feedback">{errors.password?.message}</div>
                   <button>Войти</button>
               </form>
           </div>
       </div>
    );
};

export default SignIn;
