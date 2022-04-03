import React from 'react';
import {useSelector} from "react-redux";

const SlehDetails = ({el}) => {
    const {questionDetails: question} = useSelector( s => s)
    console.log(question , "QUESTION")
    return (
        <div>



        </div>
    );
};

export default SlehDetails;