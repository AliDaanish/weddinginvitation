import React, { useEffect, useState } from "react"
import "../../style/Welcome.css"
import { ArrowRightIcon } from "@heroicons/react/24/outline"

const Welcome = ({ onInvitationOpen }) => {
    const [showWelcome, setShowWelcome] = useState(true);

    useEffect(() => {
        document.body.classList.add("no-scroll");
        return () => {
            document.body.classList.remove("no-scroll");
        };
    }, []);

    const handleClick = () => {
        document.body.classList.remove("no-scroll");
        onInvitationOpen();
        setShowWelcome(false);

        setTimeout(() => {
            const nextComponent = document.getElementById("next-component");
            if(nextComponent) {
                nextComponent.scrollIntoView({ behavior: "smooth" });
            }
        }, 100);
    }

    if (!showWelcome) return null;

    return(
        <div className="relative w-full h-screen overflow-hidden bg-cover bg-center bg-no-repeat bg-[url('/bg.jpg')]">
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
            
            <div className="flex flex-wrap gap-48 relative items-center justify-center translate-y-2/9">
                <div className="flex-col items-center justify-center transform text-center z-30">
                    <h1 className="text-4xl mb-16 text-secondary font-elmessir zoom-text">
                       The Wedding of
                    </h1>
                    <p className="relative flex flex-col gap-y-4 text-7xl text-[#f7e1de] font-priest zoom-text">

                        <span className="block text-center">
                            Titi &
                        </span>
                        <span className="block text-center">
                            Asep
                        </span>
                    </p>
                    <p className=" flex font-priest text-xl text-white items-center justify-center pt-8">
                        15 · 08 · 05
                    </p>
                </div>
                <button
                    onClick={handleClick}
                    className="w-fit px-8 py-3 mt-8 bg-gradient-to-r from-[#ce938f] to-[#cc8b85] text-white rounded-full shadow-lg hover:from-[#EDD0CD] hover:to-[#F1DDDB] transition duration-300 animate-pulse font-serif zoom-button"
                >
                    <span className="flex items-center font-bold">
                        Buka Undangan
                    </span>
                </button>
            </div>
        </div>
    )
}

export default Welcome