import React, {useEffect, useState} from 'react';
import {toast} from "react-toastify";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import {NavLink, useNavigate} from "react-router-dom";
import axios from "axios";

const EmailActive = ({setSignActive}) => {
    // const [activate, setActivate] = useState(false)
    const navigate = useNavigate()
    const url = window.location.href;
    const link = url.split("/").filter(i => i !== "")
  useEffect(() => {
        if (link.length >= 4) {
            const obj = {
                uid: link[4],
                token: link[5]
            }
            let options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(obj)
            }
            fetch("https://djangorestapp.herokuapp.com/users/activation/", options)
                .then(response => {
                    if (response.ok) {
                        console.log(response)
                        toast.success("Успещно зарагестрировано")
                    } else {
                        // console.log()
                        toast.error("Error")
                    }
                })

            // axios.post(`https://djangorestapp.herokuapp.com/users/activation/`,options )
            //     .then(response => {
            //         if (response[3] === true){
            //             toast.success("response.data")
            //         } else {
            //             toast.error("error")
            //         }
            //     })
        }

    }, [])
    return (
        <>
            <div className='register'>
                <NavLink to={"/login"}>
                    <button>OK</button>
                </NavLink>
            </div>
        </>
    );
};

export default EmailActive;


//
// axios("https://djangorestapp.herokuapp.com/users/activation/", options)
//     .then(response => {
//         if (response.data.ok){
//             toast.success("response.data")
//         } else {
//             toast(response)
//         }
//     }).catch((error) => {
//     console.log(error)
//     toast.error(error.response.data.detail)
// })


// fetch("https://djangorestapp.herokuapp.com/users/activation/", options)
//     .then(response => {
//         if (response.ok) {
//
//             toast.success("Успещно зарагестрировано")
//         } else {
//             toast.error("response.data.detail")
//         }
//     })