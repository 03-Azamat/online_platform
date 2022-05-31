import React from 'react';

const ActiveCourse = () => {
    const dataAct = [
        {
            "id": 39,
            "activation": true,
            "created_date": "2022-05-25T16:49:02+06:00",
            "user": 2,
            "applicationcourse": 1,
            "applicationName": "Курс для сотрудников УМЦ"
        },
        {
            "id": 38,
            "activation": true,
            "created_date": "2022-05-25T11:50:19+06:00",
            "user": 2,
            "applicationcourse": 2,
            "applicationName": "Курс для НБКР"
        },
        {
            "id": 37,
            "activation": false,
            "created_date": "2022-05-25T11:32:43+06:00",
            "user": 2,
            "applicationcourse": 5,
            "applicationName": "Курс для МКК"
        },
        {
            "id": 36,
            "activation": false,
            "created_date": "2022-05-25T11:30:20+06:00",
            "user": 2,
            "applicationcourse": 6,
            "applicationName": "Курс для сотрудников нотариальных контор"
        },
        {
            "id": 34,
            "activation": false,
            "created_date": "2022-05-25T11:30:02+06:00",
            "user": 2,
            "applicationcourse": 4,
            "applicationName": "Курс для МФК"
        },
        {
            "id": 33,
            "activation": false,
            "created_date": "2022-05-25T11:29:51+06:00",
            "user": 2,
            "applicationcourse": 3,
            "applicationName": "Курс для коммерческих банков"
        }
    ]
    return (
        <div className="activeCourse">
            <div className="container">
                <div>
                    {
                        dataAct.map(el =>(
                            <p>{el.activation === true ? el.applicationName : ""}</p>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default ActiveCourse;