import React, { useState, useEffect, useRef } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const FloatingButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
            setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return(
        <div className="relative">
            {/* Floating Button */}
            <button
                className="bottom-4 bg-[#e86765] text-white w-10 h-10 rounded-full border-2 border-white flex items-center justify-center shadow-lg transition-transform duration-300 transform hover:scale-105 "
                onClick={toggleMenu}
            >
                {isOpen ? (
                    <XMarkIcon className="w-6 h-6" />
                ) : (
                    <Bars3Icon className="w-6 h-6" />
                )}
            </button>

            {/* Navigation Menu */}
            {isOpen && (
                <div ref={menuRef} className={`absolute flex flex-col justify-center items-center bottom-0 right-0 bg-white/90 shadow-lg rounded-lg -z-10 w-screen -mb-2 ${isOpen ? "block" : "hidden"}`}>
                    <a 
                        href="#about-us"
                        className="block px-4 py-2 text-[#fc8987] hover:bg-gray-200 transition-colors duration-300"
                    >
                        Home
                    </a>
                    <a 
                        href="#profil"
                        className="block px-4 py-2 text-[#fc8987] hover:bg-gray-200 transition-colors duration-300"
                    >
                        Profil
                    </a>
                    <a 
                        href="#countdown"
                        className="block px-4 py-2 text-[#fc8987] hover:bg-gray-200 transition-colors duration-300"
                    >
                        Countdown
                    </a>
                    <a 
                        href="#event-details"
                        className="block px-4 py-2 text-[#fc8987] hover:bg-gray-200 transition-colors duration-300"
                    >
                        Acara
                    </a>
                    <a 
                        href="#rsvp"
                        className="block px-4 py-2 text-[#fc8987] hover:bg-gray-200 transition-colors duration-300"
                    >
                        RSVP
                    </a>
                    <a 
                        href="#sending-directly"
                        className="block px-4 py-2 text-[#fc8987] hover:bg-gray-200 transition-colors duration-300"
                    >
                        Sending Directly
                    </a>
                </div>
            )}
        </div>
    )
}

export default FloatingButton