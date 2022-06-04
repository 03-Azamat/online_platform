import React, {useState} from 'react';
import ReactPlayer from "react-player";

const CoursesVideoLesson = ({el}) => {
    const [video , setVideo] = useState({})
    const [file , setFile] = useState({})
    const [clickFile , setClickFile] = useState(null)
    return (
        <div className='player-wrapper' key={el.lessonId}>
            <div className="react-player-video">
                <h1 className="pb-5 font-medium text-xl sm:text-sm font-light md: text-md font-base lg: text-base font-medium"> { clickFile ? file.title : video.title }</h1>
                {
                    clickFile ? <div className="bg-blue-700 h-96 w-full">
                            <iframe
                                width="100%"
                                height="100%"
                                src={file.file}
                            />
                        </div> :
                        clickFile === false ? <ReactPlayer
                            width="100%"
                            url={video.url}
                        /> : "Нажмите на материалы"
                }
            </div>
            <div className="react-player-block">
                {
                    el.choicetopic?.topics?.videos?.map(item=>(
                        <div className="react-player" onClick={() => {
                            setClickFile(false)
                            setVideo(item)
                        }} key={item.id}>
                                    <button className="cursor-not-allowed">
                                        <ReactPlayer
                                            url={item.url}
                                            width="20vw"
                                            height="15vh"
                                        />
                                    </button>
                            <p className="text-base ml-3 md: text-sm">{item.title}</p>
                        </div>
                    ))
                }
                {
                    el.choicetopic?.topics?.files?.map(item => (
                        <div className="react-player" onClick={() => {
                            setFile(item)
                            setClickFile(true)
                        }} key={item.id}>
                            <iframe
                                src={item.file}
                                width="20vw"
                                height="15vh"
                            />
                            <p className="text-base ml-3 md: text-sm">{item.title}</p>
                        </div>
                    ))
                }
            </div>

        </div>
    )
};

export default CoursesVideoLesson;
