import React, {useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const Activate = () => {
    const {token} = useParams()
    const navigate = useNavigate()
    const getToken = async () => {
        const getItem = axios.get("https://djangorestapp.herokuapp.com/jwt/create")
    }

    return (
        <div className='register'
             onClick={() => {

             }}
        >
            <form className='register--check'>
                <FontAwesomeIcon className='register--check--icon' icon={faCheck}/>
                <h2>Спасибо за заявку!</h2>
                <p>Наш специалист свяжется с Вами</p>
                <button onClick={() =>
                    navigate("/login")} >Закрыть</button>
            </form>

        </div>
    );
};

export default Activate;