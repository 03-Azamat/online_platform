import React, {useEffect, useState} from 'react';
import { publicApi} from "../HTTP/publicApi";
import {toast} from "react-toastify";
import {getPosition, getUser} from "../../../redux/action/corsesAction";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";

const UpdateOrganization = ({orModal,setOrModal}) => {
    const [comment, setComment] = useState('');
    // const dataID = JSON.parse(localStorage.getItem("dataID"));
    const posOrgan = useSelector(state => state.getPosition)
    const persons = useSelector(state => state.getUser);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPosition())
        dispatch(getUser())
    },[])
    // const userId = JSON.parse(localStorage.getItem("userId"));
    const update = (e) => {
        e.preventDefault()
          if (posOrgan){
              publicApi.put(`data-update/${posOrgan.id}/`, {
                  id: persons.id,
                  position: posOrgan.position,
                  organization:comment,
              }).then(data => {
                  if (data.data.organization.length === 0){
                      toast.error("Это поле не может быть пустым.")}
                  else {
                      dispatch(getPosition())
                      setOrModal(false)
                      toast.success("Успешно ")
                  }
                  console.log(data)
              }).catch(error => {
                  toast.error("error")
              })
          }
    }

    return (
        <div  className={ orModal ? "updated active  " : "updated"}>
            <div  className={ orModal ? "updated--organization active  " : "updated--organization"}>
                <p className="updated--organization--title" >Изменение организация</p>
                <label>Организация*</label>
                <form
                    className="updated--organization--form"
                      onSubmit={update}>
                    <textarea
                        onChange={(e) => setComment(e.target.value)}
                        name="text" id="" cols="" rows=""
                        defaultValue={posOrgan.organization}
                    />
                    <div className="updated--organization--form--btns">
                        <button
                            type="button"
                            className=" updated--organization--form--btns--btn1 mx-2.5"
                            onClick={() => setOrModal(false)}
                        >отменить</button>
                        <button
                            type='submit'
                            className="updated--organization--form--btns--btn2 mx-2.5"
                        >Сохранить</button>
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