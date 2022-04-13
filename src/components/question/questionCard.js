import React from 'react';
import {useParams} from "react-router-dom";

const QuestionCard = ({el}) => {
    const {idTest} = useParams()

    return (
        <div key={el?.idTest}>
            <div>
                {el.title}
            </div>
        </div>
    );
};

export default QuestionCard;