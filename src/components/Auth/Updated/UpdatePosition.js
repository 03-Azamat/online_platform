import React from 'react';

const UpdatePosition = ({poModal,setPoModal}) => {
    return (
        <div  className={ poModal ? "update active   " : "update"}>
            <div  className={ poModal ? "update--position active  " : "update--position"}>
                <p className='update--position--title' >Изменение должность</p>
                <label>Должность*</label>
                <form className='update--position--form' >

                    <textarea name="" id="" cols="" rows="" />
                    <div className='update--position--form--btns'>
                        <button type='button' className='update--position--form--btns--btn1 mx-2.5'
                        onClick={() => setPoModal(false)}
                        >отменить</button>
                        <button type='button' className='update--position--form--btns--btn2 mx-2.5'>Сохранить</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdatePosition;