// import React from "react";
// import {useForm} from 'react-hook-form';
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import {faXmark} from "@fortawesome/free-solid-svg-icons";
// import {yupResolver} from '@hookform/resolvers/yup';
// import * as Yup from 'yup';
// import {useNavigate} from "react-router-dom";
//
// export default function HookForm({active, setActive}) {
//     const navigate = useNavigate()
//     const validationSchema = Yup.object().shape({
//         name: Yup.string()
//             .required('Введите фамилия'),
//         MobileNumber: Yup.string()
//             .required('Введите телефон'),
//         Email: Yup.string()
//             .required('Введите Email'),
//         password: Yup.string()
//             .required('Введите пароль')
//             .min(4, 'Пароль должен быть не менее 4 символов'),
//         confirmPassword: Yup.string()
//             .required('Введите пароль')
//             .oneOf([Yup.ref('password')], 'Пароли должны совпадать')
//
//     });
//     const formOptions = {resolver: yupResolver(validationSchema)};
//     const {register, handleSubmit, setError, formState: {errors, isDirty, isValid,}} = useForm(formOptions);
//     const onSubmit = data => {
//         setActive(false)
//         navigate("/register-code")
//         // alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
//         return false;
//         // console.log(data)
//     };
//     console.log(errors);
//
//     return (
//         <section className={active ? "forms active " : "forms"}>
//             <div className='forms--inputs'>
//                 <form onSubmit={handleSubmit(onSubmit)} className='forms--inputs--hook'>
//                     <FontAwesomeIcon className='forms--inputs--hook--btnx' icon={faXmark}
//                                      style={{fontSize: '25px'}}
//                                      onClick={() => {
//                                          setActive(false)
//                                          navigate("/")
//                                      }}
//                     />
//                     <h2>Регистрация</h2>
//                     <input type="text" placeholder="ФИО" {...register("name")}
//                            className={`form-control ${errors.password ? 'is-invalid' : ''}`}/>
//                     <div className="invalid-feedback">{errors.name?.message}</div>
//                     <input type="tel" placeholder="Телефон" {...register("MobileNumber")}
//                            className={`form-control ${errors.password ? 'is-invalid' : ''}`}/>
//                     <div className="invalid-feedback">{errors.MobileNumber?.message}</div>
//                     <input type="email" placeholder="Email" {...register("Email", {
//                         required: true,
//                         pattern: /^\S+@\S+$/i
//                     })}/>
//                     <div className="invalid-feedback">{errors.Email?.message}</div>
//                     <input type="text" placeholder="Должность" {...register("Должность", {
//                         required: true,
//                         maxLength: 100
//                     })} />
//                     <input type="text" placeholder="Организация" {...register("Организация", {
//                         required: true,
//                         maxLength: 100
//                     })} />
//                     {/*<input type="password" className={`form-control ${errors.password ? 'is-invalid' : ''}`} placeholder="Пароль" {...register("password", {required: true, maxLength: 15})} />*/}
//                     <input name="password" placeholder="Пароль" type="password" {...register('password')}
//                            className={`form-control ${errors.password ? 'is-invalid' : ''}`}/>
//                     <div className="invalid-feedback">{errors.password?.message}</div>
//                     {/*<input type="Password" className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`} placeholder="Подвердить пароль" {...register("confirmPassword",  {required: true, maxLength: 15, pattern: register.password})} />*/}
//                     <input name="confirmPassword" type="password"
//                            placeholder="Подвердить пароль" {...register('confirmPassword')}
//                            className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}/>
//                     <div className="invalid-feedback">{errors.confirmPassword?.message}</div>
//
//
//                     {/*<input {...register("Developer", { required: true })} type="radio" value="Yes" />*/}
//                     {/*<input {...register("Developer", { required: true })} type="radio" value="No" />*/}
//
//
//                     <button type="submit"
//                     > Зарегистрироваться
//                     </button>
//                 </form>
//             </div>
//         </section>
//     );
// }
//
//
// {/*<label>Password</label>*/
// }
// {/*<input*/
// }
// {/*    name="password"*/
// }
// {/*    type="password"*/
// }
// {/*    ref={register({*/
// }
// {/*        required: "You must specify a password",*/
// }
// {/*        minLength: {*/
// }
// {/*            value: 8,*/
// }
// {/*            message: "Password must have at least 8 characters"*/
// }
// {/*        }*/
// }
// {/*    })}*/
// }
// {/*/>*/
// }
// {/*{errors.password && <p>{errors.password.message}</p>}*/
// }
//
// {/*<label>Repeat password</label>*/
// }
// {/*<input*/
// }
// {/*    name="password_repeat"*/
// }
// {/*    type="password"*/
// }
// {/*    ref={register({*/
// }
// {/*        validate: value =>*/
// }
// {/*            value === password.current || "The passwords do not match"*/
// }
// {/*    })}*/
// }
// {/*/>*/
// }
// {/*{errors.password_repeat && <p>{errors.password_repeat.message}</p>}*/
// }
// {/*<input type="submit" onClick={handleSubmit(onSubmit)} />*/
// }
