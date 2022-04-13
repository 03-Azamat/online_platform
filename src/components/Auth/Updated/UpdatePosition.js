import React, {useEffect, useState} from 'react';
import {publicApi} from "../HTTP/publicApi";
import {authenticate, userId} from "../Register/helpers";
import {toast} from "react-toastify";


const UpdatePosition = ({poModal,setPoModal,posOrgan,persons}) => {
    const [comment,setComment] = useState('')
    const textHandler = () => {
        publicApi.put(`data-create/${28}`, {
            user:persons.id,
            position:comment,

        })
            .then(data => {
                toast.success("success " +data.data.id)
                console.log(data)
            })
    }

    // const textHandler = () => {
    //     userId ?  publicApi.put("data-create/", {
    //         user: persons.id,
    //         organization: comment,
    //         position: comment
    //
    //     })
    //         .then(data => {
    //             authenticate(data)
    //             toast.success("success " + data.data.id)
    //             console.log(data)
    //         })
    //         :
    //         publicApi.post("data-create/", {
    //             user: persons.id,
    //             organization: comment,
    //             position: comment
    //
    //         })
    // }

    return (
        <div  className={ poModal ? "update active   " : "update"}>
            <div  className={ poModal ? "update--position active  " : "update--position"}>
                <p className='update--position--title' >Изменение должность</p>
                <label>Должность*</label>
                <form
                    onSubmit={textHandler}
                    className='update--position--form'
                >
                    <textarea onChange={(e) => setComment(e.target.value)} name="text" id="" cols="" rows="" />

                    <div className='update--position--form--btns'>
                        <button
                            className='update--position--form--btns--btn1 mx-2.5'
                            type='button'
                        onClick={() => setPoModal(false)}
                        >отменить</button>
                        <button
                            onClick={textHandler}
                            className='update--position--form--btns--btn2 mx-2.5'
                            type='button'
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