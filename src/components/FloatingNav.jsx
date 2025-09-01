import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const FloatingButton = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return(
        <div className="relative">
            {/* Floating Button */}
            <button
                className="bottom-4 bg-[#e86765] text-white w-10 h-10 rounded-full border-2 border-white flex items-center justify-center shadow-lg z-50 transition-transform duration-300 transform hover:scale-105 "
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
                <div className="absolute bottom-20 bg-white shadow-lg rounded-lg z-40 w-44 right-0">
                    <a 
                        href="#about-us"
                        className="block px-4 py-2 text-[#fc8987] hover:bg-gray-200 transition-colors duration-300"
                    >
                        About Us
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
                        Event Details
                    </a>
                    <a 
                        href="#sending-directly"
                        className="block px-4 py-2 text-[#fc8987] hover:bg-gray-200 transition-colors duration-300"
                    >
                        Sending Directly
                    </a>
                    <a 
                        href="#rsvp"
                        className="block px-4 py-2 text-[#fc8987] hover:bg-gray-200 transition-colors duration-300"
                    >
                        RSVP
                    </a>
                </div>
            )}
        </div>
    )
}

export default FloatingButton