<<<<<<< HEAD
// import React from 'react';
// import ReactPlayer from 'react-player/youtube'
// const CoursesVideoLesson = ({el}) => {
//
//     return (
//         <div className='player-wrapper'>
//             {
//                 el.choicetopic?.topics?.videos?.map(el=>(
//                     <ReactPlayer
//                         className='react-player'
//                         url={el.choicetopic?.topics?.videos?.url}
//                         width='100%'
//                         height='100%'
//                     />
//                 ))
//             }
//         </div>
//     )
// };

// export default CoursesVideoLesson;
=======
import React, {useState} from 'react';
import ReactPlayer from 'react-player/youtube'
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
                                width="250px"
                                height="100px"
                            />
                            <p className="text-base ml-3 md: text-sm ">{item.title}</p>
                        </div>
                    ))
                }
            </div>

        </div>
    )
};

export default CoursesVideoLesson;
>>>>>>> 5a386e82574e26e287275ad13a8a81227bff7535
