import React from 'react';
import YouTube from "react-youtube";
import ReactPlayer from 'react-player/youtube'
const CoursesVideoLesson = ({el}) => {

    return (
        <div className='player-wrapper'>
            {
                el.choicetopic?.topics?.videos?.map(el=>(
                    <ReactPlayer
                        className='react-player'
                        url={el.choicetopic?.topics?.videos?.url}
                        width='100%'
                        height='100%'
                    />
                ))
            }
        </div>
    )
};

export default CoursesVideoLesson;