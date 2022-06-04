import React, {useEffect, useState} from 'react';
import {toast} from "react-toastify";
import {NavLink, } from "react-router-dom";
import {publicApi} from "../HTTP/publicApi";

const EmailActive = () => {
    const url = window.location.href;
    const link = url.split("/").filter(i => i !== "")
    console.log(link,"link")
    const [err, setErr] = useState(true)
    useEffect(() => {
        publicApi.post("users/activation/", {
            uid: link[4],
            token: link[5],
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(response => {
                    setErr(true)

                    console.log(response)
                    toast.success("Успещно зарагестрировано")
                }
            ).catch((error) => {
            setErr(false)
            if (error.response.data.detail) {
                toast.error(error.response.data.detail)
            } else if (error.response.data.token) {
                console.log(link)
                toast.error(error.response.data.token[0])
            }

        })
    }, [])
    return (
        <>
            <div className='register'>
                {
                    err ? <NavLink to={"/login"}>
                            <button>Вход</button>
                        </NavLink>
                        :
                        <NavLink to={"/"}>
                            <button>Главный меню</button>
                        </NavLink>
                }
            </div>
        </>
    );
};

export default EmailActive;