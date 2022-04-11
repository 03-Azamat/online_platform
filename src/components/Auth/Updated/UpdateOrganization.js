import React, {useState} from 'react';
import { publicApi} from "../HTTP/publicApi";
import {toast} from "react-toastify";

const UpdateOrganization = ({orModal,setOrModal,persons, posOrgan}) => {
    const access = JSON.parse(localStorage.getItem("access"));
    const [comment, setComment] = useState('');
    const [newComment, setNewComment] = useState('');
    // console.log(newComment)
    // console.log(comment)
    //

    const textHandler = () => {
    publicApi.post("data-create/", {
        user:persons.id,
        organization:comment,
        position:posOrgan.position,

    })
        .then(data => {
            localStorage.setItem("userID", JSON.stringify(data.data.id))
            toast.success("success " +data.data.id)
            console.log(data)
        })
}


    return (
        <div  className={ orModal ? "updated active  " : "updated"}>
            <div  className={ orModal ? "updated--organization active  " : "updated--organization"}>
                <p className="updated--organization--title" >Изменение организация</p>
                <label>Организация*</label>
                <form className="updated--organization--form"  onSubmit={textHandler}>
                    <textarea onChange={(e) => setComment(e.target.value)} name="text" id="" cols="" rows="" />
                    <div className="updated--organization--form--btns">
                        <button type="button" className=" updated--organization--form--btns--btn1 mx-2.5"
                                onClick={() => setOrModal(false)}
                        >отменить</button>
                        <button type="button" className="updated--organization--form--btns--btn2 mx-2.5" onClick={textHandler}>Сохранить</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateOrganization;



// const btn = (e) => {
//     e.preventDefault()
//     let obj = {
//         id: persons.id,
//     }
//     let options = {
//         method: "GET",
//         headers: {
//             "Content-Type": "application/json",
//             "Authorization": `Bearer ${access}` },
//         body: JSON.stringify(obj)
//     }
//
//     console.log(obj)
//     publicApi(`data-detailID/${persons.id}/`, options)
//         .then(({data}) => {
//             toast.success("Успешно")
//             setNewComment(data)
//         })
// }




// const textHandler = () => {
//     publicApi.put("data-create/", {
//         user:persons.id,
//         organization:comment,
//         position: posOrgan.position
//
//     })
//         .then(data => {
//             toast.success("success")
//             console.log(data)
//         })
//
//
//     // publicApi.post('data-create/', {
//     //     organization: comment,
//     //     position: comment
//     // })
//     //     .then(data => console.log(data))
// }