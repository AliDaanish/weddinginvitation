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
        <div className={`relative w-full h-screen overflow-hidden bg-cover bg-center bg-no-repeat bg-[url('/bgc.png')] ${isFading ? 'fade-out' : ''}`}>
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
            
            <div className="relative flex flex-col items-center justify-center px-4 min-h-screen text-center space-y-6">
                <h1 className="text-4xl text-secondary font-elmessir zoom-text">
                    The Wedding of
                </h1>

                <p className="flex flex-col pb-16 justify-center items-center text-[#f7e1de] font-priest zoom-text rounded-full w-96 h-96 bg-secondary leading-tight">
                    <span className=" text-7xl">Titi &</span>
                    <span className="text-7xl mb-4">Asep</span>
                    <span className="text-xl mt-4 text-white font-priest">15 · 08 · 05</span>
                </p>
                
                <img src="/ornamen.png" alt="ornamen" className="absolute w-4xl bottom-24" />

                <button
                    onClick={handleClick}
                    className="absolute bottom-16 px-6 py-3 bg-gradient-to-r from-[#ce938f] to-[#cc8b85] text-white rounded-full shadow-lg hover:from-[#EDD0CD] hover:to-[#F1DDDB] transition duration-300 animate-pulse font-serif zoom-button"
                >
                    <span className="font-bold">Buka Undangan</span>
                </button>
            </div>


        </div>
    )
}

export default Welcome