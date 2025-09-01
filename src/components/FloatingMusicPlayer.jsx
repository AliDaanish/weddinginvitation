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
        <div className="flex bottom-4 left-4 z-50">
            <audio ref={audioRef} src="/music.mp3" loop />
            <button
                onClick={togglePlayPause}
                className="bg-[#e86765] text-white border-2 border-white p-2 rounded-full shadow-lg hover:bg-red-800 focus:outline-none transition-transform transform hover:scale-105"
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