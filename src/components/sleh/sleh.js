import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {getTest} from "../../redux/action/corsesAction";


const Sleh = () => {
    const testElem = useSelector(state => state.test)
    const dispatch = useDispatch()
    const {id} = useParams()
    console.log(id, "ID")
    console.log(testElem,"testElem")
    useEffect(()=>{
        dispatch(getTest(id))
    },[])
    console.log(id, "idTest")
    console.log(testElem, "testElem")

    useEffect(()=>{
        dispatch(getTest(id))
    })

    return (
        <div className="test">
            <div className="container">
                <div className="test-rectangle">
                    <div className="test-rectangle-1"/>
                    <div className="test-text-1">
                        <p>15</p>
                        <p className="test-text">Бизнес аналитик</p>
                        <p>1/20</p>
                    </div>

                    {/*{*/}
                    {/*    testElem.map(el => (*/}
                    {/*        <div>*/}
                    {/*            <div key={el.id}>*/}
                    {/*                <p>{el.title}</p>*/}
                    {/*                {*/}
                    {/*                    el.flag.map(el => (*/}
                    {/*                        <div>*/}
                    {/*                            <p>{el.text}</p>*/}
                    {/*                            <button>{el.boo}</button>*/}
                    {/*                        </div>*/}
                    {/*                    ))*/}
                    {/*                }*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    ))*/}
                    {/*}*/}
=======
                    {
                        testElem?.choicetest?.map(el=>(
                            <div>
                                {
                                    el?.quation?.flags?.map(el=>(
                                        <p>
                                            {el.text}
                                        </p>
                                    ))
                                }
                            </div>
                        ))
                    }

                </div>
                <div className="buttons">
                    <button className="test-but">предыдущий</button>
                    <button className="test-but-1">Следуший</button>
                </div>
            </div>
        </div>
    );
};

export default Sleh;