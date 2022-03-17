import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCoursesDetails} from "../../redux/action/corsesAction";
import YouTube from 'react-youtube';


const LessonVideo = ({params}) => {

    const {coursesDetails: video} = useSelector(s => s)
    const dispatch = useDispatch()
    console.log(video, "video")
    console.log(params)
    useEffect(() => {
        dispatch(getCoursesDetails(params))
    }, [])

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
        },
    };

    return (
        <div>
            {
                video.slice(0,4).map(el=>(
                    <div className="basis-1/4 sm:basis-1 md:basis-1/2 lg:basis-1/3 xl:basis-1/4 m-5 text-center flex justify-center">
                        <YouTube videoId={el.key} opts={opts} className=" w-full sm:w-56 sm:h-full md: w-72 md:h-full lg:w-80 lg:h-full"/>
                    </div>
                ))
            }
        </div>
    );
};

export default LessonVideo;