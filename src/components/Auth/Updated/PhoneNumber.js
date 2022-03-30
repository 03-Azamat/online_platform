import React from 'react';
import * as Yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {useForm} from "react-hook-form";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const PhoneNumber = ({phoneModal,setPhoneModal}) => {
    const validationSchema = Yup.object().shape({
        phone_number: Yup.string()
            .required('Введите телефон')
            .min(8, 'Введите телефон'),
    });

    const formOptions = { resolver: yupResolver(validationSchema) };
    const { register,handleSubmit,handleChange,value,  formState: { errors,} } = useForm(formOptions);
    const onSubmit = data => {
        console.log(data)
    };
    return (
        <div
             className={ phoneModal ? "phone active  " : "phone"}
        >
            <form
                className={ phoneModal ? "phone--content active  " : "phone--content"}
                onSubmit={handleSubmit(onSubmit)}
            >
                    <h1>Изменение номера
                        телефона</h1>
                    <FontAwesomeIcon className='phone--content--x' icon={faXmark}
                                     style={{fontSize:'25px'}}
                                     onClick={() => {
                                         setPhoneModal(false)
                                         // navigate("/")
                                     }}
                    />
                    <label className='modal--password--form--s-password'>Укажите новый номер*</label>
                    <div>
                        <input   type="tel" {...register('code')} className={`form-control ${errors.code ? 'is-invalid' : ''}`} />
                        <input  placeholder="(___)____ "  type="tel" {...register('phone_number')} className={`form-control ${errors.phone_number ? 'is-invalid' : ''}`} />
                    </div>
                    <div className="modal--password--form--error invalid-feedback">{errors.phone_number?.message}</div>


                        <button type='button' className='modal--password--form--btns--btn1 mx-2.5'
                                onClick={() => setPhoneModal(false)}
                        >отменить</button>
                        <button type='submit' className='modal--password--form--btns--btn2 mx-2.5'>Сохранить</button>
                </form>
        </div>
    );
};

export default PhoneNumber;