import React from 'react';
import {useSelector} from "react-redux";


const Sleh = () => {
    const testElem = useSelector(state => state.test)

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
                    {
                        testElem.slice(0, 1).map(el => (
                            <div>
                                <div key={el.id}>
                                    <p>{el.title}</p>
                                    {
                                        el.flag.map(el => (
                                            <div>
                                                <p>{el.text}</p>
                                                <button>{el.boo}</button>
                                            </div>
                                        ))
                                    }
                                </div>
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