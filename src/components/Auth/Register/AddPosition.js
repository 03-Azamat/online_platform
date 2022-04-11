import React, {useState} from 'react';
import {publicApi} from "../HTTP/publicApi";
import {toast} from "react-toastify";

const AddPosition = ({add,setAdd,persons}) => {
    const [comment,setComment] = useState('')
    const textHandler = () => {
        publicApi.put(`data-create/${28}`, {
            user:persons.id,
            position:comment,

        })
            .then(data => {
                toast.success("success " +data.data.id)
                console.log(data)
            })
    }
    return (
        <div  className={ add ? "update active   " : "update"}>
            <div  className={ add ? "update--position active  " : "update--position"}>
                <p className='update--position--title' >Изменение должность</p>
                <label>Должность*</label>
                <form
                    onSubmit={textHandler}
                    className='update--position--form'
                >
                    <textarea onChange={(e) => setComment(e.target.value)} name="text" id="" cols="" rows="" />
                    <div className='update--position--form--btns'>
                        <button
                            className='update--position--form--btns--btn1 mx-2.5'
                            type='button'
                            onClick={() => setAdd(false)}
                        >отменить</button>
                        <button
                            onClick={textHandler}
                            className='update--position--form--btns--btn2 mx-2.5'
                            type='button'
                        >Сохранить</button>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddPosition;