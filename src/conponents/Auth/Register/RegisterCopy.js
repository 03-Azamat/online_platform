// import React, {useState} from 'react';
// import {useNavigate} from 'react-router-dom';
// import RegisterCode from "./RegisterCode";
// import Register from "./Register";
// import SignIn from "./SignIn";
//
// const RegisterCopy = ({active,setActive,children}) => {
//     const navigate = useNavigate()
//
//     return (
//         <>
//
//                 <div className={active ? "modal active " : "modal" }
//                      onClick={() => {
//                          // setActive(false)
//                          navigate("/")
//                      }
//                     } >
//                     {/*<div className={active ? "active" : "form" } onClick={() => setActive(false)}>*/}
//                     <div className='form' >
//                         <div className='form--inputs'  onClick={e => e.stopPropagation() }>
//                             {children}
//
//                         </div>
//
//                     </div>
//
//                 </div>
//
//             {/*<Register/>*/}
//             {/*<SignIn/>*/}
//         </>
//     );
// };
//
// export default RegisterCopy;