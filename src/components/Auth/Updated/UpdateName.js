import React, {useEffect, useState} from 'react';
import 'react-toastify/dist/ReactToastify.css';
import {toast, ToastContainer,} from "react-toastify";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {getUser} from "../../../redux/action/corsesAction";
import {useDispatch, useSelector} from "react-redux";
import {GET_USER} from "../../../redux/types/actionTypes";

const UpdateName = ({modal,setModal,handleChangeUser}) => {
    const access = JSON.parse(localStorage.getItem("access"));
    const navigate = useNavigate()
    const persons = useSelector(state => state.getUser)
    const dispatch = useDispatch()
    // const [persons, setPersons] = useState({})
    useEffect(() => {
        dispatch(getUser())
    },[])
    const [name, setName] = useState('')
    const btn = (e) => {
        e.preventDefault()
        let obj = {
            name: name,
            id: persons.id,
        }
        let options = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${access}` },
            body: JSON.stringify(obj)
        }
        fetch(`https://djangorestapp.herokuapp.com/users/me/`, options )
            .then(res => res.json())
            .then(data => {
                if (data.name[0] === 'Это поле не может быть пустым.'){
                    toast.error("Это поле не может быть пустым.")
                } else {
                    dispatch(getUser())
                    setModal(false)
                    toast.success("Успешно ")
                }
            }).catch(error => {
            toast.error("error")
                // toast.error(error.data.name)
        })

    }
    return (
        <div  className={ modal ? "modal active   " : "modal"}>
            <ToastContainer/>

            <div  className={ modal ? "modal--name active  " : "modal--name"}>

                <p className='modal--name--title' >Изменение ФИО</p>
                <label>Введите ФИО *</label>
                <form className='modal--name--form'  onSubmit={btn}>
                    <input
                        onChange={e => setName(e.target.value)}
                        type="name"
                        name="name"
                        defaultValue={persons.name}
                    />
                    <div className='modal--name--form--btns'>
                        <button type='button' className='modal--name--form--btns--btn1 mx-2.5'
                                onClick={() => setModal(false)}
                        >отменить</button>
                        <button
                                className='modal--name--form--btns--btn2 mx-2.5'
                        >Сохранить</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateName;