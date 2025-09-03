import React, { useEffect, useRef }  from "react";
import { PlayIcon, PauseIcon } from "@heroicons/react/24/outline";

const FloatingMusicPlayer = ({ isPlaying, setIsPlaying }) => {
    const audioRef = useRef(null);

    useEffect(() => {
        if(audioRef.current){
            if(isPlaying){
                audioRef.current.play().catch((error) => console.log("Autolay prevented:", error));
            }else{
                audioRef.current.pause();
            }
        }
    }, [isPlaying]);

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    return(
        <div className="z-50">
            <audio ref={audioRef} src="/music.mp3" loop />
            <button
                onClick={togglePlayPause}
                className="bottom-4 bg-[#e86765] text-white w-10 h-10 rounded-full border-2 border-white flex items-center justify-center shadow-lg z-50 transition-transform duration-300 transform hover:scale-105"
            >
                {isPlaying ? (
                    <PauseIcon className="h-6 w-6" />
                ) : (
                    <PlayIcon className="h-6 w-6" />
                )}
            </button>
        </div>
    )
}

export default FloatingMusicPlayer