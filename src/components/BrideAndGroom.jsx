import React from "react";
import '../../style/BrideAndGroom.css';

const BrideAndGroom = () => {
    return (
        <div className="m-4 rounded-2xl overflow-hidden p-8 my-8 shadow-2xl drop-shadow-pink-300 border-1 border-rose-300 bg-cover bg-center bg-no-repeat bg-[url('/bgc.png')]">
            <p className="text-center mb-6 tracking-wider text-secondary text-xl font-elmessir">Kami mohon do'a & restunya atas pernikahan kami</p>
            <div className="portrait-wrapper">
                <div className="portrait-frame bride-frame bride bg-[#F1DDDB]">
                    <img src="/bride.png" alt="Bride" className="prtrait-image" />
                </div>
                <div className="portrait-details">
                    <h2 className="text-4xl mb-4 mt-4 font-priest tracking-wider text-[#8f1b1b] animate-pulse">
                    Siti Setianingrum
                    </h2>
                    <p className=" text-secondary font-elmessir">Putri Ketiga Dari Bapak <br /> M. Ade Sopian & Ibu Siti Nur Hasanah</p>
                </div>
            </div>
            <div className="portrait-wrapper">
                <div className="portrait-frame groom-frame groom bg-[#D8B5B4]">
                    <img src="/groom.png" alt="Groom" className="portrait-image" />
                </div>
                <div className="portrait-details">
                    <h2 className="text-3xl mb-4 mt-4 font-priest tracking-wider text-[#8f1b1b] animate-pulse">
                    Asep Ahmad Hasanudin
                </h2>
                <p className=" text-secondary font-elmessir">Putra Pertama Dari Bapak <br /> M.Taufik Hidayat & Ibu Titin Suhartini</p>
                </div>
            </div>
        </div>
    );
};

export default BrideAndGroom