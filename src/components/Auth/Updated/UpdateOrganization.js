import React from 'react';

const UpdateOrganization = ({orModal,setOrModal}) => {
    return (
        <div  className={ orModal ? "updated active  " : "updated"}>
            <div  className={ orModal ? "updated--organization active  " : "updated--organization"}>
                <p className="updated--organization--title" >Изменение организация</p>
                <label>Организация*</label>
                <form className="updated--organization--form" >

                    <textarea name="" id="" cols="" rows="" />
                    <div className="updated--organization--form--btns">
                        <button type="button" className=" updated--organization--form--btns--btn1 mx-2.5"
                                onClick={() => setOrModal(false)}
                        >отменить</button>
                        <button type="button" className="updated--organization--form--btns--btn2 mx-2.5">Сохранить</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateOrganization;