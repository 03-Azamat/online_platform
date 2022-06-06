import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {toast} from "react-toastify";
import {useForm} from "react-hook-form";
import {imgId} from "../Register/helpers";
import {useDispatch, useSelector} from "react-redux";
import {getImg, getUser} from "../../../redux/action/corsesAction";
import {publicApi} from "../HTTP/publicApi";

const UpdatePhoto = () => {
    const [createImg,setCreateImg] = useState('')
    const IdImg = JSON.parse(localStorage.getItem("imgId"));
    const persons = useSelector(state => state.getUser)
    const profileImg = useSelector(state => state.getImg);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUser())
        dispatch(getImg())
    },[])
    function refreshPage() {
        window.location.reload(false);
    }
    const deletePhoto =() => {
        publicApi.delete(`photo-delete/${profileImg.id}`)
            .then(data => {
                refreshPage()
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
        console.log(data.img)
        formData.append("img", data.img[0])
        publicApi.put(`photo-update/${profileImg.id}/`,formData)
                    .then(({data}) => {
                        dispatch(getImg())
                        setCreateImg(data)
                toast.success("Update")
            }).catch(error => {
            console.log(error)
        })
    };


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
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
                    createImg.length > 0 ?
                        <button
                            type='submit'
                            className="btn--btns--btnSubmit"
                        >Изменить профиль</button>
                        : ""
                }
            </form>
        </div>
    );
};

export default UpdatePhoto;




