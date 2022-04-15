// import React, {useState} from 'react';
// import * as Yup from "yup";
// import {yupResolver} from "@hookform/resolvers/yup";
// import {useForm} from "react-hook-form";
// import axios from "axios";
// import 'react-toastify/dist/ReactToastify.css';
// import {toast, ToastContainer,} from "react-toastify";
//
//
//
// import {publicApi} from "../HTTP/publicApi";
//
//
// const UpdateEmail = ({emailModal,setEmailModal,handleChangeUser, persons}) => {
//     const access = JSON.parse(localStorage.getItem("access"));
//     const validationSchema = Yup.object().shape({
//         email:Yup.string()
//             .required('Введите Email'),
//     });
//
//     const formOptions = { resolver: yupResolver(validationSchema) };
//     const { register,handleSubmit,handleChange,value,  formState: { errors,} } = useForm(formOptions);
//     const onSubmit = data => {
//         axios.patch('https://djangorestapp.herokuapp.com/users/me', data)
//
//             .then(response => {
//                 toast.success("updated")
//             }).catch((error) => {
//              toast.error(error)
//         })
//
//         console.log(data)
//     };
//
//
//
//     const [email, setEmail] = useState('')
//     const btn = (e) => {
//         e.preventDefault()
//         let obj = {
//             name: persons.name,
//             email: email,
//         }
//         let options = {
//             method: "PUT",
//             headers: {
//                 "Content-Type": "application/json",
//                 "Authorization": `Bearer ${access}` },
//             body: JSON.stringify(obj)
//         }
//
//         console.log(obj)
//         fetch("https://djangorestapp.herokuapp.com/users/me/", options)
//             .then(res => res.json())
//             .then(data => {
//                 // toast.success("Успешно " +data.email)
//                 console.log(data)
//             })
//     }
//     return (
//         <div  className={ emailModal ? "modal active   " : "modal"}>
//             <ToastContainer/>
//
//             <div  className={ emailModal ? "modal--email active  " : "modal--email"}>
//
//                 <p className='modal--email--title' >Изменение email</p>
//                 <label>Введите e-mail *</label>
//                 <form className='modal--email--form'  onSubmit={handleSubmit(onSubmit)}>
//                     <input  type="email" placeholder="Email" {...register("email", {required: true, pattern: /^\S+@\S+$/i})}/>
//                 <form className='modal--email--form'  onSubmit={btn}>
//                     <input
//                         onChange={e => setEmail(e.target.value)}
//                         type="email"
//                         name="email"
//                         defaultValue={persons.email}
//                     />
//                     <div className='modal--email--form--btns'>
//                         <button type='button' className='modal--email--form--btns--btn1 mx-2.5'
//                                 onClick={() => setEmailModal(false)}
//                         >отменить</button>
//                         <button type='submit' className='modal--email--form--btns--btn2 mx-2.5'>Сохранить</button>
//                         <button type='submit'
//                             onClick={() => {
//                                 setEmailModal(false)
//                             }}
//                                 className='modal--email--form--btns--btn2 mx-2.5'
//                         >Сохранить</button>
//                     </div>
//                 </form>
//                 </form>
//             </div>
//         </div>
//     );
// };
//
// export default UpdateEmail;