import React, {useState} from 'react';
import ReactPlayer from 'react-player/youtube'
const CoursesVideoLesson = ({el}) => {
    const [video , setVideo] = useState({})
    console.log(el.choicetopic?.topics?.videos)
    return (
        <div className='player-wrapper'>
            <div className="react-player-video">
                <h1 className="pb-5 font-medium text-xl">{video.title}</h1>
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
                                url={item.url}
                                width="140px"
                                height="80px"
                            />
                            <p className="text-base ml-3">{item.title}</p>
                        </div>
                    ))
                }
            </div>

        </div>
    )
};

export default CoursesVideoLesson;