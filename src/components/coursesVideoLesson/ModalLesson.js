import ReactPlayer from "react-player";
import React from "react";


const ModalLesson = ({video,setVideo ,file,setFile, modal, setModal, clickFile,setCliclFile}) => {
    function Form() {
        React.useEffect(function setupListener() {
            function handleResize() {
                console.log('Do resize stuff')
            }
            window.addEventListener('resize', handleResize)

            return function cleanupListener() {
                window.removeEventListener('resize', handleResize)
            }
        })
        return // render...
    }
    return (
        <div className={modal ? "video-modal   active" : 'video-modal'} onClick={() => setModal(false)}>
           <div className={modal ? "video-modal__content active" : 'video-modal'} >

               <div className="react-player-video">
                   <h1 className="text-white pb-16 text-2xl font-medium text-xl sm:text-sm font-light md: text-md font-base lg: text-base font-medium"> { clickFile ? file.title : video.title }</h1>
                   {
                       clickFile ? <div className="w-full h-full">
                               <iframe
                                   className="object-cover flex justify-center bg-red-500"
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
           </div>
        </div>
    )
};

export default ModalLesson;
