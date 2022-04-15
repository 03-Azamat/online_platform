// import React from 'react';
// import * as Yup from "yup";
// import {yupResolver} from "@hookform/resolvers/yup";
// import {useForm} from "react-hook-form";
// import {faXmark} from "@fortawesome/free-solid-svg-icons";
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import PhoneInput from 'react-phone-input-2'
// import 'react-phone-input-2/lib/style.css'
//
// const PhoneNumber = ({phoneModal,setPhoneModal}) => {
//     const validationSchema = Yup.object().shape({
//         phone_number: Yup.string()
//             .required('Введите телефон')
//             .min(8, 'Введите телефон'),
//     });
//
//     const formOptions = { resolver: yupResolver(validationSchema) };
//     const { register,handleSubmit,handleChange,value,  formState: { errors,} } = useForm(formOptions);
//     const onSubmit = data => {
//         console.log(data)
//     };
//     return (
//         <div
//              className={ phoneModal ? "phone active  " : "phone"}
//         >
//             <form
//                 className={ phoneModal ? "phone--content active  " : "phone--content"}
//                 onSubmit={handleSubmit(onSubmit)}
//             >
//                    <div className='phone--content--hed'>
//                        <p className='phone--content--hed--title'>Изменение номера
//                            телефона</p>
//                        <FontAwesomeIcon className='phone--content--hed--x' icon={faXmark}
//                                         style={{fontSize:'25px'}}
//                                         onClick={() => {
//                                             setPhoneModal(false)
//                                             // navigate("/")
//                                         }}
//                        />
//                    </div>
//
//                     <label className='phone--content--text'>Укажите новый номер*</label>
//                 <div className='phone--content--phone'>
//                     <PhoneInput
//                         inputStyle={{width:"210px",borderRadius: "5px", display:'flex',
//                             justifyContent:"center",
//                         }}
//                     />
//                 </div>
//
//
//
//                     <div className="modal--password--form--error invalid-feedback">{errors.phone_number?.message}</div>
//
//
//                         <button type='button' className='modal--password--form--btns--btn1 mx-2.5'
//                                 onClick={() => setPhoneModal(false)}
//                         >отменить</button>
//                         <button type='submit' className='modal--password--form--btns--btn2 mx-2.5'>Сохранить</button>
//                 </form>
//         </div>
//     );
// };
//
// export default PhoneNumber;