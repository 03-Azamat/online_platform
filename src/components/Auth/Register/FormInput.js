// import React, {useState} from 'react';
//
// const FormInput = (props) => {
//     const {onChange,errorMessage, id, ...inputProps } = props
//     const [focused, setFocused] = useState(false)
//     const  handleFocus =(e) => {
//         setFocused(true)
//     }
//
//     return (
//         <div className="formInput">
//             <div className='formInput--iput'>
//                 <input {...inputProps}  onChange={onChange} onBlur={handleFocus} focused = {focused.toString()}/>
//                 <span>{errorMessage}</span>
//             </div>
//         </div>
//     );
// };
//
// export default FormInput;