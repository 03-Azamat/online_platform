import React, {useEffect, useState} from 'react';
import {publicApi} from "../HTTP/publicApi";
import {authenticate, userId} from "../Register/helpers";
import {toast} from "react-toastify";
import {useDispatch, useSelector} from "react-redux";
import {getPosition} from "../../../redux/action/corsesAction";
import axios from "axios";


const UpdatePosition = ({poModal,setPoModal,persons}) => {
    const [comment, setComment] = useState('');
    const dataID = JSON.parse(localStorage.getItem("dataID"));
    const posOrgan = useSelector(state => state.getPosition)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPosition())
    },[])
    const update = (e) => {
        e.preventDefault()
        axios.put(`https://djangorestapp.herokuapp.com/data-update/${dataID}/`, {
            id: persons.id,
            organization: posOrgan.organization,
            position:comment,
        }).then(data => {
            if (data.data.position.length === 0){
                toast.error("Это поле не может быть пустым.")}
            else {
                setPoModal(false)
                toast.success("Успешно ")
            }
                console.log(data)
            }).catch(error => {
                toast.error("error")
        })
    }

    return (
        <div  className={ poModal ? "update active   " : "update"}>
            <div  className={ poModal ? "update--position active  " : "update--position"}>
                <p className='update--position--title' >Изменение должность</p>
                <label>Должность*</label>
                <form
                    onSubmit={update}
                    className='update--position--form'
                >
                    <textarea
                        defaultValue={posOrgan.position}
                        onChange={(e) => setComment(e.target.value)}
                        name="text" id="" cols="" rows="" />
                    <div className='update--position--form--btns'>
                        <button
                            type='button'
                            className='update--position--form--btns--btn1 mx-2.5'
                        onClick={() => setPoModal(false)}
                        >отменить</button>
                        <button
                            type='submit'
                            // onClick={btn}
                            className='update--position--form--btns--btn2 mx-2.5'
                        >Сохранить</button>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdatePosition;






// const access = JSON.parse(localStorage.getItem("access"));
// const [pos, setPos] = useState('')
// const submitPosition = (e) => {
//     e.preventDefault()
//     let obj = {
//         position: pos,
//         organization: posOrgan.organization,
//     }
//     let options = {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             "Authorization": `Bearer ${access}` },
//         body: JSON.stringify(obj)
//     }
//     console.log(obj)
//     fetch(`https://djangorestapp.herokuapp.com/data-delete/${persons.id}/`, options)
//         .then(res => res.json())
//         .then(data => {
//             toast.success("Успешно " +data.position)
//             console.log(data)
//         })
// }