import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import {getTest} from "../../redux/action/corsesAction";

const SlehDetails = ({el}) => {
    const {questionDetails: question} = useSelector( s => s)
    console.log(question , "QUESTION")
    return (
        <div>


        </div>
    );
};

export default SlehDetails;