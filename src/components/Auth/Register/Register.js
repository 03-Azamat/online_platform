import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCheck} from "@fortawesome/free-solid-svg-icons";
import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";

const Register = ( {active,setActive}) => {
    const navigate = useNavigate()
    return (

         <div className='register'  onClick={() => {
             navigate("/")
         }}>
             <form className='register--check'>
                 <FontAwesomeIcon className='register--check--icon' icon={faCheck}/>
                 <h2>Спасибо за заявку!</h2>
                 <p>Наш специалист свяжется с Вами</p>
                 <button onClick={() =>
                     navigate("/login")} >Закрыть</button>
             </form>

         </div>

    )
};
export default Register;
