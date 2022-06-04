import React, {useEffect} from 'react';
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useDispatch, useSelector} from "react-redux";
import {getTestResults} from "../../redux/action/corsesAction";
import {NavLink} from "react-router-dom";

const TestResult = () => {
    const {getTestResult: testResText} = useSelector(s => s)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getTestResults());
    },[])

    return (
        <div className="bg-[#E5E5E5]">
            <div className={"test"}>
                <div className="container mx-auto">
                    <div className="w-full flex justify-end">
                        <NavLink to={"/person"}>
                            <FontAwesomeIcon
                                className='test--content--btn' icon={faXmark}
                                style={{fontSize:'25px'}}

                            />
                        </NavLink>
                    </div>
                    <div className="test--content--texts" >
                        {
                            testResText.map(el=>(
                                <div key={el.id}>
                                    <p className="test--content--texts__text">{el.score > 50 ? "Тест пройден" : "Тест не пройден"} <span
                                        style={{marginLeft:"20px", padding:"0 12px",background: el.score > 50 ? "green" : "red"}}></span></p>
                                    <p className="test--content--texts__text">{el.score} : <span className="test--content--texts__text--decor">%</span></p>
                                    <p className="test--content--texts__text">{el.fail + el.point}: <span className="test--content--texts__text--decor">количество вопросов</span></p>
                                    <p className="test--content--texts__text">{el.point} : <span className="test--content--texts__text--decor">Правилные ответы</span> </p>
                                    <p className="test--content--texts__text">{el.fail} : <span className="test--content--texts__text--decor">Не правилные ответы</span></p>
                                    <p className="test--content--texts__text" dangerouslySetInnerHTML={{__html:el.created_date}}/> : <span className="test--content--texts__text--decor">Дата сдача теста</span>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestResult;