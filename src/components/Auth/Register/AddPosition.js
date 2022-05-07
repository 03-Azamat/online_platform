import React, {useEffect, useState} from 'react';
import {publicApi} from "../HTTP/publicApi";
import {toast} from "react-toastify";
import {useDispatch, useSelector} from "react-redux";
import {getPosition, getUser} from "../../../redux/action/corsesAction";
import {dataId} from "./helpers";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import * as Yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {position} from "tailwindcss/lib/util/dataTypes";
import axios from "axios";

const AddPosition = ({add, setAdd}) => {
    const [commentPosition, setCommentPosition] = useState('')
    const [commentOrganization, setCommentOrganization] = useState('')
    const navigate = useNavigate()
    const persons = useSelector(state => state.getUser)
    const dispatch = useDispatch()
    const validationSchema = Yup.object().shape({
        position: Yup.string()
            .required('Введите Должонсть'),
        organization: Yup.string()
            .required('Введите Организация'),
    });
    const formOptions = {resolver: yupResolver(validationSchema)};
    const {register, handleSubmit, formState: {errors,}} = useForm(formOptions);
    function refreshPage() {
        window.location.reload(false);
    }
    useEffect(() => {
        getUser()
        // dispatch(getUser())
    }, [])
    const onSubmit = data => {
        publicApi.post(`data-create/`, {
            user: persons.id,
            position: commentPosition,
            organization: commentOrganization,
        })
            .then(data => {
                refreshPage()
                dataId(data)
                toast.success("Успешно добавили")
                setAdd(false)
            }).catch(error => {
            toast.error(error.response.data.user[0])
        })
    }



    return (
        <div className={add ? "add active   " : "add"}>
            <div className={add ? "update--position active  " : "add--position"}>
                <div className='flex justify-between'
                     style={{padding: "15px 15px 0  25px"}}
                >
                    <p className='add--position--title'>Добавить</p>
                    <FontAwesomeIcon
                        icon={faXmark}
                        onClick={() => {
                            setAdd(false)
                        }}
                        style={{
                            fontSize: '25px',
                            color: "#01487E",
                            display: "flex",
                            justifyContent: "end"
                        }}
                    />
                </div>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className='add--position--form'
                >
                    <label style={{margin: "-2px 0 0 -250px"}}>Должность*</label>
                    <textarea
                        {...register("position")} className={`form-control ${errors.position ? 'is-invalid' : ''}`}
                        onChange={(e) => setCommentPosition(e.target.value)}
                        name="position" id="" cols="" rows=""
                    />
                    {/*<div className="invalid-feedback">{errors.position?.message}</div>*/}
                    <label style={{margin: "-2px 0 0 -240px"}}>Организация*</label>
                    <textarea
                        {...register("organization")}
                        className={`form-control ${errors.organization ? 'is-invalid' : ''}`}
                        onChange={(e) => setCommentOrganization(e.target.value)}
                        name="organization" id="" cols="" rows=""
                    />
                    {/*<div className="invalid-feedback">{errors.organization?.message}</div>*/}
                    <div className='add--position--form--btns'>
                        <button
                            type='button'
                            className='add--position--form--btns--btn1 mx-2.5'
                            onClick={() => setAdd(false)}
                        >отменить</button>
                        <button
                            onClick={() => navigate("/person")}
                            className='add--position--form--btns--btn2 mx-2.5'
                            type="submit"
                        >Сохранить</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddPosition;