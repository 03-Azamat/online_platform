import React, {useState} from 'react';
import ReactPlayer from 'react-youtube'
const CoursesVideoLesson = ({el}) => {
    const [video , setVideo] = useState({})

    console.log(el.choicetopic?.topics?.videos)
    return (
        <div className='player-wrapper'>
            <div className="react-player-video">
                <h1 className="pb-5 font-medium text-xl sm:text-sm font-light md: text-md font-base lg: text-base font-medium">{video.title}</h1>
                <ReactPlayer
                    width="100%"
                    url={video.url}
                />
            </div>
            <div className="react-player-block">
                {
                    el.choicetopic?.topics?.videos?.map(item=>(
                        <div className="react-player" onClick={() => setVideo(item)}>
                                <span className="react-lesson-video">
                                    <ReactPlayer
                                        url={item.url}
                                        width="250px"
                                        height="100px"
                                    />
                                </span>




                            <p className="text-base ml-3 md: text-sm ">{item.title}</p>
                        </div>
                    ))
                }
            </div>

        </div>
    )
};

export default CoursesVideoLesson;
