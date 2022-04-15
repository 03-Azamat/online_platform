import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import {toast} from "react-toastify";
import {useForm} from "react-hook-form";
import {imgId} from "../Register/helpers";
import {useDispatch, useSelector} from "react-redux";
import {getUser} from "../../../redux/action/corsesAction";

const UpdatePhoto = () => {
    const IdImg = JSON.parse(localStorage.getItem("imgId"));
    const [newImg, setNewImg] = useState([])
    const [createImg, setCreateImg] = useState([])
    const persons = useSelector(state => state.getUser)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUser())
    },[])
    const deletePhoto =() => {
        axios.delete(`https://djangorestapp.herokuapp.com/photo-delete/${IdImg}`)
            .then(data => {
                localStorage.removeItem("imgId")
                toast("deleted photo")
                console.log(data)
            })
    }
    const blobToBase64 = (blob) => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    })
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const formData = new FormData()
        formData.append("user", persons.id)
        console.log(data)
        formData.append("img", data.img[0])
        axios.put(`https://djangorestapp.herokuapp.com/photo-update/${IdImg}/`,formData)
            .then(data => {
                toast.success("Update")
                console.log(data)
            }).catch(error => {
            console.log(error)
        })
    };
    // const updatePhoto = data => {
    //     const formData = new FormData()
    //     formData.append("userId", persons.id)
    //     console.log(formData,"formDataaa")
    //     formData.append("newImg", data.img[0])
    //     axios.put(`https://djangorestapp.herokuapp.com/photo-update/${IdImg}/`,formData)
    //         .then(data => {
    //             toast.success("Update")
    //             console.log(data)
    //         }).catch(error => {
    //         console.log(error)
    //     })
    //
    //
    // }
    return (
        <div>
            <form
                // onSubmit={handleSubmit(onSubmit)}
            >
                        <div className='btn--btns--div flex'>
                            <label className="btn--btns--div--label">
                                <p> Выбрать фото</p>
                                <input className={`btn--btns--div--innn ${createImg.length === 0 ? "ibtn--btns--div--innn5" : "btn--btns--div--innn" }`} {...register("img")} id="file-upload"  type="file" onChange={(e) => {
                                    blobToBase64(e.target.files[0]).then((data) => {
                                        setCreateImg(data)
                                    })
                                }}/>
                            </label>
                            <FontAwesomeIcon
                                className="btn--btns--div--iconTrash"
                                onClick={deletePhoto}
                                icon={faTrash}
                            />
                        </div>

                {
                    createImg.length === 0 && IdImg ? " " :
                        <button
                            type='submit'
                            onSubmit={handleSubmit(onSubmit)}
                            // onClick={updatePhoto}
                            className="btn--btns--btnSubmit"
                        >Update</button>
                }



            </form>
        </div>
    );
};

export default UpdatePhoto;




