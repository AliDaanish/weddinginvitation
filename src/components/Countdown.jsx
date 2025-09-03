import React, { useEffect, useRef, useState } from "react";
import { ClockIcon, HeartIcon } from "@heroicons/react/24/outline";
import "../../style/Countdown.css";

const Countdown = ({ targetDate }) => {
    const [timeLeft, setTimeLeft] = useState({});
    const [isShaking, setIsShaking] = useState(false);
    const countdownRef = useRef(null);

    

    const handleSaveDate = () => {
        const icsContent = `BEGIN:VCALENDAR
        VERSION:2.0
        BEGIN:VEVENT
        SUMMARY:Wedding of Titi & Asep
        DESCRIPTION:Akad Nikah: 09.00 WIB\nResepsi: 11.00 WIB
        LOCATION:Jl. Sariwangi Kp. Lembur Tengah No.11 RT02/RW 05
        DTSTART:20250915T020000Z
        DTEND:20250915T050000Z
        END:VEVENT
        END:VCALENDAR`;

        const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "wedding-invitation.ics";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
};

    useEffect(() => {
        const intervalId = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
                (distance % (1000 * 60 * 60 * 24)) / (1000 * 60)
            );
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTimeLeft({ days, hours, minutes, seconds });

            if (distance < 0) {
                clearInterval(intervalId);
                setTimeLeft({});
            }
        }, 1000)
    
        return () => clearInterval(intervalId);
    }, [targetDate]);

    useEffect(() => {
        const handleScroll = () => {
            if (countdownRef.current) {
                const rect = countdownRef.current.getBoundingClientRect();
                if(rect.top < window.innerHeight && rect.bottom > 0) {
                    setIsShaking(true);
                } else {
                    setIsShaking(false);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="relative py-8 md:py-12 bg-gradient-to-r from-[#F1DDDB] via-[#EDD0CD] to-[#D9B2AF] text-center overflow-hidden">
            <h2
                className={`text-4xl md:text-4xl font-elmessir text-secondary mb-6 relative z-10 animate-fadeIn tracking-wider animate-pulse${
                    isShaking ? "animate-shake" : ""
                    }`
                }
                ref={countdownRef}
            >
                Countdown to <br />
                the Big Day
            </h2>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 items-center relative z-10">
                {['days', 'hours', 'minutes', 'seconds'].map((unit, index) => (
                    <div key={index} className="countdown-item p-4 md:p-6 bg-white shadow-lg rounded-lg flex flex-col items-center animate-bounce-in">
                        <ClockIcon className="h-10 w-10 md:h-12 md:w-12 text-[#e76969] mb-2 animate-pulse" />
                        <span className="text-3xl md:text-5xl font-bold text-[#C29897]">
                            {timeLeft[unit] ?? "0"}
                        </span>
                        <span className="text-sm md:text-lg text-[#D9B2AF] capitalize">
                            {unit}
                        </span>
                    </div>
                ))}
                <div className="mt-0">
                    <button
                        onClick={handleSaveDate}
                        className="w-fit px-8 py-3 mt-8 bg-gradient-to-r from-[#ce938f] to-[#cc8b85] text-white hover:text-primary rounded-full shadow-lg hover:from-[#EDD0CD] hover:to-[#F1DDDB] transition duration-300 animate-pulse font-serif zoom-button"
                    >
                        Save the Date 📅
                    </button>
                </div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
                {[...Array(10).map((_, i) => (
                    <HeartIcon
                        key={i}
                        className={`h-16 w-16 md:h-24 md:w-24 text-pink-300 opacity-50 animate-love-rain absolute`}
                        style={{
                            top: `${Math.random() * 100}vh`,
                            left: `${Math.random() * 100}vw`,
                            animationDelay: `${Math.random() * 5}s`,
                        }}
                    />
                ))]}
            </div>
        </div>
    )
}

export default Countdown