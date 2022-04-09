import React, {useState} from 'react';
import ReactPlayer from "react-player";



const CoursesVideoLesson = ({el}) => {
    const [video , setVideo] = useState({})

    console.log(el.choicetopic?.topics?.videos)
    return (
        <div className='player-wrapper' key={el.id}>
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
                                    <ReactPlayer
                                        className="react-player-video-lessons"
                                        url={item.url}
                                        width="100%"
                                        height="100%"

                                    />
                            <p className="text-base ml-3 md: text-sm ">
                                {item.title}
                            </p>
                        </div>
                    ))
                }
            </div>

        </div>
    )
};

export default CoursesVideoLesson;
