import React, {useState} from 'react';
import ReactPlayer from "react-player";



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
                                    <ReactPlayer
                                        url={item.url}
                                        width="20vw"
                                        height="15vh"
                                    />
<<<<<<< HEAD
                                </span>
                            <p className="text-base ml-3 md: text-sm ">{item.title}</p>
=======

                            <p className="text-base ml-3 md: text-sm">{item.title}</p>
>>>>>>> df3898523bc9e4c6301abb515c2376db3b1d7a9d
                        </div>
                    ))
                }
            </div>

        </div>
    )
};

export default CoursesVideoLesson;
