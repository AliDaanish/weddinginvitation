import React from "react";
import "../../style/Hero.css"

import FloatingMusicPlayer from "./FloatingMusicPlayer";
import FloatingNav from "./FloatingNav";

const Hero = ({ isPlaying, setIsPlaying }) => {
    return(
        <div className="heroSticky">
            <div className="hero-title">The Wedding of</div>
            <div className="hero-name">
                <div className="hero-name-highlight">Titi &</div>
                <div className="hero-name-highlight">Asep</div>
            </div>
            <FloatingMusicPlayer isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
            <FloatingNav />
        </div>
    )
}

export default Hero;