import React, { useEffect, useState } from "react"
import "../../style/Welcome.css"
import { ArrowRightIcon } from "@heroicons/react/24/outline"

const Welcome = ({ onInvitationOpen }) => {
    const [isVisible, setIsVisible] = useState(true);
    const [isFading, setIsFading] = useState(false);

    useEffect(() => {
        document.body.classList.add("no-scroll");
        return () => {
            document.body.classList.remove("no-scroll");
        };
    }, []);

    const handleClick = () => {
        document.body.classList.remove("no-scroll");
        onInvitationOpen(); // triggers music + state
        setIsFading(true);   // start fade-out

        setTimeout(() => {
            setIsVisible(false); // hide component

            // Scroll AFTER fade-out completes
            setTimeout(() => {
            const nextComponent = document.getElementById("next-component");
            nextComponent?.scrollIntoView({ behavior: "smooth" });
            }, 300); // slight delay after unmount
        }, 800); // match fade-out duration
    };

    if (!isVisible) return null

    return(
        <div className={`relative w-full h-screen overflow-hidden bg-cover bg-center bg-no-repeat bg-[url('/bg.jpg')] ${isFading ? 'fade-out' : ''}`}>
            <div className="absolute inset-0 bg-black opacity-20" />
            <div className="absolute inset-0">
                {/* nambah bunga */}
                {[...Array(5)].map((_, index) => (
                <div
                    key={index}
                    className={`flower flower${(index % 4) + 1}`}
                    style={{
                    top: `${Math.random() * 100}vh`,
                    left: `${Math.random() * 100}vw`,
                    animationDelay: `${Math.random() * 10}s`,
                    animationDuration: `${5 + Math.random() * 5}s`,
                    }}
                ></div>
                ))}
            </div>
            
            <div className="relative flex flex-col items-center justify-center gap-12 px-4 sm:px-8 md:px-16 max-w-screen-md mx-auto min-h-screen text-center">
                <h1 className="text-xl sm:text-2xl md:text-4xl mb-6 text-secondary font-elmessir zoom-text">
                    The Wedding of
                </h1>

                <p className="text-4xl sm:text-5xl md:text-6xl text-[#f7e1de] font-priest zoom-text leading-tight">
                    <span>Titi &</span><br />
                    <span>Asep</span>
                </p>

                <p className="text-sm sm:text-base md:text-lg text-white font-priest pt-2">
                    15 · 08 · 05
                </p>

                <button
                    onClick={handleClick}
                    className="w-full sm:w-auto px-6 py-3 mt-6 bg-gradient-to-r from-[#ce938f] to-[#cc8b85] text-white rounded-full shadow-lg hover:from-[#EDD0CD] hover:to-[#F1DDDB] transition duration-300 animate-pulse font-serif zoom-button"
                >
                    <span className="flex items-center justify-center font-bold">
                    Buka Undangan
                    </span>
                </button>
            </div>

        </div>
    )
}

export default Welcome