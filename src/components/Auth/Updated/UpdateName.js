import React, {useState} from 'react';
import 'react-toastify/dist/ReactToastify.css';
import {toast, ToastContainer,} from "react-toastify";

const UpdateName = ({modal,setModal,handleChangeUser, persons}) => {
    const access = JSON.parse(localStorage.getItem("access"));
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

        console.log(obj)
        fetch("https://djangorestapp.herokuapp.com/users/me/", options)
            .then(res => res.json())
            .then(data => {
                toast.success("Успешно " +data.name)
                console.log(data)
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
                        type="tel"
                        name="phone_number"
                        defaultValue={persons.name}
                    />
                    <div className='modal--name--form--btns'>
                        <button type='button' className='modal--name--form--btns--btn1 mx-2.5'
                                onClick={() => setModal(false)}
                        >отменить</button>
                        <button
                            onClick={() => {
                                setModal(false)
                            }}
                                className='modal--name--form--btns--btn2 mx-2.5'
                        >Сохранить</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateName;