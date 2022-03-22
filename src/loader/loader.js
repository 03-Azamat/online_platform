import React from 'react';

const Loader = () => {
    return (
        <div className="w-full min-h-screen flex justify-center items-center mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" style={{margin: "auto", background: "rgb(255, 255, 255)", display: "block", shapeRendering: "auto",}} width="92px" height="92px">
                <circle cx="50" cy="50" fill="none" stroke="#01487e" strokeWidth="10" r="35" strokeDasharray="164.93361431346415 56.97787143782138" style={{width: "20px"}}>
                    <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1">
                    </animateTransform>
                </circle>
            </svg>
        </div>
    );
};

export default Loader;