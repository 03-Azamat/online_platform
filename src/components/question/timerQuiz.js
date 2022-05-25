import React, {useEffect} from 'react';
import {useTimer} from "react-timer-hook";

const TimerQuiz = ({expiryTimestamp , setShowScore}) => {

    const {
        seconds,
        minutes,
        hours,
        start,
    } = useTimer({
        expiryTimestamp,
        autoStart:true,
        onExpire: () => {
            setShowScore(true)
        }
    });

    useEffect(()=>{
       start()
    },[])



    return (
        <div>
            <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "100px" }}>
                    <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
                </div>
            </div>
        </div>
    );
};

export default TimerQuiz;